// La logique dure de la Compagne : arithmétique, heure, date.
// Fonctions pures, testables, sans evaluation de chaine (parseur a liste blanche, securite). C'est le socle « comprend
// ce qu'on dit » qui reste vrai même quand le grand cerveau Qwen n'a pas pu atterrir.

const NOMBRES: Record<string, number> = {
  zero: 0, un: 1, une: 1, deux: 2, trois: 3, quatre: 4, cinq: 5, six: 6,
  sept: 7, huit: 8, neuf: 9, dix: 10, onze: 11, douze: 12, treize: 13,
  quatorze: 14, quinze: 15, seize: 16, 'dix-sept': 17, 'dix-huit': 18,
  'dix-neuf': 19, vingt: 20, cent: 100, mille: 1000,
};

const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
  'août', 'septembre', 'octobre', 'novembre', 'décembre'];

const norm = (s: string): string =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

type Op = 'plus' | 'moins' | 'fois' | 'divise';
type Tok = { t: 'nb'; v: number } | { t: 'op'; v: Op } | { t: 'ouv' } | { t: 'fer' };

const MOTS_OP: Record<string, Op> = {
  plus: 'plus', additionne: 'plus', moins: 'moins', retire: 'moins',
  fois: 'fois', multiplie: 'fois', x: 'fois', divise: 'divise',
};

// Le texte → une suite de jetons : nombres (chiffres ou lettres), opérateurs, parenthèses.
// Tout mot hors vocabulaire coupe la chaîne : la Compagne ne devine jamais un calcul.
const TOKEN_RE = /\d+(?:[.,]\d+)?|dix-(?:sept|huit|neuf)|[a-z]+|[()+*/-]/g;

function tokeniser(question: string): Tok[][] {
  const s = norm(question)
    .replace(/divise par/g, ' divise ')
    .replace(/multiplie par/g, ' fois ');
  const runs: Tok[][] = [];
  let courant: Tok[] = [];
  for (const raw of s.match(TOKEN_RE) ?? []) {
    let tok: Tok | null = null;
    if (/^\d+(?:[.,]\d+)?$/.test(raw)) tok = { t: 'nb', v: parseFloat(raw.replace(',', '.')) };
    else if (Object.hasOwn(NOMBRES, raw)) tok = { t: 'nb', v: NOMBRES[raw] };
    else if (raw === 'plus' || raw === '+') tok = { t: 'op', v: MOTS_OP[raw] ?? 'plus' };
    else if (raw === 'moins' || raw === '-') tok = { t: 'op', v: 'moins' };
    else if (raw === 'fois' || raw === 'multiplie' || raw === 'x' || raw === '*') tok = { t: 'op', v: 'fois' };
    else if (raw === 'divise' || raw === '/') tok = { t: 'op', v: 'divise' };
    else if (MOTS_OP[raw]) tok = { t: 'op', v: MOTS_OP[raw] }; // additionne, retire…
    else if (raw === '(') tok = { t: 'ouv' };
    else if (raw === ')') tok = { t: 'fer' };
    if (tok) {
      courant.push(tok);
    } else if (courant.length) {
      runs.push(courant);
      courant = [];
    }
  }
  if (courant.length) runs.push(courant);
  return runs;
}

// Descente récursive : expr = term (+|- term)* ; term = facteur (×|÷ facteur)* ;
// facteur = nombre | ( expr ). Précédences réelles, parenthèses réelles.
// Un état partagé note l'échec (division par zéro, parenthèse ouverte) et compte les
// opérations vues — zéro opération n'est jamais un calcul.
interface Etat { i: number; ops: number; echoue: boolean }

function parseFacteur(tk: Tok[], e: Etat): number | null {
  const x = tk[e.i];
  if (!x) { e.echoue = true; return null; }
  if (x.t === 'nb') { e.i++; return x.v; }
  if (x.t === 'ouv') {
    e.i++;
    const v = parseExpr(tk, e);
    if (e.echoue) return null;
    const f = tk[e.i];
    if (!f || f.t !== 'fer') { e.echoue = true; return null; } // parenthèse jamais fermée
    e.i++;
    return v;
  }
  e.echoue = true;
  return null;
}

function parseTerme(tk: Tok[], e: Etat): number | null {
  let g = parseFacteur(tk, e);
  while (!e.echoue) {
    const x = tk[e.i];
    if (!x || x.t !== 'op' || (x.v !== 'fois' && x.v !== 'divise')) break;
    e.i++; e.ops++;
    const d = parseFacteur(tk, e);
    if (e.echoue || d == null) return null;
    if (x.v === 'fois') g = (g as number) * d;
    else if (d === 0) { e.echoue = true; return null; }
    else g = (g as number) / d;
  }
  return g;
}

function parseExpr(tk: Tok[], e: Etat): number | null {
  let g = parseTerme(tk, e);
  while (!e.echoue) {
    const x = tk[e.i];
    if (!x || x.t !== 'op' || (x.v !== 'plus' && x.v !== 'moins')) break;
    e.i++; e.ops++;
    const d = parseTerme(tk, e);
    if (e.echoue || d == null) return null;
    g = x.v === 'plus' ? (g as number) + d : (g as number) - d;
  }
  return g;
}

// Évalue la première suite de jetons qui est VRAIMENT un calcul complet ; sinon null.
export function calculerNumero(question: string): number | null {
  for (const run of tokeniser(question)) {
    if (!run.some((x) => x.t === 'op')) continue;
    const e: Etat = { i: 0, ops: 0, echoue: false };
    const v = parseExpr(run, e);
    if (!e.echoue && e.ops > 0 && e.i === run.length && v != null && Number.isFinite(v)) return v;
  }
  return null;
}

export function evaluerNombre(question: string): number | null {
  const runs = tokeniser(question);
  if (runs.length !== 1 || runs[0].length !== 1) return null;
  const x = runs[0][0];
  return x.t === 'nb' ? x.v : null;
}

// « et plus 2 ? » après un résultat : la Compagne reprend le fil du calcul.
export function calculerSuite(question: string, precedent: number): number | null {
  const s = norm(question)
    .replace(/divise par/g, ' divise ')
    .replace(/multiplie par/g, ' fois ')
    .replace(/\s+/g, ' ')
    .trim();
  const m = s.match(/^(?:et\s+)?(plus|moins|fois|divise|x)\s+(\d+(?:[.,]\d+)?|[a-z-]+)\s*[=.!?\s]*$/);
  if (!m) return null;
  const b = /^\d/.test(m[2]) ? parseFloat(m[2].replace(',', '.')) : NOMBRES[m[2]];
  if (b == null || Number.isNaN(b)) return null;
  const op: Op = m[1] === 'x' ? 'fois' : (m[1] as Op);
  if (op === 'fois') return precedent * b;
  if (op === 'plus') return precedent + b;
  if (op === 'moins') return precedent - b;
  return b === 0 ? null : precedent / b;
}

export function format(n: number): string {
  const r = Math.round(n * 100) / 100; // deux décimales au plus, sans zéros parasites : 14,5 pas 14,50
  return Number.isInteger(r) ? String(r) : String(r).replace('.', ',');
}

// « combien font 3 plus 4 », « douze fois deux », « 20 divisé par 4 »… → résultat, sinon null.
export function calculer(question: string): string | null {
  const r = calculerNumero(question);
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
