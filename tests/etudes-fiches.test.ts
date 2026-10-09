import { describe, expect, it } from 'vitest';
import {
  JOUR,
  creerFiche,
  creerPaquet,
  deserialiserPaquet,
  fileDeRevue,
  parseFichesTexte,
  reviser,
  serialiserPaquet,
} from '../src/etudes/fiches';

const NOW = 1_800_000_000_000; // un instant fixe pour des tests déterministes

describe('fiches : création', () => {
  it('créerFiche normalise et pose les défauts de la première rencontre', () => {
    const f = creerFiche('  La capitale du Cameroun ?  ', '  Yaoundé ', { id: 'f1', now: NOW })!;
    expect(f.verso).toBe('La capitale du Cameroun ?');
    expect(f.recto).toBe('Yaoundé');
    expect(f.facilite).toBeGreaterThanOrEqual(2.3);
    expect(f.intervalle).toBe(0);
    expect(f.due).toBe(NOW); // nouvelle → à revoir tout de suite
    expect(f.revisions).toBe(0);
    expect(f.oublis).toBe(0);
  });

  it('créerFiche refuse le vide des deux côtés', () => {
    expect(creerFiche('', 'x')).toBeNull();
    expect(creerFiche('x', '   ')).toBeNull();
  });

  it('créerPaquet exige un nom', () => {
    expect(creerPaquet('  ')).toBeNull();
    const p = creerPaquet(' Biologie ', { id: 'p1' })!;
    expect(p.nom).toBe('Biologie');
    expect(p.fiches).toEqual([]);
  });
});

describe('fiches : espacement (le intervalle grandit quand on retient)', () => {
  const base = creerFiche('2+2 ?', '4', { id: 'f1', now: NOW })!;

  it('« difficile » : on revoit dans quelques minutes et la facilité baisse (plancher 1.3)', () => {
    const r = reviser(base, 'difficile', NOW);
    expect(r.intervalle).toBe(0);
    expect(r.due).toBeGreaterThan(NOW);
    expect(r.due).toBeLessThanOrEqual(NOW + 30 * 60_000); // même moins d'une demi-heure
    expect(r.oublis).toBe(1);
    expect(r.revisions).toBe(1);
    const dur = reviser({ ...base, facilite: 1.35 }, 'difficile', NOW);
    expect(dur.facilite).toBeGreaterThanOrEqual(1.3);
  });

  it('« bien » : première réussite = 1 jour, puis l’écart se multiplie', () => {
    const jour1 = reviser(base, 'bien', NOW);
    expect(jour1.intervalle).toBe(1);
    expect(jour1.due).toBe(NOW + 1 * JOUR);
    const suite = reviser(jour1, 'bien', NOW);
    expect(suite.intervalle).toBeGreaterThan(jour1.intervalle);
    expect(suite.oublis).toBe(0);
  });

  it('« facile » : encore plus large et la carte devient plus légère, sans dépasser 3.2', () => {
    const r = reviser(base, 'facile', NOW);
    expect(r.intervalle).toBeGreaterThanOrEqual(2);
    expect(r.facilite).toBeLessThanOrEqual(3.2);
    const plafond = reviser({ ...base, facilite: 3.2 }, 'facile', NOW);
    expect(plafond.facilite).toBe(3.2);
  });

  it('reviser ne modifie jamais la carte d’origine', () => {
    const original = { ...base };
    reviser(base, 'facile', NOW + 999);
    expect(base).toEqual(original);
  });
});

describe('fiches : file de revue et import texte', () => {
  const paquets = [
    {
      id: 'p1',
      nom: 'TV',
      fiches: [
        { ...creerFiche('a ?', 'A', { id: 'x1', now: NOW })!, due: NOW - 10 },
        { ...creerFiche('b ?', 'B', { id: 'x2', now: NOW })!, due: NOW - 20 },
        creerFiche('c ?', 'C', { id: 'x3', now: NOW + JOUR })!, // future → hors file
      ],
    },
  ];

  it('fileDeRevue ne prend que les cartes dues, triées de la plus ancienne', () => {
    const file = fileDeRevue(paquets, NOW);
    expect(file.map((f) => f.id)).toEqual(['x2', 'x1']);
  });

  it('fileDeRevue vide proprement si rien dû', () => {
    expect(fileDeRevue(paquets, NOW - 1000)).toEqual([]);
  });

  it('parseFichesTexte : « question :: réponse » par ligne, commentaires et vides ignorés', () => {
    const r = parseFichesTexte(
      '# mes cartes\nLa capitale ? :: Yaoundé\n\n2+2 :: 4 :: encore 4\nsans separateur\n');
    expect(r.entrees).toEqual([
      { verso: 'La capitale ?', recto: 'Yaoundé' },
      { verso: '2+2', recto: '4 :: encore 4' }, // on ne coupe qu'au premier ::
    ]);
    expect(r.ignorees).toBe(1);
  });
});

describe('fiches : sérialisation robuste', () => {
  it('aller-retour complet', () => {
    const p = creerPaquet('Nag', { id: 'p1' })!;
    p.fiches.push(creerFiche('q', 'r', { id: 'f1', now: NOW })!);
    const q = deserialiserPaquet(serialiserPaquet(p));
    expect(q).toEqual(p);
  });

  it('deserialiserPaquet : rien ne fait crasher, et les valeurs folles sont réparées', () => {
    expect(deserialiserPaquet(null)).toBeNull();
    expect(deserialiserPaquet('pas du json{')).toBeNull();
    const tordu = JSON.stringify({
      v: 1,
      id: 'p', nom: 'X',
      fiches: [
        { id: 'f1', verso: 'q', recto: 'r', facilite: 99, intervalle: -5, due: 'x', revisions: -2, oublis: 1 },
        { id: 'f2', verso: '', recto: 'r' }, // verso vide → carte jetée
      ],
    });
    const p = deserialiserPaquet(tordu)!;
    expect(p.fiches.length).toBe(1);
    const f = p.fiches[0];
    expect(f.facilite).toBeLessThanOrEqual(3.2);
    expect(f.facilite).toBeGreaterThanOrEqual(1.3);
    expect(f.intervalle).toBeGreaterThanOrEqual(0);
    expect(Number.isFinite(f.due)).toBe(true);
    expect(f.revisions).toBeGreaterThanOrEqual(0);
  });
});
