import { describe, expect, it } from 'vitest';
import { codeLangue, traduireEnLigne } from '../src/traduction/moteurNet';

describe('filet de traduction gratuit : MyMemory, sans compte ni clé', () => {
  it('reconnaît les langues usuelles par leur nom, en français ou en anglais', () => {
    expect(codeLangue('français')).toBe('fr');
    expect(codeLangue('Anglais')).toBe('en');
    expect(codeLangue('english')).toBe('en');
    expect(codeLangue('espagnol')).toBe('es');
    expect(codeLangue('arabe')).toBe('ar');
    expect(codeLangue('chinois')).toBe('zh');
    expect(codeLangue('portugais')).toBe('pt');
    expect(codeLangue('allemand')).toBe('de');
    expect(codeLangue('italien')).toBe('it');
  });

  it('langue inconnue = null : on n’invente pas un code', () => {
    expect(codeLangue('wolof')).toBeNull();
    expect(codeLangue('ewondo')).toBeNull();
    expect(codeLangue('  ')).toBeNull();
  });

  it('traduireEnLigne lit la réponse du filet et rend le texte traduit', async () => {
    const f = async (url: string) => {
      (f as any).derniereUrl = url;
      return { ok: true, json: async () => ({ responseData: { translatedText: 'casa' } }) };
    };
    const r = await traduireEnLigne('maison', 'fr', 'es', f as unknown as typeof fetch);
    expect(r).toBe('casa');
    expect((f as any).derniereUrl).toContain('langpair=fr|es');
    expect((f as any).derniereUrl).toContain('q=maison');
  });

  it('filet muet, refusé ou coupé = null, jamais de plantage', async () => {
    const muet = (async () => ({ ok: true, json: async () => ({ responseData: { translatedText: '' } }) })) as unknown as typeof fetch;
    expect(await traduireEnLigne('x', 'fr', 'es', muet)).toBeNull();
    const refuse = (async () => ({ ok: false, json: async () => ({}) })) as unknown as typeof fetch;
    expect(await traduireEnLigne('x', 'fr', 'es', refuse)).toBeNull();
    const casse = (async () => { throw new Error('réseau'); }) as unknown as typeof fetch;
    expect(await traduireEnLigne('x', 'fr', 'es', casse)).toBeNull();
  });

  it('texte vide = pas de requête, null direct', async () => {
    let appelee = false;
    const f = (async () => { appelee = true; return { ok: true, json: async () => ({}) }; }) as unknown as typeof fetch;
    expect(await traduireEnLigne('   ', 'fr', 'es', f)).toBeNull();
    expect(appelee).toBe(false);
  });
});
