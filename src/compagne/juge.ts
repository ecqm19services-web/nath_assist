// Le juge d'ailleurs : la famille des modèles de décision (Jev de TypeSafe,
// Clef de Cloudflare — même API : un état, des questions typées, des
// probabilités) peut dire si l'instant est bien choisi pour prendre la parole.
// Ce n'est pas un chat : ça ne parle pas, ça tranche. Ici, une seule question,
// « parler » (noul), et une ligne : sous 0.45 de probabilité, la compagne
// laisse passer son tour. Sans adresse réglée, hors-ligne, ou réponse
// invalide → null : le juge ne remplace jamais la vie intérieure, il l'éclaire.
import { decider } from './cerveauNet';

export interface JugeCtx {
  emotion: string;
  breath: number; // 0..1
  bpm: number | null;
  timeOfDay: number; // 0..1 (0 = minuit)
}

// Sobre : l'essentiel du ressenti, en une ligne. Ni prénom, ni phrase —
// le juge a besoin du climat, pas de la vie privée.
export function etatPourJuger(c: JugeCtx): string {
  const heure = Math.floor(c.timeOfDay * 24);
  const coeur = c.bpm != null ? `coeur ${c.bpm} bpm` : 'coeur discret';
  return `humeur ${c.emotion}, souffle ${Math.round(c.breath * 100)}%, ${coeur}, ${heure}h`;
}

const QUESTIONS = {
  parler: {
    type: 'noul',
    instructions: "Est-ce un bon moment pour prendre la parole toute seule, sans interrompre ?",
  },
} as const;

const SEUIL_PAROLE = 0.45;

// Une probabilité tranche, rien d'autre. Réponse absente ou hors bornes →
// null : on n'invente jamais une décision.
function trancherCle(reponses: Record<string, unknown> | null, cle: string, seuil: number): boolean | null {
  const r = reponses?.[cle] as { noul?: unknown } | undefined;
  const p = r?.noul;
  if (typeof p !== 'number' || !Number.isFinite(p) || p < 0 || p > 1) return null;
  return p >= seuil;
}

export function trancher(reponses: Record<string, unknown> | null, seuil = SEUIL_PAROLE): boolean | null {
  return reponses === null ? null : trancherCle(reponses, 'parler', seuil);
}

// Interroger le juge sur place : une requête, une probabilité, un avis.
export async function jugerSurPlace(
  endpoint: string,
  ctx: JugeCtx,
  fetchImpl: typeof fetch = fetch,
): Promise<boolean | null> {
  const reponses = await decider(endpoint, etatPourJuger(ctx), QUESTIONS, fetchImpl);
  return trancher(reponses);
}

// Le garde-fou : avant de laisser une réponse du grand cerveau atteindre
// l'écran, un modèle de décision vérifie qu'elle tient la route. Hors cap
// (false) → la réponse locale reprend la main ; muet (null) → rien ne change.
export async function garderCap(
  endpoint: string,
  question: string,
  reponse: string,
  fetchImpl: typeof fetch = fetch,
): Promise<boolean | null> {
  const etat = `Question : ${question.slice(0, 300)}\nRéponse proposée : ${reponse.slice(0, 600)}`;
  const reponses = await decider(
    endpoint,
    etat,
    {
      approprie: { type: 'noul', instructions: 'La réponse proposée tient-elle la route pour cette question — fidèle et ni hors sujet ?' },
      sain: { type: 'noul', instructions: 'La réponse proposée est-elle sans danger pour l élève qui va la lire ?' },
    },
    fetchImpl,
  );
  // Deux questions, une volée : un seul doute suffit à retenir ; deux avis
  // muets ne décident de rien.
  const a = trancherCle(reponses, 'approprie', SEUIL_PAROLE);
  const s = trancherCle(reponses, 'sain', SEUIL_PAROLE);
  if (a === false || s === false) return false;
  if (a === true || s === true) return true;
  return null;
}

