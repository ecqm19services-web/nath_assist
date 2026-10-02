import { createScene } from './nuage/scene';
import { computeSceneParams, createInitialState } from './nuage/state';
import { startBreath } from './input/breathIO';
import { startFace } from './input/faceIO';
import { mapEmotion } from './input/emotion';
import { cheekLuminance, estimateBpm } from './nuage/rppg';

const canvas = document.getElementById('scene') as HTMLCanvasElement;
const scene = createScene(canvas);
const state = createInitialState();
state.seed = localStorage.getItem('nuage.seed') ?? crypto.randomUUID();
localStorage.setItem('nuage.seed', state.seed);
startBreath((v) => { state.breath = v; });
const video = document.getElementById('cam') as HTMLVideoElement;
startFace(video, (s) => { state.emotion = mapEmotion(s); });

const etat = document.getElementById('etat')!;

// rPPG : échantillonnage ~8 fps de la luminance cutanée, pouls glissant.
const rctx = document.createElement('canvas').getContext('2d')!;
const lum: number[] = [];
setInterval(() => {
  const v = cheekLuminance(video, rctx);
  if (v != null) {
    lum.push(v);
    if (lum.length > 80) lum.shift();
    state.bpm = estimateBpm(lum, 8);
  }
}, 125);

let last = performance.now();
function boucle(now: number) {
  const dt = (now - last) / 1000;
  last = now;
  // Le nuage « respire » doucement au rythme du pouls détecté.
  if (state.bpm) {
    const phase = Math.sin((Date.now() / (60000 / state.bpm)) * 2 * Math.PI);
    state.breath = Math.max(state.breath, 0.08 * phase + 0.08);
  }
  scene.apply(computeSceneParams(state));
  scene.frame(dt);
  etat.textContent = `humeur : ${state.emotion} · souffle : ${(state.breath * 100) | 0}% · pouls : ${state.bpm ?? '—'}`;
  requestAnimationFrame(boucle);
}
requestAnimationFrame(boucle);
console.log('NUAGE v1-alpha — by Nath-Tech');
