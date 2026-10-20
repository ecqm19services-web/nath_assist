// Chantier « finesse » (20 oct. 2026) : tout ce qui protège la puissance,
// l'ergonomie et l'expérience — pause de la scène pendant les panneaux,
// favoris d'outils, entrée unique des langues, « Toutes les tâches »,
// continuer sans attendre, tableau du jour, stats locales, cible tactile,
// export du journal, Nath+ tant que rien n'est réservé, corpus en module à part.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { ouvrirPanneau, fermerPanneau, panneauOuvert } from '../src/nuage/pause';
import { CLE_FAVORIS, lireFavoris, basculerFavori, ordonnerOnglets } from '../src/compagne/favorisOutils';
import { CLE_USAGE, noterVisite, compter30, decrireUsage } from '../src/compagne/usage';
import { construireCarteJour, pointRappel } from '../src/compagne/aujourdhui';
import { texteCarnet } from '../src/assist/journal';
import { capacitesReservees } from '../src/monetisation/paliers';
import { SOCLE } from '../src/etudes/encycloData';
import { SOCLE as SOCLE_VIA_ENCYCLO } from '../src/etudes/encyclo';

function memo(départ: Record<string, string> = {}): Pick<Storage, 'getItem' | 'setItem'> {
  const map = new Map<string, string>(Object.entries(départ));
  return {
    getItem: (k) => map.get(k) ?? null,
    setItem: (k, v) => { map.set(k, v); },
  };
}

