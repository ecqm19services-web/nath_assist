// Une question en wolof qui reçoit une réponse en français n'est pas un détail :
// c'est la promesse rompue, chez une personne dont c'est la langue du marché. Le
// grand cerveau tient la langue quand la conversation est propre — il y déroge
// quand l'historique d'avant parle une autre langue (prouvé en production). La
// dérive se mesure, elle ne se devine pas : on compare la langue de la question à
// celle de la réponse, et on ne tranche que si les deux sont certaines.
import { describe, expect, it } from 'vitest';
import { ancreLangue, detecterLangue } from '../src/compagne/comprehension';
import { brouillonDe, fautIlRetisser, langueDeReponse, type Brouillon } from '../src/compagne/dialogue';

// Les textes vrais, recopiés de la production — pas des cas jolis à écrire.
const QUESTION_WOLOF = 'Naka nga def?';
const REPONSE_WOLOF = 'Maa ngi def ko ci kaw suuf, waaye maa ngi fi ne ci yonnee yi';
const REPONSE_WOLOF_BANCALE =
  'Waaw, ngaa def waxe ji ci waxi ma waxe, maa ngi ci wax ak yoon wi, te waxi ma def lu tolukaayloo, ndaxte maa ngi wax ci yoon wi, ngir def wax ak jëfandikoo.';
const REPONSE_FRANCAISE =
  "Je t'écoute. Les mots que tu ne trouves pas, les nuages les tiennent pour toi.";

describe('la langue rendue, mesurée dans la réponse', () => {
  it('le wolof tenu se reconnaît', () => {
    expect(detecterLangue(QUESTION_WOLOF)).toBe('wo');
    expect(langueDeReponse(REPONSE_WOLOF)).toBe('wo');
  });

  it('le wolof bancale reste du wolof : pas de mots-outils français', () => {
    expect(langueDeReponse(REPONSE_WOLOF_BANCALE)).toBe('wo');
  });

  it('la réponse française à une question wolof est une dérive', () => {
    expect(langueDeReponse(REPONSE_FRANCAISE)).toBe('fr');
  });

  it('un repli du moteur embarqué, lui, est une dérive mesurée', () => {
    // « …je cherche encore mes mots. » est la phrase de repli quand le grand
    // cerveau n'a rien rendu : du français sous une question wolof. Ce n'est
    // pas un neutre, c'est exactement la dérive à corriger.
    expect(langueDeReponse('…je cherche encore mes mots.')).toBe('fr');
    expect(fautIlRetisser(brouillonDe(QUESTION_WOLOF, '…je cherche encore mes mots.'))).toBe(true);
  });

  it('une réponse qui ne penche pour personne n est pas une dérive', () => {
    // Une relance pour rien coûte la même chose qu'une réponse ratée : on ne
    // reprend que ce qui est mesuré, jamais ce qui est vague.
    expect(langueDeReponse('Hmm.')).toBe(null);
    expect(langueDeReponse('Salut !')).toBe(null);
    expect(langueDeReponse('Bonjour ! Je vais bien, merci.')).toBe('fr');
  });
});

describe('le retissage : une seule reprise, jamais deux', () => {
  const brouillon = (sur: Partial<Brouillon> = {}): Brouillon => ({
    question: QUESTION_WOLOF,
    texte: REPONSE_WOLOF,
    langueQuestion: 'wo',
    langueRendue: null,
    ...sur,
  });

  it('la langue rendue se note sur le brouillon', () => {
    const b = brouillonDe(QUESTION_WOLOF, REPONSE_FRANCAISE);
    expect(b.langueRendue).toBe('fr');
    expect(b.langueQuestion).toBe('wo');
    expect(fautIlRetisser(b)).toBe(true);
  });

  it('une réponse dans la mauvaise langue se retisse une fois', () => {
    expect(fautIlRetisser(brouillon({ langueRendue: 'fr' }))).toBe(true);
  });

  it('dans la bonne langue, on ne touche à rien', () => {
    expect(fautIlRetisser(brouillon({ langueRendue: 'wo' }))).toBe(false);
  });

  it('une langue rendue incertaine ne relance pas', () => {
    expect(fautIlRetisser(brouillon({ langueRendue: null }))).toBe(false);
  });

  it('le second brouillon ne repart jamais en chasse', () => {
    // Deux appels quand la réponse reste mauvaise : le forfait n'est pas une
    // poubelle. Le retissage a un tour, pas une boucle.
    expect(fautIlRetisser(brouillon({ langueRendue: 'fr', dejaRetisse: true }))).toBe(false);
  });

  it('sans langue certaine pour la question, rien ne se retisse', () => {
    // Une question mêlée ou dans une langue hors jeu : on ne nomme rien, donc
    // on n'a rien à faire reprendre.
    expect(fautIlRetisser(brouillon({ question: 'Bonjour hello', langueQuestion: null, langueRendue: 'fr' }))).toBe(false);
  });
});

// La phrase qui force la reprise est la seule chose que le modèle relit avant de
// se reprendre : elle doit nommer la langue visée et fermer les deux autres.
describe('l’ancre de retissage', () => {
  it('nomme la langue visée et ferme les autres', () => {
    expect(ancreLangue('wo')).toContain('wolof');
    expect(ancreLangue('wo')).toContain('Wolof');
    expect(ancreLangue('wo')).toContain('français');
    expect(ancreLangue('wo')).toContain('anglais');
    expect(ancreLangue('fr')).toContain('uniquement en français');
    expect(ancreLangue('fr')).toContain('wolof');
    expect(ancreLangue('en')).toContain('uniquement en anglais');
  });

  it('reste courte : un ordre long dilue l’ordre', () => {
    for (const l of ['wo', 'fr', 'en'] as const) {
      expect(ancreLangue(l).length).toBeLessThan(140);
    }
  });

  it('ne nomme jamais un moteur ni une marque de technologie', () => {
    // Le garde-fou de discrétion s'applique aussi aux consignes : ce texte peut
    // être lu à l'écran par une personne qui regarde la conversation.
    for (const l of ['wo', 'fr', 'en'] as const) {
      expect(ancreLangue(l).toLowerCase()).not.toMatch(/llama|gpt|claude|deepseek|qwen|mistral|mod[eè]le|api|webgpu/);
    }
  });
});
