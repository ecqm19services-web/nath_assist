// La logique dure de la Compagne : arithmétique, heure, date.
// Fonctions pures, testables, sans evaluation de chaine (parseur a liste blanche, securite). C'est le socle « comprend
// ce qu'on dit » qui reste vrai même quand le grand cerveau Qwen n'a pas pu atterrir.

const NOMBRES: Record<string, number> = {
  zero: 0, un: 1, une: 1, deux: 2, trois: 3, quatre: 4, cinq: 5, six: 6,
  sept: 7, huit: 8, neuf: 9, dix: 10, onze: 11, douze: 12, treize: 13,
  quatorze: 14, quinze: 15, seize: 16, 'dix-sept': 17, 'dix-huit': 18,
  'dix-neuf': 19, vingt: 20,
};

const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
  'août', 'septembre', 'octobre', 'novembre', 'décembre'];

const norm = (s: string): string =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const NB = String.raw`(\d+|dix-sept|dix-huit|dix-neuf|zero|une|un|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|treize|quatorze|quinze|seize|vingt)`;
const OP = String.raw`(plus|moins|fois|multiplie par|x|\*|\+|divise par|/)`;
const CALC = new RegExp(`${NB}\\s*${OP}\\s*${NB}`, 'i');

function toNum(tok: string): number | null {
  if (/^\d+$/.test(tok)) return parseInt(tok, 10);
  const n = NOMBRES[tok];
  return typeof n === 'number' ? n : null;
}

function format(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ',');
}

// « combien font 3 plus 4 », « douze fois deux », « 20 divisé par 4 »… → résultat, sinon null.
export function calculer(question: string): string | null {
  const q = norm(question);
  const m = q.match(CALC);
  if (!m) return null;
  const a = toNum(m[1]);
  const b = toNum(m[3]);
  if (a == null || b == null) return null;
  const op = m[2];
  let r: number | null = null;
  if (op === 'plus' || op === '+') r = a + b;
  else if (op === 'moins' || op === '-') r = a - b;
  else if (op === 'fois' || op === 'x' || op === '*' || op === 'multiplie par') r = a * b;
  else if (op === 'divise par' || op === '/') r = b === 0 ? null : a / b;
  return r == null ? null : format(r);
}

export function decrireHeure(d: Date): string {
  const h = d.getHours();
  const min = d.getMinutes();
  return min === 0 ? `Il est ${h} heures.` : `Il est ${h} h ${String(min).padStart(2, '0')}.`;
}

export function decrireDate(d: Date): string {
  return `Nous sommes ${JOURS[d.getDay()]} ${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}.`;
}

export function estUneQuestionHeure(q: string): boolean {
  const n = norm(q);
  return /quelle heure|quelle est l heure|l heure est il|quil heure/.test(n);
}

export function estUneQuestionDate(q: string): boolean {
  const n = norm(q);
  return /quel jour|on est quel jour|quelle date|nous sommes quel/.test(n);
}
