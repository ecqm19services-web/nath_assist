import { describe, it, expect } from 'vitest';
import { consentementLocal, demanderLocal } from '../src/compagne/cerveau';

// Le gros cerveau local pèse des centaines de mégaoctets. Sur un forfait payé à
// la mesure (marché FCFA), un téléchargement lancé sans que la personne ait dit
// oui n'est pas une attention, c'est une facture. Le oui se note une fois, il se
// relit ensuite — et rien de lourd ne part tant qu'il n'est pas là.

const fauxStock = (init: Record<string, string> = {}): Storage => {
  const données = new Map(Object.entries(init));
  return {
    getItem: (k: string) => données.get(k) ?? null,
    setItem: (k: string, v: string) => void données.set(k, v),
    removeItem: (k: string) => void données.delete(k),
    clear: () => données.clear(),
    length: données.size,
    key: (i: number) => [...données.keys()][i] ?? null,
  };
};

describe('le consentement au gros cerveau local', () => {
  it('sans oui consigné, il n y a pas de consentement', () => {
    expect(consentementLocal(fauxStock())).toBe(false);
  });

  it('un oui se note et se relit', () => {
    const s = fauxStock();
    demanderLocal(s);
    expect(consentementLocal(s)).toBe(true);
  });

  it('une valeur qui n est pas un oui ne vaut pas oui', () => {
    // On ne laisse pas un résidu d'un autre réglage ouvrir le robinet des données.
    for (const bruit of ['1', 'true', 'oui mais non', '', ' ']) {
      expect(consentementLocal(fauxStock({ 'nath.cerveau.local': bruit })), bruit).toBe(false);
    }
  });
});

describe('garde-fou: rien de lourd ne se lance tout seul', () => {
  const sources = import.meta.glob('../src/compagne/ui.ts', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  const ui = Object.values(sources)[0];

  it('le fichier de la compagnie est bien lu', () => {
    // Un garde-fou qui ne lit rien ne protège rien.
    expect(ui).toContain('function monterCerveauLocal');
  });

  it('le cerveau local est consenti avant le moindre octet', () => {
    // Le verrou doit être au pied de la montée en charge, pas seulement sur le
    // bouton : un appel oublié ailleurs dans le fichier ne doit pas repasser.
    const entete = ui.slice(ui.indexOf('function monterCerveauLocal'), ui.indexOf('creerCerveau('));
    expect(entete).toContain('consentementLocal(');
  });

  it('aucun demarrage automatique du gros telechargement', () => {
    expect(ui).not.toMatch(/gpuDisponible\(\)\)\s*monterCerveauLocal\(/);
  });

  it('le retissage de langue est accroche au vrai chemin de reponse', () => {
    // Une fonction juste et jamais appelee est une promesse menteuse : la
    // reprise doit etre branchee sur la chaine qui repond a la personne.
    expect(ui).toMatch(/if \(fautIlRetisser\(b\)/);
    expect(ui).toContain('ancreLangue(');
  });
});

// Le hors-ligne est une promesse : recharger sans réseau. Mais un pré-cache qui
// embarque le moteur local de 6 Mo facture ce poids à chaque première visite,
// y compris à la personne qui n'en a jamais voulu. Le gros morceau se charge
// quand on le demande, jamais quand on ouvre la page.
describe("le hors-ligne ne paie pas le gros cerveau", () => {
  const fichiers = import.meta.glob('../{vite.config.ts,src/compagne/cerveau.ts}', {
    query: '?raw',
    import: 'default',
    eager: true,
  }) as Record<string, string>;
  const config = fichiers['../vite.config.ts'];
  const cerveau = fichiers['../src/compagne/cerveau.ts'];

  it('les deux fichiers sont bien lus', () => {
    // Un garde-fou qui ne lit rien ne protège rien.
    expect(config).toContain('VitePWA');
    expect(cerveau).toContain("import('@mlc-ai/web-llm')");
  });

  it('le morceau lourd porte un nom reconnaissable', () => {
    // Sans nom, il se fond dans assets/index-*.js et le pré-cache l'avale.
    expect(cerveau).toMatch(/webpackChunkName:\s*["']cerveau-local["']/);
  });

  it('le pre-cache ecarte explicitement le morceau lourd', () => {
    // La pièce de 6 Mo doit être explicitement écartée du pré-cache.
    expect(config).toMatch(/globIgnores[\s\S]*cerveau-local/);
  });

  it('le hors-ligne reste leger par construction', () => {
    // Le plafond de taille doit être abaissé : plus rien d'aussi lourd n'a
    // le droit d'entrer dans le pré-cache.
    expect(config).not.toMatch(/maximumFileSizeToCacheInBytes:\s*10 \* 1024 \* 1024/);
  });
});

// Relancer une page hors réseau marche : la coquille est pré-cachée et le
// Service Worker la sert. Une liaison profonde (un lien partagé, une page
// ouverte à l'avance) retombait sur un refus du serveur : le repli de navigation
// écartait TOUTES les URL absolues, donc aussi celles de l'app elle-même.
describe("le hors-ligne ne trahit pas les liens", () => {
  const sources = import.meta.glob('../vite.config.ts', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  const config = Object.values(sources)[0];

  it('la configuration est bien lue', () => {
    expect(config).toContain('workbox');
  });

  it('le repli de navigation est dit null, pas oublie', () => {
    // Omis, le repli revient tout seul et écrase la vitrine en silence.
    expect(config).toMatch(/navigateFallback:\s*null/);
    expect(config).not.toMatch(/navigateFallbackDenylist/);
  });

  it('la coquille et la vitrine sont bien pré-cachées', () => {
    // Sans repli, le hors-ligne repose sur le pré-cache : les deux pages doivent
    // entrer dans la liste, d'où le "html" dans les motifs.
    expect(config).toMatch(/globPatterns:\s*\[[^\]]*html[^\]]*\]/);
  });
});

// Ce que la promesse tient vraiment se lit dans le Service Worker produit, pas
// dans les intentions du config. Si « npm.cmd run build » n'a pas tourné, ce
// garde-fou est sauté : le faire suivre avant de marquer le hors-ligne vrai.
describe('le service worker produit tient la promesse', () => {
  const bruts = import.meta.glob('../**/sw.js', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  const sw = Object.entries(bruts).find(([chemin]) => /sw\.js$/.test(chemin))?.[1] ?? '';

  it('le fichier est lu', () => {
    expect(sw).toContain('precacheAndRoute');
  });

  it('aucune route de navigation ne sert la coquille à la place des autres pages', () => {
    expect(sw).not.toContain('NavigationRoute');
  });

  it('les deux pages repondront hors réseau', () => {
    expect(sw).toMatch(/url:"index\.html"/);
    expect(sw).toMatch(/url:"entreprise\.html"/);
  });

  it('le gros morceau local reste hors du pre-cache', () => {
    expect(sw).not.toMatch(/cerveau-local/);
  });
});
