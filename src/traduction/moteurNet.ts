// Le filet du traducteur : quand le carnet local ne connaît pas le mot, un
// moteur gratuit et sans compte (MyMemory) peut prêter main-forte — seulement
// si la personne le demande, et sa proposition est toujours étiquetée comme
// telle. Les langues que le filet ne connaît pas (wolof, ewondo…) restent le
// domaine du carnet : rien n'est inventé, jamais.

// Noms familiers → codes ISO que le filet comprend. Une langue africaine non
// couverte renvoie null : c'est au carnet de la porter, pas à la machine.
const CODES: Record<string, string> = {
  francais: 'fr', français: 'fr', french: 'fr',
  anglais: 'en', english: 'en',
  espagnol: 'es', spanish: 'es',
  allemand: 'de', german: 'de', deutsch: 'de',
  italien: 'it', italian: 'it',
  portugais: 'pt', portuguese: 'pt',
  arabe: 'ar', arabic: 'ar',
  chinois: 'zh', chinese: 'zh',
  neerlandais: 'nl', dutch: 'nl',
  russe: 'ru', russian: 'ru',
  turc: 'tr', turkish: 'tr',
  swahili: 'sw', hindi: 'hi', japonais: 'ja', japanese: 'ja',
  coréen: 'ko', korean: 'ko', grec: 'el', greek: 'el',
  polonais: 'pl', polish: 'pl', hébreu: 'he', hebrew: 'he',
};

export function codeLangue(nom: string): string | null {
  const n = nom.trim().toLowerCase();
  if (!n) return null;
  return CODES[n] ?? null;
}

// Une ligne de demande au filet gratuit. Échec, refus ou réponse vide = null.
export async function traduireEnLigne(
  texte: string,
  de: string,
  vers: string,
  fetchImpl: typeof fetch,
): Promise<string | null> {
  const t = texte.trim();
  if (!t) return null;
  try {
    const url =
      'https://api.mymemory.translated.net/get?q=' +
      encodeURIComponent(t) +
      '&langpair=' + encodeURIComponent(de) + '|' + encodeURIComponent(vers);
    const res = await fetchImpl(url);
    if (!res.ok) return null;
    const o = (await res.json()) as Record<string, any>;
    const r = o?.responseData?.translatedText;
    return typeof r === 'string' && r.trim() ? r.trim() : null;
  } catch {
    return null;
  }
}
