// Le mathématicien embarqué : équations, dérivées, pourcentages, statistiques,
// nombres premiers, expressions avancées (puissances, racines, fonctions).
// Déterministe : là où un modèle de langage « devine » un chiffre, ce moteur
// calcule — exact, instantané, hors-ligne, et sans jamais sortir de l'appareil.
import { format } from './logique';

// Un polynôme en x : coeffs[d] = coefficient de x^d.
type Poly = number[];

const norm = (s: string): string =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .toLowerCase();

const NB = String.raw`\d+(?:[.,]\d+)?`; // nombre avec virgule ou point
const val = (s: string): number => parseFloat(s.replace(',', '.'));

// ————————————————————————————————————————————————————————————— polynômes ——

// Un terme sans signe : « 6 », « x », « 5x », « x^2 », « 2x^3 », « x/2 », « 3x/2 ».
function terme(s: string): { c: number; d: number } | null {
  if (/^\d+(?:\.\d+)?$/.test(s)) return { c: parseFloat(s), d: 0 };
  let m = s.match(/^(\d*\.?\d*)x\^(\d+)$/);
  if (m) return { c: m[1] === '' ? 1 : parseFloat(m[1]), d: parseInt(m[2], 10) };
  m = s.match(/^(\d*\.?\d*)x$/);
  if (m) return { c: m[1] === '' ? 1 : parseFloat(m[1]), d: 1 };
  m = s.match(/^x\/(\d*\.?\d+)$/);
  if (m) return { c: 1 / parseFloat(m[1]), d: 1 };
  m = s.match(/^(\d*\.?\d+)x\/(\d*\.?\d+)$/);
  if (m) return { c: parseFloat(m[1]) / parseFloat(m[2]), d: 1 };
  return null;
}

// « x^2-5x+6 » → [6, -5, 1]. Au moindre terme incompréhensible : null (on se tait).
function parsePoly(src: string): Poly | null {
  const s = src.replace(/\s+/g, '').replace(/\*/g, '');
  if (!s) return null;
  const signes = /^[+-]/.test(s) ? s : `+${s}`; // le premier terme nu porte un « + » implicite
  const parts = signes.match(/[+-][^+-]+/g);
  if (!parts) return null;
  const coeffs: Poly = [];
  for (const raw of parts) {
    const neg = raw.startsWith('-');
    const t = terme(raw.slice(1));
    if (!t || t.d > 12) return null;
    coeffs[t.d] = (coeffs[t.d] ?? 0) + (neg ? -t.c : t.c);
  }
  return coeffs.map((c) => c ?? 0);
}

const EXPOSANTS: Record<number, string> = { 0: '', 1: '', 2: '²', 3: '³' };

// Remet un polynôme en forme lisible : « 3x² + 4x - 7 ».
function ecrirePoly(p: Poly): string {
  const termes: string[] = [];
  for (let d = p.length - 1; d >= 0; d--) {
    const c = p[d] ?? 0;
    if (c === 0 && p.length > 1) continue;
    const a = Math.abs(c);
    let corps: string;
    if (d === 0) corps = format(a);
    else {
      const xco = d >= 4 ? `x^${d}` : `x${EXPOSANTS[d] ?? ''}`;
      corps = a === 1 ? xco : `${format(a)}${xco}`;
    }
    termes.push(termes.length === 0 ? (c < 0 ? `-${corps}` : corps) : `${c < 0 ? ' - ' : ' + '}${corps}`);
  }
  return termes.length ? termes.join('') : '0';
}

// ————————————————————————————————————————————————————————————— équations ——

function racines(a: number, b: number, c: number): { texte: string; reels: number[] } {
  const delta = b * b - 4 * a * c;
  if (delta < 0) return { texte: `aucune solution réelle (Δ = ${format(delta)} < 0)`, reels: [] };
  if (delta === 0) return { texte: `x = ${format(-b / (2 * a))} (racine double)`, reels: [-b / (2 * a)] };
  const r1 = (-b + Math.sqrt(delta)) / (2 * a);
  const r2 = (-b - Math.sqrt(delta)) / (2 * a);
  const ordre = [r1, r2].sort((x, y) => {
    if (x >= 0 && y < 0) return -1; // les positives d'abord
    if (y >= 0 && x < 0) return 1;
    return x - y;
  });
  return { texte: ordre.map((r) => `x = ${format(r)}`).join(' ou '), reels: ordre };
}

