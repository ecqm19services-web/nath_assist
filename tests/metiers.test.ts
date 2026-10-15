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
  it('au moins trois métiers', () => {
    expect(PACKS.length).toBeGreaterThanOrEqual(3);
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
});
