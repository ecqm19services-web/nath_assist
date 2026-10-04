import { describe, expect, it } from 'vitest';
import { extrairePrenom, lireMemoire, ecrireMemoire } from '../src/compagne/memoire';
import { choisirMonologue, nextDelai } from '../src/compagne/proactive';

describe('mémoire de la Compagne', () => {
  it('reconnaît les façons de donner son nom', () => {
    expect(extrairePrenom("je m'appelle Awa")).toBe('Awa');
    expect(extrairePrenom('Mon nom est Ibrahim')).toBe('Ibrahim');
    expect(extrairePrenom("moi c'est Fatou")).toBe('Fatou');
    expect(extrairePrenom('je mapselle Klema')).toBe('Klema');
    expect(extrairePrenom('je m appelle Nath')).toBe('Nath'); // dictée vocale sans apostrophe
    expect(extrairePrenom('je    m    appelle   Awa')).toBe('Awa');
  });
  it('ne confond pas un état avec un nom', () => {
    expect(extrairePrenom('je suis triste')).toBeNull();
    expect(extrairePrenom('bonjour')).toBeNull();
    expect(extrairePrenom('mon nom est commun? non')).toBe('Commun');
  });
  it('lit et écrit dans un stockage minimal', () => {
    const store = new Map<string, string>();
    const faux = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => store.set(k, v) };
    expect(lireMemoire(faux).prenom).toBeNull();
    ecrireMemoire(faux, { prenom: 'Awa', dejaVu: true });
    expect(lireMemoire(faux)).toEqual({ prenom: 'Awa', dejaVu: true });
  });
});

describe('proactivité de la Compagne', () => {
  it('le délai varie entre 40 et 105 s selon l’aléa injecté', () => {
    expect(nextDelai(() => 0)).toBe(40000);
    expect(nextDelai(() => 1)).toBe(105000);
  });
  it('monologue jamais vide, jamais criard, teinte par l’état', () => {
    const m1 = choisirMonologue({ emotion: 'calme', breath: 0, timeOfDay: 0.9, seed: 3, prenom: null, bpm: null }, 0);
    expect(m1.texte.length).toBeGreaterThan(12);
    expect(m1.texte).not.toContain('!');
    const coeur = choisirMonologue({ emotion: 'tension', breath: 0, timeOfDay: 0.3, seed: 3, prenom: null, bpm: 120 }, 0);
    expect(coeur.texte.toLowerCase()).toContain('coeur');
  });
  it('déterministe pour une même minute et graine', () => {
    const ctx = { emotion: 'joie', breath: 0.6, timeOfDay: 0.4, seed: 9, prenom: 'Awa', bpm: 60 } as const;
    expect(choisirMonologue(ctx, 12).texte).toBe(choisirMonologue(ctx, 12).texte);
  });
});
