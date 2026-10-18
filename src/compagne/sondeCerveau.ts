// La sonde de terrain — « ?sonde=cerveau ».
// Le bilan posait une limite honnête : le poids local n'avait été mesuré que
// sur un ordinateur. Mesurer sur les téléphones visés demande un instrument
// que quelqu'un manipule sur place, sans terminal ni console. Cette page
// l'est : elle pose des nombres en français simple — ce que la machine peut,
// ce qu'elle a téléchargé, combien de temps ça a pris.
// Doctrine respectée ici comme ailleurs : même sur un écran de mesure,
// aucun nom de technologie ne s'affiche. On décrit (« le gros cerveau »,
// « la variante fine ») ; les chiffres parlent pour le carnet de terrain.
import { creerCerveau, sondeGPU, type CerveauRaison } from './cerveau';

/** Toutes les mesures possibles ; null = non mesuré (rien n'est inventé). */
export interface MesuresSonde {
  /** La machine accepte-t-elle le calcul lourd ? */
  adaptateur: boolean;
  /** Dispose-t-elle du calcul le plus fin (variante légère possible) ? */
  precise: boolean;
  /** Variante que le gros cerveau a choisie ou choisira. */
  format: 'fin' | 'large' | 'inconnu';
  /** Mémoire que la machine accepte de prêter (Mo) ; null si inconnu. */
  memoirePreteeMo: number | null;
  /** Poids déjà posé sur la machine (Mo) ; null si inconnu. */
  poidsPoseMo: number | null;
  /** Secondes entre l'ordre et le cerveau prêt ; null si non mesuré. */
  atterrissageS: number | null;
  /** Millisecondes d'une réponse courte ; null si non mesuré. */
  reponseMs: number | null;
}

/** Le drapeau d'ouverture : seule « ?sonde=cerveau » lève la mesure. */
export function sondeDemandee(search: string): boolean {
  try {
    return new URLSearchParams(search).get('sonde') === 'cerveau';
  } catch {
    return false;
  }
}

// Nombres à la française : l'espace sépare les milliers (déterministe,
// sans dépendre de la locale du moteur).
const fmtFr = (n: number): string =>
  String(Math.round(n)).replace(/\B(?=(\d{3})+$)/g, ' ');

/** Traduire les mesures en lignes lisibles — zéro nom de machine. */
export function decrireSonde(m: MesuresSonde): string[] {
  const lignes: string[] = [];
  lignes.push(m.adaptateur
    ? 'Cette machine sait porter le gros cerveau local.'
    : 'Cette machine refuse le calcul nécessaire au gros cerveau — le petit moteur embarqué garde la main.');
  if (m.adaptateur && !m.precise) {
    lignes.push('Le calcul le plus fin manque ici : le gros cerveau prendra sa variante large, un peu plus lourde.');
  }
  lignes.push(`Variante du gros cerveau : ${m.format === 'inconnu' ? 'pas encore choisie' : m.format}.`);
  if (m.memoirePreteeMo !== null) {
    lignes.push(`Mémoire que la machine accepte de prêter : ${fmtFr(m.memoirePreteeMo)} Mo.`);
  }
  if (m.poidsPoseMo !== null) {
    lignes.push(`Déjà posé sur la machine : ${fmtFr(m.poidsPoseMo)} Mo.`);
  }
  if (m.atterrissageS !== null) {
    lignes.push(`Le gros cerveau a atterri en ${fmtFr(m.atterrissageS)} s.`);
  }
  if (m.reponseMs !== null) {
    lignes.push(`Une réponse courte a mis ${fmtFr(m.reponseMs)} ms.`);
  }
  return lignes;
}

// Une raison d'échec se dit en français d'usage — jamais un nom de machine.
const DIRE_RAISON: Record<CerveauRaison, string> = {
  ok: '',
  'sans-gpu': 'Cette machine refuse le calcul nécessaire.',
  reseau: 'Le téléchargement n’a pas pu passer — réseau trop faible ou coupé.',
  machine: 'Le cerveau est trop lourd pour cette machine ; le petit moteur embarqué garde la main.',
  inconnue: 'Une ligne que la sonde ne sait pas expliquer — notez-la, réessayez.',
};

const MO = 1024 * 1024;

/** Estimer ce que la machine prête et ce qu'elle porte déjà. */
async function memoireDeLaMachine(): Promise<{ preteeMo: number | null; poseeMo: number | null }> {
  try {
    const est = await navigator.storage?.estimate?.();
    return {
      preteeMo: est?.quota != null ? est.quota / MO : null,
      poseeMo: est?.usage != null ? est.usage / MO : null,
    };
  } catch {
    return { preteeMo: null, poseeMo: null };
  }
}

