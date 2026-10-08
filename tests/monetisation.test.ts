import { describe, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import {
  genererCle,
  idProfil,
  messagePro,
  normaliserCle,
  verifierCle,
} from '../src/monetisation/cle';

describe('Nath+ : identifiant de profil', () => {
  it('est déterministe et court', () => {
    expect(idProfil('seed-abc')).toBe(idProfil('seed-abc'));
    expect(idProfil('seed-abc')).toHaveLength(6);
  });
  it('change selon le seed', () => {
    expect(idProfil('un')).not.toBe(idProfil('deux'));
  });
  it('n\'utilise que l\'alphabet sans caractères ambigus', () => {
    expect(idProfil('machine-xyz')).toMatch(/^[2-9A-HJ-NP-Z]+$/);
  });
});

describe('Nath+ : clés hors-ligne', () => {
  const id = idProfil('seed-de-test');
  it('une clé générée pour un profil est toujours valable', () => {
    expect(verifierCle(genererCle(id), id)).toBe(true);
  });
  it('la validation ignore casse, espaces et tirets', () => {
    const cle = genererCle(id);
    expect(verifierCle(cle.toLowerCase().replace(/-/g, ' '), id)).toBe(true);
  });
  it('une clé erronée ou pour un autre profil est rejetée', () => {
    expect(verifierCle('2222-2222-2222-2222-2222', id)).toBe(false);
    const autre = idProfil('tout-autre-seed');
    expect(verifierCle(genererCle(autre), id)).toBe(false);
  });
  it('une clé incomplète est rejetée', () => {
    const cle = genererCle(id);
    expect(verifierCle(cle.slice(0, -2), id)).toBe(false);
  });
  it('déterministe : même profil → même clé', () => {
    expect(genererCle(id)).toBe(genererCle(id));
    expect(genererCle(id)).toMatch(/^.{4}-.{4}-.{4}-.{4}-.{4}$/);
  });
  it('normaliserCle nettoie l\'entrée utilisateur', () => {
    expect(normaliserCle(' ab-cd 12 ')).toBe('ABCD12');
  });

  it('le script vendeur et l\'app produisent exactement la même clé', () => {
    const id = idProfil('seed-partage');
    const cleScript = execFileSync('node', ['scripts/gen-cle.mjs', id], { encoding: 'utf8' }).trim();
    expect(cleScript).toBe(genererCle(id));
    expect(verifierCle(cleScript, id)).toBe(true);
  });
});

describe('Nath+ : la gratuité n\'est jamais bridée et rien ne sonne comme une pub', () => {
  it('les libellés Nath+ restent neutres et doux', () => {
    expect(messagePro(true)).toContain('Nath+');
    expect(messagePro(false)).toContain('nom');
    const m = (messagePro(true) + messagePro(false)).toLowerCase();
    expect(m).not.toMatch(/pub|sponsor|premium pack|offre|promo|réduction|paye maintenant|acheter maintenant/);
  });
});
