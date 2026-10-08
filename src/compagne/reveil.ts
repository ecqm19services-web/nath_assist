// Le mot de réveil de Nath Assist : « Hey Nath ».
// Fonction pure, testable : normalise la transcription du micro (le moteur local
// écrit parfois « nat », « natt », « he nath ») puis décide si l'on est appelé,
// et ce qui reste à exécuter. Dans le mode écoute permanente, la Compagne ne
// répond JAMAIS à un mot du quotidien qui ressemblerait à son nom.
const norm = (s: string): string =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[-'`]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

// Le nom, seul ou précédé d'une interjection ; borné par début/fin de mot —
// « naturel », « mathématiques », « chatte » ne l'éveillent jamais.
const RE = /(?:^|\s)(?:(?:hey|he|hi|eh|hai)\s+)?(?:nath|natt|nat)(?![a-z0-9])[,!.?;]?\s*/i;

const esc = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Un nom d'éveil valable : 2 à 20 caractères, lettres accentuées comprises,
// pas de chiffre ni de signe. Le defaut « nath » reste toujours accepté.
export function nomReveilValide(nom: string): boolean {
  const n = nom.trim();
  return /^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ ]{1,19}$/.test(n) && /\p{L}{2}/u.test(n);
}

// Construit la expression régulière d'éveil pour un nom personnalisé (réservé Nath+).
// Même garde qu'au defaut : bornes de mot + interjections tolérées devant.
function regexPerso(nom: string): RegExp {
  const racine = norm(nom)
    .split(' ')
    .map((mot) => esc(mot))
    .join('\\s+');
  return new RegExp(
    `(?:^|\\s)(?:(?:hey|he|hi|eh|hai|allo)\\s+)?${racine}(?![a-z0-9])[,!.?;]?\\s*`,
    'i',
  );
}

export function entendReveil(
  texte: string,
  nomPerso?: string | null,
): { eveille: boolean; requete: string } {
  const t = norm(texte);
  // Nom perso actif → elle répond au nouveau nom ET reste joignable via « Hey Nath ».
  const motifs = nomPerso && nomReveilValide(nomPerso) ? [regexPerso(nomPerso), RE] : [RE];
  for (const re of motifs) {
    const m = t.match(re);
    if (m && m.index != null) {
      return { eveille: true, requete: t.slice(m.index + m[0].length).trim() };
    }
  }
  return { eveille: false, requete: t };
}
