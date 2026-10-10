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
  image?: string; // l'illustration du sujet, si l'encyclopédie en offre une
  ramene_a: number; // quand on l'a mis dans la base
}

export interface ResumeWeb {
  titre: string;
  resume: string;
  url: string;
  image: string; // '' si rien de sûr à montrer
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
    image: typeof s.image === 'string' ? s.image : '',
    ramene_a: Number.isFinite(s.ramene_a) ? s.ramene_a : Date.now(),
  };
  return [...base.filter((x) => normaliser(x.sujet) !== n), propre];
}

// Puiser un résumé dans l'encyclopédie libre. Le fetch est injecté : c'est
// l'appelant qui décide du moment (après accord explicite), jamais ce module.
// Une image d'encyclopédie, façon Encarta : la grande si elle existe, sinon la
// vignette. Toute adresse qui ne commence pas par http n'entre pas dans la maison.
function imageSûre(o: Record<string, any>): string {
  for (const c of [o?.originalimage?.source, o?.thumbnail?.source]) {
    if (typeof c === 'string' && /^https?:\/\//.test(c)) return c;
  }
  return '';
}

async function resumeDepuisTitre(
  titre: string,
  fetchImpl: typeof fetch,
  langue: string,
): Promise<ResumeWeb | null> {
  try {
    const url = `https://${langue}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(titre.trim())}`;
    const res = await fetchImpl(url);
    if (!res.ok) return null;
    const o = (await res.json()) as Record<string, any>;
    const resume = typeof o?.extract === 'string' ? o.extract.trim() : '';
    if (!resume) return null;
    return {
      titre: typeof o.title === 'string' && o.title ? o.title : titre.trim(),
      resume,
      url: o?.content_urls?.desktop?.page ?? '',
      image: imageSûre(o),
    };
  } catch {
    return null;
  }
}

// Les gens disent « la mitose », l'encyclopédie écrit « Mitose ». La recherche
// plein texte fait le pont : premier titre proposé, ou rien du tout.
export async function titreDepuisRecherche(
  sujet: string,
  fetchImpl: typeof fetch,
  langue = 'fr',
): Promise<string | null> {
  try {
    const url =
      `https://${langue}.wikipedia.org/w/api.php?action=query&list=search&srlimit=1&format=json&origin=*&srsearch=` +
      encodeURIComponent(sujet.trim());
    const res = await fetchImpl(url);
    if (!res.ok) return null;
    const o = (await res.json()) as Record<string, any>;
    const t = o?.query?.search?.[0]?.title;
    return typeof t === 'string' && t.trim() ? t.trim() : null;
  } catch {
    return null;
  }
}

export async function chargerDepuisLeNet(
  sujet: string,
  fetchImpl: typeof fetch,
  langue = 'fr',
): Promise<ResumeWeb | null> {
  const direct = await resumeDepuisTitre(sujet, fetchImpl, langue);
  if (direct) return direct;
  // Le titre tel quel n'a rien donné : on cherche le vrai, une seule fois.
  const trouve = await titreDepuisRecherche(sujet, fetchImpl, langue);
  if (!trouve || normaliser(trouve) === normaliser(sujet)) return null;
  return await resumeDepuisTitre(trouve, fetchImpl, langue);
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
