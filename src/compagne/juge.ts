// Le juge d'ailleurs : la famille des modèles de décision (Jev de TypeSafe,
// Clef de Cloudflare — même API : un état, des questions typées, des
// probabilités) peut dire si l'instant est bien choisi pour prendre la parole.
// Ce n'est pas un chat : ça ne parle pas, ça tranche. Ici, une seule question,
// « parler » (noul), et une ligne : sous 0.45 de probabilité, la compagne
// laisse passer son tour. Sans adresse réglée, hors-ligne, ou réponse
// invalide → null : le juge ne remplace jamais la vie intérieure, il l'éclaire.
import { decider } from './cerveauNet';

export interface JugeCtx {
  emotion: string;
  breath: number; // 0..1
  bpm: number | null;
  timeOfDay: number; // 0..1 (0 = minuit)
}

// Sobre : l'essentiel du ressenti, en une ligne. Ni prénom, ni phrase —
// le juge a besoin du climat, pas de la vie privée.
export function etatPourJuger(c: JugeCtx): string {
  const heure = Math.floor(c.timeOfDay * 24);
  const coeur = c.bpm != null ? `coeur ${c.bpm} bpm` : 'coeur discret';
  return `humeur ${c.emotion}, souffle ${Math.round(c.breath * 100)}%, ${coeur}, ${heure}h`;
}

const QUESTIONS = {
  parler: {
    type: 'noul',
    instructions: "Est-ce un bon moment pour prendre la parole toute seule, sans interrompre ?",
  },
} as const;

const SEUIL_PAROLE = 0.45;

// La probabilité de « parler » tranche, rien d'autre. Réponse absente ou
// hors bornes → null : on n'invente jamais une décision.
export function trancher(reponses: Record<string, unknown> | null, seuil = SEUIL_PAROLE): boolean | null {
  const r = reponses?.parler as { noul?: unknown } | undefined;
  const p = r?.noul;
  if (typeof p !== 'number' || !Number.isFinite(p) || p < 0 || p > 1) return null;
  return p >= seuil;
}

// Interroger le juge sur place : une requête, une probabilité, un avis.
export async function jugerSurPlace(
  endpoint: string,
  ctx: JugeCtx,
  fetchImpl: typeof fetch = fetch,
): Promise<boolean | null> {
  const reponses = await decider(endpoint, etatPourJuger(ctx), QUESTIONS, fetchImpl);
  return trancher(reponses);
}
