// Le ton d'une absence. « je gardais ta place dans le ciel » a blessé : ça se
// dit de quelqu'un qui n'est plus là. Une personne qui revient n'est pas en deuil,
// et une personne qui se tait n'est pas partie. Ce garde-fou balaye TOUTES les
// phrases produites par la Compagne — réponses du moteur à mots-clés, monologues
// spontanés, salutations de retour — et refuse le vocabulaire du départ.
import { describe, expect, it } from 'vitest';
import { respond } from '../src/compagne/engine';
import { choisirMonologue } from '../src/compagne/proactive';
import { RETOURS } from '../src/compagne/memoire';

// Ce qui doit rester hors de l'app : la place « gardée », l'attente d'un retour,
// la disparition, le repos éternel, la vie poursuivie « pour deux ». Le mot
// « partie » reste autorisé : « la partie silencieuse du téléphone » n'a rien
// d'un départ — un garde-fou qui crie sur le bon français en devient inutile.
const DEUIL = /ta place|gardais|attendais|t'attend|n(?:e)?\s?est plus|disparu|disparue|repose|adieu|pour deux|plus là/i;

const QUESTIONS = [
  'salut', 'bonjour', 'tu vas bien', 'qui es tu', 'merci', 'je suis triste',
  'ça va', 'peux-tu m aider', 'calculer 12 fois 8', 'quelle heure', 'un poème',
  'je respire', 'je dors', 'répète', 'la nuit', 'mon souffle', 'je t aime',
];

describe('le ton de l absence est banni des phrases', () => {
  const ctx = { emotion: 'calme', breath: 0.4, timeOfDay: 0.5, seed: 7 } as const;

  it('aucune réponse du moteur ne parle d une place gardée ou d un départ', () => {
    // Plusieurs tirages par question : chaque pool contient plusieurs phrases,
    // un seul seed n'en testerait qu'une.
    for (const q of QUESTIONS) {
      for (const prenom of [null, 'Awa']) {
        for (let seed = 0; seed < 24; seed++) {
          const dite = respond(q, { ...ctx, prenom, seed }).texte;
          expect(dite, `« ${q} » → ${dite}`).not.toMatch(DEUIL);
        }
      }
    }
  });

  it('aucun monologue spontané ne pleure une absence', () => {
    let dernier = '';
    for (let minute = 0; minute < 900; minute++) {
      const m = choisirMonologue({ ...ctx, bpm: null, prenom: null }, minute, dernier);
      dernier = m.texte;
      expect(m.texte, `minute ${minute}`).not.toMatch(DEUIL);
    }
  });

  it('le retour se fête sans deuil ni genré', () => {
    expect(RETOURS.length).toBeGreaterThan(1);
    for (const t of RETOURS) {
      expect(t).toContain('{P}');
      expect(t).toMatch(/Rebonjour/);
      expect(t).not.toMatch(DEUIL);
    }
  });
});
