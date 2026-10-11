// L assiette : estimer ce que je mange, hors-ligne, avec une table d aliments
// embarquée. Le grand cerveau peut commenter, l estimation ne dépend jamais de lui.
import { describe, expect, it } from 'vitest';

import {
  analyseParCerveau,
  chercherAliment,
  decrireAssiette,
  TABLE_ALIMENTS,
  verdictAssiette,
} from '../src/assist/assiette';

describe('assiette : la table des aliments', () => {
  it('une table assez fournie et honnête', () => {
    expect(TABLE_ALIMENTS.length).toBeGreaterThanOrEqual(24);
    for (const a of TABLE_ALIMENTS) {
      expect(a.nom.length).toBeGreaterThan(1);
      expect(a.kcal).toBeGreaterThan(0);
      expect(a.kcal).toBeLessThan(3000);
      expect(a.p + a.g + a.l).toBeGreaterThanOrEqual(0);
      expect(a.unite.length).toBeGreaterThan(0);
    }
  });
  it('les alias et les accents ramènent le même aliment', () => {
    const oeuf = chercherAliment('Œufs');
    expect(oeuf).not.toBeNull();
    expect(oeuf).toBe(chercherAliment('oeuf'));
    expect(chercherAliment('banane')).toBe(chercherAliment(TABLE_ALIMENTS.find((a) => a.nom === 'Banane')?.nom ?? 'banane'));
  });
  it('un mot qui n est pas de la nourriture reste inconnu', () => {
    expect(chercherAliment('licorne')).toBeNull();
    expect(chercherAliment('')).toBeNull();
  });
});

describe('assiette : lire la description', () => {
  it('compte les unités et ignore les chiffres pour les portions', () => {
    const a = decrireAssiette('2 œufs, du riz et une banane');
    expect(a.articles.length).toBe(3);
    expect(a.inconnus).toEqual([]);
    const oeufs = a.articles.find((x) => x.nom === 'Œuf');
    expect(oeufs?.quantite).toBe(2);
    expect(oeufs?.kcal).toBeCloseTo(2 * (TABLE_ALIMENTS.find((x) => x.nom === 'Œuf')?.kcal ?? 0), 1);
  });
  it('signale ce qu il ne connaît pas sans inventer', () => {
    const a = decrireAssiette('du riz et du glorp');
    expect(a.inconnus).toEqual(['glorp']);
    expect(a.articles.length).toBe(1);
  });
  it('le total s additionne et un texte vide donne zéro', () => {
    const a = decrireAssiette('1 pain, 1 œuf');
    expect(a.total.kcal).toBeGreaterThan(0);
    expect(a.total.kcal).toBeCloseTo(
      a.articles.reduce((s, x) => s + x.kcal, 0),
      1,
    );
    const vide = decrireAssiette('');
    expect(vide.articles).toEqual([]);
    expect(vide.total.kcal).toBe(0);
  });
});

describe('assiette : le verdict simple', () => {
  it('trois marches selon la quantité dénergie', () => {
    expect(verdictAssiette({ kcal: 90, p: 6, g: 0, l: 6 }).equilibre).toBe('leger');
    expect(verdictAssiette({ kcal: 550, p: 20, g: 60, l: 12 }).equilibre).toBe('correct');
    expect(verdictAssiette({ kcal: 1200, p: 40, g: 120, l: 50 }).equilibre).toBe('copieux');
    expect(verdictAssiette({ kcal: 550, p: 20, g: 60, l: 12 }).mot.length).toBeGreaterThan(5);
  });
  it('une assiette vide se juge sans bruit', () => {
    expect(verdictAssiette({ kcal: 0, p: 0, g: 0, l: 0 }).equilibre).toBe('leger');
  });
});

describe('assiette : la parole du grand cerveau', () => {
  const appel = (corps: any, ok = true) => {
    const vus: { u: string; o: any }[] = [];
    const f = async (u: any, o: any) => {
      vus.push({ u: String(u), o });
      return { ok, json: async () => corps };
    };
    return { vus, f: f as unknown as typeof fetch };
  };

  it('interroge /dire avec le tempérament et le texte', async () => {
    const { vus, f } = appel({ result: { response: 'Bel équilibre, pense à ajouter une feuille verte.' } });
    const r = await analyseParCerveau('https://cercefictif', '2 œufs et du riz', f, 'vif');
    expect(r).toBe('Bel équilibre, pense à ajouter une feuille verte.');
    expect(vus[0].u).toBe('https://cercefictif/dire');
    const corps = JSON.parse(String(vus[0].o.body));
    expect(corps.modele).toBe('vif');
    expect(corps.messages[1].content).toContain('œufs');
  });
  it('vide, cassé, trop long ou muet : pas de réponse', async () => {
    expect(await analyseParCerveau('https://x', '', appel({}).f)).toBeNull();
    expect(await analyseParCerveau('https://x', 'du riz', appel({}).f)).toBeNull();
    expect(await analyseParCerveau('https://x', 'du riz', appel({}, false).f)).toBeNull();
    expect(await analyseParCerveau('https://x', 'du riz', appel({ result: { response: 'y'.repeat(900) } }).f)).toBeNull();
  });
});
