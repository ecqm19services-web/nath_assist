// Le socle ne suffit pas : la langue vit, chacun y ajoute ses mots. Le carnet
// range les ajouts sous une clé de la maison (nath.), donc le coffre les emporte
// tout seul. Une alias de langue (« wo », « wollof ») doit tomber sur le même
// wolof que la personne écrit, sans qu'elle sache comment on l'orthographie ici.
import { describe, expect, it } from 'vitest';
import { lireCarnet, teacher, traduire } from '../src/traduction/carnet';
import { langueCanonique } from '../src/traduction/lexique';

const fauxStock = (init: Record<string, string> = {}): Pick<Storage, 'getItem' | 'setItem'> => {
  const m = new Map(Object.entries(init));
  return {
    getItem: (k: string) => m.get(k) ?? null,
    setItem: (k: string, v: string) => void m.set(k, v),
  };
};

describe('langueCanonique : une langue, ses manyières de l écrire', () => {
  it('les aliases retombent sur la forme maison', () => {
    expect(langueCanonique('wo')).toBe('wolof');
    expect(langueCanonique('Wollof')).toBe('wolof');
    expect(langueCanonique('english')).toBe('anglais');
    expect(langueCanonique('wolof')).toBe('wolof');
  });
});

describe('traduire : le socle répond sans réseau', () => {
  it('un mot sûr du wolof sort directement', () => {
    expect(traduire('merci', 'wolof', fauxStock()).resultat).toBe('jërëjëf');
  });

  it('une alias de langue traduit comme la forme complète', () => {
    expect(traduire('eau', 'wo', fauxStock()).resultat).toBe('ndox');
  });

  it('un mot inconnu reste manquant — on ne l invente jamais', () => {
    const r = traduire('ordinateur', 'wolof', fauxStock());
    expect(r.manques).toContain('ordinateur');
  });
});

describe('teacher : la personne enrichit, ça reste et ça voyage', () => {
  it('un mot ajouté ressort à la traduction', () => {
    const s = fauxStock();
    teacher(s, 'ordinateur', 'ordinatër', 'wolof');
    expect(traduire('ordinateur', 'wolof', s).resultat).toBe('ordinatër');
  });

  it('l ajout se range sous une clé de la maison (emportable par le coffre)', () => {
    const s = fauxStock();
    teacher(s, 'voiture', 'gaara', 'wolof');
    const brut = s.getItem('nath.trad.carnet');
    expect(brut).toBeTruthy();
    expect(lireCarnet(s)).toContainEqual({ de: 'voiture', a: 'gaara', langue: 'wolof' });
  });

  it('la même parole donnée deux fois ne se duplique pas (la dernière gagne)', () => {
    const s = fauxStock();
    teacher(s, 'ami', 'xarit', 'wolof');
    teacher(s, 'ami', 'kocc', 'wolof');
    const amis = lireCarnet(s).filter((e) => e.de === 'ami');
    expect(amis.length).toBe(1);
    expect(amis[0].a).toBe('kocc');
  });

  it('un carnet abîmé ne casse rien : on ne garde que l honnête', () => {
    const s = fauxStock({ 'nath.trad.carnet': '{ ce n est pas du json' });
    expect(lireCarnet(s)).toEqual([]);
  });
});

// Un socleRange mais invisible est une promesse menteuse : la personne doit
// pouvoir traduire et enrichir depuis sa boîte à outils, sans jamais voir un
// mot de technologie.
describe("l'intégration : les langues sont atteignables depuis la boîte à outils", () => {
  const bruts = import.meta.glob('../src/compagne/outilsUI.ts', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  const ui = Object.values(bruts)[0] ?? '';

  it('la boîte à outils importe le vrai carnet', () => {
    expect(ui).toContain("from '../traduction/carnet'");
    expect(ui).toContain('traduire(');
    expect(ui).toContain('teacher(');
  });

  it('un onglet « Langues » existe aux côtés des autres', () => {
    expect(ui).toMatch(/langues:\s*'Langues'/);
  });

  it('aucun mot technique ne glisse dans l onglet des langues', () => {
    const morceau = ui.slice(ui.indexOf('function rendreLangues'), ui.indexOf('RENDUS:'));
    expect(morceau).not.toMatch(/localStorage|JSON|base64|canonical/i);
  });
});
