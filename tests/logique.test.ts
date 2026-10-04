import { describe, expect, it } from 'vitest';
import { calculer, decrireDate, decrireHeure } from '../src/compagne/logique';

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
