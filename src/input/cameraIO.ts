// Le maniement de la caméra : un objet de contrôle que l'UI pilote par un choix
// explicite. Rien ne s'allume tout seul. Éteindre libère vraiment le flux (le
// témoin d'accès du navigateur s'éteint), et basculer avant/arrière rouvre le
// bon objectif sans recréer le moteur d'analyse.
import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import type { Shapes } from './emotion';
import {
  contraintesVideo,
  effetMiroir,
  ecrireFacePreferee,
  lireFacePreferee,
  prochainFace,
  type Face,
} from './camera';

const MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task';
const WASM_URL = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm';

// Le moteur d'analyse n'est chargé qu'une seule fois, à la première ouverture.
let landmarkerPromise: Promise<FaceLandmarker> | null = null;
function chargerMoteur(): Promise<FaceLandmarker> {
  if (!landmarkerPromise) {
    landmarkerPromise = FilesetResolver.forVisionTasks(WASM_URL).then((vision) =>
      FaceLandmarker.createFromOptions(vision, {
        baseOptions: { modelAssetPath: MODEL_URL },
        runningMode: 'VIDEO',
        numFaces: 1,
        outputFaceBlendshapes: true,
      }),
    );
  }
  return landmarkerPromise;
}

export interface ManegeCamera {
  eteindre(): void;
  basculer(face: Face): Promise<void>;
}

// Ouvre la caméra (consentement déjà donné par l'appelant) et lance l'analyse.
export async function ouvrirCamera(
  video: HTMLVideoElement,
  face: Face,
  onShapes: (s: Shapes) => void,
): Promise<ManegeCamera> {
  const landmarker = await chargerMoteur();
  let stream: MediaStream | null = null;
  let tourne = true;
  let lastSeen = performance.now();

  const aspirer = async (f: Face) => {
    if (stream) stream.getTracks().forEach((t) => t.stop());
    stream = await navigator.mediaDevices.getUserMedia(contraintesVideo(f));
    video.srcObject = stream;
    video.style.transform = effetMiroir(f) ? 'scaleX(-1)' : 'none';
    await video.play();
  };

  const boucle = () => {
    if (!tourne) return;
    if (video.readyState >= 2) {
      const now = performance.now();
      const res = landmarker.detectForVideo(video, now);
      const b = res.faceBlendshapes?.[0]?.categories;
      if (b) {
        lastSeen = now;
        const get = (n: string) => b.find((c) => c.categoryName === n)?.score ?? 0;
        onShapes({
          smile: (get('mouthSmileLeft') + get('mouthSmileRight')) / 2,
          browDown: (get('browDownLeft') + get('browDownRight')) / 2,
          eyeBlink: (get('eyeBlinkLeft') + get('eyeBlinkRight')) / 2,
          jawOpen: get('jawOpen'),
        });
      } else if (now - lastSeen > 2000) {
        onShapes({ smile: 0, browDown: 0, eyeBlink: 0, jawOpen: 0 });
      }
    }
    requestAnimationFrame(boucle);
  };

  await aspirer(face);
  requestAnimationFrame(boucle);

  return {
    eteindre() {
      tourne = false;
      if (stream) {
        stream.getTracks().forEach((t) => t.stop());
        stream = null;
      }
      video.srcObject = null;
    },
    async basculer(f: Face) {
      await aspirer(f);
    },
  };
}

// Contrôleur d'état : sait si la caméra est ouverte, sur quelle face, allume et
// éteint, bascule et mémorise la préférence. C'est l'interface unique de l'UI.
export class ControleurCamera {
  private manege: ManegeCamera | null = null;
  private face: Face;

  constructor(
    private video: HTMLVideoElement,
    private storage: Storage,
    private onShapes: (s: Shapes) => void,
    private onEtat: (ouverte: boolean) => void,
  ) {
    this.face = lireFacePreferee(storage);
  }

  get ouverte(): boolean {
    return this.manege != null;
  }

  get faceCourante(): Face {
    return this.face;
  }

  // Allume ou éteint. Renvoie le nouvel état (true = ouverte).
  async basculer(): Promise<boolean> {
    if (this.manege) {
      this.manege.eteindre();
      this.manege = null;
      this.onEtat(false);
      return false;
    }
    this.manege = await ouvrirCamera(this.video, this.face, this.onShapes);
    this.onEtat(true);
    return true;
  }

  // Bascule avant ⇄ arrière ; ne rouvre que si la caméra est déjà allumée.
  async basculerFace(): Promise<Face> {
    this.face = prochainFace(this.face);
    ecrireFacePreferee(this.storage, this.face);
    if (this.manege) await this.manege.basculer(this.face);
    return this.face;
  }
}
