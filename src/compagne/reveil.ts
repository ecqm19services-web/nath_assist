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

export function entendReveil(texte: string): { eveille: boolean; requete: string } {
  const t = norm(texte);
  const m = t.match(RE);
  if (!m || m.index == null) return { eveille: false, requete: t };
  return { eveille: true, requete: t.slice(m.index + m[0].length).trim() };
}
