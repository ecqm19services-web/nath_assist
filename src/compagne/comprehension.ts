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

// Les trois langues que la Compagne promet de tenir : le français, l'anglais et
// le wolof — celles du marché visé. Une langue hors de ce jeu n'est pas
// devinée : on garde la consigne générale plutôt que d'affirmer une langue.
// Des mots outils, pas des sujets : « ocean » et « ocean » se disent presque
// pareil ici et là, et un mot partagé ne doit jamais faire pencher la balance.
type LangueCertaine = 'en' | 'fr' | 'wo';

const MARQUEURS: Record<LangueCertaine, ReadonlySet<string>> = {
  en: new Set([
    'the', 'and', 'you', 'your', 'yours', 'this', 'that', 'these', 'those', 'there', 'here', 'what', 'when', 'where',
    'why', 'how', 'who', 'which', 'tell', 'say', 'said', 'please', 'hello', 'hi', 'thanks', 'thank', 'cloud', 'are',
    'was', 'were', 'have', 'has', 'had', 'can', 'could', 'would', 'should', 'will', 'may', 'might', 'must', 'need',
    'want', 'like', 'know', 'think', 'with', 'without', 'about', 'between', 'because', 'since', 'until', 'while',
    'them', 'they', 'their', 'him', 'his', 'her', 'ours', 'mine', 'very', 'really', 'just', 'only', 'thing', 'things',
    'one', 'two', 'three', 'make', 'makes', 'made', 'get', 'got', 'give', 'gave', 'does', 'doing', 'not', 'good',
    'bad', 'big', 'small', 'day', 'night', 'time', 'world', 'people', 'water', 'name', 'is', 'am', 'me', 'it', 'we',
    'she',
  ]),
  fr: new Set([
    'le', 'les', 'un', 'une', 'des', 'du', 'au', 'aux', 'et', 'est', 'sont', 'ai', 'avait', 'etais', 'avais',
    'je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'mon', 'ma', 'mes', 'ton', 'ta', 'tes', 'notre', 'votre', 'moi',
    'toi', 'soi', 'quoi', 'pourquoi', 'comment', 'quand', 'puisque', 'malgre', 'parce', 'donc', 'puis', 'bonjour',
    'salut', 'rebonjour', 'merci', 'dis', 'dire', 'parle', 'peux', 'voudrais', 'aimerais', 'tres', 'trop', 'bien',
    'mal', 'tout', 'tous', 'toutes', 'rien', 'quelque', 'chose', 'personne', 'monde', 'jour', 'nuit', 'temps',
    'aussi', 'toujours', 'jamais', 'maintenant', 'hier', 'demain', 'avec', 'pour', 'dans', 'sur', 'chez', 'sans',
    'entre', 'avant', 'apres', 'mais', 'ou', 'ni', 'que', 'qui', 'dont', 'ce', 'cet', 'cette', 'appelle', 'nuage',
    'nuages', 'clarte', 'douceur', 'sais', 'ete', 'vais', 'vas', 'venez', 'viens',
  ]),
  wo: new Set([
    'nga', 'na', 'nu', 'lan', 'li', 'lu', 'bi', 'bu', 'ci', 'su', 'ak', 'da', 'def', 'xam', 'xool', 'wole', 'rekk',
    'mooy', 'melni', 'gina', 'baomay', 'salaam', 'jerejeff', 'mere', 'asman', 'bop', 'xol', 'nit', 'nekk', 'yeneen',
    'kadi', 'dina', 'damay', 'naka', 'dego', 'japp', 'yagu', 'wut', 'jot', 'ne', 'te', 'tegg', 'jem', 'dugal', 'fof',
    'goot', 'garab', 'gor', 'dije', 'kanam', 'ginnaaw', 'bari', 'tuuti', 'baax', 'yall',
  ]),
};

const NOMS: Record<LangueCertaine, [string, string]> = {
  en: ['anglais', 'English'],
  fr: ['français', 'French'],
  wo: ['wolof', 'Wolof'],
};

// Dans quel langage écrit cette phrase ? Réponse sûre ou null : jamais une
// langue affirmée à moitié. Le modèle n'a pas à deviner la sienne.
export function detecterLangue(texte: string): LangueCertaine | null {
  const mots = texte
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/['`\u2019\u2018]/g, ' ')
    .split(/[^a-z]+/)
    .filter((m) => m.length >= 2);
  if (!mots.length) return null;
  const scores: Record<LangueCertaine, number> = { en: 0, fr: 0, wo: 0 };
  for (const langue of Object.keys(MARQUEURS) as LangueCertaine[]) {
    const set = MARQUEURS[langue];
    for (const m of mots) if (set.has(m)) scores[langue]++;
  }
  const [premier, second] = (Object.keys(scores) as LangueCertaine[]).sort((a, b) => scores[b] - scores[a]);
  if (scores[premier] < 2) return null;
  // Deux langues qui se touchent = une phrase mêlée : on ne tranche pas.
  if (scores[second] * 2 >= scores[premier]) return null;
  return premier;
}

// Une consigne de langue lue seulement en tête de conversation ne tient pas sur
// la durée (prouvé avec le raisonneur) : on la rappelle au pied du dernier
// message. Le tableau d'origine reste intact — l'historique garde les mots vrais.
export function rappelLangue<T extends { role: string; content: string }>(messages: T[]): T[] {
  if (!messages.length) return messages;
  const i = messages.length - 1;
  if (messages[i].role !== 'user') return messages;
  const langue = detecterLangue(messages[i].content);
  // « Réponds dans la langue de ce message » s'est mesurée en échec : six fois
  // sur six, une question anglaise partait en français. Nommer la langue tient,
  // trois sur trois. Les deux noms — français et anglais — parce que la consigne
  // est comprise dans l'une ou l'autre, jamais dans les deux à la fois.
  const rappel = langue
    ? `(Réponds en ${NOMS[langue][0]}, la langue de ce message. Answer in ${NOMS[langue][1]}. Puis termine par la ligne @@.)`
    : '(Réponds dans la langue de ce message, puis termine par la ligne @@.)';
  return messages.map((m, k) => (k === i ? { ...m, content: `${m.content}\n\n${rappel}` } : m));
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
