// Le cerveau d'ailleurs au service des langues : le filet gratuit (MyMemory)
// ne connaît pas le wolof, l'ewondo ou le bulu — mais le grand modèle que
// l'utilisateur a lui-même branché sur SON Worker, si. Une traduction demandée
// par l'élève, une réponse courte attendue ; tout silence reste un silence.
import { describe, expect, it } from 'vitest';
import {
  creerCerveauNet,
  definirTemperament,
  lireTemperament,
  traduireParCerveau,
  TEMPERAMENTS,
} from '../src/compagne/cerveauNet';

describe('traduireParCerveau — les langues que le filet ignore', () => {
  it('passe la consigne au Worker et rend la traduction', async () => {
    let urlVue = '';
    let corpsVue: any;
    const f = (async (url: any, opt: any) => {
      urlVue = String(url);
      corpsVue = JSON.parse(opt.body);
      return { ok: true, json: async () => ({ result: { response: '  salu  ' } }) };
    }) as unknown as typeof fetch;
    expect(await traduireParCerveau('https://cerveau.test', 'bonjour', 'wolof', f)).toBe('salu');
    expect(urlVue).toBe('https://cerveau.test/dire');
    expect(corpsVue.messages[0].content).toContain('wolof');
    expect(corpsVue.messages[1].content).toBe('bonjour');
  });
  it('forme de réponse alternative { response } acceptée', async () => {
    const f = (async () => ({ ok: true, json: async () => ({ response: 'salam' }) })) as unknown as typeof fetch;
    expect(await traduireParCerveau('https://cerveau.test', 'bonjour', 'arabe', f)).toBe('salam');
  });
  it('réponse vide ou démesurée : null — on ne remplit pas l’écran de bruit', async () => {
    const vide = (async () => ({ ok: true, json: async () => ({ response: '   ' }) })) as unknown as typeof fetch;
    expect(await traduireParCerveau('https://cerveau.test', 'bonjour', 'wolof', vide)).toBeNull();
    const longue = (async () => ({ ok: true, json: async () => ({ response: 'x'.repeat(600) }) })) as unknown as typeof fetch;
    expect(await traduireParCerveau('https://cerveau.test', 'bonjour', 'wolof', longue)).toBeNull();
  });
  it('silence réseau ou porte fermée : null', async () => {
    const muet = (async () => {
      throw new Error('réseau');
    }) as unknown as typeof fetch;
    expect(await traduireParCerveau('https://cerveau.test', 'bonjour', 'wolof', muet)).toBeNull();
    const ferme = (async () => ({ ok: false, json: async () => ({}) })) as unknown as typeof fetch;
    expect(await traduireParCerveau('https://cerveau.test', 'bonjour', 'wolof', ferme)).toBeNull();
  });
});

describe('tempéraments du grand cerveau — les géants open source branchés', () => {
  const storageFake = (): Storage => {
    const m = new Map<string, string>();
    return {
      getItem: (k: string) => m.get(k) ?? null,
      setItem: (k: string, v: string) => void m.set(k, v),
      removeItem: (k: string) => void m.delete(k),
      clear: () => m.clear(),
      key: () => null,
      length: 0,
    } as Storage;
  };

  it('sans tempérament réglé, le /dire reste muet sur le modèle (le défaut veille)', async () => {
    let corps: any;
    const f = (async (_u: any, opt: any) => {
      corps = JSON.parse(String(opt.body));
      return { ok: true, json: async () => ({ result: { response: 'ok' } }) };
    }) as unknown as typeof fetch;
    await creerCerveauNet('https://cerveau.test', f).ask([{ role: 'user', content: 'salut' }]);
    expect(corps.modele).toBeUndefined();
  });

  it('un tempérament choisi voyage dans le corps de /dire', async () => {
    let corps: any;
    const f = (async (_u: any, opt: any) => {
      corps = JSON.parse(String(opt.body));
      return { ok: true, json: async () => ({ result: { response: 'ok' } }) };
    }) as unknown as typeof fetch;
    await creerCerveauNet('https://cerveau.test', f, '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b')
      .ask([{ role: 'user', content: 'explique' }]);
    expect(corps.modele).toBe('@cf/deepseek-ai/deepseek-r1-distill-qwen-32b');
  });

  it('réglage aller-retour : connu accepté, inconnu refusé, vide = retour au défaut', () => {
    const st = storageFake();
    expect(lireTemperament(st)).toBe('');
    expect(definirTemperament(st, 'raisonneur')).toBe(true);
    expect(lireTemperament(st)).toBe('@cf/deepseek-ai/deepseek-r1-distill-qwen-32b');
    expect(definirTemperament(st, 'fantome')).toBe(false);
    expect(lireTemperament(st)).toBe('@cf/deepseek-ai/deepseek-r1-distill-qwen-32b');
    expect(definirTemperament(st, '')).toBe(true);
    expect(lireTemperament(st)).toBe('');
  });

  it('les tempéraments couvrent Meta, DeepSeek, Qwen et Mistral — rien de muet ni de fantaisiste', () => {
    const ids = TEMPERAMENTS.map((t) => t.modele).join(' ');
    for (const geant of ['@cf/meta/', '@cf/deepseek-ai/', '@cf/qwen/', '@cf/mistralai/']) {
      expect(ids).toContain(geant);
    }
    expect(ids).not.toContain('gemma');
  });
});
