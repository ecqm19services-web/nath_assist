// Le tuteur, le souffle et la carte des savoirs : l'explication pas à pas (avec
// un plan hors-ligne quand le réseau dort), la respiration guidée minuteur, et
// le panorama de ce que l étagère contient.
import { describe, expect, it } from 'vitest';

import {
  archipel,
  ileLaPlusPeuplee,
  type NoticeLike,
} from '../src/assist/carte';
import {
  decouperEnonce,
  etapesHorsLigne,
  expliquerParCerveau,
} from '../src/assist/tuteur';
import {
  ajouterSession,
  CLE_SOUFFLE,
  dureeCycle,
  etapes,
  lireSouffle,
  phaseA,
  progression,
  RYTHME_478,
  RYTHME_CARRE,
} from '../src/assist/souffle';

const NOTICE = (id: string, domaine: string): NoticeLike => ({ id, domaine });

describe('carte : le panorama des savoirs', () => {
  const base: NoticeLike[] = [
    NOTICE('a', 'Sciences'),
    NOTICE('b', 'Sciences'),
    NOTICE('c', 'Maths'),
    NOTICE('d', 'Sciences'),
    NOTICE('e', 'Énergie'),
    NOTICE('f', ''),
  ];
  it('compte les îles par domaine, la plus peuplée en tête', () => {
    const iles = archipel(base);
    expect(iles[0].nom).toBe('Sciences');
    expect(iles[0].nombre).toBe(3);
    expect(iles.map((i) => i.nom)).toContain('Énergie');
    expect(ileLaPlusPeuplee(iles)?.nom).toBe('Sciences');
  });
  it('les parts se lisent en pourcentage et couvrent tout', () => {
    const iles = archipel(base.filter((n) => n.domaine));
    expect(iles.reduce((s, i) => s + i.part, 0)).toBeCloseTo(100, 0);
    expect(iles.find((i) => i.nom === 'Maths')?.part).toBeCloseTo(20, 0);
  });
  it('une étagère vide ne fabrique pas de carte', () => {
    expect(archipel([])).toEqual([]);
    expect(ileLaPlusPeuplee([])).toBeNull();
    expect(archipel(base).some((i) => i.nom === 'Sans drapeau')).toBe(true);
  });
  it('les ids de chaque île permettent de retrouver ses cartes', () => {
    const sc = archipel(base).find((i) => i.nom === 'Sciences');
    expect(sc?.ids).toEqual(['a', 'b', 'd']);
  });
});

describe('tuteur : le plan hors-ligne', () => {
  it('décompose n importe quelle question en étapes lisibles', () => {
    const e = etapesHorsLigne('Résoudre 3x + 5 = 20');
    expect(e.length).toBeGreaterThanOrEqual(4);
    expect(new Set(e).size).toBe(e.length);
    for (const s of e) expect(s.length).toBeGreaterThan(15);
    expect(e.join(' ')).toContain('3x + 5 = 20');
  });
  it('une question vide donne quand même la méthode', () => {
    expect(etapesHorsLigne('').length).toBeGreaterThanOrEqual(4);
  });
  it('sépare ce qu on sait de ce qu on cherche', () => {
    const d = decouperEnonce('Un terrain fait 12 m sur 8 m\nQuelle est son aire ?');
    expect(d.donnees.length).toBe(1);
    expect(d.questions.length).toBe(1);
    expect(d.donnees[0]).toContain('12 m');
    expect(d.questions[0]).toContain('aire');
  });
});

