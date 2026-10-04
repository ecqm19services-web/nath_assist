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
  it('se souvient d un calcul et enchaîne sur le résultat', () => {
    const r1 = respond('7 fois 8', ctx);
    expect(r1.resultat).toBe(56);
    const r2 = respond('plus 2', { ...ctx, dernierResultat: r1.resultat });
    expect(r2.texte).toContain('58');
    expect(r2.resultat).toBe(58);
  });
  it('reconnaît la tendresse et n y répond jamais par du vide', () => {
    expect(detectIntent('je t aime')).toBe('tendresse');
    const r = respond('je t aime', ctx);
    expect(r.texte.length).toBeGreaterThan(15);
    expect(r.texte).not.toContain('!');
  });
  it('reçoit une pique sans jamais rendre l insulte', () => {
    expect(detectIntent('tu es nulle')).toBe('piqure');
    const r = respond('espèce d idiote', ctx);
    expect(r.texte).not.toMatch(/\b(con|idiote|nulle|moche|stupide)\b/i);
    expect(r.texte.length).toBeGreaterThan(15);
  });
  it('fait un nouveau poème quand on lui dit « encore »', () => {
    expect(detectIntent('raconte encore')).toBe('suite');
    const r = respond('raconte encore', { ...ctx, dernierSujet: 'poeme' });
    expect(r.texte.split('\n')).toHaveLength(4);
  });
  it('dit son propre ciel quand on lui demande « et toi ? »', () => {
    expect(detectIntent('et toi ?')).toBe('etat');
    const r = respond('et toi ?', { ...ctx, emotion: 'joie' });
    expect(r.texte.toLowerCase()).toMatch(/nuage|clair|lumiere|douce|orage|soleil/);
  });
  it('un poème neuf à chaque tour de conversation', () => {
    const p1 = respond('fais un poeme', ctx).texte;
    const p2 = respond('fais un poeme', { ...ctx, tour: 2 }).texte;
    expect(p2).not.toBe(p1);
    // Carrousel : à chaque position, le vers a tourné — « encore » ne recycle jamais à l'identique.
    const a = p1.split('\n');
    const b = p2.split('\n');
    a.forEach((v, i) => expect(b[i]).not.toBe(v));
  });
});
