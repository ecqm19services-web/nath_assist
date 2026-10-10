// Le réglage de la musique : un choix qui se respecte. La source générative
// peut s'éteindre et se rallumer d'un appui, et ce choix survit au rechargement.
// Par défaut la musique coule — éteindre est une décision de l'utilisateur,
// jamais un bridage du projet. Une valeur stockée douteuse = comportement par
// défaut (la musique continue), parce qu'on ne punit pas ce qu'on comprend pas.
import { describe, expect, it } from 'vitest';
import { allumerAmbient, ambientEteint, eteindreAmbient, startAmbient } from '../src/audio/ambient';
import { basculerMusique, musiqueEteintee } from '../src/audio/reglages';

function storageFactice(): Storage {
  const carte = new Map<string, string>();
  return {
    getItem: (k: string) => carte.get(k) ?? null,
    setItem: (k: string, v: string) => void carte.set(k, v),
  } as unknown as Storage;
}

describe('reglages — le choix de la musique', () => {
  it('par défaut, la musique coule', () => {
    expect(musiqueEteintee(storageFactice())).toBe(false);
  });
  it('un tour éteint, un tour rallume', () => {
    const s = storageFactice();
    expect(basculerMusique(s)).toBe(true); // éteinte
    expect(musiqueEteintee(s)).toBe(true);
    expect(basculerMusique(s)).toBe(false); // rallumée
    expect(musiqueEteintee(s)).toBe(false);
  });
  it('le choix survit au rechargement', () => {
    const s = storageFactice();
    basculerMusique(s); // éteinte
    expect(musiqueEteintee(s)).toBe(true); // même storage, comme après reload
  });
  it('une valeur stockée douteuse ne punit jamais : la musique coule', () => {
    const s = storageFactice();
    s.setItem('nath.musique', 'peu importe');
    expect(musiqueEteintee(s)).toBe(false);
  });
});

describe('ambient — la source muette obéit sans moteur de son', () => {
  it('éteindre puis rallumer la source, même jamais démarrée', () => {
    expect(ambientEteint()).toBe(false);
    eteindreAmbient();
    expect(ambientEteint()).toBe(true);
    allumerAmbient();
    expect(ambientEteint()).toBe(false);
  });
  it('sans moteur audio, démarrer échoue en silence — jamais de blocage', () => {
    allumerAmbient(); // propre, quoi qu'il arrive
    expect(startAmbient(42)).toBe(false); // ni AudioContext ni window en environnement node
  });
});
