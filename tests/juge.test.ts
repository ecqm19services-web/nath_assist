// Le juge d'ailleurs : avant de prendre la parole toute seule, la compagne
// peut demander à un modèle de décision (Jev, Clef — même famille, même API)
// si le moment est bien choisi. Réponse = une probabilité, pas du texte.
// Sans adresse réglée ou en cas d'échec, le juge se tait (null) : la vie
// intérieure continue exactement comme avant, jamais bridée, jamais inventée.
import { describe, expect, it } from 'vitest';
import { etatPourJuger, jugerSurPlace, trancher } from '../src/compagne/juge';

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
