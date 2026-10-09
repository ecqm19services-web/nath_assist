import { describe, expect, it } from 'vitest';
import { analyserDictee, epurerDictee } from '../src/traduction/dictee';

describe('dictée : comprendre « X veut dire Y »', () => {
  it('lève le mot et sa traduction derrière les mots-ponts usuels', () => {
    expect(analyserDictee('bonjour veut dire naka nga def')).toEqual({ de: 'bonjour', a: 'naka nga def' });
    expect(analyserDictee('ami se dit xale')).toEqual({ de: 'ami', a: 'xale' });
    expect(analyserDictee('eau signifie ndiham')).toEqual({ de: 'eau', a: 'ndiham' });
    expect(analyserDictee('maison est traduit par kakie')).toEqual({ de: 'maison', a: 'kakie' });
  });

  it('sourde à la casse, aux espaces et à la ponctuation de fin', () => {
    expect(analyserDictee('  Bonjour   VEUT DIRE   Jammeray.  ')).toEqual({ de: 'Bonjour', a: 'Jammeray' });
  });

  it('un mot-pont au milieu ne découpe pas n’importe où : le premier gagne', () => {
    const r = analyserDictee('père veut dire aba veut dire papa');
    expect(r).toEqual({ de: 'père', a: 'aba veut dire papa' });
  });

  it('sans pont, sans mot des deux côtés = rien, on n’invente pas', () => {
    expect(analyserDictee('bonjour ma belle')).toBeNull();
    expect(analyserDictee('veut dire eau')).toBeNull();
    expect(analyserDictee('eau veut dire ')).toBeNull();
    expect(analyserDictee('')).toBeNull();
  });
});

describe('dictée : épurer un cours dicuté avant d’en faire des fiches', () => {
  it('les petits tics de la bouche sautent, le reste garde sa place', () => {
    expect(epurerDictee('euh la mitose euh se déroule en quatre phases hem bien')).toBe(
      'la mitose se déroule en quatre phases bien',
    );
  });

  it('les tics collés à la ponctuation sautent aussi, sans manger les vraies phrases', () => {
    expect(epurerDictee('La cellule, euh, contient le noyau.')).toBe('La cellule, contient le noyau.');
  });

  it('les espaces en trop disparaissent ; un texte propre ressort intact', () => {
    expect(epurerDictee('  deux   mots      suffisent  ')).toBe('deux mots suffisent');
    expect(epurerDictee('Rien à nettoyer. Vraiment rien.')).toBe('Rien à nettoyer. Vraiment rien.');
  });

  it('un texte qui n’était que des tics devient vide', () => {
    expect(epurerDictee('euh ben euh')).toBe('');
  });
});