function equation(question: string): string | null {
  // On jette le blabla devant l'équation (« résous … », « l'équation … »).
  const s = norm(question).replace(/.*\b(?:equation|resous|resoudre|trouve|determiner|determine)\b[:\s]+/i, '');
  if (!s.includes('x')) return null;
  if (s.includes('=')) {
    const sides = s.split('=');
    if (sides.length !== 2) return null;
    const g = parsePoly(sides[0]);
    const d = parsePoly(sides[1]);
    if (!g || !d) return null;
    const n = Math.max(g.length, d.length);
    const p = Array.from({ length: n }, (_, i) => (g[i] ?? 0) - (d[i] ?? 0));
    while (p.length > 1 && p[p.length - 1] === 0) p.pop();
    const degre = p.length - 1;
    if (degre > 2) return null; // trop haut : le grand cerveau prend le relais
    if (degre === 0) return p[0] === 0 ? 'tout x convient (identité).' : 'aucune solution : c est une absurdité.';
    if (degre === 1) {
      if (p[1] === 0) return 'aucune solution : x disparaît de la comparaison.';
      return `x = ${format(-p[0] / p[1])}.`;
    }
    return `${racines(p[2], p[1], p[0]).texte}.`;
  }
  // Pas de « = » : factorisation si les racines sont entières, sinon silence.
  const p = parsePoly(s);
  if (!p) return null;
  while (p.length > 1 && p[p.length - 1] === 0) p.pop();
  if (p.length - 1 !== 2 || p[2] !== 1) return null;
  const r = racines(p[2], p[1], p[0]);
  if (r.reels.length !== 2 || !r.reels.every((x) => Number.isInteger(x))) return null;
  const facteurs = r.reels
    .map((x) => (x >= 0 ? `(x - ${x})` : `(x + ${Math.abs(x)})`))
    .join('');
  return `${ecrirePoly(p)} = ${facteurs}.`;
}

// ————————————————————————————————————————————————————————————— dérivées ——

function derivee(question: string): string | null {
  const s = norm(question);
  const m = s.match(/(?:la\s+)?(?:derivee|dérivée|dérivee)\b(?:\s+de)?\s+(.+)$/);
  if (!m) return null;
  let corps = m[1].replace(/^(?:f\s*\(\s*x\s*\)|y)\s*=\s*/, '');
  let en: number | null = null;
  const pt = corps.match(/\ben\s+(\d+(?:[.,]\d+)?)\s*$/);
  if (pt) {
    en = val(pt[1]);
    corps = corps.slice(0, pt.index).trim();
  }
  const p = parsePoly(corps);
  if (!p) return null;
  const dp = p.slice(1).map((c, i) => c * (i + 1));
  let texte = `f'(x) = ${ecrirePoly(dp)}.`;
  if (en != null) {
    const v = dp.reduce((acc, c, i) => acc + c * Math.pow(en as number, i), 0);
    texte += ` f'(${format(en)}) = ${format(v)}.`;
  }
  return texte;
}

// ————————————————————————————————————————————————————————— pourcentages ——

function pourcentages(question: string): string | null {
  const s = norm(question).replace(/pourcent/g, '%');
  let m = s.match(new RegExp(`(${NB})\\s*%\\s*de\\s*(${NB})`));
  if (m) return `${format(val(m[1]))} % de ${format(val(m[2]))} = ${format((val(m[1]) * val(m[2])) / 100)}.`;
  m = s.match(new RegExp(`(?:augmente|augmenter|majorer)\\s+(${NB})\\s+de\\s+(${NB})\\s*%`));
  if (m) return `${format(val(m[1]))} augmenté de ${format(val(m[2]))} % = ${format(val(m[1]) * (1 + val(m[2]) / 100))}.`;
  m = s.match(new RegExp(`(?:diminue|diminuer|reduire)\\s+(${NB})\\s+(?:de\\s+)?(${NB})\\s*%`));
  if (m) return `${format(val(m[1]))} diminué de ${format(val(m[2]))} % = ${format(val(m[1]) * (1 - val(m[2]) / 100))}.`;
  return null;
}

