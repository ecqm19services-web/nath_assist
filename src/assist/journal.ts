// Le journal des découvertes : chaque fiche lue, chaque idée née trouve une
// ligne datée dans l'appareil. On peut la retrouver sans réseau, l'effacer, et
// en faire des cartes de révision. Jamais rien ne sort.

import { normaliser } from '../etudes/quiz';
import type { MiniStorage } from './dire';

export const CLE_JOURNAL = 'nath.journal';

/** Le nombre d'entrées gardées : au-delà, les plus anciennes s'effacent. */
export const LIMITE_JOURNAL = 200;

export interface EntreeJournal {
  id: string;
  titre: string;
  texte: string;
  origine: string;
  at: number;
}

const textePropre = (v: unknown): string => (typeof v === 'string' ? v.trim() : '');

const nombreSolide = (v: unknown): number =>
  typeof v === 'number' && Number.isFinite(v) ? Math.floor(v) : 0;

function valider(o: unknown, index: number): EntreeJournal | null {
  if (!o || typeof o !== 'object') return null;
  const e = o as Record<string, unknown>;
  const titre = textePropre(e.titre);
  const texte = textePropre(e.texte);
  if (!titre && !texte) return null;
  return {
    id: typeof e.id === 'string' && e.id ? e.id : `entree-${index}-${nombreSolide(e.at)}`,
    titre: titre || texte.slice(0, 48),
    texte: texte || titre,
    origine: textePropre(e.origine) || 'note',
    at: nombreSolide(e.at),
  };
}

export function lireJournal(storage: MiniStorage): EntreeJournal[] {
  try {
    const brut = storage.getItem(CLE_JOURNAL);
    if (!brut) return [];
    const o = JSON.parse(brut) as unknown;
    if (!Array.isArray(o)) return [];
    return o.map(valider).filter((e): e is EntreeJournal => e !== null);
  } catch {
    return [];
  }
}

function ecrire(storage: MiniStorage, entrees: readonly EntreeJournal[]): void {
  storage.setItem(CLE_JOURNAL, JSON.stringify(entrees.slice(0, LIMITE_JOURNAL)));
}

// Noter une découverte : titre ou texte, l'un des deux suffit. Rien à dire,
// rien n'est écrit (pas de ligne vide qui encrasse le journal).
export function noterEntree(
  storage: MiniStorage,
  e: { titre: string; texte: string; origine?: string },
  opts?: { now?: number; id?: string },
): EntreeJournal | null {
  const titre = textePropre(e.titre);
  const texte = textePropre(e.texte);
  if (!titre && !texte) return null;
  const now = opts?.now ?? Date.now();
  const entree: EntreeJournal = {
    id: opts?.id || `${now}-${Math.random().toString(36).slice(2, 8)}`,
    titre: titre || texte.slice(0, 48),
    texte: texte || titre,
    origine: textePropre(e.origine) || 'note',
    at: now,
  };
  ecrire(storage, [entree, ...lireJournal(storage)]);
  return entree;
}

// Recherche sourde aux accents, dans les titres comme dans les textes.
export function filtrerJournal(
  entrees: readonly EntreeJournal[],
  requete: string,
): EntreeJournal[] {
  const q = normaliser(requete).trim();
  if (!q) return [...entrees];
  return entrees.filter((e) => `${normaliser(e.titre)} ${normaliser(e.texte)}`.includes(q));
}

export function effacerEntree(storage: MiniStorage, id: string): boolean {
  const avant = lireJournal(storage);
  const apres = avant.filter((e) => e.id !== id);
  if (apres.length === avant.length) return false;
  ecrire(storage, apres);
  return true;
}

// Le journal devient cartable : le titre au verso, la note au recto.
export function cartesDepuisJournal(
  entrees: readonly EntreeJournal[],
  max = 8,
): { verso: string; recto: string }[] {
  return entrees
    .filter((e) => e.titre && e.texte)
    .slice(0, max)
    .map((e) => ({ verso: e.titre, recto: e.texte }));
}
