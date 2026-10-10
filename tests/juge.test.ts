// Le juge d'ailleurs : avant de prendre la parole toute seule, la compagne
// peut demander à un modèle de décision (Jev, Clef — même famille, même API)
// si le moment est bien choisi. Réponse = une probabilité, pas du texte.
// Sans adresse réglée ou en cas d'échec, le juge se tait (null) : la vie
// intérieure continue exactement comme avant, jamais bridée, jamais inventée.
import { describe, expect, it } from 'vitest';
import { choisirPaquet, etatPourJuger, garderCap, jugerSurPlace, scorerTension, trancher } from '../src/compagne/juge';

const ctx = { emotion: 'joie', breath: 0.62, bpm: 112, timeOfDay: 0.94 };

describe('etatPourJuger', () => {
  it('résume l état intérieur en une phrase sobre', () => {
    const etat = etatPourJuger(ctx);
    expect(etat).toContain('joie');
    expect(etat).toContain('62'); // le souffle en pourcentage
    expect(etat).toContain('112'); // le coeur qui court
    expect(etat).toContain('22'); // l heure (0.94 × 24 ≈ 22h)
  });
  it('sans pouls mesuré, le coeur reste discret', () => {
    const etat = etatPourJuger({ ...ctx, bpm: null });
    expect(etat).toContain('coeur');
    expect(etat).not.toMatch(/\d+ bpm/);
  });
});

describe('trancher', () => {
  it('une probabilité haute donne le droit de parler', () => {
    expect(trancher({ parler: { type: 'noul', noul: 0.8 } })).toBe(true);
  });
  it('une probabilité basse fait passer le tour', () => {
    expect(trancher({ parler: { type: 'noul', noul: 0.2 } })).toBe(false);
  });
  it('la ligne du seuil appartient à la parole', () => {
    expect(trancher({ parler: { noul: 0.45 } })).toBe(true);
    expect(trancher({ parler: { noul: 0.44 } })).toBe(false);
  });
  it('rien à trancher : pas de réponse, pas d invention', () => {
    expect(trancher(null)).toBeNull();
    expect(trancher({})).toBeNull();
    expect(trancher({ parler: 'pas une réponse' })).toBeNull();
  });
});

describe('jugerSurPlace', () => {
  it('pose la question typée au Worker et croit sa réponse', async () => {
    let urlVue = '';
    let corpsVue: any;
    const f = (async (url: any, opt: any) => {
      urlVue = String(url);
      corpsVue = JSON.parse(opt.body);
      return { ok: true, json: async () => ({ answers: { parler: { type: 'noul', noul: 0.9 } } }) };
    }) as unknown as typeof fetch;
    const avis = await jugerSurPlace('https://juge.test', ctx, f);
    expect(avis).toBe(true);
    expect(urlVue).toBe('https://juge.test/decider');
    expect(corpsVue.state).toContain('joie');
    expect(corpsVue.questions.parler.type).toBe('noul');
  });
  it('un réseau muet ne fait pas taire le ciel : null', async () => {
    const f = (async () => {
      throw new Error('réseau');
    }) as unknown as typeof fetch;
    expect(await jugerSurPlace('https://juge.test', ctx, f)).toBeNull();
  });
  it('une porte fermée (500) ne tranche pas', async () => {
    const f = (async () => ({ ok: false, json: async () => ({}) })) as unknown as typeof fetch;
    expect(await jugerSurPlace('https://juge.test', ctx, f)).toBeNull();
  });
});

describe('garderCap — le garde-fou sur les réponses du grand cerveau', () => {
  it('une réponse jugée hors cap est retenue', async () => {
    let corpsVue: any;
    const f = (async (_u: any, opt: any) => {
      corpsVue = JSON.parse(opt.body);
      return { ok: true, json: async () => ({ answers: { approprie: { noul: 0.1 } } }) };
    }) as unknown as typeof fetch;
    expect(await garderCap('https://juge.test', 'comment va le ciel ?', 'Le four à micro-ondes est rose.', f)).toBe(false);
    expect(corpsVue.state).toContain('comment va le ciel ?');
    expect(corpsVue.state).toContain('Le four à micro-ondes est rose.');
    expect(corpsVue.questions.approprie.type).toBe('noul');
  });
  it('une réponse approuvée passe', async () => {
    const f = (async () => ({ ok: true, json: async () => ({ answers: { approprie: { noul: 0.93 } } }) })) as unknown as typeof fetch;
    expect(await garderCap('https://juge.test', 'q', 'r', f)).toBe(true);
  });
  it('juge muet : on ne retient rien, la parole suit son cours', async () => {
    const f = (async () => {
      throw new Error('réseau');
    }) as unknown as typeof fetch;
    expect(await garderCap('https://juge.test', 'q', 'r', f)).toBeNull();
  });
});

describe('scorerTension — le pouls de l’instant', () => {
  it('rend le score pondéré du juge', async () => {
    const f = (async () => ({ ok: true, json: async () => ({ answers: { tension: { type: 'score', score: 1.8 } } }) })) as unknown as typeof fetch;
    expect(await scorerTension('https://juge.test', ctx, f)).toBe(1.8);
  });
  it('score absent ou fou → null, jamais d’invention', async () => {
    const vide = (async () => ({ ok: true, json: async () => ({ answers: { tension: {} } }) })) as unknown as typeof fetch;
    expect(await scorerTension('https://juge.test', ctx, vide)).toBeNull();
    const muet = (async () => {
      throw new Error('réseau');
    }) as unknown as typeof fetch;
    expect(await scorerTension('https://juge.test', ctx, muet)).toBeNull();
  });
});

describe('choisirPaquet — l’avis du rang', () => {
  it('propose le paquet qui colle à la dictée', async () => {
    let urlVue = '';
    let corpsVue: any;
    const f = (async (url: any, opt: any) => {
      urlVue = String(url);
      corpsVue = JSON.parse(opt.body);
      return { ok: true, json: async () => ({ answers: { rang: { choice: 'Physique' } } }) };
    }) as unknown as typeof fetch;
    const choix = await choisirPaquet('https://juge.test', 'la chute des corps', ['Physique', 'Histoire'], f);
    expect(choix).toBe('Physique');
    expect(urlVue).toBe('https://juge.test/decider');
    expect(corpsVue.questions.rang.type).toBe('choice');
    expect(Object.keys(corpsVue.questions.rang.criteria)).toEqual(['Physique', 'Histoire']);
  });
  it('choix fou ou liste vide : null', async () => {
    const fou = (async () => ({ ok: true, json: async () => ({ answers: { rang: { choice: 42 } } }) })) as unknown as typeof fetch;
    expect(await choisirPaquet('https://juge.test', 't', ['A'], fou)).toBeNull();
    expect(await choisirPaquet('https://juge.test', 't', [], fetch)).toBeNull();
  });
});
