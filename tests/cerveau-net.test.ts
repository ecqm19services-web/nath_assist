import { describe, expect, it } from 'vitest';
import {
  creerCerveauNet,
  decider,
  definirEndpoint,
  lireEndpoint,
} from '../src/compagne/cerveauNet';

const fauxStock = () => {
  const m = new Map<string, string>();
  return {
    getItem: (k: string) => m.get(k) ?? null,
    setItem: (k: string, v: string) => void m.set(k, v),
  } as unknown as Storage;
};

describe('cerveau net : l’adresse du grand cerveau hors de portée', () => {
  it('sans adresse réglée, pas de cerveau en ligne', () => {
    expect(lireEndpoint(fauxStock())).toBe('');
  });

  it('seule une adresse https (ou localhost) porte ta parole', () => {
    const s = fauxStock();
    expect(definirEndpoint(s, 'https://cerveau.exemple.workers.dev')).toBe(true);
    expect(lireEndpoint(s)).toBe('https://cerveau.exemple.workers.dev');
    expect(definirEndpoint(s, 'http://cerveau.exemple.com')).toBe(false);
    expect(definirEndpoint(s, 'pas une url')).toBe(false);
    expect(definirEndpoint(s, '')).toBe(true); // effacer a le droit
    expect(lireEndpoint(s)).toBe('');
  });

  it('localhost en http est admis (développement)', () => {
    const s = fauxStock();
    expect(definirEndpoint(s, 'http://localhost:8787')).toBe(true);
  });
});

describe('cerveau net : la parole passe par l’adresse réglée', () => {
  it('ask envoie les messages et rend la réponse du cerveau', async () => {
    let urlVue = '';
    let corpsVu: any = null;
    const f = async (url: string, init: any) => {
      urlVue = url;
      corpsVu = JSON.parse(init.body);
      return { ok: true, json: async () => ({ result: { response: '  Bonjour à toi.  ' } }) };
    };
    const c = creerCerveauNet('https://cerveau.exemple.workers.dev', f as unknown as typeof fetch);
    const r = await c.ask([{ role: 'user', content: 'salut' }]);
    expect(r).toBe('Bonjour à toi.');
    expect(urlVue).toBe('https://cerveau.exemple.workers.dev/dire');
    expect(corpsVu.messages).toEqual([{ role: 'user', content: 'salut' }]);
  });

  it('réseau coupé ou réponse folle = vide, jamais de cri', async () => {
    const casse = (async () => { throw new Error('réseau'); }) as unknown as typeof fetch;
    expect(await creerCerveauNet('https://x.dev', casse).ask([])).toBe('');
    const fou = (async () => ({ ok: true, json: async () => ({ result: {} }) })) as unknown as typeof fetch;
    expect(await creerCerveauNet('https://x.dev', fou).ask([])).toBe('');
  });
});

describe('cerveau net : la décision Clef (state + questions → réponses)', () => {
  it('decider poste l’état et les questions, rend les réponses', async () => {
    let urlVue = '';
    let corpsVu: any = null;
    const f = async (url: string, init: any) => {
      urlVue = url;
      corpsVu = JSON.parse(init.body);
      return { ok: true, json: async () => ({ answers: { urgent: 0.92 } }) };
    };
    const a = await decider(
      'https://cerveau.exemple.workers.dev',
      'l’utilisateur semble tendu',
      { urgent: { type: 'noul', instructions: 'Est-ce urgent ?' } },
      f as unknown as typeof fetch,
    );
    expect(urlVue).toBe('https://cerveau.exemple.workers.dev/decider');
    expect(corpsVu.state).toBe('l’utilisateur semble tendu');
    expect(a).toEqual({ urgent: 0.92 });
  });

  it('échec réseau ou refus = null, on n’invente aucune décision', async () => {
    const casse = (async () => { throw new Error('réseau'); }) as unknown as typeof fetch;
    expect(await decider('https://x.dev', 's', {}, casse)).toBeNull();
    const refuse = (async () => ({ ok: false, json: async () => ({}) })) as unknown as typeof fetch;
    expect(await decider('https://x.dev', 's', {}, refuse)).toBeNull();
  });
});
