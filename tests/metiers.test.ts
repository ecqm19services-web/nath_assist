// Les « indispensables de métier » — un onglet hors-ligne où chaque pack
// (Couture, Boulangerie, Électricité…) enseigne les tâches clés, le vocabulaire
// exact et les pièges du premier jour. Données réelles de terrain, en français
// simple, sans jargon technique à l'écran (doctrine).
import { describe, expect, it } from 'vitest';
import {
  CLE_PROGRESSION,
  PACKS,
  avancerJour,
  motDuJour,
  ordonnerPourCrise,
  packsPourPays,
  piegeDuJour,
  progressionDe,
  trouverPack,
  tacheDuJour,
} from '../src/metiers/pack';

const stockageFake = (): Pick<Storage, 'getItem' | 'setItem'> => {
  const m = new Map<string, string>();
  return {
    getItem: (k: string) => m.get(k) ?? null,
    setItem: (k: string, v: string) => void m.set(k, v),
  };
};

describe('PACKS — les paquets métiers livrés', () => {
  it('au moins vingt-quatre métiers (vagues 1 à 6)', () => {
    expect(PACKS.length).toBeGreaterThanOrEqual(24);
  });
  it('ids uniques', () => {
    expect(new Set(PACKS.map((p) => p.id)).size).toBe(PACKS.length);
  });
  it('nom, résumé, emoji : chaque pack se présente', () => {
    for (const p of PACKS) {
      expect(p.nom.trim().length).toBeGreaterThan(2);
      expect(p.resume.trim().length).toBeGreaterThan(10);
      expect(p.emoji.trim().length).toBeGreaterThan(0);
    }
  });
  it('au moins 5 tâches, 6 mots de vocabulaire, 3 pièges par métier', () => {
    for (const p of PACKS) {
      expect(p.taches.length).toBeGreaterThanOrEqual(5);
      expect(p.glossaire.length).toBeGreaterThanOrEqual(6);
      expect(p.pieges.length).toBeGreaterThan(2);
    }
  });
  it('chaque tâche porte au moins deux gestes concrets', () => {
    for (const p of PACKS) for (const t of p.taches) expect(t.gestes.length).toBeGreaterThanOrEqual(2);
  });
  it('chaque piège se termine par ce qu’il faut faire, pas seulement ce qu’il faut craindre', () => {
    for (const p of PACKS) for (const x of p.pieges) expect(x.eviter.trim().length).toBeGreaterThan(5);
  });
  it('aucun mot technique à l’écran : jamais nommer la machine (doctrine)', () => {
    const texte = JSON.stringify(PACKS).toLowerCase();
    for (const w of ['algorithme', 'localstorage', 'base64', 'webgl', 'webgpu', 'wasm', 'llama', 'qwen', 'mistral', 'tensorflow']) {
      expect(texte).not.toContain(w);
    }
  });
});

describe('trouverPack', () => {
  it('par id → le bon pack', () => {
    expect(trouverPack(PACKS[0].id)).toBe(PACKS[0]);
  });
  it('id inconnu → null (le hors-sujet n’écrase rien)', () => {
    expect(trouverPack('inexistant')).toBeNull();
  });
});

describe('tâche / mot / piège du jour — le cycle honnête', () => {
  const p = PACKS[0];
  it('tous les passages tombent sur un élément réel du pack, puis bouclent', () => {
    for (let i = 0; i < p.taches.length; i++) expect(p.taches).toContain(tacheDuJour(p, i));
    expect(tacheDuJour(p, p.taches.length)).toBe(tacheDuJour(p, 0));
  });
  it('motDuJour cycle sur le glossaire', () => {
    expect(p.glossaire).toContain(motDuJour(p, 3));
    expect(motDuJour(p, p.glossaire.length)).toBe(motDuJour(p, 0));
  });
  it('piegeDuJour cycle aussi, même sur un grand index', () => {
    expect(p.pieges).toContain(piegeDuJour(p, 999));
  });
});

