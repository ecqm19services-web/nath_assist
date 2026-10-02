import { createScene } from './nuage/scene';
import { computeSceneParams, createInitialState } from './nuage/state';
import { startBreath } from './input/breathIO';
import { startFace } from './input/faceIO';
import { mapEmotion } from './input/emotion';

const canvas = document.getElementById('scene') as HTMLCanvasElement;
const scene = createScene(canvas);
const state = createInitialState();
state.seed = localStorage.getItem('nuage.seed') ?? crypto.randomUUID();
localStorage.setItem('nuage.seed', state.seed);
startBreath((v) => { state.breath = v; });
const video = document.getElementById('cam') as HTMLVideoElement;
startFace(video, (s) => { state.emotion = mapEmotion(s); });

const etat = document.getElementById('etat')!;

let last = performance.now();
function boucle(now: number) {
  const dt = (now - last) / 1000;
  last = now;
  scene.apply(computeSceneParams(state));
  scene.frame(dt);
  etat.textContent = `humeur : ${state.emotion} · souffle : ${(state.breath * 100) | 0}% · pouls : ${state.bpm ?? '—'}`;
  requestAnimationFrame(boucle);
}
requestAnimationFrame(boucle);
console.log('NUAGE v1-alpha — by Nath-Tech');