// Tout le texte rendu passe par textContent : la sonde n'injecte jamais de
// markup depuis des données (messages d'erreur compris).
const ligne = (texte: string): HTMLParagraphElement => {
  const p = document.createElement('p');
  p.textContent = texte;
  return p;
};

/** Monter la page de mesure dans `cible` ; rendu live des lignes et du bouton. */
export async function lancerSondeCerveau(cible: HTMLElement): Promise<void> {
  const h = await sondeGPU();
  const mesures: MesuresSonde = {
    adaptateur: h !== 'sans-gpu',
    precise: h === 'ok',
    format: h === 'ok' ? 'fin' : h === 'sans-f16' ? 'large' : 'inconnu',
    memoirePreteeMo: null,
    poidsPoseMo: null,
    atterrissageS: null,
    reponseMs: null,
  };

  const boite = document.createElement('div');
  boite.className = 'sonde-boite';
  const titre = document.createElement('h1');
  titre.textContent = 'Sonde de terrain';
  const aide = document.createElement('p');
  aide.className = 'sonde-aide';
  aide.textContent = 'Notez ou photographiez les lignes. Pour mesurer le cerveau complet, appuyez sur'
    + ' « Mesurer » et ne quittez pas la page — le premier appui télécharge, les suivants répondent.'
    + ' Wi-Fi recommandé la première fois.';
  const rendu = document.createElement('div');
  const bouton = document.createElement('button');
  bouton.type = 'button';
  bouton.textContent = 'Mesurer le gros cerveau';
  const pied = document.createElement('p');
  pied.className = 'sonde-aide';
  pied.textContent = 'Cette page ne remplace pas l’application ; elle regarde la machine rendre ses comptes.'
    + ' (Le drapeau « ?sonde=cerveau » dans l’adresse.)';
  boite.append(titre, aide, rendu, bouton, pied);
  cible.replaceChildren(boite);

  const feuille = document.createElement('style');
  feuille.textContent = `
    body { margin: 0; background: #0b0e1c; }
    .sonde-boite { color: #e8e6f0; font: 15px/1.6 system-ui, sans-serif; padding: 22px 16px; max-width: 640px; margin: 0 auto; }
    .sonde-boite h1 { font-size: 20px; }
    .sonde-boite p { margin: 8px 0; padding: 8px 10px; background: #151226; border-radius: 8px; }
    .sonde-aide { color: #9b97b5; font-size: 13px; }
    .sonde-boite button { margin-top: 12px; padding: 10px 18px; border-radius: 10px; border: 1px solid #6f5f9e; background: #241f3d; color: #efeaf8; font: 600 15px system-ui, sans-serif; cursor: pointer; }`;
  document.head.append(feuille);

  const decrire = (): void => {
    rendu.replaceChildren(...decrireSonde(mesures).map(ligne));
  };

  // Sans action : déjà savoir ce que la machine accepte de prêter.
  const memoire = await memoireDeLaMachine();
  mesures.memoirePreteeMo = memoire.preteeMo;
  mesures.poidsPoseMo = memoire.poseeMo;
  decrire();

  bouton.addEventListener('click', async () => {
    bouton.disabled = true;
    bouton.textContent = 'Je cherche la carte graphique…';
    const t0 = performance.now();
    const { cerveau, raison, modele } = await creerCerveau((p) => {
      bouton.textContent = `Téléchargement… ${Math.round(p * 100)} %`;
    });
    if (!cerveau) {
      bouton.disabled = false;
      bouton.textContent = 'Mesurer le gros cerveau';
      rendu.append(ligne(DIRE_RAISON[raison] ?? DIRE_RAISON.inconnue));
      return;
    }
    mesures.atterrissageS = (performance.now() - t0) / 1000;
    // La variante se devine de l'intérieur (f16 = fine, f32 = large) — le nom
    // complet du cerveau ne sort jamais sur l'écran.
    mesures.format = /f16/.test(modele ?? '') ? 'fin' : /f32/.test(modele ?? '') ? 'large' : mesures.format;
    bouton.textContent = 'Je pose une question…';
    const t1 = performance.now();
    try {
      const reponse = await cerveau.ask([
        { role: 'system', content: 'Réponds en une phrase très courte, sans salutation.' },
        { role: 'user', content: '25 × 8 = ?' },
      ]);
      mesures.reponseMs = performance.now() - t1;
      rendu.append(ligne(`Réponse du cerveau : ${reponse.slice(0, 120) || '(vide)'}`));
    } catch (e) {
      rendu.append(ligne(`Le cerveau est prêt mais la question a échoué : ${String(e instanceof Error ? e.message : e).slice(0, 140)}`));
    }
    bouton.disabled = false;
    bouton.textContent = 'Mesurer encore';
    decrire();
  });
}
