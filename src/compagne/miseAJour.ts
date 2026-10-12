// Le site est servi par GitHub Pages derrière un Service Worker : un visiteur qui
// revient tient la version d’avant jusqu’à recharger — le fallback de navigation
// sert l’index.html en cache. Recharger tout seul serait grossier (la conversation
// en cours, la voix en train de parler). On compare donc ce que le réseau sert à
// ce qui tourne, et on propose le geste à celui qui le veut bien.
//
// Le paramètre d’échappement de la sonde n’est pas un détail : sans lui, la
// requête taperait dans le cache du Service Worker, la sonde se répondrait à
// elle-même, et rien ne changerait jamais.

/** Le nom du bundle annoncé par une page. */
export function nomDuBundle(html: string): string | null {
  const annonce = html.match(/assets\/index-[\w-]+\.js/);
  return annonce ? annonce[0].split('/').pop() ?? null : null;
}

/** Ce qui est en ligne est-il autre chose que ce qui tourne ? */
export function servicePlusRecent(servi: string | null, bundleActuel: string): boolean {
  return !!servi && servi !== bundleActuel;
}

/** Ce que le visiteur a déjà refusé doit s’oublier tout seul à la version suivante. */
export interface Magasin {
  getItem(cle: string): string | null;
  setItem(cle: string, valeur: string): void;
}

const CLE_ECARTEE = 'nath.mise-a-jour.ecartee';

export function estEcartee(store: Magasin, bundleServ: string): boolean {
  try {
    return store.getItem(CLE_ECARTEE) === bundleServ;
  } catch {
    return false;
  }
}

export function ecarter(store: Magasin, bundleServ: string): void {
  try {
    store.setItem(CLE_ECARTEE, bundleServ);
  } catch {
    // Navigation privée, quota plein, magasin muet : on ne fait pas de scène.
  }
}

export interface ReglagesSonde {
  fetchImpl: typeof fetch;
  bundleActuel: string;
  page: string;
}

/** Le nom du bundle réellement en ligne — null quand le réseau ne répond pas. */
export async function bundleEnLigne(
  fetchImpl: typeof fetch,
  page: string,
): Promise<string | null> {
  try {
    const marque = page.includes('?') ? '&' : '?';
    const reponse = await fetchImpl(`${page}${marque}revoir=${Date.now()}`, { cache: 'no-store' });
    return reponse.ok ? nomDuBundle(await reponse.text()) : null;
  } catch {
    return null;
  }
}

/** Sonde le réseau, une fois. Un échec réseau n’est jamais une mise à jour. */
export async function verifierMiseAJour({ fetchImpl, bundleActuel, page }: ReglagesSonde): Promise<boolean> {
  return servicePlusRecent(await bundleEnLigne(fetchImpl, page), bundleActuel);
}

/** Le nom de son propre fichier, tel que le navigateur l’a chargé. */
export function bundleCourant(): string {
  return import.meta.url.split('/').pop()?.split('?')[0] ?? '';
}

function creerPuce(bundle: string, store: Magasin): void {
  const poche = document.createElement('div');
  poche.className = 'maj-puce visible';

  const agir = document.createElement('button');
  agir.type = 'button';
  agir.className = 'maj-agir';
  agir.textContent = 'Nouvelle version prête — recharger';
  agir.title = 'Rien ne se recharge tout seul : appuie quand tu veux changer de version';
  agir.addEventListener('click', () => window.location.reload());

  const refus = document.createElement('button');
  refus.type = 'button';
  refus.className = 'maj-refus';
  refus.textContent = '×';
  refus.setAttribute('aria-label', 'Ne pas recharger maintenant');
  refus.title = 'Pour cette version-là, on n’y revient plus';
  refus.addEventListener('click', () => {
    ecarter(store, bundle);
    poche.remove();
  });

  poche.append(agir, refus);
  document.body.append(poche);
}

/**
 * Surveille la version en ligne : une première sonde peu après l’ouverture, puis
 * à chaque retour dans l’onglet — c’est là qu’un visiteur de retour atterrit.
 * Discrète : la puce n’existe que quand il y a vraiment du neuf, un refus la tue
 * pour la version concernée, et une nouveauté d’après repart de zéro.
 */
export function surveillerMiseAJour(fetchImpl: typeof fetch = fetch): void {
  if (typeof document === 'undefined') return;
  const page = window.location.href.split('?')[0];
  const actuel = bundleCourant();
  if (!actuel) return; // on ne sait pas quelle version tourne : on ne promet rien

  const store: Magasin = {
    getItem: (cle) => {
      try {
        return sessionStorage.getItem(cle);
      } catch {
        return null;
      }
    },
    setItem: (cle, valeur) => {
      try {
        sessionStorage.setItem(cle, valeur);
      } catch {
        // magasin muet : la proposition restera, c’est tout.
      }
    },
  };

  let presentee = false;
  const sonder = async (): Promise<void> => {
    if (presentee) return;
    const neuf = await bundleEnLigne(fetchImpl, page);
    if (!servicePlusRecent(neuf, actuel) || !neuf || estEcartee(store, neuf)) return;
    presentee = true;
    creerPuce(neuf, store);
  };

  // On laisse passer le gros téléchargement du cerveau : sonder plus tôt ne
  // ferait que faire de la concurrence au réseau.
  window.setTimeout(() => void sonder(), 8000);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') void sonder();
  });
}
