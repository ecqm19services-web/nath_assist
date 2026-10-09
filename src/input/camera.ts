// La caméra de Nath Assist : JAMAIS allumée sans un choix clair de l'utilisateur.
// Ce module est pur (ni DOM, ni API) : il décide de la face, construit les
// contraintes getUserMedia, gère la préférence mémorisée et le miroir. C'est le
// contrat de respect : avant le consentement, aucune image n'est capturée, et
// rien n'est jamais enregistré ni envoyé — tout reste dans l'appareil.

export type Face = 'avant' | 'arriere';

export const FACES: readonly Face[] = ['avant', 'arriere'] as const;

// Interprète une préférence stockée ; toute valeur inconnue retombe sur l'avant
// (le choix le plus discret, et celui attendu pour un assistant qui « vous voit »).
export function faceValide(brut: string | null | undefined): Face {
  return brut === 'arriere' ? 'arriere' : 'avant';
}

// Bascule avant ⇄ arrière.
export function prochainFace(face: Face): Face {
  return face === 'avant' ? 'arriere' : 'avant';
}

// Contraintes vidéo correspondant à la face choisie. « ideal » laisse le
// navigateur fallback gracieusement si la caméra demandée n'existe pas.
// audio: false — le micro est un consentement séparé, jamais lié à la caméra.
export function contraintesVideo(face: Face): MediaStreamConstraints {
  return {
    video: { facingMode: { ideal: face === 'arriere' ? 'environment' : 'user' } },
    audio: false,
  };
}

// Miroir horizontal seulement pour la caméra avant (on se voit naturellement) ;
// l'arrière montre le monde tel qu'il est, sans retournement.
export function effetMiroir(face: Face): boolean {
  return face === 'avant';
}

// Le texte de consentement, prononcé AVANT toute demande d'accès système.
// Il dit la vérité : rien n'est stocké, rien n'est envoyé, on peut éteindre.
export function messageConsentement(): string {
  return "Je vais allumer ma caméra pour te voir et réagir avec toi. Rien n'est enregistré ni envoyé : tout reste dans ton appareil. Tu peux l'éteindre quand tu veux.";
}

const CLE_FACE = 'nath.camera.face';

// Persistance de la préférence de face (locale, jamais une donnée biométrique).
export function lireFacePreferee(storage: Pick<Storage, 'getItem'>): Face {
  return faceValide(storage.getItem(CLE_FACE));
}

export function ecrireFacePreferee(storage: Pick<Storage, 'setItem'>, face: Face): void {
  storage.setItem(CLE_FACE, face);
}
