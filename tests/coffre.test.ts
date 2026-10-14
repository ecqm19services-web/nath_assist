// Sur iPhone, une réinstallation, un vidage de Safari ou le mode privé effacent
// localStorage : le prénom gardé, les fiches d'études, les réglages, la graine du
// ciel — tout part sans que la personne ait rien demandé. Le coffre est le sac à
// dos : une seule chaîne qui contient la mémoire, qu'on emporte et qu'on repose.
// Rien d'étranger n'entre ni ne sort — seulement les affaires de la maison (nath. /
// nuage.), et une chaîne cassée ne doit jamais faire de dégâts en revenant.
import { describe, it, expect } from 'vitest';
import { coffreDe, exporterCoffre, importerCoffre } from '../src/compagne/coffre';

const fauxStock = (init: Record<string, string> = {}): Storage => {
  const données = new Map(Object.entries(init));
  return {
    getItem: (k: string) => données.get(k) ?? null,
    setItem: (k: string, v: string) => void données.set(k, v),
    removeItem: (k: string) => void données.delete(k),
    clear: () => données.clear(),
    get length() { return données.size; },
    key: (i: number) => [...données.keys()][i] ?? null,
  };
};

describe("l'export : emporter ses affaires, rien d'autre", () => {
  it('la mémoire et la graine sortent dans une chaîne', () => {
    const s = fauxStock({
      'nuage.memoire': JSON.stringify({ prenom: 'Awa', dejaVu: true }),
      'nuage.seed': 'abc-123',
    });
    const chaine = exporterCoffre(s);
    const parsed = coffreDe(chaine);
    expect(parsed).not.toBeNull();
    expect(parsed!.donnees['nuage.memoire']).toContain('Awa');
    expect(parsed!.donnees['nuage.seed']).toBe('abc-123');
  });

  it('ce qui n est pas de la maison ne part pas', () => {
    // Une clé d'un autre site, d'un traqueur, n'a rien à faire dans le sac.
    const s = fauxStock({ 'nuage.seed': 'abc', 'sans.interet': 'espion', 'autre chose': 'x' });
    const donnees = coffreDe(exporterCoffre(s))!.donnees;
    expect(Object.keys(donnees)).toEqual(['nuage.seed']);
  });
});

describe("l'import : reposer ses affaires sans rien casser", () => {
  it('le prénom revient là où il était', () => {
    const source = fauxStock({ 'nuage.memoire': JSON.stringify({ prenom: 'Ibrahima', dejaVu: true }) });
    const chaine = exporterCoffre(source);
    const neuf = fauxStock();
    const n = importerCoffre(neuf, chaine);
    expect(n).toBe(1);
    expect(JSON.parse(neuf.getItem('nuage.memoire')!).prenom).toBe('Ibrahima');
  });

  it('un aller-retour complet ne perd rien', () => {
    const source = fauxStock({
      'nuage.memoire': '{"prenom":"Fatou","dejaVu":true}',
      'nath.etudes': '{"fiches":[1,2,3]}',
      'nath.musique': '{"volume":0.4}',
      'nuage.seed': 'ziz-9',
    });
    const neuf = fauxStock();
    const n = importerCoffre(neuf, exporterCoffre(source));
    expect(n).toBe(4);
    for (const k of ['nuage.memoire', 'nath.etudes', 'nath.musique', 'nuage.seed']) {
      expect(neuf.getItem(k)).toBe(source.getItem(k));
    }
  });

  it('une chaîne cassée ne soulève rien et ne touche à rien', () => {
    const s = fauxStock({ 'nuage.memoire': 'intacte' });
    expect(() => importerCoffre(s, '{ ce n est pas du json')).not.toThrow();
    expect(importerCoffre(s, '{ pas du json')).toBe(0);
    expect(s.getItem('nuage.memoire')).toBe('intacte');
  });

  it('une chaîne qui n est pas un coffre est refusée', () => {
    // Sans signature reconnue, on n'écrit rien : importCoffre n'est pas un vide-ordures.
    const s = fauxStock();
    const etranger = JSON.stringify({ donnees: { 'nuage.seed': 'injecté' } });
    expect(importerCoffre(s, etranger)).toBe(0);
    expect(s.getItem('nuage.seed')).toBeNull();
  });

  it("l'import n'écrit jamais une clé hors de la maison", () => {
    // Un coffre fabriqué à la main avec une clé étrangère dedans ne doit pas passer.
    const s = fauxStock();
    const piege = JSON.stringify({ coffre: 'nath', version: 1, donnees: { 'nuage.seed': 'ok', 'eval.deanger': 'x' } });
    const n = importerCoffre(s, piege);
    expect(n).toBe(1);
    expect(s.getItem('nuage.seed')).toBe('ok');
    expect(s.getItem('eval.deanger')).toBeNull();
  });

  it('le vide ne réveille aucune écriture', () => {
    const s = fauxStock({ 'nuage.seed': 'gardé' });
    expect(importerCoffre(s, '')).toBe(0);
    expect(s.getItem('nuage.seed')).toBe('gardé');
  });
});

// Un coffre juste et jamais ouvert est une promesse menteuse : la personne doit
// pouvoir l'emporter et le reposer depuis sa boîte à outils, sans jamais voir un
// mot de technologie.
describe("l'intégration : le coffre est atteignable depuis la boîte à outils", () => {
  const bruts = import.meta.glob('../src/compagne/outilsUI.ts', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  const ui = Object.values(bruts)[0] ?? '';

  it('la boîte à outils importe le vrai coffre', () => {
    expect(ui).toContain("from './coffre'");
    expect(ui).toContain('exporterCoffre(');
    expect(ui).toContain('importerCoffre(');
  });

  it('un onglet « Coffre » existe aux côtés des autres', () => {
    expect(ui).toMatch(/coffre:\s*'Coffre'/);
  });

  it('aucun mot technique ne glisse dans l’onglet du coffre', () => {
    // « export », « JSON », « localStorage », « base64 » sont des mots d'ingénieur.
    const morceau = ui.slice(ui.indexOf('function rendreCoffre'), ui.indexOf('RENDUS:'));
    expect(morceau).not.toMatch(/localStorage|JSON|base64|localStorage/i);
  });
});
