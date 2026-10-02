// Caméra → FaceLandmarker (blendshapes) → onShapes. Échoue en silence si refusée.
import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import type { Shapes } from './emotion';

const MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task';

export async function startFace(
  video: HTMLVideoElement,
  onShapes: (s: Shapes) => void,
): Promise<boolean> {
  try {
    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm');
    const landmarker = await FaceLandmarker.createFromOptions(vision, {
      baseOptions: { modelAssetPath: MODEL_URL },
      runningMode: 'VIDEO',
      numFaces: 1,
      outputFaceBlendshapes: true,
    });
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
    video.srcObject = stream;
    await video.play();
    let ts = 0;
    let lastSeen = performance.now();
    const boucle = () => {
      const now = performance.now();
      if (now > ts) {
        ts = now;
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
          // Plus de visage depuis 2 s → retour garanti au calme (état non collant).
          onShapes({ smile: 0, browDown: 0, eyeBlink: 0, jawOpen: 0 });
        }
      }
      requestAnimationFrame(boucle);
    };
    boucle();
    return true;
  } catch {
    return false; // pas de caméra → souffle et toucher suffisent
  }
}
