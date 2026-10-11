// Le tuteur : la méthode de l'exercice, même quand le réseau dort. Les étapes
// viennent du cours de méthode classique — lire, noter, choisir, faire, vérifier
// — et la question de l'élève y est remise telle quelle. Le grand cerveau, quand
// il est réglé, prend le relais pour le calcul précis.

import { demanderAuCerveau } from './dire';

export interface EnonceDecoupe {
  donnees: string[];
  questions: string[];
}

// Ce qui est donné d'un côté, ce qui est cherché de l'autre.
export function decouperEnonce(texte: string): EnonceDecoupe {
  const lignes = texte
    .split(/\n+/)
    .map((l) => l.trim())
    .filter(Boolean);
  const questions: string[] = [];
  const donnees: string[] = [];
  for (const l of lignes) {
    (/[?？]/.test(l) ? questions : donnees).push(l);
  }
  return { donnees, questions };
}

// Le plan hors-ligne : six gestes que l'on peut faire stylo en main.
export function etapesHorsLigne(question: string): string[] {
  const q = question.trim();
  const cible = q ? ` « ${q} »` : '';
  return [
    `Relis la question${cible} une première fois, puis souligne exactement ce qui est demandé.`,
    'Écris à part toutes les données utiles, avec leurs unités : ce que l’énoncé donne, rien de plus.',
    'Choisis la règle, la formule ou le principe qui relie ces données à ce que tu cherches.',
    'Fais le calcul une ligne par opération, sans rien sauter : une ligne, un signe, un résultat.',
    'Vérifie : l’unité attendue est-elle là, l’ordre de grandeur est-il raisonnable, le sens de la réponse tient-il ?',
    'Rédige une réponse complète en une phrase, et garde la trace pour la refaire dans trois jours.',
  ];
}

export async function expliquerParCerveau(
  endpoint: string,
  question: string,
  fetchImpl: typeof fetch = fetch,
  modele = '',
): Promise<string | null> {
  const t = question.trim();
  if (!t) return null;
  return demanderAuCerveau({
    endpoint,
    modele,
    fetchImpl,
    max: 1200,
    consigne:
      'Tu es un professeur patient. Explique la résolution en français, en six étapes courtes numérotées, ' +
      "une ligne par opération, puis termine par une phrase de vérification. N'invente aucune donnée qui manque.",
    question: t.slice(0, 2000),
  });
}
