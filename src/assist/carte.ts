// La carte des savoirs : au lieu d'une liste sans fond, un archipel — une île
// par domaine, sa taille réelle, et de quoi retomber sur les fiches. Pur, sans
// réseau : il ne fait que regarder l'étagère déjà dans l'appareil.

export interface NoticeLike {
  id: string;
  domaine?: string;
}

export interface Ile {
  nom: string;
  nombre: number;
  /** Pourcentage de l'archipel, arrondi à une décimale. */
  part: number;
  ids: string[];
}

/** Le nom donné aux notices sans domaine. */
export const SANS_DRAPEAU = 'Sans drapeau';

export function archipel<T extends NoticeLike>(notices: readonly T[]): Ile[] {
  const cases = new Map<string, string[]>();
  for (const n of notices) {
    if (!n || typeof n.id !== 'string') continue;
    const cle = (n.domaine ?? '').trim() || SANS_DRAPEAU;
    const pile = cases.get(cle);
    if (pile) pile.push(n.id);
    else cases.set(cle, [n.id]);
  }
  const total = [...cases.values()].reduce((s, ids) => s + ids.length, 0);
  if (!total) return [];
  const iles: Ile[] = [...cases.entries()].map(([nom, ids]) => ({
    nom,
    nombre: ids.length,
    part: Math.round((ids.length / total) * 1000) / 10,
    ids,
  }));
  return iles.sort((a, b) => b.nombre - a.nombre || a.nom.localeCompare(b.nom, 'fr'));
}

export function ileLaPlusPeuplee(iles: readonly Ile[]): Ile | null {
  return iles.length ? iles[0] : null;
}

export function ileParNom(iles: readonly Ile[], nom: string): Ile | null {
  return iles.find((i) => i.nom === nom) ?? null;
}

// Le rayon visuel d'une île : la surface parle avant le chiffre.
export function tailleDuneIle(ile: Ile, plusGrand: number): number {
  const base = Math.max(1, plusGrand);
  return Math.round(40 + (Math.min(ile.nombre, base) / base) * 60);
}
