// Le sachoir de Nath : une base de connaissances locale, dans l'appareil.
// Quand on veut apprendre un sujet, on cherche d'abord ici (déjà ramené,
// hors-ligne). Si ce n'y est pas, on le dit — et seulement sur un oui de la
// personne, on va puiser un résumé dans l'encyclopédie gratuite en ligne, puis
// on le range pour la prochaine fois, en fiches toutes prêtes à réviser.

import { normaliser } from './quiz';

export interface Savoir {
  sujet: string; // la demande, telle qu'elle a été posée
  titre: string;
  resume: string;
  url: string; // la source, pour la curiosité
  ramene_a: number; // quand on l'a mis dans la base
}

export interface ResumeWeb {
  titre: string;
  resume: string;
  url: string;
}

export function trouverDansBase(base: readonly Savoir[], sujet: string): Savoir | null {
  const n = normaliser(sujet);
  if (!n) return null;
  const exacte = base.find((s) => normaliser(s.sujet) === n);
  if (exacte) return exacte;
  return (
    base.find((s) => {
      const b = normaliser(s.sujet);
      return b.length > 2 && (n.includes(b) || b.includes(n));
    }) ?? null
  );
}

export function enregistrerSavoir(base: readonly Savoir[], s: Savoir): Savoir[] {
  const sujet = s.sujet.trim();
  const resume = s.resume.trim();
  if (!sujet || !resume) return base as Savoir[]; // rien de valable : on ne touche à rien
  const n = normaliser(sujet);
  const propre: Savoir = {
    sujet,
    titre: (s.titre || '').trim() || sujet,
    resume,
    url: typeof s.url === 'string' ? s.url : '',
    ramene_a: Number.isFinite(s.ramene_a) ? s.ramene_a : Date.now(),
  };
  return [...base.filter((x) => normaliser(x.sujet) !== n), propre];
}

// Puiser un résumé dans l'encyclopédie libre. Le fetch est injecté : c'est
// l'appelant qui décide du moment (après accord explicite), jamais ce module.
export async function chargerDepuisLeNet(
  sujet: string,
  fetchImpl: typeof fetch,
  langue = 'fr',
): Promise<ResumeWeb | null> {
  try {
    const url = `https://${langue}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      sujet.trim(),
    )}`;
    const res = await fetchImpl(url);
    if (!res.ok) return null;
    const o = (await res.json()) as Record<string, any>;
    const resume = typeof o?.extract === 'string' ? o.extract.trim() : '';
    if (!resume) return null;
    return {
      titre: typeof o.title === 'string' && o.title ? o.title : sujet.trim(),
      resume,
      url: o?.content_urls?.desktop?.page ?? '',
    };
  } catch {
    return null;
  }
}

// Transformer un cours en fiches : dans chaque phrase assez longue, le mot le
// plus riche se cache et devient la réponse à retrouver.
export function fichesDepuisTexte(texte: string, max = 8): { verso: string; recto: string }[] {
  const phrases = texte
    .split(/(?<=[.!?;])\s+/)
    .map((p) => p.trim())
    .filter(Boolean);
  const cartes: { verso: string; recto: string }[] = [];
  const dejaVus = new Set<string>();
  for (const ph of phrases) {
    if (cartes.length >= max) break;
    const mots = ph.split(/\s+/);
    if (mots.length < 4) continue;
    const nu = (m: string) => m.replace(/[^\p{L}\p{N}]/gu, '');
    let cle = '';
    for (const m of mots) {
      const p = nu(m);
      if (p.length >= 5 && p.length > cle.length) cle = p;
    }
    if (!cle) continue;
    const vue = cle.toLowerCase();
    if (dejaVus.has(vue)) continue;
    dejaVus.add(vue);
    const verso = mots.map((m) => (nu(m) === cle ? '……' : m)).join(' ');
    cartes.push({ verso, recto: cle });
  }
  return cartes;
}
