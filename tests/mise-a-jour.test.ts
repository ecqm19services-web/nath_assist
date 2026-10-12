// Un visiteur qui revient avec son Service Worker reçoit la version d’avant :
// le fallback de navigation sert l’index.html en cache, et le texte qu’il lit
// peut avoir une journée. Plutôt que de recharger la page par-dessus une
// conversation en cours, on le demande : ce module compare le bundle réellement
// servi à celui qui tourne, et main.ts propose une puce discrète.
//
// Détail qui compte : la requête de contrôle porte un paramètre d’échappement.
// Sans lui, le Service Worker répondrait depuis son propre cache et la
// comparaison ne verrait jamais la nouveauté.
import { describe, expect, it } from 'vitest';

import { doitSonder, ecarter, estEcartee, nomDuBundle, servicePlusRecent, verifierMiseAJour } from '../src/compagne/miseAJour';

/** Le faux magasin de session, pour voir ce que la puce retient. */
class Store {
  private dues = new Map<string, string>();
  getItem(k: string): string | null { return this.dues.get(k) ?? null; }
  setItem(k: string, v: string): void { this.dues.set(k, v); }
}

describe('nomDuBundle — lire la coquille', () => {
  it('extrait le nom du bundle annoncé par la page', () => {
    const html =
      '<!doctype html><html><head><script type="module" crossorigin src="/nath_assist/assets/index-CY-Zqch_.js"></script></head><body></body></html>';
    expect(nomDuBundle(html)).toBe('index-CY-Zqch_.js');
  });

  it('rend null quand la page ne déclare aucun bundle', () => {
    expect(nomDuBundle('<html><body>rien</body></html>')).toBeNull();
  });
});

describe('servicePlusRecent — la comparaison honnête', () => {
  it('dit vrai quand le nom servi diffère du nom en main', () => {
    expect(servicePlusRecent('index-AAAaaa.js', 'index-BBBbbb.js')).toBe(true);
  });

  it('dit faux quand c’est la même version', () => {
    expect(servicePlusRecent('index-AAAaaa.js', 'index-AAAaaa.js')).toBe(false);
  });

  it('dit faux quand le serveur n’a rien répondu', () => {
    // Une page illisible n’est pas une nouveauté : jamais de fausse alerte.
    expect(servicePlusRecent(null, 'index-AAAaaa.js')).toBe(false);
  });
});

describe('estEcartee — la puce ne revient pas hanter', () => {
  it('garde la fermeture pour la version concernée', () => {
    const store = new Store();
    expect(estEcartee(store, 'index-NEUF.js')).toBe(false);
    ecarter(store, 'index-NEUF.js');
    expect(estEcartee(store, 'index-NEUF.js')).toBe(true);
  });

  it('propose de nouveau quand une version plus neuve arrive', () => {
    // Le visiteur a refusé CELLE-là ; une nouveauté après reste à dire.
    const store = new Store();
    ecarter(store, 'index-VIEUX.js');
    expect(estEcartee(store, 'index-NEUF.js')).toBe(false);
  });

  it('tient sur un magasin muet (navigation privée, quota plein)', () => {
    const muet = { getItem: () => null, setItem: () => { throw new Error('quota'); } };
    expect(() => ecarter(muet, 'index-A.js')).not.toThrow();
    expect(estEcartee(muet, 'index-A.js')).toBe(false);
  });
});

describe('verifierMiseAJour — la sonde réseau', () => {
  const page = (nom: string) => `<html><script src="/assets/${nom}"></script></html>`;

  it('détecte la nouvelle version réellement en ligne', async () => {
    let vue = '';
    const fetchImpl = (async (u: RequestInfo) => {
      vue = String(u);
      return { ok: true, text: async () => page('index-NEUF.js') } as Response;
    }) as unknown as typeof fetch;

    const resultat = await verifierMiseAJour({
      fetchImpl,
      bundleActuel: 'index-VIEUX.js',
      page: 'https://exemple.github.io/nath_assist/',
    });

    expect(resultat).toBe(true);
    // L'URL sondée doit échapper au cache du Service Worker, sinon la sonde
    // se répond à elle-même et ne voit jamais rien.
    expect(vue).toContain('?');
  });

  it('reste silencieuse quand rien n’a changé', async () => {
    const fetchImpl = (async () => ({ ok: true, text: async () => page('index-MEME.js') }) as Response) as unknown as typeof fetch;
    const resultat = await verifierMiseAJour({
      fetchImpl,
      bundleActuel: 'index-MEME.js',
      page: 'https://exemple.github.io/nath_assist/',
    });
    expect(resultat).toBe(false);
  });

  it('reste silencieuse si le réseau répond mal', async () => {
    // Une connexion perdue n’est pas une mise à jour : le visiteur ne doit pas
    // voir apparaître une invitation à recharger qui ne changera rien.
    const quiRefuse = (async () => {
      throw new TypeError('Failed to fetch');
    }) as unknown as typeof fetch;
    expect(
      await verifierMiseAJour({ fetchImpl: quiRefuse, bundleActuel: 'index-A.js', page: 'https://exemple.github.io/nath_assist/' }),
    ).toBe(false);

    const quiEchoue = (async () => ({ ok: false, text: async () => '' }) as Response) as unknown as typeof fetch;
    expect(
      await verifierMiseAJour({ fetchImpl: quiEchoue, bundleActuel: 'index-A.js', page: 'https://exemple.github.io/nath_assist/' }),
    ).toBe(false);
  });

  it('ne sonde pas plus d une fois par minute quand l onglet clignote', () => {
    // Un visiteur qui paie ses données (forfait FCFA) ne doit pas payer le
    // va-et-vient de ses onglets : la sonde a un temps minimal entre deux visites.
    expect(doitSonder(0, 0)).toBe(true);
    expect(doitSonder(0, 90_000)).toBe(true);
    expect(doitSonder(50_000, 55_000)).toBe(false);
    expect(doitSonder(50_000, 111_000)).toBe(true);
  });
});
