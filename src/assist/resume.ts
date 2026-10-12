// Le résumé express : cinq puces tirées d'un long texte, sans réseau. La
// méthode est vieille comme l'école : les premières phrases portent l'idée,
// les trop courtes ne sont que du passage. Le grand cerveau peut prendre le
// relais quand il est réglé — le hors-ligne, lui, répond toujours.

import { normaliser } from '../etudes/quiz';
import { demanderAuCerveau } from './dire';

const PUCE_MIN = 12;
const PUCE_MAX = 180;

const jolir = (s: string): string => {
  const propre = s.replace(/\s+/g, ' ').trim();
  const borne = propre.length > PUCE_MAX ? `${propre.slice(0, PUCE_MAX).replace(/\s\S*$/, '')}…` : propre;
  if (!borne) return '';
  const final = /[.!?…]$/.test(borne) ? borne : `${borne}.`;
  return final.charAt(0).toUpperCase() + final.slice(1);
};

// Découpage en phrases : ni les abréviations ni les virgules ne percent.
function phrases(texte: string): string[] {
  return texte
    .split(/(?<=[.!?;])\s+|\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length >= PUCE_MIN && p.split(' ').length >= 3);
}

export function pucesDepuisTexte(texte: string, max = 5): string[] {
  const liste = phrases(texte);
  if (!liste.length) return [];
  const plafond = Math.max(1, Math.floor(max));
  const vus = new Set<string>();
  const gardees: string[] = [];
  // Les phrases du début portent l'idée : elles sont prises d'abord, dans l'ordre.
  for (let i = 0; i < liste.length && gardees.length < plafond; i++) {
    const puce = jolir(liste[i]);
    const cle = normaliser(puce);
    if (!puce || vus.has(cle)) continue;
    vus.add(cle);
    gardees.push(puce);
  }
  return gardees;
}

// Une puce devient carte : les premiers mots au verso, la phrase au recto.
export function pucesVersFiches(puces: readonly string[]): { verso: string; recto: string }[] {
  return puces
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => {
      const mots = p.split(' ').slice(0, 6).join(' ');
      const verso = mots.length > 58 ? `${mots.slice(0, 58).replace(/\s\S*$/, '')}…` : mots;
      return { verso, recto: p };
    });
}

export async function resumerParCerveau(
  endpoint: string,
  texte: string,
  fetchImpl: typeof fetch = fetch,
  modele = '',
): Promise<string | null> {
  const t = texte.trim();
  // Trop court pour être un texte : rien à résumer, rien à envoyer.
  if (t.length < 40) return null;
  return demanderAuCerveau({
    endpoint,
    modele,
    fetchImpl,
    max: 900,
    consigne:
      'Tu résumes en français, en 4 ou 5 puces courtes commençant par « - », ' +
      'uniquement ce que le texte affirme. Pas d’introduction, pas de conclusion, pas d’inventaire de ce que tu as fait.',
    question: t.slice(0, 6000),
  });
}
