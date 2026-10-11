// La cuisine : ce que j ai sous la main, ce que je peux faire ce soir, ce qui
// manque pour la liste de courses. Le moteur de cartes est hors-ligne ; le grand
// cerveau n ajoute que du parfum, jamais une obligation.
import { describe, expect, it } from 'vitest';

import {
  CARTE_PLATS,
  decouperIngredients,
  ideesParCerveau,
  listeCourses,
  platsPossibles,
  suggestionsMinutes,
} from '../src/assist/cuisine';

describe('cuisine : la carte des plats', () => {
  it('assez de plats pour une vraie carte, chacun complet et unique', () => {
    expect(CARTE_PLATS.length).toBeGreaterThanOrEqual(16);
    const ids = new Set<string>();
    for (const p of CARTE_PLATS) {
      expect(ids.has(p.id)).toBe(false);
      ids.add(p.id);
      expect(p.nom.length).toBeGreaterThan(2);
      expect(p.ingredients.length).toBeGreaterThanOrEqual(3);
      expect(p.minutes).toBeGreaterThanOrEqual(5);
      expect(p.minutes).toBeLessThanOrEqual(180);
      expect(p.type.length).toBeGreaterThan(0);
    }
  });
});

describe('cuisine : comprendre ce que j ai', () => {
  it('découpe, nettoie les accents, met au singulier, garde les vrais mots', () => {
    expect(decouperIngredients('2 œufs, de la tomate et du Riz, oignon')).toEqual([
      'oeuf',
      'tomate',
      'riz',
      'oignon',
    ]);
  });
  it('un texte vide ou des mots vides ne fabriquent pas d ingrédient', () => {
    expect(decouperIngredients('')).toEqual([]);
    expect(decouperIngredients('du, de, la, et, des')).toEqual([]);
  });
});

describe('cuisine : ce que je peux faire ce soir', () => {
  it('un plat dont j ai tout sort en premier, sans ingrédient manquant', () => {
    const ref = CARTE_PLATS[0];
    const dispo = [...ref.ingredients];
    const r = platsPossibles(dispo);
    expect(r.length).toBeGreaterThan(0);
    expect(r[0].manquants).toEqual([]);
    expect(r[0].plat.ingredients.length).toBeGreaterThanOrEqual(3);
  });
  it('il manque un ingrédient : la carte le dit nettement', () => {
    const ref = CARTE_PLATS[0];
    const dispo = ref.ingredients.slice(0, ref.ingredients.length - 1);
    const vise = platsPossibles(dispo).find((x) => x.plat.id === ref.id);
    expect(vise?.manquants).toEqual([ref.ingredients[ref.ingredients.length - 1]]);
  });
  it('les plats se trient du moins manquant au plus manquant', () => {
    const r = platsPossibles(['oeuf', 'riz']);
    for (let i = 1; i < r.length; i++) {
      expect(r[i - 1].manquants.length).toBeLessThanOrEqual(r[i].manquants.length);
    }
  });
  it('rien sous la main : aucune carte inventée', () => {
    expect(platsPossibles(['licorne'], { tolere: 2 })).toEqual([]);
  });
  it('la liste de courses sort du fourre-tout, en ordre et sans doublon', () => {
    const cours = listeCourses(['oeuf', 'riz']);
    expect(cours.length).toBeGreaterThan(0);
    expect(new Set(cours).size).toBe(cours.length);
    expect(cours).not.toContain('oeuf');
    expect(cours).not.toContain('riz');
  });
  it('la montre tranche : que des plats assez rapides', () => {
    const rapides = suggestionsMinutes(15);
    expect(rapides.length).toBeGreaterThan(0);
    for (const p of rapides) expect(p.minutes).toBeLessThanOrEqual(15);
    expect(suggestionsMinutes(0)).toEqual([]);
  });
});

describe('cuisine : le parfum du grand cerveau', () => {
  const appel = (corps: any, ok = true) => {
    const vus: { u: string; o: any }[] = [];
    const f = async (u: any, o: any) => {
      vus.push({ u: String(u), o });
      return { ok, json: async () => corps };
    };
    return { vus, f: f as unknown as typeof fetch };
  };

  it('poste la demande au gros cerveau avec le tempérament choisi', async () => {
    const { vus, f } = appel({ result: { response: 'Une omelette façon fwafwa, avec du piment doux.' } });
    const r = await ideesParCerveau('https://cercefictif', ['oeuf', 'tomate'], f, 'sage');
    expect(r).toBe('Une omelette façon fwafwa, avec du piment doux.');
    expect(vus[0].u).toBe('https://cercefictif/dire');
    const corps = JSON.parse(String(vus[0].o.body));
    expect(corps.modele).toBe('sage');
    expect(corps.messages[1].content).toContain('oeuf');
  });
  it('silence, erreur ou divagation : rien ne s affiche', async () => {
    const vide = appel({});
    expect(await ideesParCerveau('https://x', ['oeuf', 'riz'], vide.f)).toBeNull();
    const casse = appel({ result: { response: 'ok' } }, false);
    expect(await ideesParCerveau('https://x', ['oeuf', 'riz'], casse.f)).toBeNull();
    const long = appel({ result: { response: 'x'.repeat(1200) } });
    expect(await ideesParCerveau('https://x', ['oeuf', 'riz'], long.f)).toBeNull();
    const muet = (async () => {
      throw new Error('hors-ligne');
    }) as unknown as typeof fetch;
    expect(await ideesParCerveau('https://x', ['oeuf', 'riz'], muet)).toBeNull();
    expect(await ideesParCerveau('https://x', [], appel({}).f)).toBeNull();
  });
});
