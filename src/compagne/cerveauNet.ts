// Le cerveau d'ailleurs : pour les machines sans WebGPU (téléphones modestes,
// vieux ordinateurs), un grand modèle peut répondre depuis le cloud en moins
// d'une seconde. Le seul canal admis : ton propre Worker Nath-Tech (Clef, Qwen
// ou autre, gratuit chez l'hébergeur) — l'adresse se règle une fois, la clé
// d'API reste de l'autre côté, jamais dans l'application. Sans adresse réglée,
// ce module dort : le cerveau local et le petit moteur suffisent.

import type { Cerveau, Message } from './cerveau';

const CLE = 'nath.cerveau';

// Seule une adresse https (ou localhost pour développer) porte la parole —
// jamais de l'http clair, jamais de n'importe quoi.
export function definirEndpoint(storage: Storage, url: string): boolean {
  const u = url.trim();
  if (!u) {
    storage.setItem(CLE, '');
    return true; // effacer a le droit
  }
  let parse: URL;
  try {
    parse = new URL(u);
  } catch {
    return false;
  }
  const sur = parse.protocol === 'https:' || (parse.protocol === 'http:' && parse.hostname === 'localhost');
  if (sur) storage.setItem(CLE, u);
  return sur;
}

export function lireEndpoint(storage: Storage): string {
  const u = (storage.getItem(CLE) ?? '').trim();
  if (!u) return '';
  try {
    const p = new URL(u);
    return p.protocol === 'https:' || (p.protocol === 'http:' && p.hostname === 'localhost') ? u : '';
  } catch {
    return '';
  }
}

// Le grand cerveau en ligne, branché sur ton Worker : la parole part, la
// réponse arrive, et rien d'autre ne quitte l'appareil.
export function creerCerveauNet(endpoint: string, fetchImpl: typeof fetch = fetch): Cerveau {
  return {
    async ask(messages: Message[]): Promise<string> {
      try {
        const res = await fetchImpl(`${endpoint}/dire`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages }),
        });
        if (!res.ok) return '';
        const o = (await res.json()) as Record<string, any>;
        const r = o?.result?.response ?? o?.response;
        return typeof r === 'string' ? r.trim() : '';
      } catch {
        return '';
      }
    },
  };
}

// La décision façon Clef : un état, des questions typées, des réponses
// chiffrées. Échec = null — on n'invente aucune décision.
export async function decider(
  endpoint: string,
  etat: string,
  questions: Record<string, unknown>,
  fetchImpl: typeof fetch = fetch,
): Promise<Record<string, unknown> | null> {
  try {
    const res = await fetchImpl(`${endpoint}/decider`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ state: etat, questions }),
    });
    if (!res.ok) return null;
    const o = (await res.json()) as Record<string, any>;
    const a = o?.answers ?? o?.result?.answers;
    return a && typeof a === 'object' ? (a as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}
