// Le tuyau commun vers le grand cerveau : une consigne, une question, une
// réponse courte ou rien du tout. Tous les outils d'assistance passent par là,
// donc aucun ne peut parler seul ni garder un secret.
// Rien n'est obligatoire : sans réglage ni réseau, l'appel rend null et l'outil
// affiche son moteur hors-ligne.

export type MiniStorage = Pick<Storage, 'getItem' | 'setItem'>;

export interface AppelCerveau {
  endpoint: string;
  consigne: string;
  question: string;
  fetchImpl: typeof fetch;
  modele?: string;
  /** Longueur maximale acceptée au retour ; au-delà, la réponse est douteuse. */
  max?: number;
}

export async function demanderAuCerveau(a: AppelCerveau): Promise<string | null> {
  const question = a.question.trim();
  const endpoint = a.endpoint.trim().replace(/\/+$/, '');
  if (!endpoint || !question || !a.consigne.trim()) return null;
  try {
    const res = await a.fetchImpl(`${endpoint}/dire`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...(a.modele ? { modele: a.modele } : {}),
        messages: [
          { role: 'system', content: `${a.consigne}\nTu réponds toujours en français.` },
          { role: 'user', content: question },
        ],
      }),
    });
    if (!res.ok) return null;
    const o = (await res.json()) as Record<string, any>;
    const brut = o?.result?.response ?? o?.response;
    const net = typeof brut === 'string' ? brut.trim() : '';
    return net && net.length <= (a.max ?? 800) ? net : null;
  } catch {
    return null;
  }
}

// Le texte qui sort d'ici entre dans des modèles HTML : il est dès armé.
export const desarmeur = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c);