describe('progression du jour (stockage local)', () => {
  it('sans clé → on démarre au jour 0', () => {
    expect(progressionDe(PACKS[0].id, stockageFake())).toBe(0);
  });
  it('avancerJour incrémente et persiste', () => {
    const s = stockageFake();
    const id = PACKS[0].id;
    expect(avancerJour(id, s)).toBe(1);
    expect(avancerJour(id, s)).toBe(2);
    expect(progressionDe(id, s)).toBe(2);
  });
  it('deux packs tiennent chacun leur compteur', () => {
    const s = stockageFake();
    avancerJour(PACKS[0].id, s);
    avancerJour(PACKS[0].id, s);
    expect(avancerJour(PACKS[1].id, s)).toBe(1);
    expect(progressionDe(PACKS[0].id, s)).toBe(2);
  });
  it('la clé vit sous « nath. » : le coffre l’emporte sans rien ajouter', () => {
    expect(CLE_PROGRESSION.startsWith('nath.')).toBe(true);
  });
  it('donnée menteur (pas du JSON) → 0, jamais de plantage', () => {
    const s = stockageFake();
    s.setItem(CLE_PROGRESSION, 'ceci n’est pas du json');
    expect(progressionDe(PACKS[0].id, s)).toBe(0);
  });
  it('effacer une progression → retour à 0, mais rien de cassé', () => {
    const s = stockageFake();
    const id = PACKS[0].id;
    avancerJour(id, s);
    avancerJour(id, s);
    // Repartir de zéro = écrire 0 ; lire relit 0.
    s.setItem(CLE_PROGRESSION, JSON.stringify({ ...JSON.parse(s.getItem(CLE_PROGRESSION) as string), [id]: 0 }));
    expect(progressionDe(id, s)).toBe(0);
  });
});

// La deuxième vague cible le marché sénégalais : cuisine locale + premiers soins,
// deux « indispensables » très concrets et vérifiables par n'importe qui.
describe('vague 2 — cuisine sénégalaise et premiers soins', () => {
  it('les deux nouveaux ids existent', () => {
    expect(trouverPack('cuisine-senegalaise')).not.toBeNull();
    expect(trouverPack('premiers-soins')).not.toBeNull();
  });
  it('cuisine sénégalaise porte les plats et produits du pays', () => {
    const p = trouverPack('cuisine-senegalaise')!;
    const texte = JSON.stringify(p).toLowerCase();
    for (const mot of ['thiéboudienne', 'yassa', 'mafé', 'thiof']) {
      expect(texte).toContain(mot);
    }
  });
  it('premiers soins cite le schéma officiel et les gestes qui sauvent', () => {
    const p = trouverPack('premiers-soins')!;
    const texte = JSON.stringify(p).toLowerCase();
    expect(texte).toContain('protéger');
    expect(texte).toContain('alerter');
    expect(texte).toContain('secourir');
    expect(texte).toContain('30 compressions');
    expect(texte).toContain('position latérale de sécurité');
  });
  it('aucun faux conseil médical : chaque piège dit clairement « ne pas »', () => {
    const p = trouverPack('premiers-soins')!;
    for (const piege of p.pieges) {
      // Une négation claire évite qu'on lise un conseil dangereux dans le texte.
      expect(piege.eviter).toMatch(/\bne (jamais|pas|rien)\b/i);
    }
  });
});