describe('tuteur : la voix du grand cerveau', () => {
  const appel = (corps: any, ok = true) => {
    const vus: { u: string; o: any }[] = [];
    const f = async (u: any, o: any) => {
      vus.push({ u: String(u), o });
      return { ok, json: async () => corps };
    };
    return { vus, f: f as unknown as typeof fetch };
  };

  it('demande une explication pas à pas au raisonneur', async () => {
    const { vus, f } = appel({ result: { response: 'On isole x : 3x = 15, donc x = 5.' } });
    const r = await expliquerParCerveau('https://cercefictif', '3x + 5 = 20', f, 'deepseek');
    expect(r).toContain('x = 5');
    expect(vus[0].u).toBe('https://cercefictif/dire');
    expect(JSON.parse(String(vus[0].o.body)).modele).toBe('deepseek');
  });
  it('réseau couché ou réponse hors format : silence', async () => {
    expect(await expliquerParCerveau('https://x', '', appel({ result: { response: 'ok' } }).f)).toBeNull();
    expect(await expliquerParCerveau('https://x', 'x', appel({}).f)).toBeNull();
    expect(await expliquerParCerveau('https://x', 'x', appel({ result: { response: 'z'.repeat(2000) } }).f)).toBeNull();
  });
});

describe('souffle : les rythmes', () => {
  it('le 4-7-8 et le carré existent, leurs totaux tombent juste', () => {
    expect(RYTHME_478.map((p) => p.secondes)).toEqual([4, 7, 8]);
    expect(RYTHME_CARRE.map((p) => p.secondes)).toEqual([4, 4, 4, 4]);
    expect(dureeCycle(RYTHME_478)).toBe(19);
    expect(dureeCycle(RYTHME_CARRE)).toBe(16);
  });
  it('les étapes s enchaînent sans trou ni chevauchement', () => {
    const e = etapes(RYTHME_478);
    expect(e[0].debut).toBe(0);
    for (let i = 1; i < e.length; i++) expect(e[i].debut).toBe(e[i - 1].fin);
    expect(e[e.length - 1].fin).toBe(dureeCycle(RYTHME_478));
  });
  it('une seconde du cycle désigne la bonne phase, en boucle', () => {
    expect(phaseA(RYTHME_478, 1).nom).toBe('Inspire');
    expect(phaseA(RYTHME_478, 5).nom).toBe('Retiens');
    expect(phaseA(RYTHME_478, 13).nom).toBe('Expire');
    expect(phaseA(RYTHME_478, 20).nom).toBe('Inspire');
    expect(phaseA(RYTHME_478, 18).reste).toBe(1);
  });
  it('la progression rend les cycles et sonne la fin', () => {
    const p = progression(0, RYTHME_478, 3);
    expect(p.cycle).toBe(1);
    expect(p.fini).toBe(false);
    const milieu = progression(20000, RYTHME_478, 3);
    expect(milieu.cycle).toBe(2);
    const bout = progression(3 * dureeCycle(RYTHME_478) * 1000, RYTHME_478, 3);
    expect(bout.fini).toBe(true);
  });
});

describe('souffle : le compteur de séances', () => {
  const stockage = () => {
    const m = new Map<string, string>();
    return {
      getItem: (k: string) => m.get(k) ?? null,
      setItem: (k: string, v: string) => void m.set(k, v),
    };
  };
  it('compte les séances et les secondes au repos', () => {
    const s = stockage();
    expect(lireSouffle(s)).toEqual({ sessions: 0, secondes: 0 });
    ajouterSession(s, { secondes: 60 });
    ajouterSession(s, { secondes: 120 });
    expect(lireSouffle(s)).toEqual({ sessions: 2, secondes: 180 });
  });
  it('une séance sans durée compte au moins une fois', () => {
    const s = stockage();
    ajouterSession(s);
    expect(lireSouffle(s).sessions).toBe(1);
  });
  it('un registre sali repart à zéro au lieu de mentir', () => {
    const s = stockage();
    s.setItem(CLE_SOUFFLE, '{ pas json');
    expect(lireSouffle(s)).toEqual({ sessions: 0, secondes: 0 });
    s.setItem(CLE_SOUFFLE, JSON.stringify({ sessions: -9, secondes: 'beaucoup' }));
    expect(lireSouffle(s)).toEqual({ sessions: 0, secondes: 0 });
  });
});
