import { describe, expect, it } from 'vitest';
import { creerFiche, type Paquet } from '../src/etudes/fiches';
import {
  SEUIL_RECITATION,
  evaluerQuiz,
  genererQuiz,
  melanger,
  normaliser,
  rngSeed,
  scoreRecitation,
} from '../src/etudes/quiz';

const NOW = 1_800_000_000_000;

function paquetTest(noms: string[]): Paquet {
  return {
    id: 'p1',
    nom: 'SVT',
    fiches: noms.map((n, i) => creerFiche(`question ${n} ?`, n, { id: `f${i}`, now: NOW })!),
  };
}

describe('quiz : texte et mémoire', () => {
  it('normaliser : minuscules, sans accents, sans ponctuation', () => {
    expect(normaliser('La  Mitose, cellulaire !')).toBe('la mitose cellulaire');
    expect(normaliser('café')).toBe('cafe');
  });

  it('réciter les mots attendus dans le désordre et avec du surplus = 1', () => {
    const s = scoreRecitation("Le Noyau contient l'ADN.", 'noyau ADN contient');
    expect(s).toBe(1);
  });

  it('à moitié récité ≈ à moitié', () => {
    const s = scoreRecitation('le noyau contient quelque chose', 'noyau contient adn cellule');
    expect(s).toBeCloseTo(0.5, 1);
  });

  it('hors-sujet = sous le seuil de réussite', () => {
    expect(scoreRecitation('banana pizza', 'noyau contient adn')).toBeLessThan(SEUIL_RECITATION);
    expect(SEUIL_RECITATION).toBeGreaterThanOrEqual(0.6);
  });

  it('vide et vide = parfait, vide face à du attendu = zéro', () => {
    expect(scoreRecitation('   ', '')).toBe(1);
    expect(scoreRecitation('des mots', '   ')).toBe(0);
  });
});

describe('quiz : tirage au sort déterministe', () => {
  it('melanger conserve les éléments et répète le même ordre pour une même graine', () => {
    const l = ['a', 'b', 'c', 'd', 'e'];
    const x = melanger(l, rngSeed(42));
    const y = melanger(l, rngSeed(42));
    expect(x).toEqual(y);
    expect([...x].sort()).toEqual([...l].sort());
    expect(melanger(l, rngSeed(7))).not.toEqual(x);
  });
});

describe('quiz : fabric de questions à choix', () => {
  it('avec assez de cartes : bonne réponse présente, choix uniques et au plus 4', () => {
    const qs = genererQuiz(paquetTest(['atome', 'cellule', 'noyau', 'gene', 'enzyme']), 3, NOW);
    expect(qs.length).toBe(3);
    for (const q of qs) {
      expect(q.choix).toContain(q.attendue);
      expect(new Set(q.choix).size).toBe(q.choix.length);
      expect(q.choix.length).toBeLessThanOrEqual(4);
      expect(q.choix[q.bonne]).toBe(q.attendue);
    }
  });

  it('une seule carte : pas de choix leurrant, donc pas de quiz', () => {
    expect(genererQuiz(paquetTest(['atome']), 3, NOW)).toEqual([]);
  });

  it('deux cartes : exactement deux choix', () => {
    const qs = genererQuiz(paquetTest(['atome', 'cellule']), 1, NOW);
    expect(qs[0].choix.length).toBe(2);
  });

  it('le même paquet au même jour donne le même quiz (reproductible)', () => {
    const p = paquetTest(['a', 'b', 'c', 'd']);
    expect(genererQuiz(p, 3, NOW)).toEqual(genererQuiz(p, 3, NOW));
    expect(genererQuiz(p, 3, NOW)).toEqual(genererQuiz(p, 3, NOW + 60_000));
  });
});

describe('quiz : correction', () => {
  const qs = genererQuiz(paquetTest(['atome', 'cellule', 'noyau']), 3, NOW);
  const mauvaise = (q: (typeof qs)[number]) => (q.bonne + 1) % q.choix.length;

  it('compte les bonnes réponses et donne le pourcentage', () => {
    const r = evaluerQuiz(qs, [qs[0].bonne, mauvaise(qs[1]), qs[2].bonne]);
    expect(r.total).toBe(3);
    expect(r.score).toBe(2);
    expect(r.pourcentage).toBeCloseTo(66.67, 1);
  });

  it('aucune question = 0 %, jamais de division par zéro', () => {
    expect(evaluerQuiz([], [])).toEqual({ score: 0, total: 0, pourcentage: 0, details: [] });
  });
});
