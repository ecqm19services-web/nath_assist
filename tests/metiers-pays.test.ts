import { describe, it, expect } from 'vitest';
import { PAYS, paysDe, type Pays } from '../src/metiers/pays';

// L'application ne parle pas que du Sénégal : l'Afrique de l'Ouest entière,
// le Maghreb et la diaspora doivent y trouver leurs numéros d'urgence locaux.
// Ce module est une simple table de données, sans logique.

describe('PAYS — la table des pays servis', () => {
  it('au moins huit pays', () => {
    expect(PAYS.length).toBeGreaterThanOrEqual(8);
  });
  it('aucun code en doublon', () => {
    expect(new Set(PAYS.map((p) => p.code)).size).toBe(PAYS.length);
  });
  it('chaque pays a au moins un numéro d\'urgence renseigné', () => {
    for (const p of PAYS) {
      const nums = [p.urgence.police, p.urgence.pompiers, p.urgence.samu, p.urgence?.commun].filter(Boolean);
      expect(nums.length).toBeGreaterThanOrEqual(1);
    }
  });
  it('les huit piliers Afrique de l\'Ouest sont présents (SN ML CI BF GN BJ TG GH)', () => {
    for (const c of ['SN', 'ML', 'CI', 'BF', 'GN', 'BJ', 'TG', 'GH']) {
      expect(paysDe(c)).not.toBeNull();
    }
  });
  it('la recherche est insensible à la casse', () => {
    expect(paysDe('sn')?.nom).toMatch(/Sénégal/);
    expect(paysDe('SN')?.nom).toMatch(/Sénégal/);
    expect(paysDe('xx')).toBeNull();
  });
  it('Sénégal : SAMU 15, Police 17, Pompiers 18', () => {
    const sn = paysDe('SN')!;
    expect(sn.urgence.samu).toBe('15');
    expect(sn.urgence.police).toBe('17');
    expect(sn.urgence.pompiers).toBe('18');
  });
  it('Ghana : Police 191, Pompiers 192, Ambulance 193', () => {
    const gh = paysDe('GH')!;
    expect(gh.urgence.police).toBe('191');
    expect(gh.urgence.pompiers).toBe('192');
    expect(gh.urgence.samu).toBe('193');
  });
  it('France : 15/17/18 + 112 en commun', () => {
    const fr = paysDe('FR')!;
    expect(fr.urgence.samu).toBe('15');
    expect(fr.urgence.police).toBe('17');
    expect(fr.urgence.pompiers).toBe('18');
    expect(fr.urgence.commun).toBe('112');
  });
  it('un Pays expose code, nom, emoji, monnaie, langues, urgence', () => {
    const un: Pays = PAYS[0];
    expect(typeof un.code).toBe('string');
    expect(typeof un.nom).toBe('string');
    expect(typeof un.emoji).toBe('string');
    expect(typeof un.monnaie).toBe('string');
    expect(Array.isArray(un.langues)).toBe(true);
    expect(typeof un.urgence).toBe('object');
  });
});
