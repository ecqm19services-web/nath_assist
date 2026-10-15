// L'examen blanc, hors-ligne : composer un sujet stable (même graine = même
// test, pour se comparer), le noter, et donner un repère humain sans jamais
// blesser. Rien ne sort de l'appareil, rien ne compte que ce que l'élève sait.

import { type Fiche } from './fiches';

export type { Fiche };

export interface ReponseExamen {
  id: string;
  juste: boolean;
}

// Un hachage FNV-1a : petit, déterministe, suffisant pour mélanger sans clé.
function hachage(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Composer : on trie par une empreinte (graine|id), on prend les N premières.
// La graine rend le sujet reproductible ; changer la graine change le sujet.
export function composerExamen(fiches: readonly Fiche[], nombre: number, graine: string): Fiche[] {
  const cibles = Math.max(0, Math.min(nombre, fiches.length));
  return fiches
    .map((f) => ({ f, k: hachage(`${graine}|${f.id}`) }))
    .sort((a, b) => a.k - b.k)
    .slice(0, cibles)
    .map((x) => x.f);
}

export function resultatExamen(reponses: readonly ReponseExamen[]): { corrects: number; total: number; score: number } {
  const total = reponses.length;
  const corrects = reponses.filter((r) => r.juste).length;
  return { corrects, total, score: total ? corrects / total : 0 };
}

// La durée conseillée se dit en secondes ; jamais de nombre absurde.
export function dureeConseillee(total: number, parCarte = 30): number {
  return Math.max(0, total) * Math.max(0, parCarte);
}

// Encadrer, pas juger la personne. Aucun mot de fin, aucun verdict sur elle.
export function apprecier(score: number): string {
  if (score >= 0.9) return 'Excellent, tu tiens ton examen.';
  if (score >= 0.7) return 'Bien joué, tu y es presque.';
  if (score >= 0.5) return 'C’est en bonne voie, continue sur ta lancée.';
  return 'On reprend calmement : les cartes les plus solides reviennent plus tôt.';
}
