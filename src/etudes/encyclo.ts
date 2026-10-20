// L'encyclopédie vivante de Nath : une étagère de sujets gratuits embarqués
// (le socle), une recherche instantanée sourde aux accents, des favoris gardés
// dans l'appareil, une grille qui s'ouvre par pas de 24 pour ménager le DOM,
// et des liens extraordinaires : deux sujets qui se parlent parce qu'ils
// partagent des idées. Ce module est pur — l'UI ne fait que montrer.

import { normaliser } from './quiz';
import type { Savoir } from './savoir';
import type { Notice } from './encycloData';

// Le socle est des données, pas de la logique : il vit dans « encycloData.ts »
// pour pouvoir grossir par lots sans alourdir le moteur. Réexporté ici, la
// surface publique du module ne change pas d'un octet.
export { SOCLE } from './encycloData';
export type { Notice } from './encycloData';

// La page de la grille : 24 cartes d'abord, « Afficher plus » ensuite.
export const GRILLE_PAGE = 24;

// ——— La recherche instantanée : sourde aux accents, insensible à la casse. ———
// Le titre passe avant le tag, le tag avant le résumé : ce qu'on nomme est
// plus proche de la demande que ce qu'on effleure.
function scoreNotice(n: Notice, q: string): number {
  const titre = normaliser(n.titre);
  const tags = n.tags.map((t) => normaliser(t));
  const resume = normaliser(n.resume);
  if (titre.includes(q)) return 3;
  if (tags.some((t) => t === q || t.includes(q) || q.includes(t))) return 2;
  if (resume.includes(q)) return 1;
  return 0;
}

export function filtrerNotices<T extends Notice>(notices: readonly T[], requete: string): T[] {
  const q = normaliser(requete);
  if (!q) return notices.slice();
  const marques = notices
    .map((n, i) => ({ n, i, s: scoreNotice(n, q) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.i - b.i);
  return marques.map((x) => x.n);
}

// ——— Les tiroirs du rang : les domaines, pour ranger et filtrer. ———
export function listerDomaines<T extends Notice>(notices: readonly T[]): string[] {
  return [...new Set(notices.map((n) => n.domaine))].sort((a, b) => a.localeCompare(b, 'fr'));
}

export function filtrerParDomaine<T extends Notice>(notices: readonly T[], domaine: string): T[] {
  return domaine ? notices.filter((n) => n.domaine === domaine) : notices.slice();
}

// ——— La découverte du jour : le calendrier choisit, pas l humeur. ———
// jour = nombre de jours depuis l époque (déterministe) ; on tourne dans
// l étagère, jamais de doublon dans la même journée, jamais de vide inventé.
export function noticeDuJour<T extends Notice>(notices: readonly T[], jour = Math.floor(Date.now() / 86_400_000)): T | null {
  if (!notices.length) return null;
  const j = Math.abs(Math.trunc(jour));
  return notices[j % notices.length];
}

// ——— Les liens extraordinaires : deux sujets qui se parlent. ———
// Partager un tag est un lien fort, partager un domaine un lien plus discret ;
// sans point commun, on ne s'invite pas chez les autres.
export function noticesLiees(n: Notice, notices: readonly Notice[], max = 6): Notice[] {
  const si = new Set(n.tags.map((t) => normaliser(t)));
  return notices
    .filter((x) => x.id !== n.id)
    .map((x) => ({
      x,
      s: x.tags.filter((t) => si.has(normaliser(t))).length * 2 + (x.domaine === n.domaine ? 1 : 0),
    }))
    .filter((m) => m.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, max)
    .map((m) => m.x);
}

// ——— La grille progressive : 24 cartes, puis « Afficher plus ». ———
export function paginer<T>(items: readonly T[], dejaAffiches: number, parPage = GRILLE_PAGE): { visibles: T[]; reste: number } {
  const fin = Math.min(items.length, Math.max(0, dejaAffiches) + parPage);
  return { visibles: items.slice(0, fin), reste: items.length - fin };
}

// ——— Les favoris : un registre modeste, gardé dans l'appareil. ———
export const CLE_FAVORI = 'nath.encyclo.favoris';

type MiniStorage = Pick<Storage, 'getItem' | 'setItem'>;

function lireRegistre(storage: MiniStorage): string[] {
  try {
    const o = JSON.parse(storage.getItem(CLE_FAVORI) ?? '[]') as unknown;
    return Array.isArray(o) ? [...new Set(o.filter((x): x is string => typeof x === 'string'))] : [];
  } catch {
    return [];
  }
}

// Allume ou éteint une étoile ; renvoie l'état nouveau de la notice.
export function basculerFavori(storage: MiniStorage, id: string): boolean {
  const favs = lireRegistre(storage);
  const mis = !favs.includes(id);
  const suite = mis ? [...favs, id] : favs.filter((x) => x !== id);
  storage.setItem(CLE_FAVORI, JSON.stringify(suite));
  return mis;
}

// Garde les notices étoilées, dans l'ordre donné ; un registre abîmé trie à vide.
export function filtrerFavoris<T extends { id: string }>(notices: readonly T[], storage: MiniStorage): T[] {
  const favs = new Set(lireRegistre(storage));
  return notices.filter((n) => favs.has(n.id));
}

// ——— Les découvertes personnelles rejoignent l'étagère du savoir. ———
// Tout ce que l'élève a déjà ramené dans la base Savoir devient notice d'un
// domaine à lui ; deux titres identiques ne font qu'une case.
export function noticesDepuisSavoir(base: readonly Savoir[]): Notice[] {
  const vus = new Set<string>();
  const out: Notice[] = [];
  for (const s of base) {
    const cle = normaliser(s.titre || s.sujet);
    if (!cle || vus.has(cle)) continue;
    vus.add(cle);
    out.push({
      id: `savoir:${cle}`,
      titre: (s.titre || s.sujet).trim(),
      domaine: 'Mes découvertes',
      resume: s.resume,
      tags: [],
      ...(s.image ? { image: s.image } : {}),
      ...(s.url ? { url: s.url } : {}),
    });
  }
  return out;
}

// ——— L'enrichissement par le grand cerveau (tempéraments des géants). ———
// Uniquement si l'utilisateur a réglé son Worker : la question part, une
// page nouvelle revient, rien d'autre. Silence, erreur ou divagation : null.
export async function approfondirParCerveau(
  endpoint: string,
  sujet: string,
  fetchImpl: typeof fetch = fetch,
  modele = '',
): Promise<string | null> {
  const t = sujet.trim();
  if (!t) return null;
  try {
    const res = await fetchImpl(`${endpoint}/dire`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...(modele ? { modele } : {}),
        messages: [
          {
            role: 'system',
            content:
              'Tu es un guide curieux et pédagogue, en français. En 3 ou 4 phrases courtes, donne un fait surprenant et un rapprochement inattendu avec un autre domaine sur le sujet qui vient. Pas de liste, pas de titre.',
          },
          { role: 'user', content: t },
        ],
      }),
    });
    if (!res.ok) return null;
    const o = (await res.json()) as Record<string, any>;
    const r = o?.result?.response ?? o?.response;
    const net = typeof r === 'string' ? r.trim() : '';
    return net && net.length <= 800 ? net : null;
  } catch {
    return null;
  }
}

