// Fabric de quiz et juge de récitation — tout reste dans l'appareil.
// Les tirages sont reproductibles (graine = paquet + jour) : le quiz du jour
// est le même si on le rouvre, mais change demain. La récitation est jugée
// sur les mots-clés retrouvés, sans accents ni ponctuation, dans l'ordre ou non.

import { JOUR, type Paquet } from './fiches';

export const SEUIL_RECITATION = 0.7;

// Minuscules, sans accents, sans ponctuation, espaces propres.
export function normaliser(t: string): string {
  return t
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

// Proportion des mots attendus retrouvés dans ce qui a été dit (0 … 1).
export function scoreRecitation(dit: string, attendu: string): number {
  const a = normaliser(attendu) ? normaliser(attendu).split(' ') : [];
  const d = normaliser(dit) ? normaliser(dit).split(' ') : [];
  if (a.length === 0) return d.length === 0 ? 1 : 0;
  const reste = [...d];
  let retrouve = 0;
  for (const mot of a) {
    const i = reste.indexOf(mot);
    if (i >= 0) {
      retrouve++;
      reste.splice(i, 1);
    }
  }
  return retrouve / a.length;
}

// Petit générateur pseudo-aléatoire déterministe (mulberry32).
export function rngSeed(seed: number): () => number {
  let x = seed >>> 0;
  return () => {
    x = (x + 0x6d2b79f5) >>> 0;
    let t = x;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash(s: string): number {
  let x = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    x ^= s.charCodeAt(i);
    x = Math.imul(x, 0x01000193) >>> 0;
  }
  return x >>> 0;
}

export function melanger<T>(liste: readonly T[], rnd: () => number): T[] {
  const r = [...liste];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

export interface Question {
  ficheId: string;
  enonce: string;
  attendue: string;
  choix: string[];
  bonne: number;
}

// Il faut au moins deux cartes pour proposer un leurre : sinon, pas de quiz.
export function genererQuiz(paquet: Paquet, nb: number, now = Date.now()): Question[] {
  if (paquet.fiches.length < 2) return [];
  const jour = Math.floor(now / JOUR);
  const rectos = [...new Set(paquet.fiches.map((f) => f.recto))];
  const tirage = melanger(paquet.fiches, rngSeed(hash(`${paquet.id}:${jour}`)))
    .slice(0, Math.max(0, nb));
  const questions: Question[] = [];
  for (const f of tirage) {
    const leurrants = melanger(
      rectos.filter((r) => r !== f.recto),
      rngSeed(hash(`${f.id}:${jour}`)),
    ).slice(0, 3);
    const choix = melanger([f.recto, ...leurrants], rngSeed(hash(`c:${f.id}:${jour}`)));
    questions.push({
      ficheId: f.id,
      enonce: f.verso,
      attendue: f.recto,
      choix,
      bonne: choix.indexOf(f.recto),
    });
  }
  return questions;
}

export interface Resultat {
  score: number;
  total: number;
  pourcentage: number;
  details: { ficheId: string; ok: boolean }[];
}

export function evaluerQuiz(questions: Question[], reponses: number[]): Resultat {
  const details = questions.map((q, i) => ({ ficheId: q.ficheId, ok: reponses[i] === q.bonne }));
  const score = details.filter((d) => d.ok).length;
  const total = questions.length;
  return { score, total, pourcentage: total === 0 ? 0 : (100 * score) / total, details };
}
