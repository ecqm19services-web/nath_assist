// La langue à l'écran ne se dégrade plus. Le projet a charrié pendant des semaines
// des élisions écrites avec un ESPACE à la place de l'apostrophe (« l eau »,
// « n est ») : ces chaînes passent à l'écran ET dans la voix de lecture, qui les
// épeule. Un nettoyage a été fait ; ce fichier l'empêche de se répéter.
//
// Périmètre et limites, en toute transparence :
//  - seuls les littéraux de PROSE sont contrôlés (24 caractères et plus) ;
//  - les jetons de segmentation et mots-clés comparés après normalisation
//    (mots.ts, lexique.ts, KEYWORDS de engine.ts) restent volontairement en
//    espace : pour eux, l'espace EST la donnée, pas la faute ;
//  - la voix d'un modèle de décision lit mieux une consigne correcte qu'une
//    consigne épelée, donc les instructions des jugements sont contrôlées aussi.
import { describe, expect, it } from 'vitest';

const sources = import.meta.glob(
  ['../src/**/*.ts', '../index.html', '../public/*.html'],
  { query: '?raw', import: 'default', eager: true },
) as Record<string, string>;

// Les fichiers où l'espace remplace l'apostrophe VOLONTAIREMENT : ce sont des
// données de comparaison, pas du texte affiché.
const EXEMPTES = ['src/assist/mots.ts', 'src/traduction/lexique.ts'];

// Un littéral : entre simples quotes, doubles quotes ou backticks, sans escape.
const LITTERAUX = /'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"|`(?:[^`\\]|\\.)*`/g;

// Une élision baissée : l'élision seule, un espace, puis le mot qui aurait dû
// être élidé. Les formes longues sont citées d'abord pour ne pas être éclipsées
// par leur préfixe, et les bornes de mot verrouillent la forme : « prêt à » ou
// « mots-là » ne sont pas des fautes, le « t » et le « s » y sont collés.
const ELISION =
  /(?<![\p{L}])(?:jusqu|lorsqu|puisqu|presqu|quelqu|aujourd|qu|n|d|l|j|c|m|t|s)(?![\p{L}\p{N}])\s+[haeiouyàâäéèêëîïôöûùü][\p{L}\p{N}]*/giu;

const retirerCommentaires = (code: string): string =>
  code.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/^[ \t]*\/\/.*$/gm, ' ');

const fautesDans = (chemin: string, brut: string): string[] => {
  if (EXEMPTES.some((e) => chemin.includes(e))) return [];
  const corps = chemin.endsWith('.ts') ? retirerCommentaires(brut) : brut;
  const fautes: string[] = [];
  for (const litteral of corps.match(LITTERAUX) ?? []) {
    const texte = litteral.slice(1, -1);
    if (texte.length < 24) continue; // jetons, libellés courts, mots-clés
    const trous = texte.match(ELISION);
    if (trous) fautes.push(`${chemin} :: ${trous.join(' | ')} — ${texte.slice(0, 60)}`);
  }
  return fautes;
};

describe('garde-fou : la langue affichée garde ses apostrophes', () => {
  it('attrape une élision baissée dans une prose', () => {
    // Le contrôle doit mordre : voici la faute telle qu'elle a vécu des semaines.
    const fautes = fautesDans(
      '../src/test-factice.ts',
      "const resume = 'Le son voyage dans l air, l eau ou les solides.';",
    );
    expect(fautes).toHaveLength(1);
    expect(fautes[0]).toContain('l air | l eau');
  });

  it('laisse passer le texte déjà correct', () => {
    expect(fautesDans('../src/test-factice.ts', "const a = 'Le son voyage dans l’air, l’eau ou les solides.';")).toEqual([]);
  });

  it('laisse passer les jetons courts destinés à la comparaison', () => {
    // KEYWORDS et listes de mots : l'espace y remplace l'apostrophe exprès.
    expect(fautesDans('../src/test-factice.ts', "const k = ['c est quoi', 'tu m entends', 'j ai mal'];")).toEqual([]);
  });

  it('aucun littéral de l app n affiche ni ne prononce une élision baissée', () => {
    const fichiers = Object.keys(sources);
    expect(fichiers.length).toBeGreaterThan(30);
    const fautes: string[] = [];
    for (const [chemin, brut] of Object.entries(sources)) fautes.push(...fautesDans(chemin, brut));
    expect(fautes).toEqual([]);
  });
});
