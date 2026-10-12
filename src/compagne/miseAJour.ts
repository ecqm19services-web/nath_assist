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

export interface ReglagesSonde {
  fetchImpl: typeof fetch;
  bundleActuel: string;
  page: string;
}

/** Sonde le réseau, une fois. Un échec réseau n’est jamais une mise à jour. */
export async function verifierMiseAJour({ fetchImpl, bundleActuel, page }: ReglagesSonde): Promise<boolean> {
  try {
    const marque = page.includes('?') ? '&' : '?';
    const reponse = await fetchImpl(`${page}${marque}revoir=${Date.now()}`, { cache: 'no-store' });
    if (!reponse.ok) return false;
    return servicePlusRecent(nomDuBundle(await reponse.text()), bundleActuel);
  } catch {
    return false;
  }
}

/** Le nom de son propre fichier, tel que le navigateur l’a chargé. */
export function bundleCourant(): string {
  return import.meta.url.split('/').pop()?.split('?')[0] ?? '';
}

function creerPuce(): HTMLElement {
  const puce = document.createElement('button');
  puce.type = 'button';
  puce.className = 'maj-puce';
  puce.textContent = 'Nouvelle version prête — recharger';
  puce.title = 'Rien ne se recharge tout seul : appuie quand tu veux changer de version';
  puce.setAttribute('aria-label', 'Recharger pour obtenir la nouvelle version');
  puce.addEventListener('click', () => window.location.reload());
  document.body.append(puce);
  return puce;
}

/**
 * Surveille la version en ligne : une première sonde peu après l’ouverture, puis
 * à chaque retour dans l’onglet — c’est là qu’un visiteur de retour atterrit.
 * Discrète : la puce n’existe que quand il y a vraiment du neuf, et ne part pas
 * toute seule.
 */
export function surveillerMiseAJour(fetchImpl: typeof fetch = fetch): void {
  if (typeof document === 'undefined') return;
  const page = window.location.href.split('?')[0];
  const actuel = bundleCourant();
  if (!actuel) return; // on ne sait pas quelle version tourne : on ne promet rien

  let prevenue = false;
  const sonder = async (): Promise<void> => {
    if (prevenue) return;
    if (await verifierMiseAJour({ fetchImpl, bundleActuel: actuel, page })) {
      prevenue = true;
      creerPuce().classList.add('visible');
    }
  };

  // On laisse passer le gros téléchargement du cerveau : sonder plus tôt ne
  // ferait que faire de la concurrence au réseau.
  window.setTimeout(() => void sonder(), 8000);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') void sonder();
  });
}