const brute = async (chemin: string): Promise<string> => {
  const mods = import.meta.glob('../src/**/*.ts', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  const cle = Object.keys(mods).find((k) => k.endsWith(chemin));
  expect(cle, `module introuvable : ${chemin}`).toBeTruthy();
  return mods[cle as string];
};

describe('pause de la scène — le ciel se repose quand un panneau est ouvert', () => {
  it('ouvrir puis fermer : la scène reprend, deux panneaux comptent comme un', () => {
    expect(panneauOuvert()).toBe(false);
    ouvrirPanneau('outils');
    ouvrirPanneau('savoir');
    expect(panneauOuvert()).toBe(true);
    fermerPanneau('outils');
    expect(panneauOuvert()).toBe(true);
    fermerPanneau('savoir');
    expect(panneauOuvert()).toBe(false);
  });
  it("main.ts saute le rendu tant qu'un panneau est ouvert", async () => {
    const m = await brute('/src/main.ts');
    expect(m).toMatch(/panneauOuvert\(\)/);
  });
});

describe('favoris des outils — les habituels d’abord, rien d’effacé', () => {
  it('aller-retour fidèle, ids inconnus jetés silencieusement', () => {
    const s = memo();
    expect(lireFavoris(s, ['flamme', 'journal'])).toEqual([]);
    basculerFavori(s, 'journal');
    basculerFavori(s, 'flamme');
    expect(lireFavoris(s, ['flamme', 'journal'])).toEqual(['journal', 'flamme']);
    basculerFavori(s, 'journal');
    expect(lireFavoris(s, ['flamme', 'journal'])).toEqual(['flamme']);
    const menteur = memo({ [CLE_FAVORIS]: 'pas-du-json' });
    expect(lireFavoris(menteur, ['flamme'])).toEqual([]);
  });
  it('ordonner : favoris en tête (dans l’ordre des favoris), le reste dans l’ordre de la liste', () => {
    const { tete, reste } = ordonnerOnglets(['a', 'b', 'c', 'd'], ['c', 'a']);
    expect(tete).toEqual(['c', 'a']);
    expect(reste).toEqual(['b', 'd']);
  });
});

describe('usage local — trente jours de mémoire, jamais plus', () => {
  it('compter sur la fenêtre de trente jours, la vieille journée reste dehors', () => {
    const s = memo();
    const aujourdhui = new Date(2026, 9, 20);
    noterVisite(s, 'souffle', aujourdhui);
    noterVisite(s, 'souffle', aujourdhui);
    noterVisite(s, 'metiers', aujourdhui);
    noterVisite(s, 'frigo', new Date(2026, 8, 1)); // hors fenêtre
    const comptes = compter30(s, aujourdhui);
    expect(comptes.souffle).toBe(2);
    expect(comptes.metiers).toBe(1);
    expect(comptes.frigo ?? 0).toBe(0);
  });
  it('décrire en français simple, et le vide a une phrase à la française', () => {
    expect(decrireUsage({})).toContain('Rien encore');
    const d = decrireUsage({ souffle: 2, metiers: 1 });
    expect(d).toContain('30 derniers jours');
    expect(d).toContain('souffle ×2');
    expect(d.indexOf('souffle')).toBeLessThan(d.indexOf('metiers')); // le plus fréquent d’abord
  });
  it('la clé vit sous « nath. » comme tout le reste', () => {
    expect(CLE_USAGE.startsWith('nath.')).toBe(true);
    expect(CLE_FAVORIS.startsWith('nath.')).toBe(true);
  });
});

describe('la carte du jour — un assistant, pas vingt-cinq boutons', () => {
  it('une ligne par promesse tenue, rien pour ce qui manque', () => {
    const lignes = construireCarteJour({
      metier: { pack: 'Menuiserie', tache: 'Tracer une coupe' },
      revisions: 3,
      decouverte: { titre: 'Photosynthèse', resume: 'Les feuilles transforment la lumière.' },
      usage: { souffle: 2 },
    });
    expect(lignes[0]).toBe('Aujourd’hui');
    expect(lignes.join(' ')).toContain('Menuiserie — Tracer une coupe');
    expect(lignes.join(' ')).toContain('3');
    expect(lignes.join(' ')).toContain('Photosynthèse');
    expect(lignes.join(' ')).toContain('souffle ×2');
  });
  it('journée vide : la carte reste tendue, pas de ligne menteuse', () => {
    const lignes = construireCarteJour({ revisions: 0 });
    expect(lignes).toEqual(['Aujourd’hui', 'Rien de pressé — choisis un outil, ou repose-toi.']);
  });
  it('le point de rappel : un seul • dès qu’une révision attend, rien sinon', () => {
    expect(pointRappel(0)).toBe('');
    expect(pointRappel(2)).toBe(' •');
  });
});

describe('le journal se garde aussi hors de l’appareil (export texte)', () => {
  it('texteCarnet : ligne datée par note, ordre du plus récent au plus ancien', () => {
    const t = texteCarnet([
      { id: 'b', titre: 'Seconde', texte: 'deuxième', origine: 'note', at: Date.parse('2026-01-02T08:00:00Z') },
      { id: 'a', titre: 'Première', texte: 'première', origine: 'note', at: Date.parse('2026-01-01T08:00:00Z') },
    ]);
    expect(t.indexOf('Seconde')).toBeLessThan(t.indexOf('Première'));
    expect(t).toContain('deuxième');
    expect(t).toContain('2026'); // date lisible, pas un timestamp brut
  });
  it('vide, cela se dit avec des mots', () => {
    expect(texteCarnet([])).toContain('vide');
  });
});

describe('Nath+ — la porte reste fermée tant que rien n’est réservé', () => {
  it('par défaut : aucune capacité réservée (doctrine gratuit jamais bridé)', () => {
    expect(capacitesReservees()).toEqual([]);
    expect(capacitesReservees({ cerveau: 'reserve', souffle: 'libre' })).toEqual(['cerveau']);
  });
  it("l'étoile ✦ se cache quand rien n'est réservé, et « continuer sans attendre » existe", async () => {
    const u = await brute('/src/compagne/ui.ts');
    expect(u).toMatch(/capacitesReservees\(/);
    expect(u).toMatch(/\.hidden = /);
    expect(u).toMatch(/continuer sans attendre/);
  });
});

describe('corpus encyclopédie — le socle vit dans son module (prêt pour des lots)', () => {
  it('encycloData existe, 50 notices, et encyclo.ts le réexporte sans dupliquer', () => {
    expect(SOCLE.length).toBeGreaterThanOrEqual(50);
    expect(SOCLE_VIA_ENCYCLO).toBe(SOCLE); // même référence : rien n’est copié
  });
});

describe('câblage des panneaux — source vérifiée, pas de foi', () => {
  it('outils : pause, favoris, Aujourd’hui, toutes les tâches, usage, export du journal', async () => {
    const o = await brute('/src/compagne/outilsUI.ts');
    expect(o).toMatch(/ouvrirPanneau\('outils'\)/);
    expect(o).toMatch(/fermerPanneau\('outils'\)/);
    expect(o).toMatch(/ordonnerOnglets\(/);
    expect(o).toMatch(/data-fav=/);
    expect(o).toMatch(/jour: 'Aujourd/);
    expect(o).toMatch(/function rendreJour/);
    expect(o).toMatch(/noterVisite\(/);
    expect(o).toMatch(/data-act="toutes"/);
    expect(o).toMatch(/data-act="exporter"/);
    expect(o).toMatch(/texteCarnet\(/);
  });
  it('savoir : pause, point de rappel, et une seule porte pour traduire (plus d’onglet Traduire ici)', async () => {
    const s = await brute('/src/compagne/savoirUI.ts');
    expect(s).toMatch(/ouvrirPanneau\('savoir'\)/);
    expect(s).toMatch(/pointRappel\(/);
    expect(s).not.toMatch(/data-on="traduire"/);
  });
  it('tactile : cibles d’au moins 44 px et focus visuel, consigné dans la feuille de style', () => {
    // Le CSS ne passe pas par « ?raw » dans l'environnement de test : on lit la
    // feuille telle qu'elle est sur le disque — le contrat reste le même.
    const feuille = readFileSync(new URL('../src/ui/style.css', import.meta.url), 'utf8');
    expect(feuille).toMatch(/min-height:\s*44px/);
    expect(feuille).toMatch(/:focus-visible/);
  });
});
