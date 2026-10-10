// Le mathématicien embarqué : tests d'abord. Chaque cas = une promesse tenue
// sans jamais passer par un modèle de langage (déterministe, hors-ligne, exact).
import { describe, expect, it } from 'vitest';
import { repondreMaths } from '../src/compagne/maths';

describe('expressions avancées (le socle du calculateur)', () => {
  it('puissances', () => {
    expect(repondreMaths('combien font 2 puissance 10 ?')).toBe('Ça fait 1024.');
    expect(repondreMaths('2^10')).toBe('Ça fait 1024.');
    expect(repondreMaths('3^2 + 4^2')).toBe('Ça fait 25.');
  });
  it('racines carrées', () => {
    expect(repondreMaths('racine carrée de 144')).toBe('Ça fait 12.');
    expect(repondreMaths('sqrt(2)')).toBe('Ça fait 1,41.');
  });
  it('fonctions usuelles (radians)', () => {
    expect(repondreMaths('sin(pi/2)')).toBe('Ça fait 1.');
    expect(repondreMaths('cos(0)')).toBe('Ça fait 1.');
    expect(repondreMaths('abs(-7) + 2')).toBe('Ça fait 9.');
  });
  it('factorielles', () => {
    expect(repondreMaths('3!')).toBe('Ça fait 6.');
    expect(repondreMaths('factorielle de 10')).toContain('10! = 3628800.');
  });
  it('multiplication implicite et parenthèses', () => {
    expect(repondreMaths('2(3+4)')).toBe('Ça fait 14.');
    expect(repondreMaths('2 pi')).toBe('Ça fait 6,28.');
  });
});

describe('pourcentages', () => {
  it('X % de Y', () => {
    expect(repondreMaths('17 % de 350')).toContain('59,5');
    expect(repondreMaths('20 pourcent de 80')).toContain('16');
  });
  it('augmentations et remises', () => {
    expect(repondreMaths('augmente 200 de 15 %')).toContain('230');
    expect(repondreMaths('diminue 80 de 25 %')).toContain('60');
  });
});

describe('équations (là où le moteur actuel se trompait)', () => {
  it('premier degré', () => {
    expect(repondreMaths('2x + 6 = 0')).toContain('x = -3.');
    expect(repondreMaths('3x + 5 = 2x + 9')).toContain('x = 4.');
    expect(repondreMaths("l'équation x/2 + 3 = 5")).toContain('x = 4.');
  });
  it('second degré deux racines — le faux -28 est corrigé', () => {
    expect(repondreMaths('x² - 5x + 6 = 0')).toContain('x = 2 ou x = 3.');
    expect(repondreMaths('x^2 + x - 6 = 0')).toContain('x = 2 ou x = -3.');
    expect(repondreMaths('x² = 9')).toContain('x = 3 ou x = -3.');
  });
  it('racine double et absence de solution réelle', () => {
    expect(repondreMaths('x² - 4x + 4 = 0')).toContain('x = 2 (racine double).');
    expect(repondreMaths('x² + 1 = 0')).toContain('aucune solution réelle');
  });
  it('polynôme sans égal : factorisation, pas de faux calcul', () => {
    expect(repondreMaths('x² - 5x + 6')).toContain('(x - 2)(x - 3)');
  });
});

describe('dérivées de polynômes', () => {
  it('dérivée complète', () => {
    expect(repondreMaths('dérivée de x^3 + 2x² - 7x + 1')).toContain("f'(x) = 3x² + 4x - 7.");
  });
  it('dérivée en un point', () => {
    expect(repondreMaths("dérivée de x^3 en 2")).toContain("f'(2) = 12");
  });
  it('constante et ligne', () => {
    expect(repondreMaths('dérivée de 5x')).toContain("f'(x) = 5.");
    expect(repondreMaths('dérivée de 7')).toContain("f'(x) = 0.");
  });
});

describe('statistiques', () => {
  it('moyenne, médiane, somme, écart-type', () => {
    expect(repondreMaths('moyenne de 12, 15 et 9')).toContain('La moyenne est 12.');
    expect(repondreMaths('médiane de 1, 3, 2')).toContain('La médiane est 2.');
    expect(repondreMaths('somme de 1, 2 et 3')).toContain('La somme est 6.');
    expect(repondreMaths('écart-type de 2, 4, 4, 4, 5, 5, 7, 9')).toContain("L'écart-type est 2.");
  });
});

describe('nombres premiers, PGCD, PPCM, diviseurs', () => {
  it('premicialité', () => {
    expect(repondreMaths('est-ce que 97 est premier ?')).toContain('97 est premier.');
    expect(repondreMaths('est-ce que 91 est premier ?')).toContain('pas premier');
    expect(repondreMaths('est-ce que 91 est premier ?')).toContain('7 × 13');
  });
  it('PGCD et PPCM', () => {
    expect(repondreMaths('pgcd de 84 et 126')).toContain('Le PGCD de 84 et 126 est 42.');
    expect(repondreMaths('ppcm de 4 et 6')).toContain('Le PPCM de 4 et 6 est 12.');
  });
  it('diviseurs', () => {
    expect(repondreMaths('diviseurs de 12')).toContain('Les diviseurs de 12 : 1, 2, 3, 4, 6, 12.');
  });
});

describe('pédagogie : le guide montre le chemin, pas que la réponse', () => {
  it('second degré : le discriminant est explicité', () => {
    expect(repondreMaths('x² - 5x + 6 = 0')).toContain('Δ = b² - 4ac');
  });
  it('premier degré : la mise en évidence de x est montrée', () => {
    expect(repondreMaths('2x + 6 = 0')).toContain('2x = -6');
  });
  it('dérivée : la règle est rappelée', () => {
    expect(repondreMaths('dérivée de x^3 + 2x² - 7x + 1')).toContain('terme à terme');
  });
  it('moyenne : le calcul est montré (somme puis division)', () => {
    expect(repondreMaths('moyenne de 12, 15 et 9')).toMatch(/additionne|somme/i);
    expect(repondreMaths('moyenne de 12, 15 et 9')).toContain('36');
  });
  it('premier : la méthode de test est dite', () => {
    expect(repondreMaths('est-ce que 97 est premier ?')).toContain('diviseur');
  });
  it('pgcd : la trace d’Euclide apparaît', () => {
    expect(repondreMaths('pgcd de 84 et 126')).toContain('Euclide');
    expect(repondreMaths('pgcd de 84 et 126')).toContain('126 = 1 × 84 + 42');
  });
  it('pourcentage : l’opération est montrée', () => {
    expect(repondreMaths('17 % de 350')).toContain('350 × 17 / 100');
  });
  it('médiane : le tri est montré', () => {
    expect(repondreMaths('médiane de 1, 3, 2')).toContain('1, 2, 3');
  });
  it('factorielle : le produit est montré', () => {
    expect(repondreMaths('factorielle de 10')).toContain('1 × 2 ×');
  });
});

describe('fail-open : le mathématicien ne dévie jamais une phrase ordinaire', () => {
  it('le langage courant ne déclenche aucun calcul', () => {
    expect(repondreMaths('quelle heure est-il ?')).toBeNull();
    expect(repondreMaths('raconte-moi une histoire')).toBeNull();
    expect(repondreMaths('je suis triste ce soir')).toBeNull();
    expect(repondreMaths('7 fois 8')).toBeNull(); // le moteur de base le fait déjà
    expect(repondreMaths('x est mon voisin')).toBeNull();
    expect(repondreMaths('2 plus deux')).toBeNull(); // idem, moteur de base
  });
});
