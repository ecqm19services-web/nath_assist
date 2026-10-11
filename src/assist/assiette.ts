// L'assiette : estimer ce que je mange avec une table d'aliments embarquée.
// Vingt-huit lignes, des calories et des trois grandes familles (protéines,
// glucides, lipides) — tout calculé dans l'appareil, hors-ligne, sans photo ni
// compte. Le grand cerveau peut commenter, l'estimation ne dépend jamais de lui.
// Les chiffres sont des moyennes de tables nutrition courantes, par portion.

import { motNet, quantiteDe, decouperListe } from './mots';
import { demanderAuCerveau } from './dire';

export interface Aliment {
  nom: string;
  /** « unité » = on peut compter (2 œufs) ; sinon on compte une portion. */
  unite: 'unité' | 'portion' | 'verre' | 'cuillère' | 'assiette' | 'tranche' | 'pot';
  kcal: number;
  p: number;
  g: number;
  l: number;
  alias?: string[];
}

export const TABLE_ALIMENTS: Aliment[] = [
  { nom: 'Œuf', unite: 'unité', kcal: 78, p: 6, g: 1, l: 5, alias: ['oeuf', 'uf', 'oeufs'] },
  { nom: 'Banane', unite: 'unité', kcal: 90, p: 1, g: 23, l: 0, alias: ['banane'] },
  { nom: 'Pomme', unite: 'unité', kcal: 72, p: 0, g: 19, l: 0, alias: ['pomme'] },
  { nom: 'Orange', unite: 'unité', kcal: 47, p: 1, g: 12, l: 0, alias: ['orange'] },
  { nom: 'Mangue', unite: 'unité', kcal: 60, p: 1, g: 15, l: 0, alias: ['mangue'] },
  { nom: 'Tomate', unite: 'unité', kcal: 18, p: 1, g: 4, l: 0, alias: ['tomate'] },
  { nom: 'Concombre', unite: 'unité', kcal: 12, p: 1, g: 2, l: 0, alias: ['concombre'] },
  { nom: 'Carotte', unite: 'unité', kcal: 25, p: 1, g: 6, l: 0, alias: ['carotte'] },
  { nom: 'Oignon', unite: 'unité', kcal: 40, p: 1, g: 9, l: 0, alias: ['oignon'] },
  { nom: 'Pain', unite: 'tranche', kcal: 80, p: 3, g: 15, l: 1, alias: ['pain', 'tranche'] },
  { nom: 'Riz cuit', unite: 'portion', kcal: 130, p: 3, g: 28, l: 0, alias: ['riz', 'garba'] },
  { nom: 'Pâtes cuites', unite: 'portion', kcal: 157, p: 6, g: 31, l: 1, alias: ['pate', 'spaghetti'] },
  { nom: 'Semoule', unite: 'portion', kcal: 157, p: 6, g: 33, l: 0, alias: ['semoule', 'couscous'] },
  { nom: 'Igname', unite: 'portion', kcal: 118, p: 2, g: 27, l: 0, alias: ['igname', 'patate'] },
  { nom: 'Niébé cuit', unite: 'portion', kcal: 120, p: 8, g: 21, l: 0, alias: ['niebe', 'haricot', 'lentille'] },
  { nom: 'Poulet cuit', unite: 'portion', kcal: 165, p: 31, g: 0, l: 4, alias: ['poulet', 'volaille'] },
  { nom: 'Poisson cuit', unite: 'portion', kcal: 135, p: 20, g: 0, l: 5, alias: ['poisson', 'capitaine', 'tilapia'] },
  { nom: 'Thon en boîte', unite: 'unité', kcal: 116, p: 26, g: 0, l: 1, alias: ['thon'] },
  { nom: 'Arachide', unite: 'cuillère', kcal: 94, p: 4, g: 3, l: 8, alias: ['arachide', 'cacahuede', 'cacahuete'] },
  { nom: 'Lait', unite: 'verre', kcal: 60, p: 3, g: 5, l: 3, alias: ['lait'] },
  { nom: 'Yaourt', unite: 'pot', kcal: 59, p: 10, g: 4, l: 0, alias: ['yaourt', 'yogourt', 'lait fermente'] },
  { nom: 'Fromage', unite: 'portion', kcal: 115, p: 7, g: 1, l: 9, alias: ['fromage', 'vache'] },
  { nom: 'Huile', unite: 'cuillère', kcal: 119, p: 0, g: 0, l: 14, alias: ['huile'] },
  { nom: 'Beurre', unite: 'cuillère', kcal: 102, p: 0, g: 0, l: 12, alias: ['beurre', 'margarine'] },
  { nom: 'Sucre', unite: 'cuillère', kcal: 48, p: 0, g: 12, l: 0, alias: ['sucre', 'miel'] },
  { nom: 'Farine de blé', unite: 'cuillère', kcal: 38, p: 1, g: 8, l: 0, alias: ['farine'] },
  { nom: 'Cacao', unite: 'cuillère', kcal: 12, p: 1, g: 1, l: 1, alias: ['cacao', 'chocolat'] },
  { nom: 'Épinard', unite: 'assiette', kcal: 23, p: 3, g: 4, l: 0, alias: ['epinard', 'feu', 'légume vert'] },
  { nom: 'Laitue', unite: 'assiette', kcal: 8, p: 1, g: 1, l: 0, alias: ['laitue', 'salade'] },
  { nom: 'Avocat', unite: 'unité', kcal: 80, p: 1, g: 4, l: 7, alias: ['avocat', 'caiman'] },
];