describe('vague 3 — au-delà du Sénégal : pays, crise, approvisionnement', () => {
  it('les trois nouveaux ids existent', () => {
    expect(trouverPack('cuisine-afrique-ouest')).not.toBeNull();
    expect(trouverPack('crise-survie')).not.toBeNull();
    expect(trouverPack('approvisionnement')).not.toBeNull();
  });
  it('crise-survie couvre les essentiels sans hôpital : eau, plaie, SRO, rationnement', () => {
    const p = trouverPack('crise-survie')!;
    const t = JSON.stringify(p).toLowerCase();
    for (const m of ['ébullition', 'plaie', 'sro', 'rationnement']) {
      expect(t).toContain(m);
    }
    // Sécurité médicale : chaque piège doit être écrit comme une négation claire.
    for (const piege of p.pieges) {
      expect(piege.eviter).toMatch(/\bne (jamais|pas|rien)\b/i);
    }
  });
  it('approvisionnement reste un métier, pas une panique', () => {
    const p = trouverPack('approvisionnement')!;
    const t = JSON.stringify(p).toLowerCase();
    for (const m of ['stock tampon', 'fournisseur', 'prix']) {
      expect(t).toContain(m);
    }
  });
  it('cuisine AO : banku, attiéké, jollof et foufou au menu', () => {
    const p = trouverPack('cuisine-afrique-ouest')!;
    const t = JSON.stringify(p).toLowerCase();
    for (const m of ['banku', 'attiéké', 'jollof', 'foufou']) {
      expect(t).toContain(m);
    }
  });
  it('PackMetier accepte un champ pays optionnel (undefined = universel)', () => {
    for (const p of PACKS) {
      if (p.pays !== undefined) expect(Array.isArray(p.pays)).toBe(true);
    }
  });
  it('packsPourPays("SN") garde universel + SN ; filtre les autres', () => {
    const sn = packsPourPays(PACKS, 'SN');
    const ids = sn.map((p) => p.id);
    expect(ids).toContain('couture');
    expect(ids).toContain('cuisine-senegalaise');
    // Le pack sénégalais ne doit PAS être filtré ; un pack exclusivement CI ne doit pas sortir.
    const pseudoCI = { ...PACKS[0], id: 'test-ci-only', pays: ['CI'] };
    expect(packsPourPays([pseudoCI], 'SN').map((p) => p.id)).not.toContain('test-ci-only');
  });
  it('packsPourPays("") renvoie tout (aucun filtrage)', () => {
    expect(packsPourPays(PACKS, '').length).toBe(PACKS.length);
  });
  it('ordonnerPourCrise met « crise-survie » et « approvisionnement » en tête', () => {
    const out = ordonnerPourCrise(PACKS);
    expect(out.slice(0, 2).map((p) => p.id).sort()).toEqual(['approvisionnement', 'crise-survie']);
  });
});

// La vague 5 vise les gestes du quotidien les plus demandés sur le terrain :
// pêche, élevage, santé communautaire, cordonnerie, plomberie, peinture.
describe('vague 5 — pêche, élevage, santé, cordonnerie, plomberie, peinture', () => {
  const NOUVEAUX = [
    { id: 'peche-artisanale', marqueurs: ['seine', 'maillage', 'casier', 'jeun'] },
    { id: 'elevage', marqueurs: ['vaccin', 'abreuvoir', 'litière', 'mortalité'] },
    { id: 'sante-communautaire', marqueurs: ['moustiquaire', 'sro', 'hygiène', 'référer'] },
    { id: 'cordonnerie', marqueurs: ['semelle', 'talon', 'alêne', 'couture'] },
    { id: 'plomberie', marqueurs: ['siphon', 'téflon', 'fuite', 'robinet'] },
    { id: 'peinture', marqueurs: ['sous-couche', 'rouleau', 'enduit', 'croisé'] },
  ];
  for (const n of NOUVEAUX) {
    it(`le pack ${n.id} existe et est correctement structuré`, () => {
      const p = trouverPack(n.id)!;
      expect(p).not.toBeNull();
      expect(p.taches.length).toBeGreaterThanOrEqual(5);
      expect(p.glossaire.length).toBeGreaterThanOrEqual(6);
      expect(p.pieges.length).toBeGreaterThan(2);
      for (const t of p.taches) expect(t.gestes.length).toBeGreaterThanOrEqual(2);
    });
    it(`le pack ${n.id} contient les mots-clés de son métier`, () => {
      const p = trouverPack(n.id)!;
      const t = JSON.stringify(p).toLowerCase();
      for (const m of n.marqueurs) expect(t).toContain(m.toLowerCase());
    });
  }
  it('santé communautaire : aucun faux conseil — chaque piège dit clairement « ne pas »', () => {
    const p = trouverPack('sante-communautaire')!;
    for (const piege of p.pieges) {
      expect(piege.eviter).toMatch(/\bne (jamais|pas|rien)\b/i);
    }
  });
  it('les six packs interdisent explicitement leurs erreurs graves', () => {
    for (const n of NOUVEAUX) {
      const p = trouverPack(n.id)!;
      for (const piege of p.pieges) {
        expect(piege.eviter).toMatch(/\bne (jamais|pas|rien)\b/i);
      }
    }
  });
});

