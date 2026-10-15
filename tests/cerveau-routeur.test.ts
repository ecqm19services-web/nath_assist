// SP1 — le cerveau hors-ligne sans repayer : un routeur honnête (local > réseau
// > repli) et un cache-first qui n'appelle jamais deux fois la même question.
// Le principe marché : une réponse obtenue une fois ne doit plus coûter.
import { describe, expect, it } from 'vitest';
import { avecCache, cleeDeReponse, choisirCerveau, type EtatCerveau } from '../src/compagne/cerveauRouteur';
import { creerCerveauNet } from '../src/compagne/cerveauNet';

describe('choisirCerveau — la précédence honnête du cerveau', () => {
  const etat = (sur: Partial<EtatCerveau>): EtatCerveau => ({
    localPret: false,
    consentementLocal: false,
    gpuCompatible: false,
    enLigne: true,
    endpointRegle: false,
    ...sur,
  });

  it('cerveau local déjà prêt → on l’utilise, même sans réseau', () => {
    expect(choisirCerveau(etat({ localPret: true, enLigne: false }))).toBe('local');
  });
  it('consentement + GPU + réseau → local (téléchargement une fois autorisé)', () => {
    expect(choisirCerveau(etat({ consentementLocal: true, gpuCompatible: true }))).toBe('local');
  });
  it('sans consentement, même avec GPU → on ne télécharge pas en secret : réseau si réglé', () => {
    expect(choisirCerveau(etat({ gpuCompatible: true, endpointRegle: true }))).toBe('reseau');
  });
  it('réseau réglé et en ligne → reseau', () => {
    expect(choisirCerveau(etat({ endpointRegle: true }))).toBe('reseau');
  });
  it('rien de prêt, hors-ligne et sans réglage → repli (jamais bloqué, jamais facturé)', () => {
    expect(choisirCerveau(etat({ enLigne: false }))).toBe('repli');
  });
});

describe('cleeDeReponse — une empreinte stable de la conversation', () => {
  it('déterministe : mêmes messages → même clé', () => {
    const a = cleeDeReponse([{ role: 'user', content: 'bonjour' }]);
    const b = cleeDeReponse([{ role: 'user', content: 'bonjour' }]);
    expect(a).toBe(b);
  });
  it('sensible au rôle et à l’ordre', () => {
    const u = cleeDeReponse([{ role: 'user', content: 'x' }]);
    const s = cleeDeReponse([{ role: 'system', content: 'x' }]);
    const deux = cleeDeReponse([{ role: 'user', content: 'x' }, { role: 'assistant', content: 'y' }]);
    expect(u).not.toBe(s);
    expect(deux).not.toBe(u);
  });
  it('un indice (modèle choisi) change la clé : deux cerveaux ne partagent pas leurs réponses', () => {
    const d = cleeDeReponse([{ role: 'user', content: 'x' }], 'modele-a');
    const e = cleeDeReponse([{ role: 'user', content: 'x' }], 'modele-b');
    expect(d).not.toBe(e);
  });
});

describe('avecCache — la même question ne repart jamais deux fois', () => {
  it('retient la réponse et ne rappelle pas la fabrique', async () => {
    let appels = 0;
    const fabriquer = async () => {
      appels++;
      return 'réponse';
    };
    const c = avecCache<string>();
    expect(await c.chargerOu('k', fabriquer)).toBe('réponse');
    expect(await c.chargerOu('k', fabriquer)).toBe('réponse');
    expect(appels).toBe(1);
  });
  it('déduplique même en parallèle (deux clics simultanés = un seul appel)', async () => {
    let appels = 0;
    const long = () => new Promise<string>((r) => setTimeout(() => { appels++; r('ok'); }, 10));
    const c = avecCache<string>();
    const [x, y] = await Promise.all([c.chargerOu('k', long), c.chargerOu('k', long)]);
    expect(x).toBe('ok');
    expect(y).toBe('ok');
    expect(appels).toBe(1);
  });
  it('ne met PAS en cache une réponse vide : l’échec a le droit d’être retenté', async () => {
    let appels = 0;
    const c = avecCache<string>();
    const muet = async () => { appels++; return ''; };
    expect(await c.chargerOu('k', muet)).toBe('');
    expect(await c.chargerOu('k', muet)).toBe('');
    expect(appels).toBe(2);
  });
});

describe('creerCerveauNet — le cache-first est câblé dans le chemin payant', () => {
  it('deux questions identiques = un seul appel réseau', async () => {
    let appels = 0;
    const f = (async () => {
      appels++;
      return { ok: true, json: async () => ({ result: { response: 'salut' } }) };
    }) as unknown as typeof fetch;
    const cerveau = creerCerveauNet('https://cerveau.test', f);
    const m = [{ role: 'user' as const, content: 'bonjour' }];
    expect(await cerveau.ask(m)).toBe('salut');
    expect(await cerveau.ask(m)).toBe('salut');
    expect(appels).toBe(1);
  });
  it('questions différentes = appels distincts (pas de fausse identité)', async () => {
    let appels = 0;
    const f = (async () => {
      appels++;
      return { ok: true, json: async () => ({ result: { response: 'r' + appels } }) };
    }) as unknown as typeof fetch;
    const cerveau = creerCerveauNet('https://cerveau.test', f);
    expect(await cerveau.ask([{ role: 'user', content: 'un' }])).toBe('r1');
    expect(await cerveau.ask([{ role: 'user', content: 'deux' }])).toBe('r2');
    expect(appels).toBe(2);
  });
  it('un échec réseau ne se fige pas en cache : la reprise est possible', async () => {
    let appels = 0;
    const f = (async () => {
      appels++;
      if (appels === 1) return { ok: false, json: async () => ({}) };
      return { ok: true, json: async () => ({ result: { response: 'rétabli' } }) };
    }) as unknown as typeof fetch;
    const cerveau = creerCerveauNet('https://cerveau.test', f);
    const m = [{ role: 'user' as const, content: 'x' }];
    expect(await cerveau.ask(m)).toBe('');
    expect(await cerveau.ask(m)).toBe('rétabli');
    expect(appels).toBe(2);
  });
});

// L'UI de la Compagne DOIT passer par le routeur : c'est la preuve que la pièce
// n'est pas qu'un meuble de test mais le vrai choix du cerveau en production.
const uiBrut = (import.meta.glob('../src/compagne/ui.ts', { query: '?raw', import: 'default', eager: true }) as Record<string, string>)['../src/compagne/ui.ts'] ?? '';
describe('ui.ts — le routeur est le vrai décideur du cerveau', () => {
  it('importe choisirCerveau depuis cerveauRouteur', () => {
    expect(/from\s+'\.\/cerveauRouteur'/.test(uiBrut)).toBe(true);
    expect(/choisirCerveau/.test(uiBrut)).toBe(true);
  });
  it('n’a plus besoin de recopier la précédence à la main', () => {
    // L'appel explicite du routeur remplace les « if (net) { ... } if (gpu) { ... } » en série.
    expect(/choisirCerveau\s*\(/.test(uiBrut)).toBe(true);
  });
});
