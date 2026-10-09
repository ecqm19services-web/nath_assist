import { describe, expect, it } from 'vitest';
import {
  FACES,
  contraintesVideo,
  effetMiroir,
  faceValide,
  lireFacePreferee,
  ecrireFacePreferee,
  messageConsentement,
  prochainFace,
} from '../src/input/camera';

describe('caméra : face avant/arrière (logique pure)', () => {
  it('faceValide ne reconnaît que « arriere », sinon avant par défaut', () => {
    expect(faceValide('arriere')).toBe('arriere');
    expect(faceValide('avant')).toBe('avant');
    expect(faceValide(null)).toBe('avant');
    expect(faceValide(undefined)).toBe('avant');
    expect(faceValide('nawak')).toBe('avant');
  });

  it('prochainFace fait la bascule dans les deux sens', () => {
    expect(prochainFace('avant')).toBe('arriere');
    expect(prochainFace('arriere')).toBe('avant');
  });

  it('contraintesVideo demande la bonne caméra et JAMAIS le micro', () => {
    const avant = contraintesVideo('avant');
    const arriere = contraintesVideo('arriere');
    expect((avant.video as MediaTrackConstraints).facingMode).toEqual({ ideal: 'user' });
    expect((arriere.video as MediaTrackConstraints).facingMode).toEqual({ ideal: 'environment' });
    expect(avant.audio).toBe(false);
    expect(arriere.audio).toBe(false);
  });

  it('miroir seulement pour la caméra avant', () => {
    expect(effetMiroir('avant')).toBe(true);
    expect(effetMiroir('arriere')).toBe(false);
  });

  it('deux faces seulement, l’avant en tête', () => {
    expect(FACES).toEqual(['avant', 'arriere']);
  });
});

describe('caméra : consentement honnête et préférence locale', () => {
  it('le message promet la vérité : ni enregistrement, ni envoi', () => {
    const m = messageConsentement();
    expect(m).toMatch(/caméra/);
    expect(m.toLowerCase()).toContain('enregistr');
    expect(m.toLowerCase()).toContain('envoy');
    expect(m.toLowerCase()).toContain('ton appareil');
    // jamais de nom de moteur/marque technique dans un texte utilisateur
    expect(m.toLowerCase()).not.toMatch(/mediapipe|tensorflow|getUserMedia|wasm|modèle/);
  });

  const mkStorage = () => {
    const m = new Map<string, string>();
    return {
      getItem: (k: string) => (m.has(k) ? m.get(k)! : null),
      setItem: (k: string, v: string) => void m.set(k, String(v)),
    };
  };

  it('la préférence de face se mémorise et se relit localement', () => {
    const s = mkStorage();
    expect(lireFacePreferee(s)).toBe('avant'); // défaut sans rien de stocké
    ecrireFacePreferee(s, 'arriere');
    expect(lireFacePreferee(s)).toBe('arriere');
  });
});
