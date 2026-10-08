// Nath+ : la porte d'entrée payante, 100 % hors-ligne et sans serveur (coût zéro).
// Le principe non négociable : le gratuit n'est JAMAIS bridé — « Hey Nath », le
// cerveau, le souffle, tout fonctionne à vie. Nath+ ajoute seulement le droit de
// donner un NOM D'ÉVEIL PERSONNALISÉ à la Compagne.
//
// Comment ça marche, honnêtement : l'appareil expose un identifiant de profil court ;
// après paiement (Mobile Money, de gré à gré), Nath-Tech renvoie une clé dérivée de
// cet identifiant. La vérification est locale. Ce n'est pas un verrou inviolable —
// c'est une gentilhommerie technique adaptée à un public qui paie de bonne foi.

// Alphabet sans caractères ambigus (pas de 0/O, 1/I) pour des clés lisibles au téléphone.
const ALPHA = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';

// Un secret partagé entre l'app et le générateur. Obfuscation raisonnable, pas crypto forte.
const SECRET = 'nath-plus-2026-ciel-partage';

// FNV-1a 32 bits : petit, rapide, déterministe, dispo en TS comme en Node.
function h32(str: string): number {
  let x = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    x ^= str.charCodeAt(i);
    x = Math.imul(x, 0x01000193) >>> 0;
  }
  return x >>> 0;
}

// Encode un entier 32 bits en N lettres de l'alphabet lisible.
function base(n: number, len: number): string {
  let out = '';
  let v = n >>> 0;
  for (let i = 0; i < len; i++) {
    out = ALPHA[v % ALPHA.length] + out;
    v = Math.floor(v / ALPHA.length);
  }
  return out;
}

// Identifiant de profil : dérivé du seed local, court, ne révèle rien de l'appareil.
export function idProfil(seed: string): string {
  return base(h32('profil:' + seed), 6);
}

// Regroupe en blocs de 4 pour la dictée au téléphone : ABCD-EFGH-WXYZ.
function formatCle(c: string): string {
  return (c.match(/.{1,4}/g) ?? []).join('-');
}

// Normalise une clé saisie : on ignore casse, espaces et tirets.
export function normaliserCle(cle: string): string {
  return cle.toUpperCase().replace(/[^A-Z0-9]/g, '');
}

// Clé Nath+ attendue pour un identifiant de profil donné.
export function genererCle(id: string): string {
  const a = base(h32(SECRET + ':' + id), 7);
  const b = base(h32(id + '#' + SECRET), 7);
  const c = base(h32(a + b + SECRET), 6);
  return formatCle(a + b + c); // 20 caractères, groupés par 4
}

// La clé saisie est-elle valable pour ce profil ? (comparaison insensible au format)
export function verifierCle(cle: string, id: string): boolean {
  const attendu = normaliserCle(genererCle(id));
  const saisie = normaliserCle(cle);
  return saisie.length === attendu.length && saisie === attendu;
}

// Un code ne doit JAMAIS transparaître comme une pub : libellés neutres uniquement.
export function messagePro(actif: boolean): string {
  return actif ? 'Nath+ est actif sur cet appareil.' : 'Nath+ — donnez un nom d’éveil à la Compagne.';
}
