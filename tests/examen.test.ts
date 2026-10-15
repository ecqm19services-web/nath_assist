// L'examen blanc, c'est la promesse « indispensable de métier » côté études :
// avant le vrai jour, se tester dans les mêmes conditions — hors-ligne, sans
// compte, sans réseau. La même graine doit refabriquer le même sujet (on peut le
// repasser), jamais plus de cartes qu'il n'en existe, jamais de doublon. Et on ne
// décourage jamais un élève : la note s'explique, elle ne juge pas la personne.
import { describe, expect, it } from 'vitest';
import { apprecier, composerExamen, dureeConseillee, resultatExamen, type Fiche } from '../src/etudes/examen';

const carte = (i: number): Fiche => ({
  id: `f${i}`, verso: `Q${i}`, recto: `R${i}`,
  facilite: 2.5, intervalle: 1, due: 0, revisions: i, oublis: 0,
});
const FICHES: Fiche[] = Array.from({ length: 20 }, (_, i) => carte(i));

describe('composerExamen : un sujet stable et honnête', () => {
  it('la même graine refabrique exactement le même sujet, dans le même ordre', () => {
    const a = composerExamen(FICHES, 10, 'graine-1').map((f) => f.id);
    const b = composerExamen(FICHES, 10, 'graine-1').map((f) => f.id);
    expect(a).toEqual(b);
  });

  it('une autre graine change le sujet', () => {
    const a = composerExamen(FICHES, 10, 'graine-1').map((f) => f.id);
    const b = composerExamen(FICHES, 10, 'graine-2').map((f) => f.id);
    expect(a).not.toEqual(b);
  });

  it('jamais plus de cartes qu\u2019il n\u2019en existe, jamais de doublon', () => {
    const cinq = composerExamen(FICHES.slice(0, 5), 12, 'g').map((f) => f.id);
    expect(cinq.length).toBe(5);
    const dix = composerExamen(FICHES, 10, 'g').map((f) => f.id);
    expect(new Set(dix).size).toBe(10);
  });

  it('le vide ne fait pas de miracle', () => {
    expect(composerExamen([], 10, 'g')).toEqual([]);
  });
});

describe('resultatExamen : compter juste', () => {
  it('le score suit les bonnes réponses', () => {
    const r = resultatExamen([
      { id: 'f1', juste: true },
      { id: 'f2', juste: false },
      { id: 'f3', juste: true },
      { id: 'f4', juste: true },
    ]);
    expect(r).toMatchObject({ corrects: 3, total: 4, score: 0.75 });
  });

  it('pas de réponse, pas de division par zéro', () => {
    expect(resultatExamen([])).toMatchObject({ corrects: 0, total: 0, score: 0 });
  });
});

describe('les repères humains', () => {
  it('la durée conseillée parle en secondes, jamais négative', () => {
    expect(dureeConseillee(10, 30)).toBe(300);
    expect(dureeConseillee(0)).toBe(0);
    expect(dureeConseillee(-5)).toBe(0);
  });

  it('apprécier encourage sans jamais être blessante', () => {
    expect(apprecier(0.95)).toMatch(/Excellent/i);
    expect(apprecier(0.5)).toBeTruthy();
    expect(apprecier(0.1)).toBeTruthy();
    // Aucun mot qui sonne comme une fin ou un verdict sur la personne.
    const bas = apprecier(0).toLowerCase();
    expect(bas).not.toMatch(/nul|raté|raté|inutile|bête|échec total/);
  });
});

// Un moteur d'examen jamais atteignable est une promesse menteuse : la personne
// doit le lancer depuis sa boîte à outils, sur ses propres paquets, sans réseau.
describe("l'intégration : l'examen blanc est atteignable depuis la boîte à outils", () => {
  const bruts = import.meta.glob('../src/compagne/outilsUI.ts', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  const ui = Object.values(bruts)[0] ?? '';

  it('la boîte à outils importe le vrai moteur d\u2019examen', () => {
    expect(ui).toContain("from '../etudes/examen'");
    expect(ui).toContain('composerExamen(');
    expect(ui).toContain('resultatExamen(');
  });

  it('un onglet « Examen » existe aux côtés des autres', () => {
    expect(ui).toMatch(/examen:\s*'Examen'/);
  });

  it('aucun mot technique ne glisse dans l\u2019onglet examen', () => {
    const morceau = ui.slice(ui.indexOf('function rendreExamen'), ui.indexOf('RENDUS:'));
    expect(morceau).not.toMatch(/localStorage|JSON|base64|algorithme|deterministe/i);
  });
});
