// La flamme : la série de jours, l'expérience gagnée, le niveau. Tout est pur et
// local — une date d'appareil suffit, aucune connexion n'est nécessaire.
import { describe, expect, it } from 'vitest';

import {
  aFaitAujourdhui,
  ajouterXp,
  CLE_FLAMME,
  enregistrerPresence,
  etalon,
  gapDeJours,
  jourLocal,
  lireFlamme,
  niveauDe,
  titreDuNiveau,
} from '../src/assist/flamme';

const stockage = () => {
  const m = new Map<string, string>();
  return {
    getItem: (k: string) => m.get(k) ?? null,
    setItem: (k: string, v: string) => void m.set(k, v),
  };
};

const jour = (s: string) => new Date(`${s}T12:00:00`).getTime();

describe('flamme : le calendrier des jours', () => {
  it("jourLocal écrit une date lisible dans le fuseau de l'appareil", () => {
    expect(jourLocal(jour('2026-03-07'))).toBe('2026-03-07');
  });
  it('gapDeJours compte les jours calendaires entre deux dates', () => {
    expect(gapDeJours('2026-03-07', '2026-03-07')).toBe(0);
    expect(gapDeJours('2026-03-06', '2026-03-07')).toBe(1);
    expect(gapDeJours('2026-03-01', '2026-03-31')).toBe(30);
    expect(gapDeJours('2026-03-07', '2026-03-06')).toBe(-1);
  });
});

describe('flamme : entretenir la série', () => {
  it('un premier passage allume la flamme à un jour', () => {
    const s = stockage();
    const f = enregistrerPresence(s, jour('2026-03-01'));
    expect(f.streak).toBe(1);
    expect(f.meilleur).toBe(1);
  });
  it('deux jours qui se suivent font grandir la flamme, pas deux passages le même jour', () => {
    const s = stockage();
    enregistrerPresence(s, jour('2026-03-01'));
    enregistrerPresence(s, jour('2026-03-01'));
    expect(lireFlamme(s).streak).toBe(1);
    enregistrerPresence(s, jour('2026-03-02'));
    expect(lireFlamme(s).streak).toBe(2);
    expect(lireFlamme(s).meilleur).toBe(2);
  });
  it('un jour manqué éteint la flamme mais garde le souvenir du record', () => {
    const s = stockage();
    enregistrerPresence(s, jour('2026-03-01'));
    enregistrerPresence(s, jour('2026-03-02'));
    enregistrerPresence(s, jour('2026-03-03'));
    enregistrerPresence(s, jour('2026-03-06'));
    const f = lireFlamme(s);
    expect(f.streak).toBe(1);
    expect(f.meilleur).toBe(3);
  });
  it("aujourd'hui se reconnaît, hier se regrette", () => {
    const s = stockage();
    enregistrerPresence(s, jour('2026-03-02'));
    expect(aFaitAujourdhui(lireFlamme(s), jour('2026-03-02'))).toBe(true);
    expect(aFaitAujourdhui(lireFlamme(s), jour('2026-03-03'))).toBe(false);
  });
});

describe('flamme : l expérience qui monte', () => {
  it('ajouter de l expérience enregistre aussi la présence du jour', () => {
    const s = stockage();
    const f = ajouterXp(s, 20, jour('2026-03-01'));
    expect(f.xp).toBe(20);
    expect(f.streak).toBe(1);
  });
  it('les niveaux se décrochent tous les cent points, sans jamais redescendre', () => {
    expect(niveauDe(0)).toBe(1);
    expect(niveauDe(99)).toBe(1);
    expect(niveauDe(100)).toBe(2);
    expect(niveauDe(340)).toBe(4);
    expect(titreDuNiveau(1)).toBe(etalon);
    expect(titreDuNiveau(4)).not.toBe(titreDuNiveau(2));
  });
  it('une somme négative ou folle ne salit pas le registre', () => {
    const s = stockage();
    expect(ajouterXp(s, -50).xp).toBe(0);
    expect(ajouterXp(s, Number.NaN).xp).toBe(0);
    expect(ajouterXp(s, 7).xp).toBe(7);
  });
});

describe('flamme : un registre qui résiste', () => {
  it('un contenu abîmé repart propre au lieu de casser l app', () => {
    const s = stockage();
    s.setItem(CLE_FLAMME, '{ ceci n est pas du json');
    expect(lireFlamme(s)).toEqual({ streak: 0, meilleur: 0, xp: 0, dernier: '' });
    s.setItem(CLE_FLAMME, JSON.stringify({ streak: 'beaucoup', xp: -3, meilleur: 9 }));
    const f = lireFlamme(s);
    expect(f.streak).toBe(0);
    expect(f.xp).toBe(0);
    expect(f.meilleur).toBe(9);
  });
});
