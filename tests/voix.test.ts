import { describe, expect, it } from 'vitest';
import { choisirVoixFr, messageEveilVoix } from '../src/compagne/voix';

const v = (name: string, lang: string): SpeechSynthesisVoice =>
  ({ name, lang } as SpeechSynthesisVoice);

describe('voix de Nath : choix dans le système', () => {
  it('préfère une voix naturelle française de France', () => {
    const voix = [
      v('Microsoft David - English (United States)', 'en-US'),
      v('Microsoft François - French (France)', 'fr-FR'),
      v('Microsoft Julie Online Natural - French (France)', 'fr-FR'),
    ];
    expect(choisirVoixFr(voix)?.name).toBe('Microsoft Julie Online Natural - French (France)');
  });

  it('préfère fr-FR à fr-CA ou fr-CH', () => {
    const voix = [
      v('Amélie', 'fr-CA'),
      v('Hélène', 'fr-FR'),
    ];
    expect(choisirVoixFr(voix)?.name).toBe('Hélène');
  });

  it('accepte une voix fr quelconque s\'il n\'y a pas de France', () => {
    const voix = [v('Google français', 'fr-CA')];
    expect(choisirVoixFr(voix)?.name).toBe('Google français');
  });

  it('retourne null sans voix française (repli sur le réglage langue)', () => {
    expect(choisirVoixFr([v('David', 'en-US')])).toBeNull();
    expect(choisirVoixFr([])).toBeNull();
  });
});

describe('confidentialité de l\'audio : jamais de nom de moteur à l\'écran', () => {
  it('le message de chargement de la voix reste générique', () => {
    const m = messageEveilVoix(0.42);
    expect(m).toContain('Éveil de ma voix en cours');
    expect(m).toContain('42 %');
    expect(m.toLowerCase()).not.toMatch(/kokoro|onnx|espeak|huggingface|transformers|siwis|pytorch|modèle/);
  });
});
