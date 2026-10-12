// La boucle de compréhension : le grand cerveau comprend déjà n'importe quelle
// langue, mais il ne rendait que du texte. Le prénom dit en wolof restait donc
// aux orties et l'humeur ne remontait jamais au ciel. Ici, la réponse du modèle
// porte une queue lisible par la machine ; on la retire de ce qu'on montre et on
// n'en retient QUE ce qui est plausible. Une queue absente, fausse ou inventée
// ne remplace jamais le travail des règles locales — elle le complète.

import type { HumeurReponse } from './engine';

export const HUMEURS = ['joie', 'tristesse', 'tension', 'calme', 'neutre'] as const;
export type HumeurLue = (typeof HUMEURS)[number];

export interface Lecture {
  texte: string;
  prenom: string | null;
  langue: string | null;
  humeur: HumeurLue | null;
}

// Ce qu'on souffle au modèle à la fin de la consigne. Écrit avec les apostrophes
// typographiques : une élision fautive remonterait jusqu'à l'écran.
export function consigneLecture(): string {
  return [
    'Termine chaque réponse par une ligne pour la machine, seule, sans rien changer au reste :',
    '@@|prenom=…|langue=…|humeur=…',
    'prenom : le prénom que la personne vient de te donner, ou non si elle ne l’a pas dit.',
    'langue : les deux lettres de la langue où elle t’écrit (fr, en, wo, ha, sw…), ou non.',
    `humeur : un seul mot parmi ${HUMEURS.join(', ')}.`,
    'Cette ligne est invisible pour la personne : ne la commente jamais, n’en mets qu’une.',
  ].join(' ');
}

// Les codes que l'on accepte : deux ou trois lettres d'une langue qui existe.
// « xxx » n'est pas une langue, même bien formaté.
const LANGUES = new Set([
  'fr', 'en', 'es', 'pt', 'de', 'it', 'nl', 'pl', 'ru', 'tr', 'ar', 'he', 'fa', 'ur', 'hi', 'bn', 'ta', 'te', 'ml', 'kn',
  'zh', 'ja', 'ko', 'vi', 'th', 'id', 'ms', 'tl', 'sw', 'am', 'so', 'ha', 'yo', 'ig', 'wo', 'dy', 'ff', 'bf', 'mn',
  'zu', 'xh', 'af', 'rw', 'lg', 'sn', 'ny', 'tn', 'st', 'ts', 've', 'ss', 'nb', 'sv', 'da', 'fi', 'et', 'lv', 'lt',
  'uk', 'be', 'cs', 'sk', 'sl', 'hr', 'sr', 'bs', 'bg', 'mk', 'sq', 'hy', 'ka', 'az', 'kk', 'ky', 'uz', 'tk', 'tg',
  'ne', 'si', 'my', 'km', 'lo', 'qu', 'gn', 'ay', 'ht', 'mg', 'pcm', 'tw', 'ee', 'ln', 'kg', 'rn', 'lb', 'oc', 'ca',
  'gl', 'eu', 'is', 'ga', 'cy', 'mt', 'eo',
]);

const VIDES = new Set(['', 'non', 'oui', 'null', 'none', 'aucun', 'inconnu', 'vide', '?', '-', 'x']);

// Un champ d'une queue : « prenom=Awa » → 'Awa'. Vide ou absent → null.
function champ(queue: string, nom: string): string | null {
  const m = queue.match(new RegExp(`${nom}\\s*[=:]\\s*([^|\\r\\n]*)`, 'i'));
  if (!m) return null;
  const v = m[1].trim().replace(/[.,;:)\]"']+$/, '').replace(/^["'\(]+/, '');
  return v && !VIDES.has(v.toLowerCase()) ? v : null;
}

function prenomValide(v: string | null): string | null {
  if (!v) return null;
  const mot = v.trim().replace(/\s+/g, ' ');
  if (mot.length < 2 || mot.length > 24) return null;
  if (mot.split(' ').length > 2) return null;
  if (!/^[\p{L}][\p{L}\p{M}'’\- ]*$/u.test(mot)) return null;
  return mot.charAt(0).toUpperCase() + mot.slice(1);
}

function langueValide(v: string | null): string | null {
  if (!v) return null;
  const c = v.toLowerCase();
  return /^[a-z]{2,3}$/.test(c) && LANGUES.has(c) ? c : null;
}

function humeurValide(v: string | null): HumeurLue | null {
  if (!v) return null;
  const c = v.toLowerCase().trim();
  return (HUMEURS as readonly string[]).includes(c) ? (c as HumeurLue) : null;
}

// Une consigne de langue lue seulement en tête de conversation ne tient pas sur
// la durée (prouvé avec le raisonneur) : on la rappelle au pied du dernier
// message. Le tableau d'origine reste intact — l'historique garde les mots vrais.
export function rappelLangue<T extends { role: string; content: string }>(messages: T[]): T[] {
  if (!messages.length) return messages;
  const i = messages.length - 1;
  if (messages[i].role !== 'user') return messages;
  return messages.map((m, k) =>
    (k === i ? { ...m, content: `${m.content}\n\n(Réponds dans la langue de ce message, puis termine par la ligne @@.)` } : m));
}

// L'humeur devinée dans le texte ne fait pas mentir le nuage — le ciel reste aux
// capteurs, sinon il afficherait un corps qu'il ne sent pas. Elle règle seulement
// la façon de le dire.
export function humeurVoix(lue: HumeurLue | null): HumeurReponse {
  if (lue === 'joie') return 'lumineuse';
  if (lue === 'tristesse') return 'douce';
  if (lue === 'tension') return 'stabilisee';
  return 'posee';
}

// Découpe la réponse du modèle : ce qu'on affiche, et ce qu'on en retire.
export function separerLecture(brut: string): Lecture {
  const queues = [...brut.matchAll(/@@[^\r\n]*/g)];
  const queue = queues.length ? queues[queues.length - 1][0] : '';
  const texte = brut
    .replace(/@@[^\r\n]*/g, '')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\s+,/g, ',')
    .replace(/[ \t]+$/gm, '')
    .trim();
  return {
    texte,
    prenom: prenomValide(champ(queue, 'prenom') ?? champ(queue, 'nom') ?? champ(queue, 'name')),
    langue: langueValide(champ(queue, 'langue') ?? champ(queue, 'lang')),
    humeur: humeurValide(champ(queue, 'humeur') ?? champ(queue, 'mood')),
  };
}