// Les notices embarquées sont du texte : aucune illustration. Pour les montrer
// sans inventer d'adresse, l'UI demande au réseau l'image de l'article et ne
// publie que ce que cette décision autorise.
export function vignetteManquante(n: { image?: string }): boolean {
  return !n.image;
}

// `affiché` : le titre de la notice vraiment à l'écran (nul si on est sorti de
// l'étagère). `demandée` : celle pour laquelle la demande est partie.
export function choisirVignette(
  venue: { image?: string; titre?: string } | null,
  affiché: string | null,
  demandée: string,
): string {
  if (!venue || !venue.image || !affiché) return '';
  if (!/^https?:\/\//.test(venue.image)) return '';
  // Le réseau a rendu autre chose que demandé : une image hors sujet.
  if (venue.titre && racine(venue.titre) !== racine(demandée)) return '';
  // On a tourné la page pendant l'aller-retour.
  if (pageTournee(affiché, demandée)) return '';
  return venue.image;
}

// La page a-t-elle tourné depuis la demande ? Réponse oui dès que l'article
// affiché n'est plus le bon — auquel cas personne n'a le droit de parler :
// ni de poser une image, ni d'annoncer une absence d'image. Une réponse en
// retard qui sème un « pas d'image pour ce sujet » sur l'étagère est un
// mensonge, pas une nuance.
export function pageTournee(affiché: string | null, demandée: string): boolean {
  return !affiché || racine(affiché) !== racine(demandée);
}

// « La photosynthèse » et « Photosynthèse » sont le même sujet : l'encyclopédie
// écrit sans l'article, et parfois sans le pluriel. Un sujet voisin (Chlorophylle)
// reste à l'écart — la souplesse s'arrête à l'article et au « s ».
function racine(t: string): string {
  return normaliser(t)
    .replace(/['’]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^(?:la |le |les |l |un |une |des |du |de |d )/, '')
    .replace(/s$/, '');
}
