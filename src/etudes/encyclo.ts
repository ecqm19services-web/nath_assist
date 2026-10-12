// L'encyclopédie vivante de Nath : une étagère de sujets gratuits embarqués
// (le socle), une recherche instantanée sourde aux accents, des favoris gardés
// dans l'appareil, une grille qui s'ouvre par pas de 24 pour ménager le DOM,
// et des liens extraordinaires : deux sujets qui se parlent parce qu'ils
// partagent des idées. Ce module est pur — l'UI ne fait que montrer.

import { normaliser } from './quiz';
import type { Savoir } from './savoir';

export interface Notice {
  id: string;
  titre: string;
  domaine: string;
  resume: string;
  tags: string[];
  image?: string;
  url?: string;
}

// La page de la grille : 24 cartes d'abord, « Afficher plus » ensuite.
export const GRILLE_PAGE = 24;

// Le socle : de quoi remplir l'étagère dès la première ouverture, hors-ligne,
// sans compte ni carte. Court, vrai, donne envie d'approfondir.
export const SOCLE: Notice[] = [
  { id: 'soe', titre: 'Système solaire', domaine: 'Sciences', resume: 'Le Soleil et huit planètes liées par la gravité ; la Terre est la seule connue à abriter la vie.', tags: ['espace', 'planètes', 'gravité'] },
  { id: 'gal', titre: 'Voie lactée', domaine: 'Sciences', resume: 'Notre galaxie, un disque de plus de cent milliards d’étoiles dont le Soleil n’est qu’un point lumineux.', tags: ['espace', 'galaxie', 'astronomie'] },
  { id: 'mit', titre: 'Mitose', domaine: 'Sciences', resume: 'La division cellulaire qui duplique chaque chromosome et fabrique deux cellules identiques, base de la croissance.', tags: ['cellule', 'biologie', 'vie'] },
  { id: 'pho', titre: 'Photosynthèse', domaine: 'Sciences', resume: 'Les feuilles transforment la lumière, l’eau et le dioxyde de carbone en sucre et en oxygène : presque tout respire grâce à elle.', tags: ['plante', 'énergie', 'biologie'] },
  { id: 'eau', titre: 'Cycle de l’eau', domaine: 'Sciences', resume: 'Évaporation, nuages, pluie, rivières : la même eau tourne depuis des milliards d’années sans jamais se consumer.', tags: ['eau', 'terre', 'climat'] },
  { id: 'vol', titre: 'Volcans', domaine: 'Sciences', resume: 'Des failles de la croûte terrestre où la lave remontée du manteau façonne îles et montagnes, parfois avec violence.', tags: ['terre', 'roche', 'danger'] },
  { id: 'sek', titre: 'Séismes', domaine: 'Sciences', resume: 'Les plaques tectiques frottent, la croûte casse et libère des ondes : c’est le tremblement de terre, mesuré en magnitude.', tags: ['terre', 'ondes', 'danger'] },
  { id: 'mno', titre: 'Magnétisme', domaine: 'Sciences', resume: 'Aimants et courants électriques créent un champ invisible ; la Terre elle-même est un aimant géant qui guide les boussoles.', tags: ['aimant', 'énergie', 'physique'] },
  { id: 'lum', titre: 'Lumière', domaine: 'Sciences', resume: 'Onde électromagnétique à 300 000 km/s ; sa diffusion dans l’air rend le ciel bleu et son arc-en-ciel cache toutes les couleurs.', tags: ['ondes', 'couleur', 'physique'] },
  { id: 'son', titre: 'Son', domaine: 'Sciences', resume: 'Des vibrations qui voyagent dans l’air, l’eau ou les solides ; sans support matériel, le son n’existe pas : le silence de l’espace est total.', tags: ['ondes', 'vibration', 'physique'] },
  { id: 'mat', titre: 'États de la matière', domaine: 'Sciences', resume: 'Solide, liquide, gaz : la même eau change d’humeur selon la température, et la chaleur cachée du changement d’état règle nos pluies.', tags: ['eau', 'énergie', 'physique'] },
  { id: 'atm', titre: 'Atmosphère', domaine: 'Sciences', resume: 'Une coquille de gaz de cent kilomètres, la première moitié pesée au ras du sol : elle respire, protège et tient la planète au chaud.', tags: ['air', 'terre', 'climat'] },
  { id: 'ele', titre: 'Électricité', domaine: 'Technique', resume: 'Le déplacement organisé des électrons dans un conducteur ; tout notre monde numérique n’est que de l’électricité mise en scène.', tags: ['énergie', 'courant', 'technique'] },
  { id: 'inf', titre: 'Informatique', domaine: 'Technique', resume: 'Des portes logiques faites de transistors, des millions de zéros et des uns, et naissent textes, images et intelligences.', tags: ['calcul', 'données', 'technique'] },
  { id: 'ia', titre: 'Intelligence artificielle', domaine: 'Technique', resume: 'Des réseaux de neurones entraînés sur d’énormes quantités de texte ou d’images savent reconnaître, traduire et converser.', tags: ['calcul', 'données', 'cerveau'] },
  { id: 'rob', titre: 'Robotique', domaine: 'Technique', resume: 'Capteurs pour sentir, moteurs pour agir, programmes pour décider : le robot est un outil qui commence à choisir lui-même.', tags: ['machine', 'capteur', 'technique'] },
  { id: 'geo', titre: 'Géométrie', domaine: 'Maths', resume: "L'étude des formes, des distances et de l'espace, d'Euclide aux géométries courbes qui ont inspiré Einstein.", tags: ['formes', 'espace', 'nombre'] },
  { id: 'alg', titre: 'Algèbre', domaine: 'Maths', resume: 'L’art de manipuler l’inconnue : une lettre devient une boîte de calcul et les équations ouvrent la solution pas à pas.', tags: ['nombre', 'équation', 'méthode'] },
  { id: 'pro', titre: 'Probabilités', domaine: 'Maths', resume: 'Mesurer le hasard avec rigueur : dès qu’un jeu, une météo ou un risque est chiffré, ce sont les probabilités qui parlent.', tags: ['hasard', 'nombre', 'décision'] },
  { id: 'fib', titre: 'Suite de Fibonacci', domaine: 'Maths', resume: 'Chaque terme est la somme des deux précédents ; on retrouve cette suite dans les tournesols, les pins et certaines coquilles.', tags: ['nombre', 'nature', 'motif'] },
  { id: 'nom', titre: 'Nombres premiers', domaine: 'Maths', resume: 'Des nombres que rien ne divise à part 1 et eux-mêmes ; les briques invisibles de l’arithmétique et du code secret moderne.', tags: ['nombre', 'arithmétique', 'secret'] },
  { id: 'pyt', titre: 'Pythagore', domaine: 'Maths', resume: 'Dans un triangle rectangle, le carré de l’hypoténuse égale la somme des carrés des deux autres côtés : l’outil des mesures depuis 2500 ans.', tags: ['formes', 'triangle', 'mesure'] },
  { id: 'evh', titre: 'Évolution', domaine: 'Histoire', resume: 'Par sélection naturelle, les êtres vivants se transforment sur des millions d’années : la diversité du vivant en est la trace.', tags: ['darwin', 'biologie', 'science'] },
  { id: 'ren', titre: 'Renaissance', domaine: 'Histoire', resume: 'Entre XIVe et XVIe siècle, arts, sciences et explorations éclatent en Europe : Léonard de Vinci en est l’esprit le plus curieux.', tags: ['art', 'science', 'europe'] },
  { id: 'imp', titre: 'Empires d’Afrique', domaine: 'Histoire', resume: 'Ghana, Mali, Songhaï, Grande-Zimbabwe : de grands empires ont prospéré sur l’or, le sel, le commerce et l’urbanisme bien avant la colonisation.', tags: ['afrique', 'commerce', 'or'] },
  { id: 'mer', titre: 'Mer et océans', domaine: 'Géographie', resume: 'L’eau salée couvre plus de 70 % de la planète, régule le climat et abrite une vie que nous cartographions moins bien que la Lune.', tags: ['eau', 'terre', 'climat'] },
  { id: 'clm', titre: 'Climat', domaine: 'Géographie', resume: 'Le climat est une moyenne de la météo sur trente ans ; le golfe du Mexique, le Sahara et nos saisons en dépendent comme d’une horloge.', tags: ['terre', 'air', 'sciences'] },
  { id: 'cor', titre: 'Cœur', domaine: 'Corps humain', resume: 'Une pompe muscle de 300 grammes qui bat cent mille fois par jour et irrigue chaque cellule de sang oxygéné.', tags: ['sang', 'vie', 'organe'] },
  { id: 'cer', titre: 'Cerveau', domaine: 'Corps humain', resume: 'Quatre-vingt-six milliards de neurones en réseau : penser, sentir et bouger ne sont que des courants et des chimies orchestres.', tags: ['neurone', 'vie', 'sens'] },
  { id: 'som', titre: 'Sommeil', domaine: 'Corps humain', resume: 'Chaque nuit le cerveau range la journée, consolide la mémoire et répare le corps ; dormir peu, c’est apprendre moins.', tags: ['cerveau', 'mémoire', 'vie'] },
  { id: 'mus', titre: 'Musique', domaine: 'Arts', resume: 'Des fréquences organisées dans le temps : rythmes et gammes varient selon les cultures mais le plaisir d’écouter est universel.', tags: ['son', 'art', 'culture'] },
  { id: 'cin', titre: 'Cinéma', domaine: 'Arts', resume: 'Vingt-quatre images par seconde suffisent à l’œil pour croire au mouvement : le cinéma est une illusion partagée devenue art majeur.', tags: ['image', 'art', 'technique'] },
  { id: 'lng', titre: 'Langues du monde', domaine: 'Langue', resume: 'Plus de sept mille langues parlées ; chacune découpe le réel à sa façon et en perdre une, c’est perdre une manière de penser.', tags: ['parole', 'culture', 'mémoire'] },
  { id: 'ecr', titre: 'Écriture', domaine: 'Langue', resume: 'Née à Sumer pour compter les greniers, l’écriture a étendu la mémoire humaine au-delà des individus et des siècles.', tags: ['symbole', 'histoire', 'mémoire'] },
  { id: 'bio', titre: 'Biodiversité', domaine: 'Environnement', resume: 'Des millions d’espèces liées dans un réseau vivant ; chaque disparité retire un maillon que rien ne remplace.', tags: ['vie', 'nature', 'équilibre'] },
  { id: 'for', titre: 'Forêts', domaine: 'Environnement', resume: 'Elles respirent pour la planète, abritent la plupart des espèces terrestres et régulent la pluie des continents.', tags: ['arbres', 'climat', 'nature'] },
  { id: 'rlf', titre: 'Récifs coralliens', domaine: 'Environnement', resume: 'Des villes vivantes bâties par de petits animaux : moins de un pour cent de l’océan, un quart de la vie marine.', tags: ['mer', 'vie', 'équilibre'] },
  { id: 'dch', titre: 'Déchets et recyclage', domaine: 'Environnement', resume: 'Rien dans la nature ne jette : nos déchets sont des matières qui attendent le bon geste, ou polluent longtemps.', tags: ['matière', 'équilibre', 'société'] },
  { id: 'slt', titre: 'Solaire photovoltaïque', domaine: 'Énergie', resume: 'La lumière du soleil devient électricité dans une galette de silicium : la Terre reçoit en une heure de soleil de quoi alimenter un an.', tags: ['énergie', 'soleil', 'technique'] },
  { id: 'eol', titre: 'Éolien', domaine: 'Énergie', resume: 'Le vent est une énergie solaire corrigée par la rotation de la Terre ; ses pales captent ce mouvement devenu courant.', tags: ['énergie', 'vent', 'technique'] },
  { id: 'nucl', titre: 'Nucléaire', domaine: 'Énergie', resume: 'Fissionner l’uranium libère une énergie immense sans fumée ; la question reste la gestion des déchets et le risque.', tags: ['énergie', 'atome', 'débat'] },
  { id: 'bat', titre: 'Batteries', domaine: 'Énergie', resume: 'Stockées chimiquement, les électrons attendent leur heure : sans batterie, le solaire et l’éolien ne pourraient suivre la nuit.', tags: ['énergie', 'stockage', 'technique'] },
  { id: 'urb', titre: 'Villes', domaine: 'Société', resume: 'Nées de greniers et de carrefours, elles logent aujourd’hui plus de la moitié de l’humanité et dessinent son avenir.', tags: ['habiter', 'société', 'histoire'] },
  { id: 'mon', titre: 'Monnaie', domaine: 'Société', resume: 'Du coquillage au chiffre : la monnaie n’a de valeur que celle de la confiance partagée, et l’économie tout entière s’appuie dessus.', tags: ['échange', 'confiance', 'société'] },
  { id: 'trv', titre: 'Travail', domaine: 'Société', resume: 'Chaque métier est une réponse à un besoin des autres ; l’automatisation déplace le travail plus qu’il ne le fait disparaître.', tags: ['métier', 'société', 'technique'] },
  { id: 'edu', titre: 'Éducation', domaine: 'Société', resume: 'Transmettre sans remplacer : apprendre, c’est ajouter à l’élève ce qu’il découvrira seul avec de l’aide.', tags: ['école', 'apprendre', 'société'] },
  { id: 'ntn', titre: 'Internet', domaine: 'Société', resume: 'Des câbles sous-marins et des routeurs d’abord : le nuage numérique est en réalité un réseau très physique autour de la Terre.', tags: ['réseau', 'données', 'société'] },
  { id: 'vac', titre: 'Vaccins', domaine: 'Médecine', resume: 'Montrer au corps le ennemi sans le danger : il en garde la mémoire et répond plus vite la fois suivante.', tags: ['corps', 'médecine', 'mémoire'] },
  { id: 'ant', titre: 'Antibiotiques', domaine: 'Médecine', resume: 'Des moisissures devenues médicaments : elles tuent les bactéries, et le surusage fabrique des bactéries devenues résistantes.', tags: ['médecine', 'bactérie', 'équilibre'] },
  { id: 'dgst', titre: 'Digestion', domaine: 'Corps humain', resume: 'Du bol alimentaire à l’énergie, un voyage de trente mètres où chaque organe joue son rôle à l’heure.', tags: ['corps', 'énergie', 'vie'] },
];

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
