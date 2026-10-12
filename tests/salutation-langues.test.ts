import { describe, it, expect } from 'vitest';
import { detectIntent, salutationEtrangere, respond, type CompagneCtx } from '../src/compagne/engine';

// « nagseet » — une salutation en wolof — est resté sans réponse. L'appareil ne
// connaissait que bonjour, salut, coucou ; et le vide était comblé par un
// « ici, on peut aussi se taire ensemble », qui sonne comme de la tendresse mais
// qui est une porte fermée. Le premier mot d'une personne, dans la langue qu'elle
// parle, est le plus important de tous.

const ctx: CompagneCtx = { emotion: 'calme', breath: 0.4, timeOfDay: 0.5, seed: 7 };

describe('salutations hors français', () => {
  it('les formes reconnues sont des salutations', () => {
    for (const dite of ['nagseet', 'Nanga def !', 'hello there', 'salaam alaykum', 'ni hao', 'jambo', 'guten Tag', 'hola que tal', 'namaste', 'ciao']) {
      expect(detectIntent(dite), dite).toBe('salutation');
    }
  });

  it('elle rend la salutation dans la langue reçue', () => {
    expect(respond('nagseet', ctx).texte).toContain('Nanga def');
    expect(respond('salaam alaykum', ctx).texte).toContain('alaykum');
    expect(respond('hola', ctx).texte).toContain('Hola');
    expect(respond('jambo', ctx).texte).toContain('Jambo');
    // Le français garde sa réponse ordinaire, sans traduction.
    expect(respond('salut', ctx).texte).toMatch(/Bonjour|Bonsoir/);
  });

  it('un mot qui ressemble ne suffit pas', () => {
    // « jambon » n'est pas « jambo », « hibou » n'est pas « hi ».
    expect(detectIntent("j'ai mis du jambon dans la poêle")).not.toBe('salutation');
    expect(detectIntent('un hibou traverse la nuit')).not.toBe('salutation');
    expect(detectIntent('dis-moi où passe le fleuve')).not.toBe('salutation');
    expect(salutationEtrangere('un hibou traverse la nuit')).toBe(null);
  });

  it('la banque rendue est toujours un texte français compréhensible', () => {
    const banque = salutationEtrangere('nanga cheut');
    expect(banque).not.toBe(null);
    expect(banque!.length).toBeGreaterThan(1);
    for (const t of banque!) {
      expect(t).toContain('Nanga def');
      // Une phrase jamais vide, et qui ne nomme aucune technologie.
      expect(t.length).toBeGreaterThan(20);
      expect(t.toLowerCase()).not.toContain('api');
    }
  });

  it('le prenom trouve sa place dans la salutation rendue', () => {
    const r = respond('nagseet', { ...ctx, prenom: 'Awa' });
    expect(r.texte).toContain('Awa');
    // Pas de virgule orpheline si le prénom est inconnu.
    expect(respond('nagseet', { ...ctx, prenom: null }).texte).not.toMatch(/,\s*!/);
  });

  it('un salut ne doit jamais avaler une demande', () => {
    // Mon propre écart : la reconnaissance étrangère passait avant toutes les
    // autres intentions. Une phrase qui demande quelque chose doit être entendue.
    expect(detectIntent('hello, peux-tu m aider ?')).toBe('aide');
    expect(detectIntent('jambo, qui es tu ?')).toBe('identite');
    expect(detectIntent('ciao, merci beaucoup')).toBe('remerciement');
    // Un salut seul reste un salut, dans n importe quelle langue.
    expect(detectIntent('hello')).toBe('salutation');
    expect(detectIntent('nagseet')).toBe('salutation');
    // Le français ne bouge pas : « salut » garde la main sur « comment ».
    expect(detectIntent('salut, comment tu vas ?')).toBe('salutation');
  });

  it('la ponctuation française garde son espace avant !', () => {
    // Le prénom inconnu laisse une virgule à retirer : ce retrait ne doit jamais
    // coller le point d'exclamation au mot, comme le veut l'usage français.
    for (const dite of ['nagseet', 'jambo', 'hola', 'salaam alaykum', 'namaste', 'ciao']) {
      const sans = respond(dite, { ...ctx, prenom: null }).texte;
      expect(sans, dite + ' → ' + sans).not.toMatch(/[^\s]!/);
    }
  });
});