// La vague 6 couvre les métiers de rapport les plus pratiqués : bois, cuisine
// qui se vend, miel, boutique, métal, produits d'entretien.
describe('vague 6 — menuiserie, transformation, apiculture, boutique, soudure, entretien', () => {
  const NOUVEAUX = [
    { id: 'menuiserie', marqueurs: ['équerre', 'raboter', 'assemblage', 'ponce'] },
    { id: 'transformation-alimentaire', marqueurs: ['bocal', 'étiquette', 'péremption', 'ébullition'] },
    { id: 'apiculture', marqueurs: ['ruche', 'enfumoir', 'cadre', 'essaim'] },
    { id: 'gestion-boutique', marqueurs: ['stock', 'caisse', 'inventaire', 'marge'] },
    { id: 'soudure', marqueurs: ['masque', 'baguette', 'tôle', 'étincelle'] },
    { id: 'produits-entretien', marqueurs: ['savon', 'lessive', 'gant', 'dosage'] },
  ];
  for (const n of NOUVEAUX) {
    it(`le pack ${n.id} existe et est correctement structuré`, () => {
      const p = trouverPack(n.id)!;
      expect(p).not.toBeNull();
      expect(p.taches.length).toBeGreaterThanOrEqual(5);
      expect(p.glossaire.length).toBeGreaterThanOrEqual(6);
      expect(p.pieges.length).toBeGreaterThan(2);
      for (const t of p.taches) expect(t.gestes.length).toBeGreaterThanOrEqual(2);
    });
    it(`le pack ${n.id} contient les mots-clés de son métier`, () => {
      const p = trouverPack(n.id)!;
      const t = JSON.stringify(p).toLowerCase();
      for (const m of n.marqueurs) expect(t).toContain(m.toLowerCase());
    });
  }
  it('la vague 6 entier dit toujours « ne pas » dans ses pièges', () => {
    for (const n of NOUVEAUX) {
      const p = trouverPack(n.id)!;
      for (const piege of p.pieges) {
        expect(piege.eviter).toMatch(/\bne (jamais|pas|rien)\b/i);
      }
    }
  });
  it('soudure et produits d’entretien nomment leur protection (verrou sécurité)', () => {
    const sou = JSON.stringify(trouverPack('soudure')!);
    expect(sou).toContain('masque');
    const ent = JSON.stringify(trouverPack('produits-entretien')!);
    expect(ent).toContain('gant');
  });
});

describe('vague 4 — coiffure, tech, terre, béton', () => {
  const NOUVEAUX = [
    { id: 'coiffure', marqueurs: ['démêler', 'vanille', 'défrisage'] },
    { id: 'reparation-telephones', marqueurs: ['ESD', 'batterie', 'nappe'] },
    { id: 'marchage', marqueurs: ['paillage', 'rotation', 'repiquage'] },
    { id: 'maconnerie', marqueurs: ['chaînage', 'mortier', 'parpaing'] },
  ];
  for (const n of NOUVEAUX) {
    it(`le pack ${n.id} existe et est correctement structuré`, () => {
      const p = trouverPack(n.id)!;
      expect(p).not.toBeNull();
      expect(p.taches.length).toBeGreaterThanOrEqual(5);
      expect(p.glossaire.length).toBeGreaterThanOrEqual(6);
      expect(p.pieges.length).toBeGreaterThan(2);
      for (const t of p.taches) expect(t.gestes.length).toBeGreaterThanOrEqual(2);
    });
    it(`le pack ${n.id} contient les mots-clés de son métier`, () => {
      const p = trouverPack(n.id)!;
      const t = JSON.stringify(p).toLowerCase();
      for (const m of n.marqueurs) expect(t).toContain(m.toLowerCase());
    });
  }
  it('coiffure et maçonnerie interdisent explicitement leurs erreurs graves', () => {
    for (const id of ['coiffure', 'maconnerie', 'reparation-telephones', 'marchage']) {
      const p = trouverPack(id)!;
      for (const piege of p.pieges) {
        expect(piege.eviter).toMatch(/\bne (jamais|pas|rien)\b/i);
      }
    }
  });
});

