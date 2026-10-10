// Le cerveau d'ailleurs au service des langues : le filet gratuit (MyMemory)
// ne connaît pas le wolof, l'ewondo ou le bulu — mais le grand modèle que
// l'utilisateur a lui-même branché sur SON Worker, si. Une traduction demandée
// par l'élève, une réponse courte attendue ; tout silence reste un silence.
import { describe, expect, it } from 'vitest';
import { traduireParCerveau } from '../src/compagne/cerveauNet';

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
