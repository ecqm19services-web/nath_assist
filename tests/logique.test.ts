import { describe, expect, it } from 'vitest';
import { calculer, calculerSuite, decrireDate, decrireHeure, evaluerNombre } from '../src/compagne/logique';

describe('logique arithmétique de la Compagne', () => {
  it('additionne, soustrait, multiplie, divise (chiffres)', () => {
    expect(calculer('combien font 3 plus 4 ?')).toBe('7');
    expect(calculer('5 moins 2')).toBe('3');
    expect(calculer('6 fois 7')).toBe('42');
    expect(calculer('20 divisé par 4')).toBe('5');
    expect(calculer('2 + 2')).toBe('4');
    expect(calculer('9 x 9')).toBe('81');
  });
  it('comprend les nombres en lettres', () => {
    expect(calculer('douze fois deux')).toBe('24');
    expect(calculer('quinze moins neuf')).toBe('6');
  });
  it('renvoie null quand ce n\'est pas un calcul', () => {
    expect(calculer('quel temps fait-il')).toBeNull();
    expect(calculer('bonjour')).toBeNull();
    expect(calculer('2 plus')).toBeNull();
  });
  it('arrondit joliment une division non entière', () => {
    expect(calculer('10 divisé par 3')).toBe('3,33');
  });
  it('ne laisse jamais de zéros parasites (14,5, pas 14,50)', () => {
    expect(calculer('58 divisé par 4')).toBe('14,5');
    expect(calculer('1 divisé par 8')).toBe('0,13');
  });
  it('enchaîne plusieurs opérations avec les bonnes précédences', () => {
    expect(calculer('7 fois 8 plus 2')).toBe('58');
    expect(calculer('2 plus 3 fois 4')).toBe('14');
    expect(calculer('10 moins 3 fois 2')).toBe('4');
    expect(calculer('dix moins trois fois deux')).toBe('4');
    expect(calculer('100 divisé par 4 fois 2')).toBe('50');
  });
  it('respecte les parenthèses', () => {
    expect(calculer('(2 plus 3) fois 4')).toBe('20');
    expect(calculer('2 fois (5 moins 1)')).toBe('8');
  });
  it('refuse la division par zéro et les expressions incomplètes', () => {
    expect(calculer('5 divisé par 0')).toBeNull();
    expect(calculer('(2 plus 3 fois 4')).toBeNull();
  });
  it('reprend le dernier résultat (chaîne de calcul)', () => {
    expect(calculerSuite('plus 2', 56)).toBe(58);
    expect(calculerSuite('fois 3', 56)).toBe(168);
    expect(calculerSuite('divisé par 4', 56)).toBe(14);
    expect(calculerSuite('moins 50', 56)).toBe(6);
    expect(calculerSuite('bonjour', 56)).toBeNull();
  });
  it('évalue un nombre isolé (chiffres et lettres)', () => {
    expect(evaluerNombre('42')).toBe(42);
    expect(evaluerNombre('douze')).toBe(12);
    expect(evaluerNombre('bonjour')).toBeNull();
  });
});

describe('la Compagne connaît l\'heure et le jour', () => {
  it('donne l\'heure', () => {
    expect(decrireHeure(new Date(2026, 9, 4, 14, 5))).toBe('Il est 14 h 05.');
    expect(decrireHeure(new Date(2026, 9, 4, 9, 0))).toBe('Il est 9 heures.');
  });
  it('donne la date en français', () => {
    expect(decrireDate(new Date(2026, 9, 4))).toBe('Nous sommes dimanche 4 octobre 2026.');
  });
});
