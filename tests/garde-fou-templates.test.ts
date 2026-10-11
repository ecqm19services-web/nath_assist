// Le garde-fou des textes a l'ecran. Une interpolation oubliee de son « $ »
// n'est plus du code : c'est du texte. TypeScript avale la ligne sans sourciller,
// les tests de logique ne voient rien, et le visiteur lit « {souffleTimer ===
// null ? 'Prêt' : ''} » a la place de « Pret ». Ce fichier fige la promesse :
// aucun ecran de l'app n'affiche jamais son propre code.
import { describe, expect, it } from 'vitest';

// Les sources bruts, sans transpiration : la chaine telle qu'ecrite dans le fichier.
const bruts = import.meta.glob('../src/**/*.ts', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

// Ce qui ressemble a une interpolation ( { … ? '…' : '…' } ) mais qui n'en est pas,
// faute de « $ » juste avant l'accolade. Deux formes de code legitime sont ecartees :
// les mots qui ouvrent un bloc ({ return b ? 'oui' : 'non' }) et les proprietes
// d'un objet ({ ideal: face === 'arriere' ? 'environment' : 'user' }).
const CODE_DEGUISE =
  /(?<!\$)\{[ \t]*(?![A-Za-z_$][\w$]*\s*[:)])(?!return\b|const\b|let\b|if\b|else\b|case\b|throw\b|await\b)[A-Za-z_$][\w$]*[^{}]*\?[^{}]*['"`][^{}]*:[^{}]*['"`][^{}]*\}/g;

const orphelines = (code: string): string[] => code.match(CODE_DEGUISE) ?? [];

describe('garde-fou : le code-source ne doit jamais devenir un texte', () => {
  it('repère une interpolation amputée de son dollar', () => {
    // La forme exacte du bug qui a passe le typage, les tests et la compilation.
    const casse = '<span data-phase="">{souffleTimer === null ? \'Pret\' : \'\'}</span>';
    expect(orphelines(casse)).toHaveLength(1);
  });

  it('laisse passer la meme ligne, correctement interpolee', () => {
    const propre = '<span data-phase="">$' + casse_phase() + '</span>';
    expect(orphelines(propre)).toEqual([]);
  });

  it('ne confond pas un ternaire de code avec un texte', () => {
    expect(orphelines('if (a) { return b ? "oui" : "non"; }')).toEqual([]);
    // L'objet de configuration : un texte entre accolades, mais pas dans un gabarit.
    expect(orphelines("const c = { ideal: face === 'arriere' ? 'environment' : 'user' };")).toEqual([]);
  });

  it('aucun fichier de src n affiche son propre code a l ecran', () => {
    const fichiers = Object.keys(bruts);
    expect(fichiers.length).toBeGreaterThan(20);
    const fautes: string[] = [];
    for (const [chemin, code] of Object.entries(bruts)) {
      for (const faute of orphelines(code)) fautes.push(`${chemin}: ${faute.slice(0, 70)}`);
    }
    expect(fautes).toEqual([]);
  });
});

// L'interpolation correcte, ecrite ici sans etre interpretee pour eviter tout
// malentendu avec le lisier de tests lui-meme.
function casse_phase(): string {
  return '{souffleTimer === null ? \'Pret\' : \'\'}';
}
