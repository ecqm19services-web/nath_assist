// La flamme : la série des jours où l on est venu, l'expérience accumulée, le
// niveau qui monte. Duolingo a compris qu une petite flamme fidélise plus qu une
// longue liste — ici elle reste sur l'appareil, sans compte ni serveur.
// Tout est pur : une date en millisecondes suffit.

import type { MiniStorage } from './dire';

export const CLE_FLAMME = 'nath.flamme';

/** Le palier d'expérience : cent points, un nouveau titre. */
export const PAS_NIVEAU = 100;

/** Le tout premier titre, celui de celui qui vient d'ouvrir l'app. */
export const etalon = 'Curieux';

const TITRES = [etalon, 'Défricheur', 'Apprenant', 'Explorateur', 'Artisan', 'Savant', 'Passeur', 'Esprit libre'];

export interface Flamme {
  streak: number;
  meilleur: number;
  xp: number;
  dernier: string;
}

const VIDE: Flamme = { streak: 0, meilleur: 0, xp: 0, dernier: '' };

const entierSolide = (v: unknown): number =>
  typeof v === 'number' && Number.isFinite(v) && v > 0 ? Math.floor(v) : 0;

// « 2026-03-07 » dans le fuseau de l'appareil — pas celui de Greenwich.
export function jourLocal(now: number = Date.now()): string {
  const d = new Date(now);
  const m = `${d.getMonth() + 1}`.padStart(2, '0');
  const j = `${d.getDate()}`.padStart(2, '0');
  return `${d.getFullYear()}-${m}-${j}`;
}

const rang = (jour: string): number => {
  const [a, m, j] = jour.split('-').map(Number);
  if (!a || !m || !j) return NaN;
  return Math.floor(Date.UTC(a, m - 1, j) / 86_400_000);
};

// Écart en jours calendaires, signé : b moins a.
export function gapDeJours(a: string, b: string): number {
  const ra = rang(a);
  const rb = rang(b);
  if (Number.isNaN(ra) || Number.isNaN(rb)) return NaN;
  return rb - ra;
}

export function lireFlamme(storage: MiniStorage): Flamme {
  try {
    const brut = storage.getItem(CLE_FLAMME);
    if (!brut) return { ...VIDE };
    const o = JSON.parse(brut) as Record<string, unknown>;
    if (!o || typeof o !== 'object') return { ...VIDE };
    return {
      streak: entierSolide(o.streak),
      meilleur: entierSolide(o.meilleur),
      xp: entierSolide(o.xp),
      dernier: typeof o.dernier === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(o.dernier) ? o.dernier : '',
    };
  } catch {
    return { ...VIDE };
  }
}

function ecrire(storage: MiniStorage, f: Flamme): void {
  storage.setItem(CLE_FLAMME, JSON.stringify(f));
}

// Un passage du jour : la flamme grandit si les jours se suivent, sinon elle
// repart à un — mais le record, lui, ne s'efface jamais.
export function enregistrerPresence(storage: MiniStorage, now: number = Date.now()): Flamme {
  const f = lireFlamme(storage);
  const aujourdhui = jourLocal(now);
  if (f.dernier === aujourdhui) return f;
  const suite = f.dernier && gapDeJours(f.dernier, aujourdhui) === 1 ? f.streak + 1 : 1;
  const neuve: Flamme = {
    streak: suite,
    meilleur: Math.max(f.meilleur, suite),
    xp: f.xp,
    dernier: aujourdhui,
  };
  ecrire(storage, neuve);
  return neuve;
}

export function aFaitAujourdhui(f: Flamme, now: number = Date.now()): boolean {
  return f.dernier !== '' && f.dernier === jourLocal(now);
}

// Gagner de l'expérience, c'est aussi être venu aujourd'hui.
export function ajouterXp(storage: MiniStorage, montant: number, now: number = Date.now()): Flamme {
  const gagne = entierSolide(montant);
  const f = enregistrerPresence(storage, now);
  const neuve: Flamme = { ...f, xp: f.xp + gagne };
  ecrire(storage, neuve);
  return neuve;
}

export function niveauDe(xp: number): number {
  return Math.floor(entierSolide(xp) / PAS_NIVEAU) + 1;
}

export function titreDuNiveau(niveau: number): string {
  const n = Math.max(1, Math.floor(niveau) || 1);
  return TITRES[Math.min(n - 1, TITRES.length - 1)];
}

// Ce qui manque pour le niveau suivant, en fraction (pour la barre de l'interface).
export function partDuNiveau(xp: number): number {
  const solide = entierSolide(xp);
  return (solide % PAS_NIVEAU) / PAS_NIVEAU;
}
