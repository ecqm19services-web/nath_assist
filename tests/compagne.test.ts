import { describe, expect, it } from 'vitest';
import { detectIntent, poeme, respond, type CompagneCtx } from '../src/compagne/engine';

const ctx: CompagneCtx = { emotion: 'calme', breath: 0.3, timeOfDay: 0.85, seed: 42 };

describe('compagne engine', () => {
  it('reconnaît les intentions clés', () => {
    expect(detectIntent('je veux dormir')).toBe('sommeil');
    expect(detectIntent('je suis stressé')).toBe('angoisse');
    expect(detectIntent('qui es-tu ?')).toBe('identite');
    expect(detectIntent('bonjour')).toBe('salutation');
    expect(detectIntent('respire avec moi')).toBe('souffle');
    expect(detectIntent('xyzzyblabla')).toBe('ouverte');
  });
  it('insensible aux accents et à la casse', () => {
    expect(detectIntent('JE SUIS TRÈS TRISTE')).toBe('tristesse');
    expect(detectIntent('Je suis tres triste')).toBe('tristesse');
  });
  it('répond toujours, jamais vide, jamais plusieurs phrases criardes', () => {
    for (const q of ['dors', 'peur du noir', 'merci', 'la vie est belle', '???']) {
      const r = respond(q, ctx);
      expect(r.texte.length).toBeGreaterThan(10);
      expect(r.texte).not.toContain('!');
    }
  });
  it('déterministe : même question, même graine, même réponse', () => {
    expect(respond('bonjour', ctx).texte).toBe(respond('bonjour', ctx).texte);
    expect(respond('bonjour', ctx).texte).not.toBe(respond('bonjour', { ...ctx, seed: 7 }).texte);
  });
  it('teinte la réponse selon l’état vivant', () => {
    const rJoy = respond('bonjour', { ...ctx, emotion: 'joie' });
    const rTrist = respond('bonjour', { ...ctx, emotion: 'tristesse' });
    expect(rJoy.humeur).not.toBe(rTrist.humeur);
    expect(rTrist.humeur).toBe('douce');
  });
  it('le poème est un quatrain stable de 4 vers', () => {
    const p = poeme(ctx);
    const vers = p.split('\n');
    expect(vers).toHaveLength(4);
    vers.forEach((v) => expect(v.split(' ').length).toBeGreaterThanOrEqual(4));
    expect(p).toBe(poeme(ctx));
  });
  it('une demande de poème déclenche le poème', () => {
    expect(detectIntent('fais-moi un poeme')).toBe('poeme');
    expect(respond('fais-moi un poeme', ctx).texte.split('\n')).toHaveLength(4);
  });
  it('calcule au lieu de répondre à côté', () => {
    expect(respond('combien font 7 fois 8', ctx).texte).toContain('56');
  });
  it('perçoit l état réel de ses sens', () => {
    const aveugle = respond('est-ce que tu me vois', { ...ctx, cameraOn: false, micOn: false });
    expect(aveugle.texte.toLowerCase()).toMatch(/cam|micro|activer|yeux/);
    const voyante = respond('est-ce que tu me vois', { ...ctx, cameraOn: true, micOn: true });
    expect(voyante.texte.toLowerCase()).toContain('vois');
  });
  it('assume l incompréhension qu on lui reproche', () => {
    expect(detectIntent('en gros tu ne comprends même pas ce que je dis')).toBe('incomprehension');
    const r = respond('tu ne comprends rien', ctx);
    expect(r.texte.toLowerCase()).toMatch(/cerveau|comprends|mieux/);
  });
  it('énumère ses capacités', () => {
    expect(detectIntent('que peux-tu faire ?')).toBe('capacites');
    expect(respond('a quoi tu sers', ctx).texte.toLowerCase()).toContain('poème');
  });
});
