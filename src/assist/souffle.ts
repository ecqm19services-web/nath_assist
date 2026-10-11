// Le souffle : la respiration guidée, hors-ligne, minuteur en main. Le 4-7-8
// (Calm, Insight Timer et bien des infirmiers le pratiquent) et le carré des
// box breathers. Ce module ne touche aucune horloge d'interface : on lui donne
// des millisecondes écoulées, il rend la phase et le reste à tenir.

import type { MiniStorage } from './dire';

export interface PhaseSouffle {
  nom: string;
  secondes: number;
}

export interface EtapeSouffle {
  nom: string;
  debut: number;
  fin: number;
}

export const RYTHME_478: PhaseSouffle[] = [
  { nom: 'Inspire', secondes: 4 },
  { nom: 'Retiens', secondes: 7 },
  { nom: 'Expire', secondes: 8 },
];

export const RYTHME_CARRE: PhaseSouffle[] = [
  { nom: 'Inspire', secondes: 4 },
  { nom: 'Retiens', secondes: 4 },
  { nom: 'Expire', secondes: 4 },
  { nom: 'Retiens', secondes: 4 },
];

export function dureeCycle(phases: readonly PhaseSouffle[]): number {
  return phases.reduce((s, p) => s + Math.max(0, Math.floor(p.secondes)), 0);
}

// Le découpage du cycle en fenêtres [debut, fin), en secondes.
export function etapes(phases: readonly PhaseSouffle[]): EtapeSouffle[] {
  const out: EtapeSouffle[] = [];
  let t = 0;
  for (const p of phases) {
    const d = Math.max(0, Math.floor(p.secondes));
    if (!d) continue;
    out.push({ nom: p.nom, debut: t, fin: t + d });
    t += d;
  }
  return out;
}

// Où on en est d'un cycle, l'aiguille tournant en boucle.
export function phaseA(phases: readonly PhaseSouffle[], seconde: number): { nom: string; reste: number } {
  const total = dureeCycle(phases);
  if (!total) return { nom: '', reste: 0 };
  const t = ((Math.floor(seconde) % total) + total) % total;
  for (const e of etapes(phases)) {
    if (t >= e.debut && t < e.fin) return { nom: e.nom, reste: e.fin - t };
  }
  const derniere = etapes(phases)[etapes(phases).length - 1];
  return { nom: derniere.nom, reste: 0 };
}

export interface AvanceeSouffle {
  cycle: number;
  phase: string;
  reste: number;
  fini: boolean;
}

// L'avancement d'une séance : `ms` millisecondes écoulées, `cycles` à tenir.
export function progression(ms: number, phases: readonly PhaseSouffle[], cycles: number): AvanceeSouffle {
  const total = dureeCycle(phases);
  const aTenir = Math.max(1, Math.floor(cycles)) * total * 1000;
  const ecoule = Math.max(0, Math.floor(ms));
  if (!total || ecoule >= aTenir) return { cycle: Math.max(1, Math.floor(cycles)), phase: 'Fini', reste: 0, fini: true };
  const tour = total * 1000;
  const cycle = Math.floor(ecoule / tour) + 1;
  const dansLeTour = Math.floor((ecoule % tour) / 1000);
  const { nom, reste } = phaseA(phases, dansLeTour);
  return { cycle, phase: nom, reste, fini: false };
}

// ——— Le compteur de séances, gardé dans l'appareil. ———
export const CLE_SOUFFLE = 'nath.souffle';

export interface SouffleRegistre {
  sessions: number;
  secondes: number;
}

const VIDE: SouffleRegistre = { sessions: 0, secondes: 0 };

const positif = (v: unknown): number =>
  typeof v === 'number' && Number.isFinite(v) && v > 0 ? Math.floor(v) : 0;

export function lireSouffle(storage: MiniStorage): SouffleRegistre {
  try {
    const brut = storage.getItem(CLE_SOUFFLE);
    if (!brut) return { ...VIDE };
    const o = JSON.parse(brut) as Record<string, unknown>;
    if (!o || typeof o !== 'object') return { ...VIDE };
    return { sessions: positif(o.sessions), secondes: positif(o.secondes) };
  } catch {
    return { ...VIDE };
  }
}

export function ajouterSession(
  storage: MiniStorage,
  opts?: { secondes?: number; now?: number },
): SouffleRegistre {
  const f = lireSouffle(storage);
  const neuve: SouffleRegistre = { sessions: f.sessions + 1, secondes: f.secondes + positif(opts?.secondes) };
  storage.setItem(CLE_SOUFFLE, JSON.stringify(neuve));
  return neuve;
}
