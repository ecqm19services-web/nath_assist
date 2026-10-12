// La cuisine de Nath : « qu est-ce que je peux faire avec ce que j ai ? ». Une
// carte de dix-huit plats embarqués — hors-ligne, sans compte, sans photo ni
// serveur — compare mes ingrédients, dit ce qui manque, et sort la liste de
// courses. Le grand cerveau peut parfum er la carte quand il est réglé.

import { decouperListe } from './mots';
import { demanderAuCerveau } from './dire';

export interface Plat {
  id: string;
  nom: string;
  /** Ingrédients au singulier, sans article, sourds aux accents. */
  ingredients: string[];
  minutes: number;
  type: 'plat' | 'déjeuner' | 'dîner' | 'encas' | 'dessert' | 'boisson' | 'accompagnement' | 'sauce';
}

// Les mots de la carte, tous au singulier et déjà nettoyés.
export const CARTE_PLATS: Plat[] = [
  { id: 'ome', nom: 'Omelette des voisins', type: 'dîner', minutes: 10, ingredients: ['oeuf', 'oignon', 'tomate', 'huile'] },
  { id: 'sal', nom: 'Salade croque-frais', type: 'encas', minutes: 5, ingredients: ['concombre', 'tomate', 'citron', 'huile'] },
  { id: 'rib', nom: 'Riz sauté du soir', type: 'dîner', minutes: 15, ingredients: ['riz', 'oeuf', 'oignon', 'carotte', 'huile'] },
  { id: 'pou', nom: 'Poulet tomate et riz', type: 'plat', minutes: 45, ingredients: ['poulet', 'tomate', 'oignon', 'riz', 'huile'] },
  { id: 'poi', nom: 'Poisson braisé, citron et piment', type: 'plat', minutes: 35, ingredients: ['poisson', 'citron', 'piment', 'oignon', 'huile'] },
  { id: 'nie', nom: 'Niébé en sauce', type: 'plat', minutes: 50, ingredients: ['niebe', 'oignon', 'tomate', 'huile', 'piment'] },
  { id: 'tho', nom: 'Riz au thon express', type: 'dîner', minutes: 12, ingredients: ['thon', 'riz', 'oignon', 'tomate'] },
  { id: 'ign', nom: 'Igname pilée, sauce verte', type: 'plat', minutes: 40, ingredients: ['igname', 'epinard', 'piment', 'oignon'] },
  { id: 'pat', nom: 'Purée de patate douce', type: 'accompagnement', minutes: 25, ingredients: ['patate', 'lait', 'beurre', 'sucre'] },
  { id: 'sem', nom: 'Semoule aux légumes', type: 'plat', minutes: 20, ingredients: ['semoule', 'carotte', 'oignon', 'huile', 'tomate'] },
  { id: 'gat', nom: 'Gâteau simple de la maison', type: 'dessert', minutes: 45, ingredients: ['farine', 'sucre', 'oeuf', 'lait', 'huile'] },
  { id: 'cre', nom: 'Crème banane et cacao', type: 'dessert', minutes: 10, ingredients: ['banane', 'lait', 'cacao', 'sucre'] },
  { id: 'smoothie', nom: 'Smoothie mangue-orange', type: 'boisson', minutes: 5, ingredients: ['mangue', 'orange', 'lait', 'sucre'] },
  { id: 'jus', nom: 'Jus de gingembre citronné', type: 'boisson', minutes: 15, ingredients: ['gingembre', 'citron', 'sucre', 'eau'] },
  { id: 'the', nom: 'Thé à la menthe', type: 'boisson', minutes: 8, ingredients: ['the', 'menthe', 'sucre', 'eau'] },
  { id: 'pouletfa', nom: 'Poulet rôti aux quatre épices', type: 'plat', minutes: 70, ingredients: ['poulet', 'ail', 'gingembre', 'piment', 'huile'] },
  { id: 'sau', nom: 'Sauce tomate arachide', type: 'sauce', minutes: 35, ingredients: ['tomate', 'arachide', 'oignon', 'piment', 'huile'] },
  { id: 'yaour', nom: 'Yaourt frais aux fruits', type: 'dessert', minutes: 5, ingredients: ['yaourt', 'banane', 'miel'] },
  { id: 'lap', nom: 'Laitue trempée dans le chaud', type: 'accompagnement', minutes: 6, ingredients: ['laitue', 'citron', 'huile', 'sel'] },
  { id: 'paineu', nom: 'Pain perdu sucré', type: 'encas', minutes: 10, ingredients: ['pain', 'oeuf', 'lait', 'sucre'] },
];

// Une saisie libre devient liste d'ingrédients propre.
export function decouperIngredients(texte: string): string[] {
  return decouperListe(texte);
}

export interface Proposition {
  plat: Plat;
  manquants: string[];
}

/** Combien d'ingrédients on accepte de ne pas avoir. */
export const TOLERANCE = 3;

export function platsPossibles(
  ingredients: readonly string[],
  opts?: { tolere?: number },
): Proposition[] {
  const dispo = new Set(ingredients.flatMap((x) => decouperListe(String(x))));
  if (!dispo.size) return [];
  const tolere = Math.max(0, Math.floor(opts?.tolere ?? TOLERANCE));
  const out: Proposition[] = [];
  for (const plat of CARTE_PLATS) {
    const manquants = plat.ingredients.filter((i) => !dispo.has(i));
    const couverts = plat.ingredients.length - manquants.length;
    if (!couverts || manquants.length > tolere) continue;
    out.push({ plat, manquants });
  }
  return out.sort(
    (a, b) =>
      a.manquants.length - b.manquants.length ||
      a.plat.minutes - b.plat.minutes ||
      a.plat.nom.localeCompare(b.plat.nom, 'fr'),
  );
}

// Les trois plats les plus proches dictent la liste de courses.
export function listeCourses(ingredients: readonly string[]): string[] {
  const dispo = new Set(ingredients.flatMap((x) => decouperListe(String(x))));
  const compte = new Map<string, number>();
  for (const p of platsPossibles(ingredients).slice(0, 3)) {
    for (const m of p.manquants) compte.set(m, (compte.get(m) ?? 0) + 1);
  }
  return [...compte.entries()]
    .filter(([mot]) => !dispo.has(mot))
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'fr'))
    .map(([mot]) => mot);
}

// Le filtre de la montre : que ce qui tient dans le temps qu il reste.
export function suggestionsMinutes(minutes: number): Plat[] {
  const plafond = Math.floor(minutes);
  if (!Number.isFinite(plafond) || plafond <= 0) return [];
  return CARTE_PLATS.filter((p) => p.minutes <= plafond).sort((a, b) => a.minutes - b.minutes);
}

export async function ideesParCerveau(
  endpoint: string,
  ingredients: readonly string[],
  fetchImpl: typeof fetch = fetch,
  modele = '',
): Promise<string | null> {
  if (ingredients.length < 2) return null;
  return demanderAuCerveau({
    endpoint,
    modele,
    fetchImpl,
    max: 800,
    consigne:
      'Tu es cuisinier et honnête. En français, en trois idées courtes, propose ce que ces ingrédients ' +
      'permettent de faire, avec le temps de cuisson et une astuce d’assaisonnement. N’invente pas d’ingrédient absent.',
    question: decouperListe(ingredients.join(', ')).join(', '),
  });
}
