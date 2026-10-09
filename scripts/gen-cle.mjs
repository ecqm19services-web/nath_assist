// Génère une clé Nath+ pour un identifiant de profil donné.
// Usage :  node scripts/gen-cle.mjs <ID_PROFIL>
//    ou — pour une marque d'entreprise (B2B) :
//   node scripts/gen-cle.mjs --entreprise "Lycée Bilingue de Douala"
//   ou  :  node scripts/gen-cle.mjs            → rappelle la règle de calcul.
// (Logique volontairement dupliquée de src/monetisation/cle.ts, sans dépendance build.)
const ALPHA = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
const SECRET = 'nath-plus-2026-ciel-partage';

function h32(str) {
  let x = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    x ^= str.charCodeAt(i);
    x = Math.imul(x, 0x01000193) >>> 0;
  }
  return x >>> 0;
}
function base(n, len) {
  let out = '';
  let v = n >>> 0;
  for (let i = 0; i < len; i++) {
    out = ALPHA[v % ALPHA.length] + out;
    v = Math.floor(v / ALPHA.length);
  }
  return out;
}
const format = (c) => (c.match(/.{1,4}/g) ?? []).join('-');
function genererCle(id) {
  const a = base(h32(SECRET + ':' + id), 7);
  const b = base(h32(id + '#' + SECRET), 7);
  const c = base(h32(a + b + SECRET), 6);
  return format(a + b + c);
}

const idProfil = (seed) => base(h32('profil:' + seed), 6);
// Même normalisation que src/etudes/quiz.ts : casse et accents ne comptent pas.
const normaliser = (s) => s
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^\p{L}\p{N}]+/gu, ' ')
  .trim()
  .replace(/\s+/g, ' ');

const arg = process.argv[2];
if (arg === '--entreprise') {
  const org = process.argv[3];
  if (!org) {
    console.log('Usage : node scripts/gen-cle.mjs --entreprise "Nom exact de l\'organisation"');
    process.exit(1);
  }
  console.log(genererCle(idProfil('entreprise:' + normaliser(org))));
} else if (!arg) {
  console.log("Usage : node scripts/gen-cle.mjs <ID_PROFIL>  |  --entreprise \"Nom de l'organisation\"");
  process.exit(1);
} else {
  console.log(genererCle(arg.trim().toUpperCase()));
}