// ————————————————————————————————————————————————————————————— statistiques ——

function statistiques(question: string): string | null {
  const s = norm(question);
  const m = s.match(/\b(moyenne|mediane|variance|ecart[- ]?type|somme)\b(?:\s+de)?\s+(.+)$/);
  if (!m) return null;
  const liste = [...(m[2] ?? '').matchAll(new RegExp(NB, 'g'))].map((x) => val(x[0]));
  if (liste.length < 2) return null;
  const somme = liste.reduce((a, b) => a + b, 0);
  const moy = somme / liste.length;
  switch (m[1]) {
    case 'somme': return `La somme est ${format(somme)}.`;
    case 'moyenne': return `La moyenne est ${format(moy)}.`;
    case 'mediane': {
      const tri = [...liste].sort((a, b) => a - b);
      const mid = Math.floor(tri.length / 2);
      return `La médiane est ${format(tri.length % 2 ? tri[mid] : (tri[mid - 1] + tri[mid]) / 2)}.`;
    }
    case 'variance': return `La variance est ${format(liste.reduce((a, b) => a + (b - moy) ** 2, 0) / liste.length)}.`;
    default: return `L'écart-type est ${format(Math.sqrt(liste.reduce((a, b) => a + (b - moy) ** 2, 0) / liste.length))}.`;
  }
}

// ———————————————————————————————————————————————— premiers, PGCD, diviseurs ——

const pgcd = (a: number, b: number): number => (b === 0 ? a : pgcd(b, a % b));

function premiers(question: string): string | null {
  const s = norm(question);
  let m = s.match(new RegExp(`(${NB})\\s*est[- ]?(?:il\\s+)?premier`));
  if (m) {
    const n = Math.round(val(m[1]));
    if (n < 2) return `${n} n'est pas premier (il faut être plus grand que 1).`;
    let div = 0;
    for (let d = 2; d * d <= n; d++) {
      if (n % d === 0) {
        div = d;
        break;
      }
    }
    return div ? `${n} n'est pas premier : ${n} = ${div} × ${n / div}.` : `${n} est premier.`;
  }
  m = s.match(new RegExp(`pgcd de (${NB}) et (${NB})`));
  if (m) {
    const [a, b] = [Math.round(val(m[1])), Math.round(val(m[2]))];
    return `Le PGCD de ${a} et ${b} est ${pgcd(a, b)}.`;
  }
  m = s.match(new RegExp(`ppcm de (${NB}) et (${NB})`));
  if (m) {
    const [a, b] = [Math.round(val(m[1])), Math.round(val(m[2]))];
    return `Le PPCM de ${a} et ${b} est ${(a * b) / pgcd(a, b)}.`;
  }
  m = s.match(new RegExp(`diviseurs de (${NB})`));
  if (m) {
    const n = Math.round(val(m[1]));
    const ds: number[] = [];
    for (let d = 1; d <= n; d++) if (n % d === 0) ds.push(d);
    return `Les diviseurs de ${n} : ${ds.join(', ')}.`;
  }
  m = s.match(new RegExp(`factorielle de (${NB})`));
  if (m) {
    const n = Math.round(val(m[1]));
    if (n < 0 || n > 20) return null;
    let f = 1;
    for (let k = 2; k <= n; k++) f *= k;
    return `${n}! = ${f}.`;
  }
  return null;
}

// ————————————————————————————————————————————————————— expression avancée ——

const CONST = new Set(['pi', 'e']);
const FONCS: Record<string, (x: number) => number> = {
  sqrt: Math.sqrt, sin: Math.sin, cos: Math.cos, tan: Math.tan,
  abs: Math.abs, log: Math.log10, ln: Math.log,
  asin: Math.asin, acos: Math.acos, atan: Math.atan,
};

function factorielle(n: number): number | null {
  if (!Number.isInteger(n) || n < 0 || n > 20) return null;
  let f = 1;
  for (let k = 2; k <= n; k++) f *= k;
  return f;
}