// Le pouls de l'instant : score sur trois niveaux (0 posée, 1 agitée,
// 2 à apaiser). Null = juge muet, le ciel suit sa route.
export async function scorerTension(
  endpoint: string,
  ctx: JugeCtx,
  fetchImpl: typeof fetch = fetch,
): Promise<number | null> {
  const reponses = await decider(
    endpoint,
    etatPourJuger(ctx),
    {
      tension: {
        type: 'score',
        instructions: 'Quel est le niveau de tension de l’instant ?',
        criteria: ['posée', 'agitée', 'à apaiser'],
      },
    },
    fetchImpl,
  );
  const s = (reponses?.tension as Record<string, unknown> | undefined)?.score;
  return typeof s === 'number' && Number.isFinite(s) && s >= 0 && s <= 2 ? s : null;
}

// L'avis du rang : parmi les paquets existants, lequel colle à la dictée ?
// Le choix de l'utilisateur (paquet explicitement sélectionné) prime toujours —
// ici on ne pose la question que quand rien n'est choisi.
export async function choisirPaquet(
  endpoint: string,
  texte: string,
  paquets: string[],
  fetchImpl: typeof fetch = fetch,
): Promise<string | null> {
  const noms = paquets.slice(0, 50);
  if (!noms.length) return null;
  const crit: Record<string, string> = {};
  for (const n of noms) crit[n] = `Paquet de cartes « ${n} »`;
  const reponses = await decider(
    endpoint,
    `Dictée de l'élève : ${texte.slice(0, 800)}`,
    { rang: { type: 'choice', instructions: 'Dans quel paquet cette dictée a-t-elle le plus de sens ? Choisis uniquement un paquet ci-dessus.', criteria: crit } },
    fetchImpl,
  );
  const c = (reponses?.rang as Record<string, unknown> | undefined)?.choice;
  return typeof c === 'string' && noms.includes(c) ? c : null;
}

// L’œil du juge sur le filet : avant de proposer une traduction au carnet
// partagé, un modèle de décision vérifie qu elle dit la même chose. Infidèle
// (false) → on avertit et on ne range pas ; muet (null) → l étiquette
// habituelle suffit, rien ne change pour l élève.
export async function jugerTraduction(
  endpoint: string,
  texte: string,
  traduction: string,
  langue: string,
  fetchImpl: typeof fetch = fetch,
): Promise<boolean | null> {
  const etat = `Langue demandée : ${langue.slice(0, 60)}\nTexte de l élève : ${texte.slice(0, 200)}\nTraduction proposée : ${traduction.slice(0, 300)}`;
  const reponses = await decider(
    endpoint,
    etat,
    { fidele: { type: 'noul', instructions: 'La traduction proposée dit-elle fidèlement la même chose que le texte d origine, dans la langue demandée ?' } },
    fetchImpl,
  );
  return trancherCle(reponses, 'fidele', SEUIL_PAROLE);
}

// La pensée du moment : parmi les monologues que la règle locale a choisis,
// le juge peut désigner la plus juste pour l instant. Une seule pensée : pas
// de vote, pas de requête. Hors liste ou muet → null : le hasard local,
// déjà bon, garde la main.
export async function choisirPensee(
  endpoint: string,
  ctx: JugeCtx,
  candidats: string[],
  fetchImpl: typeof fetch = fetch,
): Promise<string | null> {
  if (!candidats.length) return null;
  if (candidats.length === 1) return candidats[0];
  const crit: Record<string, string> = {};
  candidats.forEach((m, i) => {
    crit[m] = `Pensée ${i + 1}`;
  });
  const reponses = await decider(
    endpoint,
    etatPourJuger(ctx),
    { pensee: { type: 'choice', instructions: 'Parmi ces pensées, laquelle est la plus juste pour l instant décrit ? Choisis uniquement une pensée ci-dessus.', criteria: crit } },
    fetchImpl,
  );
  const c = (reponses?.pensee as Record<string, unknown> | undefined)?.choice;
  return typeof c === 'string' && candidats.includes(c) ? c : null;
}