// Le routeur d'onglets (outilsUI) DOIT avoir un onglet Métiers qui appelle ces
// fonctions. Verrouillé dans la source : un refactor qui perd l'onglet tombe ici.
const uiBrute = (
  import.meta.glob('../src/compagne/outilsUI.ts', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
)['../src/compagne/outilsUI.ts'] ?? '';

describe('outilsUI.ts — l’onglet Métiers est branché', () => {
  it('importe le module des packs', () => {
    expect(/from\s+'\.\.\/metiers\/pack'/.test(uiBrute)).toBe(true);
  });
  it('Onglet, TITRES et RENDUS declarent « metiers »', () => {
    expect(uiBrute).toMatch(/'[^']*'\s*\|\s*'metiers'/);
    expect(uiBrute).toMatch(/metiers:\s*'Métiers'/);
    expect(uiBrute).toMatch(/metiers:\s*rendreMetiers/);
  });
  it('la fonction rendreMetiers existe', () => {
    expect(/function\s+rendreMetiers\b/.test(uiBrute)).toBe(true);
  });
  it('importe le module des pays et du contexte pour s’adapter à la situation', () => {
    expect(/from\s+'\.\.\/metiers\/pays'/.test(uiBrute)).toBe(true);
    expect(/from\s+'\.\.\/metiers\/contexte'/.test(uiBrute)).toBe(true);
  });
  it('l’onglet appelle le filtre par pays et l’ordonnancement crise', () => {
    expect(uiBrute).toMatch(/packsPourPays/);
    expect(uiBrute).toMatch(/ordonnerPourCrise/);
  });
  it('pays non choisi : la langue du navigateur pré-sélectionne le pays', () => {
    // Le moteur (paysEffectif) est câblé dans l’onglet, pas seulement testé dans son coin.
    expect(/from\s+'\.\.\/metiers\/contexte'/.test(uiBrute)).toBe(true);
    expect(uiBrute).toMatch(/paysEffectif/);
    // C’est le pays vu (choisi ou deviné) qui filtre, affiche et active les pastilles.
    expect(uiBrute).toMatch(/packsPourPays\([^)]*paysVu\)/);
    expect(uiBrute).toMatch(/const paysVu = paysEffectif/);
    expect(uiBrute).toMatch(/paysVu === '' \? ' class="actif"' : ''/);
    expect(uiBrute).toMatch(/paysVu === pp\.code/);
  });
  it('clic sur une pastille de pays : choix explicite — le « Tous » reste neutre', () => {
    // handler data-pays : tout clic pose ctx.choixExplicite = true ; « Tous » (code '')
    // doit donc éteindre la devinette de la langue au lieu d’y retomber.
    expect(uiBrute).toMatch(/choixExplicite:\s*true/);
  });
  it('la bascule « Mode crise » et le sélecteur de pays existent à l’écran', () => {
    expect(uiBrute).toMatch(/Mode crise/);
    // Le code HTML des contrôles (data-act=…) doit prévoir les deux interactions.
    expect(uiBrute).toMatch(/data-act=["']crise/);
    expect(uiBrute).toMatch(/data-pays=/);
  });
});
