import { createScene } from './nuage/scene';
import { computeSceneParams, createInitialState } from './nuage/state';
import { startBreath } from './input/breathIO';
import { startFace } from './input/faceIO';
import { createEmotionSmoother, mapEmotion } from './input/emotion';
import { cheekLuminance, estimateBpm } from './nuage/rppg';
import { generateAura } from './aura/aura';
import { attachPointer, attachTilt } from './input/touch';
import { ambientLevel, ambientMood, startAmbient } from './audio/ambient';
import { createCompagneUI } from './compagne/ui';

const canvas = document.getElementById('scene') as HTMLCanvasElement;
const scene = createScene(canvas);
const state = createInitialState();
state.seed = localStorage.getItem('nuage.seed') ?? crypto.randomUUID();
localStorage.setItem('nuage.seed', state.seed);
startBreath((v) => { state.breath = Math.max(state.breath, v); });
const video = document.getElementById('cam') as HTMLVideoElement;
const lisser = createEmotionSmoother();
startFace(video, (s) => { state.emotion = lisser(mapEmotion(s)); });

const etat = document.getElementById('etat')!;
const aura = generateAura(state.seed);

// Le doigt décale le champ de nuages ; l'inclinaison soulève le ciel.
let focus: [number, number] = [0.5, 0.5];
attachPointer(canvas, (x, y) => { focus = [x, y]; });
attachTilt((x) => { state.breath = Math.max(state.breath, Math.abs(x)); });

// La Compagne : voix et bulles, branchées sur l'état vivant.
createCompagneUI(() => ({
  emotion: state.emotion,
  breath: state.breath,
  timeOfDay: state.timeOfDay,
  seed: aura.musiqueSeed,
}));

// Un toucher du ciel : onde lumineuse + éveil de la musique (politique autoplay).
let reveille = false;
canvas.addEventListener('pointerdown', (e) => {
  const r = canvas.getBoundingClientRect();
  scene.tap((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height);
  if (!reveille) {
    reveille = startAmbient(aura.musiqueSeed);
  }
});

// rPPG : échantillonnage ~8 fps de la luminance cutanée, pouls glissant.
const rctx = document.createElement('canvas').getContext('2d', { willReadFrequently: true })!;
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
  // L'heure locale pilote le cycle jour/nuit du ciel.
  const d = new Date();
  state.timeOfDay = (d.getHours() + d.getMinutes() / 60) / 24;
  // Décroissance douce du souffle : les nuages retombent quand on cesse de souffler.
  state.breath = Math.max(0, state.breath - dt * 0.5);
  // Le nuage « respire » doucement au rythme du pouls détecté.
  if (state.bpm) {
    const phase = Math.sin((Date.now() / (60000 / state.bpm)) * 2 * Math.PI);
    state.breath = Math.max(state.breath, 0.08 * phase + 0.08);
  }
  scene.apply(computeSceneParams(state), focus);
  scene.setBpm(state.bpm);
  scene.frame(dt);
  // L'ambiance sonore suit l'humeur et l'intensité du souffle.
  ambientMood(state.emotion);
  ambientLevel(state.breath);
  etat.textContent = reveille
    ? `aura : ${aura.nom} · humeur : ${state.emotion} · souffle : ${(state.breath * 100) | 0}% · pouls : ${state.bpm ? Math.round(state.bpm) : '—'}`
    : `aura : ${aura.nom} · touche le ciel pour éveiller la musique`;
  requestAnimationFrame(boucle);
}
requestAnimationFrame(boucle);
console.log('NUAGE v1-alpha — by Nath-Tech');
