import { describe, expect, it } from 'vitest';
import {
  ajouterEntree,
  choisirMoteurTraduction,
  importerEntrees,
  lexiqueDepart,
  serialiserEntrees,
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
    ] satisfies readonly unknown[]);
    expect(validerEntrees(brut)).toEqual([{ de: 'bonjour', a: 'salut', langue: 'w' }]);
  });

  it('lexiqueDepart : un socle solide en anglais et espagnol, rien pour une langue inventée', () => {
    const en = lexiqueDepart('anglais');
    expect(en.some((e) => e.de === 'bonjour' && e.a === 'hello' && e.langue === 'anglais')).toBe(true);
    expect(lexiqueDepart('Anglais ').length).toBe(en.length); // casse et espaces ne comptent pas
    expect(lexiqueDepart('klingon')).toEqual([]);
    for (const e of [...en, ...lexiqueDepart('espagnol')]) {
      expect(e.de.trim() && e.a.trim()).toBeTruthy();
    }
  });

  it('serialiserEntrees : une ligne par entrée, format lisible « langue | question :: réponse »', () => {
    const texte = serialiserEntrees(WOLOF);
    expect(texte.split('\n')).toHaveLength(3);
    expect(texte).toContain('wolof | bonjour :: naka nga def');
    expect(serialiserEntrees([])).toBe('');
  });

  it('importerEntrees : fusionne le lexique d\u2019un autre, sans doublon ni ligne folle', () => {
    const texte = `# le carnet de Fatou\nanglais | bonjour :: hello\nanglais | eau :: water\npas une ligne\n  \n`;
    const avant = [...WOLOF];
    const apres = importerEntrees(texte, avant);
    expect(apres.length).toBe(avant.length + 2);
    expect(traduireExpression('bonjour', 'anglais', apres).resultat).toBe('hello');
  });

  it('importerEntrees : la dernière parole donnée gagne (doublon remplacé)', () => {
    const apres = importerEntrees('wolof | bonjour :: jammeray', WOLOF);
    expect(traduireExpression('bonjour', 'wolof', apres).resultat).toBe('jammeray');
    expect(apres.length).toBe(WOLOF.length);
  });

  it('aller-retour : sérialiser puis importer redonne le même lexique', () => {
    const rond = importerEntrees(serialiserEntrees(WOLOF), []);
    expect(rond.length).toBe(WOLOF.length);
    for (const e of WOLOF) {
      expect(traduireExpression(e.de, e.langue, rond).resultat).toBe(e.a);
    }
  });
});
