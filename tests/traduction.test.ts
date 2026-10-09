import { describe, expect, it } from 'vitest';
import {
  ajouterEntree,
  choisirMoteurTraduction,
  traduireExpression,
  validerEntrees,
  type Entree,
} from '../src/traduction/lexique';

const WOLOF: Entree[] = [
  { de: 'bonjour', a: 'naka nga def', langue: 'wolof' },
  { de: 'ami', a: 'xale', langue: 'wolof' },
  { de: 'merci', a: 'santala', langue: 'wolof' },
];

describe('traduction : la couture du moteur', () => {
  it('si un moteur local prêt existe, il passe avant le lexique ; sinon lexique', () => {
    expect(choisirMoteurTraduction({ moteurLocalPret: true })).toBe('moteur');
    expect(choisirMoteurTraduction({ moteurLocalPret: false })).toBe('lexique');
  });
});

describe('traduction : le lexique de tout le monde', () => {
  it('ajouterEntree range proprement et remplace le doublon (même mot, même langue)', () => {
    const avec = ajouterEntree(WOLOF, ' Bonjour ', 'jammeray', 'wolof');
    expect(avec.length).toBe(3); // « bonjour » remplacé, pas dupliqué
    expect(traduireExpression('bonjour', 'wolof', avec).resultat).toBe('jammeray');
  });

  it('ajouterEntree refuse le vide d\u2019un côté ou sans langue', () => {
    expect(ajouterEntree(WOLOF, '', 'x', 'wolof').length).toBe(3);
    expect(ajouterEntree(WOLOF, 'oui', '  ', 'wolof').length).toBe(3);
    expect(ajouterEntree(WOLOF, 'oui', 'wa', '   ').length).toBe(3);
  });

  it('expression connue mot à mot, accents et casse ignorés', () => {
    const r = traduireExpression("Bonjour, l'AMI !", 'wolof', WOLOF);
    expect(r.resultat).toContain('naka nga def');
    expect(r.resultat).toContain('xale');
  });

  it('les mots qui manquent sont dits, pas inventés', () => {
    const r = traduireExpression('bonjour et merci', 'wolof', WOLOF);
    expect(r.manques).toEqual(['et']);
    expect(r.resultat).toContain('naka nga def');
    expect(r.resultat).toContain('santala');
  });

  it('langue inconnue = rien ne sort de la bouche', () => {
    const r = traduireExpression('bonjour', 'ewondo', WOLOF);
    expect(r.resultat).toBeNull();
    expect(r.manques.length).toBeGreaterThan(0);
  });

  it('expression entière connue passe avant le découpage mot à mot', () => {
    const base: Entree[] = [
      { de: 'bonjour', a: 'salut', langue: 'x' },
      { de: 'bonjour monsieur', a: 'mbikoom', langue: 'x' },
    ];
    expect(traduireExpression('Bonjour monsieur !', 'x', base).resultat).toBe('mbikoom');
  });

  it('validerEntrees : répare ou jette silencieusement', () => {
    expect(validerEntrees('{x')).toEqual([]);
    const brut = JSON.stringify([
      { de: 'bonjour', a: 'salut', langue: 'w' },
      { de: '', a: 'x', langue: 'w' },
      { de: 'k', a: '   ', langue: 'w' },
      'pas un objet',
    ]);
    expect(validerEntrees(brut)).toEqual([{ de: 'bonjour', a: 'salut', langue: 'w' }]);
  });
});
