// L'encyclopédie vivante de Nath : recherche instantanée sourde aux accents,
// favoris persistés, grille progressive et liens extraordinaires entre sujets.
// Tout le noyau est pur et testable ici ; l'UI ne fait que montrer.
import { describe, expect, it } from 'vitest';
import {
  approfondirParCerveau,
  basculerFavori,
  CLE_FAVORI,
  filtrerFavoris,
  filtrerNotices,
  filtrerParDomaine,
  GRILLE_PAGE,
  listerDomaines,
  noticeDuJour,
  noticesDepuisSavoir,
  noticesLiees,
  paginer,
  SOCLE,
} from '../src/etudes/encyclo';

// Petit storage fake, comme ailleurs dans les tests du projet.
const storageFake = (): Storage => {
  const m = new Map<string, string>();
  return {
    get length() {
      return m.size;
    },
    key: (i: number) => [...m.keys()][i] ?? null,
    getItem: (k: string) => (m.has(k) ? (m.get(k) as string) : null),
    setItem: (k: string, v: string) => void m.set(k, v),
    removeItem: (k: string) => void m.delete(k),
    clear: () => m.clear(),
  };
};

describe('socle : l’étagère de départ, gratuite et tenue', () => {
  it('assez de notices pour une vraie grille, chacune complète et unique', () => {
    expect(SOCLE.length).toBeGreaterThanOrEqual(24);
    const ids = new Set(SOCLE.map((n) => n.id));
    expect(ids.size).toBe(SOCLE.length);
    for (const n of SOCLE) {
      expect(n.titre.length).toBeGreaterThan(1);
      expect(n.resume.length).toBeGreaterThanOrEqual(40);
      expect(n.domaine.length).toBeGreaterThan(0);
      expect(n.tags.length).toBeGreaterThanOrEqual(2);
    }
  });
  it('l’étagère est assez haute et assez large : 50 notices, 10 domaines au moins', () => {
    expect(SOCLE.length).toBeGreaterThanOrEqual(50);
    expect(listerDomaines(SOCLE).length).toBeGreaterThanOrEqual(10);
  });
});

describe('domaines : le rang des tiroirs', () => {
  const B = [
    { id: '1', titre: 'A', domaine: 'Sciences', resume: 'x', tags: [] },
    { id: '2', titre: 'B', domaine: 'Maths', resume: 'x', tags: [] },
    { id: '3', titre: 'C', domaine: 'Sciences', resume: 'x', tags: [] },
  ];
  it('listerDomaines donne la liste propre, triée, sans doublon', () => {
    expect(listerDomaines(B)).toEqual(['Maths', 'Sciences']);
  });
  it('filtrerParDomaine : vide = tout, sinon le tiroirs seul', () => {
    expect(filtrerParDomaine(B, '')).toEqual(B);
    expect(filtrerParDomaine(B, 'Sciences').map((n) => n.id)).toEqual(['1', '3']);
  });
});

describe('noticeDuJour — la découverte que le jour choisit', () => {
  const B = [
    { id: '1', titre: 'A', domaine: 'd', resume: 'x', tags: [] },
    { id: '2', titre: 'B', domaine: 'd', resume: 'x', tags: [] },
    { id: '3', titre: 'C', domaine: 'd', resume: 'x', tags: [] },
  ];
  it('même jour = même notice ; jour suivant = notice suivante, en boucle', () => {
    const j = 1000;
    expect(noticeDuJour(B, j)).toBe(noticeDuJour(B, j));
    const premiere = noticeDuJour(B, j);
    const suivante = noticeDuJour(B, j + 1);
    expect(premiere).not.toBeNull();
    expect(suivante?.id === premiere?.id).toBe(false);
    // Trois notices : au bout de trois jours, on retombe sur la première.
    expect(noticeDuJour(B, j + 3)).toBe(premiere);
  });
  it('étagère vide = null, jamais de fausse découverte', () => {
    expect(noticeDuJour([], 5)).toBeNull();
  });
});

describe('filtrerNotices — la recherche instantanée, sourde aux accents', () => {
  const B = [
    { id: 'geo', titre: 'Géométrie', domaine: 'Maths', resume: 'L’étude des formes et de l’espace.', tags: ['formes', 'angles'] },
    { id: 'soleil', titre: 'Système solaire', domaine: 'Sciences', resume: 'Le Soleil et ses planètes.', tags: ['espace', 'planètes'] },
    { id: 'mitose', titre: 'Mitose', domaine: 'Sciences', resume: 'La mitose divise les cellules en deux copies.', tags: ['cellule', 'biologie'] },
  ];
  it('« geometrie » (sans accent) trouve « Géométrie »', () => {
    expect(filtrerNotices(B, 'geometrie').map((n) => n.id)).toContain('geo');
  });
  it('le titre premier passe avant une simple mention dans le résumé', () => {
    const r = filtrerNotices(B, 'mitose');
    expect(r[0].id).toBe('mitose');
  });
  it('requête vide = toute l’étagère, dans l’ordre', () => {
    expect(filtrerNotices(B, '  ')).toEqual(B);
  });
  it('rien ne correspond = vide, jamais d’invention', () => {
    expect(filtrerNotices(B, 'zzz improbable')).toEqual([]);
  });
  it('un tag partagé fait entrer la notice, et le classe avant une simple mention du résumé', () => {
    expect(filtrerNotices(B, 'espace').map((n) => n.id)).toEqual(['soleil', 'geo']);
  });
});

