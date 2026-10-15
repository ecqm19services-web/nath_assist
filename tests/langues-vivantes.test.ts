// Le marché est sénégalais : le wolof n'est pas une langue « exotique » à
// traduire un jour, c'est la langue du quotidien. Le socle de `lexique.ts` ne
// parlait que l'européen et le chinois — le wolof manquait chez lui. Ici on ne
// DEVINE rien : chaque mot est une forme attestée, vérifiée dans des sources
// ouvertes (ndox = eau, jërëjëf = merci…). Et le wolof se reconnaît sous ses
// aliases, pour que la personne n'ait jamais à l'écrire parfaitement.
import { describe, expect, it } from 'vitest';
import { lexiqueDepart, traduireExpression, type Entree } from '../src/traduction/lexique';

describe('le socle wolof existe enfin (la langue du marché)', () => {
  it('wolof n est plus un vide', () => {
    const w = lexiqueDepart('wolof');
    expect(w.length).toBeGreaterThanOrEqual(12);
    expect(w.every((e) => e.langue === 'wolof')).toBe(true);
  });

  it('les mots sûrs sont là, sous leur forme attestée', () => {
    const w = lexiqueDepart('wolof');
    const trouve = (de: string) => w.find((e) => e.de === de)?.a;
    expect(trouve('merci')).toBe('jërëjëf');
    expect(trouve('eau')).toBe('ndox');
    expect(trouve('maison')).toBe('kër');
    expect(trouve('ami')).toBe('xarit');
    expect(trouve('oui')).toBe('waaw');
    expect(trouve('non')).toBe('déet');
  });

  it('le wolof se reconnaît sous ses aliases', () => {
    for (const alias of ['wo', 'wollof', 'Wolof', 'WOLOF']) {
      expect(lexiqueDepart(alias).length).toBeGreaterThan(0);
    }
  });

  it('traduire une demande courante marche hors-ligne, de bout en bout', () => {
    const w: Entree[] = lexiqueDepart('wolof');
    expect(traduireExpression('merci', 'wolof', w).resultat).toBe('jërëjëf');
    expect(traduireExpression("j'ai soif, de l'eau", 'wolof', w).manques).not.toContain('eau');
  });
});

// Le nouchi n'est pas une langue séparée mais un registre à base française, né à
// Abidjan. On ne l'invente pas : le socle ne part que de formes citées dans des
// sources ouvertes, et la communauté l'enrichit entrée par entrée (coffre/carnet).
describe('le nouchi comme registre honnête', () => {
  it('un socle minimal mais sûr existe, jamais de vide honteux', () => {
    const n = lexiqueDepart('nouchi');
    expect(n.length).toBeGreaterThanOrEqual(4);
    expect(n.every((e) => e.langue === 'nouchi')).toBe(true);
  });

  it('chaque mot du socle est une forme citée, pas une devinette', () => {
    const n = lexiqueDepart('nouchi');
    const trouve = (de: string) => n.find((e) => e.de === de)?.a;
    expect(trouve('ami')).toBe('bramôgô');
    expect(trouve('personne')).toBe('môgo');
    expect(trouve('confiance')).toBe('fianss');
    expect(trouve('courage')).toBe('kèr');
  });

  it('le registre se reconnaît sous ses aliases', () => {
    for (const alias of ['nouchi', 'Nouchi', 'NOUCHI']) {
      expect(lexiqueDepart(alias).length).toBeGreaterThan(0);
    }
  });
});
