import { createScene } from './nuage/scene';
import { computeSceneParams, createInitialState } from './nuage/state';

const canvas = document.getElementById('scene') as HTMLCanvasElement;
const scene = createScene(canvas);
const state = createInitialState();
state.seed = localStorage.getItem('nuage.seed') ?? crypto.randomUUID();
localStorage.setItem('nuage.seed', state.seed);

let last = performance.now();
function boucle(now: number) {
  const dt = (now - last) / 1000;
  last = now;
  scene.apply(computeSceneParams(state));
  scene.frame(dt);
  requestAnimationFrame(boucle);
}
requestAnimationFrame(boucle);
console.log('NUAGE v1-alpha — by Nath-Tech');