// Un mot propre du dictionnaire -> l aliment, ou rien.
export function chercherAliment(mot: string): Aliment | null {
  const cle = motNet(mot);
  if (!cle) return null;
  return (
    TABLE_ALIMENTS.find((a) => motNet(a.nom) === cle || (a.alias ?? []).some((x) => motNet(x) === cle)) ?? null
  );
}

export interface ArticleAssiette {
  nom: string;
  quantite: number;
  kcal: number;
  p: number;
  g: number;
  l: number;
}

export interface Assiette {
  articles: ArticleAssiette[];
  inconnus: string[];
  total: { kcal: number; p: number; g: number; l: number };
}

const rond = (v: number): number => Math.round(v * 10) / 10;

// « 2 œufs, du riz et une banane » -> ce que le corps va recevoir.
export function decrireAssiette(texte: string): Assiette {
  const morceaux = texte.split(/[,;/\n]|\s+et\s+/i).map((m) => m.trim()).filter(Boolean);
  const articles: ArticleAssiette[] = [];
  const inconnus: string[] = [];
  for (const morceau of morceaux) {
    const aliment = chercherAliment(morceau);
    if (!aliment) {
      const mot = motNet(morceau);
      if (mot && !inconnus.includes(mot)) inconnus.push(mot);
      continue;
    }
    const quantite = aliment.unite === 'unité' ? quantiteDe(morceau) : 1;
    articles.push({
      nom: aliment.nom,
      quantite,
      kcal: rond(aliment.kcal * quantite),
      p: rond(aliment.p * quantite),
      g: rond(aliment.g * quantite),
      l: rond(aliment.l * quantite),
    });
  }
  const total = articles.reduce(
    (t, a) => ({ kcal: t.kcal + a.kcal, p: t.p + a.p, g: t.g + a.g, l: t.l + a.l }),
    { kcal: 0, p: 0, g: 0, l: 0 },
  );
  return {
    articles,
    inconnus,
    total: { kcal: rond(total.kcal), p: rond(total.p), g: rond(total.g), l: rond(total.l) },
  };
}

export type Equilibre = 'leger' | 'correct' | 'copieux';

const MOTS: Record<Equilibre, string> = {
  leger: "Peu de choses sur l’assiette : ajoute un féculent ou une poignée de légumineuses pour tenir la journée.",
  correct: 'Bel équilibre. Pense à la verdure et à l’eau avant de quitter la table.',
  copieux: "Beaucoup d’énergie d’un coup : marche vingt minutes et garde le reste pour le prochain repas.",
};

// Trois marches, lisibles par tout le monde, sans promettre un diagnostic.
export function verdictAssiette(t: { kcal: number; p: number; g: number; l: number }): {
  equilibre: Equilibre;
  mot: string;
} {
  const kcal = Number.isFinite(t.kcal) ? t.kcal : 0;
  const equilibre: Equilibre = kcal < 400 ? 'leger' : kcal <= 800 ? 'correct' : 'copieux';
  return { equilibre, mot: MOTS[equilibre] };
}

export async function analyseParCerveau(
  endpoint: string,
  texte: string,
  fetchImpl: typeof fetch = fetch,
  modele = '',
): Promise<string | null> {
  const t = decouperListe(texte).length ? texte.trim() : '';
  if (!t) return null;
  return demanderAuCerveau({
    endpoint,
    modele,
    fetchImpl,
    max: 800,
    consigne:
      'Tu es nutritionniste de quartier, en français. En trois phrases, dis ce qui manque ou ce qui est de trop ' +
      'dans cette assiette, et un seul remplacement simple à portée de main. Pas de chiffre inventé, pas de diagnostic.',
    question: t.slice(0, 800),
  });
}