// Petit parseur récursif : + - × ÷ ^ ! %, parenthèses, fonctions, constantes,
// multiplications implicites (« 2pi », « 2(3+4) »). Aucune évaluation de chaine.
function evaluer(src: string): number | null {
  const toks = src.replace(/\s+/g, '').match(new RegExp(`${NB}|[a-z]+|[+\\-*/^!%()]`, 'g'));
  if (!toks) return null;
  let i = 0;
  let echoue = false;
  const peek = (): string | undefined => toks[i];

  function primary(): number {
    const t = peek();
    if (t == null) { echoue = true; return 0; }
    if (t === '(') {
      i++;
      const v = expr();
      if (peek() !== ')') { echoue = true; return 0; }
      i++;
      return v;
    }
    if (/^[a-z]+$/.test(t)) {
      i++;
      if (CONST.has(t)) return t === 'pi' ? Math.PI : Math.E;
      const f = FONCS[t];
      if (f && peek() === '(') {
        i++;
        const a = expr();
        if (peek() !== ')') { echoue = true; return 0; }
        i++;
        return f(a);
      }
      echoue = true;
      return 0;
    }
    if (/^[\d.,]+$/.test(t)) { i++; return parseFloat(t.replace(',', '.')); }
    echoue = true;
    return 0;
  }

  function postfixe(): number {
    let v = primary();
    while (!echoue && (peek() === '!' || peek() === '%')) {
      if (peek() === '!') {
        const f = factorielle(v);
        if (f == null) { echoue = true; return 0; }
        v = f;
      } else v = v / 100;
      i++;
    }
    return v;
  }

  function puissance(): number {
    const base = postfixe();
    if (!echoue && peek() === '^') {
      i++;
      return Math.pow(base, signe()); // droite associative, accepte « 2^-3 »
    }
    return base;
  }

  function signe(): number {
    if (peek() === '-') { i++; return -signe(); }
    if (peek() === '+') { i++; return signe(); }
    return puissance();
  }

  function facteur(): number {
    let v = signe();
    while (!echoue) {
      const t = peek();
      const suite = t != null && (t === '(' || /^[a-z]/.test(t) || /^[\d.,]/.test(t));
      if (t === '*' || suite) {
        if (t === '*') i++;
        v = v * signe();
      } else if (t === '/') {
        i++;
        const d = signe();
        if (d === 0) { echoue = true; return 0; }
        v = v / d;
      } else break;
    }
    return v;
  }

  function expr(): number {
    let v = facteur();
    while (!echoue && (peek() === '+' || peek() === '-')) {
      const op = peek();
      i++;
      const d = facteur();
      v = op === '+' ? v + d : v - d;
    }
    return v;
  }

  const r = expr();
  if (echoue || i !== toks.length || !Number.isFinite(r)) return null;
  return r;
}

function expressions(question: string): string | null {
  let s = norm(question);
  if (!/\d/.test(s)) return null;
  s = s
    .replace(/[?]+/g, ' ')
    .replace(/\bcombien\b|\bfont?\b|\bcalcule[r]?\b|\bcalcul\b|\bresultat\b|\breponse\b|\begal\b|\bsvp\b/g, ' ')
    .replace(/\bpuissance\b/g, '^')
    .replace(/racine(?: carree)? de\s*([^\s]+)/g, 'sqrt($1)')
    .trim();
  if (!/[+\-*/^!%()]|sqrt|sin|cos|tan|abs|log|ln|pi/.test(s)) return null;
  const v = evaluer(s);
  return v == null ? null : `Ça fait ${format(v)}.`;
}

// ———————————————————————————————————————————————————————————————————— entrée ——

// Le mathématicien parle-t-il de cette phrase ? null = « je ne sais pas,
// laisse la main » (au moteur de base ou au grand cerveau) — jamais d'invention.
export function repondreMaths(question: string): string | null {
  const s = (question ?? '').trim();
  if (!s || !/\d/.test(s)) return null;
  return (
    equation(s) ??
    derivee(s) ??
    pourcentages(s) ??
    statistiques(s) ??
    premiers(s) ??
    expressions(s)
  );
}