describe('noticesLiees — les liens extraordinaires', () => {
  const B = [
    { id: 'a', titre: 'A', domaine: 'Sciences', resume: 'x', tags: ['énergie', 'physique'] },
    { id: 'b', titre: 'B', domaine: 'Sciences', resume: 'x', tags: ['énergie', 'chimie'] },
    { id: 'c', titre: 'C', domaine: 'Arts', resume: 'x', tags: ['musique'] },
    { id: 'd', titre: 'D', domaine: 'Sciences', resume: 'x', tags: ['physique'] },
  ];
  it('les parts communes d’abord, soi-même jamais', () => {
    const l = noticesLiees(B[0], B);
    expect(l.map((n) => n.id)[0]).toBe('b');
    expect(l.map((n) => n.id)).not.toContain('a');
  });
  it('le domaine partagé compte, un sans-rapport reste hors du lien', () => {
    const ids = noticesLiees(B[0], B).map((n) => n.id);
    expect(ids).toContain('d');
    expect(ids).not.toContain('c');
  });
});

describe('paginer — la grille progressive (24 puis « Afficher plus »)', () => {
  const B = Array.from({ length: 60 }, (_, i) => ({ id: String(i) }));
  it('la première page tient l’écran, pas le DOM entier', () => {
    const p = paginer(B, 0);
    expect(p.visibles.length).toBe(GRILLE_PAGE);
    expect(p.reste).toBe(60 - GRILLE_PAGE);
  });
  it('à chaque pas, on ouvre GRILLE_PAGE de plus ; au bout, reste = 0', () => {
    expect(paginer(B, GRILLE_PAGE).visibles.length).toBe(2 * GRILLE_PAGE);
    const fin = paginer(B, 48);
    expect(fin.visibles.length).toBe(60);
    expect(fin.reste).toBe(0);
  });
});

describe('favoris — persistés dans l’appareil, jamais ailleurs', () => {
  it('basculer allume puis éteint, et le registre survit au rechargement', () => {
    const s = storageFake();
    expect(basculerFavori(s, 'geo')).toBe(true);
    expect(basculerFavori(s, 'soleil')).toBe(true);
    expect(basculerFavori(s, 'geo')).toBe(false);
    expect(JSON.parse(s.getItem(CLE_FAVORI) ?? '[]')).toEqual(['soleil']);
  });
  it('un registre menti ou abîmé devient propre, jamais cassé', () => {
    const s = storageFake();
    s.setItem(CLE_FAVORI, '{ ce n est pas du json');
    expect(filtrerFavoris([{ id: 'a' }, { id: 'b' }], s)).toEqual([]);
    s.setItem(CLE_FAVORI, JSON.stringify(['a', 42, 'a']));
    expect(filtrerFavoris([{ id: 'a' }, { id: 'b' }], s).map((n) => n.id)).toEqual(['a']);
  });
});

describe('noticesDepuisSavoir — les découvertes rejoignent l’étagère', () => {
  it('une base de savoir se range en notices, sans doublon de titre', () => {
    const base = [
      { sujet: 'la mitose', titre: 'Mitose', resume: 'Division cellulaire.', url: 'u1', image: 'i1', ramene_a: 1 },
      { sujet: 'Mitose bis', titre: 'Mitose', resume: 'Encore.', url: '', ramene_a: 2 },
    ];
    const n = noticesDepuisSavoir(base);
    expect(n.length).toBe(1);
    expect(n[0].domaine).toBe('Mes découvertes');
    expect(n[0].image).toBe('i1');
  });
});

describe('approfondirParCerveau — le grand cerveau enrichit la notice', () => {
  it('poste au /dire avec le tempérament choisi et rend le texte propre', async () => {
    let vue: any;
    const f = (async (_u: any, o: any) => {
      vue = { url: String(_u), corps: JSON.parse(o.body) };
      return { ok: true, json: async () => ({ result: { response: '  Un fait surprenant.  ' } }) };
    }) as unknown as typeof fetch;
    const r = await approfondirParCerveau('https://c.test', 'Géométrie', f, '@cf/qwen/qwen3-30b-a3b-fp8');
    expect(vue.url).toBe('https://c.test/dire');
    expect(vue.corps.modele).toBe('@cf/qwen/qwen3-30b-a3b-fp8');
    expect(vue.corps.messages.some((m: any) => m.content.includes('Géométrie'))).toBe(true);
    expect(r).toBe('Un fait surprenant.');
  });
  it('silence, erreur ou divagation longue : null — la notice garde sa dignité', async () => {
    const muet = (async () => {
      throw new Error('réseau');
    }) as unknown as typeof fetch;
    expect(await approfondirParCerveau('https://c.test', 'X', muet)).toBeNull();
    const vide = (async () => ({ ok: true, json: async () => ({ result: { response: '   ' } }) })) as unknown as typeof fetch;
    expect(await approfondirParCerveau('https://c.test', 'X', vide)).toBeNull();
    const longue = (async () => ({ ok: true, json: async () => ({ response: 'x'.repeat(900) }) })) as unknown as typeof fetch;
    expect(await approfondirParCerveau('https://c.test', 'X', longue)).toBeNull();
  });
});
