# NUAGE v1-alpha — Nuage Sensoriel : plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal :** une application web (PWA) openable sur n'importe quel téléphone : l'utilisateur est *dans les nuages*, pilotés par son souffle (micro), son visage/sourire (MediaPipe), son pouls (rPPG caméra) ; chaque personne reçoit une « aura » unique ; signature permanente « by Nath-Tech » en pied de page.

**Architecture :** Vanilla TS + Three.js (rendu GLSL procédural, 0 asset lourd), modules purs testables (`state`, `emotion`, `breath`, `rppg`, `aura`) séparés des adaptateurs capteurs (`breathIO`, `faceIO`) ; MediaPipe Tasks-Vision (WASM) pour le maillage facial ; Vitest pour les tests unitaires, RunPreview pour la validation visuelle.

**Tech Stack :** Vite, TypeScript, Three.js, @mediapipe/tasks-vision, Web Audio API, Vitest, vite-plugin-pwa. 100 % gratuit, déploiement futur sur Cloudflare Pages.

**Convention de style :** dossiers `src/nuage` (rendu), `src/input` (capteurs), `src/aura` (identité), `src/ui` (DOM) ; un fichier = une responsabilité ; commentaires en français.

---

### Task 1 : Échafaudage du projet (Vite + TS + Vitest)

**Files:**
- Create: `package.json`, `tsconfig.json`, `vite.config.ts`, `index.html`, `src/main.ts`
- Test: `tests/smoke.test.ts`

- [ ] **Step 1: Initialiser npm et installer les dépendances**

```powershell
cd f:\icf
npm init -y
npm install three @mediapipe/tasks-vision
npm install -D vite typescript vitest
```

(Note : `three` et `@mediapipe/tasks-vision` en dépendances d'exécution ; outils en devDependencies. Si une commande échoue à cause du pipe, relancer les `npm install` une par une.)

- [ ] **Step 2: Écrire `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "types": ["vite/client"],
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "skipLibCheck": true
  },
  "include": ["src", "tests"]
}
```

- [ ] **Step 3: Écrire `vite.config.ts`**

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
});
```

- [ ] **Step 4: Écrire `index.html`** (structure + pied de page Nath-Tech)

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>NUAGE — by Nath-Tech</title>
    <link rel="stylesheet" href="/src/ui/style.css" />
  </head>
  <body>
    <canvas id="scene"></canvas>
    <video id="cam" playsinline muted></video>
    <footer id="patte">NUAGE — <span>by Nath-Tech</span></footer>
    <div id="etat"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

- [ ] **Step 5: Écrire `src/ui/style.css`**

```css
html, body { margin: 0; height: 100%; background: #05070f; overflow: hidden; }
#scene { position: fixed; inset: 0; width: 100%; height: 100%; display: block; }
#cam { position: fixed; bottom: 8px; right: 8px; width: 96px; height: 128px;
       object-fit: cover; opacity: .35; border-radius: 8px; transform: scaleX(-1); }
#patte { position: fixed; bottom: 10px; left: 0; right: 0; text-align: center;
         color: #cfd6e6; font: 500 13px/1.4 system-ui, sans-serif; opacity: .75;
         pointer-events: none; letter-spacing: .04em; }
#patte span { color: #9fd8ff; }
#etat { position: fixed; top: 10px; left: 12px; color: #aeb8cf; font: 12px/1.4 system-ui; opacity: .7; }
```

- [ ] **Step 6: Écrire le stub `src/main.ts`**

```ts
// Point d'entrée NUAGE — by Nath-Tech : assemble capteurs, état et rendu.
console.log('NUAGE v1-alpha — by Nath-Tech');
```

- [ ] **Step 7: Écrire le test de fumée `tests/smoke.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
describe('fumée', () => {
  it('le projet se charge', () => {
    expect(1 + 1).toBe(2);
  });
});
```

- [ ] **Step 8: Ajouter les scripts npm** — dans `package.json` :

```json
"scripts": {
  "dev": "vite",
  "build": "tsc --noEmit && vite build",
  "test": "vitest run"
}
```

- [ ] **Step 9: Vérifier**

Run: `npm run test` → Expected : 1 test PASS.
Run: `npm run build` → Expected : build réussi sans erreur TS.

- [ ] **Step 10: Commit**

```powershell
git add package.json package-lock.json tsconfig.json vite.config.ts index.html src tests
git commit -m "chore: échafaudage Vite+TS+Vitest NUAGE (by Nath-Tech)"
```

---

### Task 2 : Machine à états `NuageState` (cœur pur, TDD)

**Files:**
- Create: `src/nuage/state.ts`
- Test: `tests/state.test.ts`

- [ ] **Step 1: Écrire le test échouant `tests/state.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import { computeSceneParams, createInitialState, lerp } from '../src/nuage/state';

describe('NuageState', () => {
  it('état initial calme, souffle nul', () => {
    const s = createInitialState();
    expect(s.emotion).toBe('calme');
    expect(s.breath).toBe(0);
    expect(s.bpm).toBeNull();
  });
  it('la joie ouvre la luminosité, la tension la ferme', () => {
    const base = createInitialState();
    const joy = computeSceneParams({ ...base, emotion: 'joie' });
    const tension = computeSceneParams({ ...base, emotion: 'tension' });
    expect(joy.luminosite).toBeGreaterThan(tension.luminosite);
  });
  it('le souffle monte les nuages', () => {
    const p0 = computeSceneParams({ ...createInitialState(), breath: 0 });
    const p1 = computeSceneParams({ ...createInitialState(), breath: 1 });
    expect(p1.altitude).toBeGreaterThan(p0.altitude);
  });
  it('lerp interpole', () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
  });
});
```

- [ ] **Step 2: Run** `npx vitest run tests/state.test.ts` → Expected : FAIL (module introuvable).

- [ ] **Step 3: Écrire `src/nuage/state.ts`**

```ts
// Machine à états du Nuage : capteurs bruts → paramètres de scène.
export type Emotion = 'calme' | 'joie' | 'tristesse' | 'tension';

export interface NuageState {
  breath: number;          // 0..1 niveau de souffle
  bpm: number | null;      // pouls rPPG estimé
  emotion: Emotion;
  timeOfDay: number;       // 0..1 cycle jour/nuit
  seed: string;            // graine d'aura de l'utilisateur
}

export interface SceneParams {
  altitude: number;    // 0..1 : hauteur des nuages
  luminosite: number;  // 0..1 : clarté de l'atmosphère
  turbulence: number;  // 0..1 : agitation du ciel
  palette: [string, string, string];
}

export function createInitialState(): NuageState {
  return { breath: 0, bpm: null, emotion: 'calme', timeOfDay: 0.5, seed: 'anonyme' };
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

const PALETTES: Record<Emotion, [string, string, string]> = {
  calme: ['#1b2a4a', '#7fa8d9', '#dfefff'],
  joie: ['#2b4a1b', '#d9c47f', '#fff6df'],
  tristesse: ['#101018', '#3a4a6a', '#8a9ab0'],
  tension: ['#2a0a0a', '#6a2a2a', '#c07a5a'],
};

export function computeSceneParams(s: NuageState): SceneParams {
  const emBase = { calme: { alt: 0.45, lum: 0.7, turb: 0.2 }, joie: { alt: 0.7, lum: 0.9, turb: 0.35 },
                  tristesse: { alt: 0.2, lum: 0.35, turb: 0.1 }, tension: { alt: 0.6, lum: 0.45, turb: 0.85 } }[s.emotion];
  return {
    altitude: Math.min(1, emBase.alt + s.breath * 0.35),
    luminosite: Math.min(1, emBase.lum + s.breath * 0.2),
    turbulence: Math.min(1, emBase.turb + s.breath * 0.1),
    palette: PALETTES[s.emotion],
  };
}
```

- [ ] **Step 4: Run** `npx vitest run tests/state.test.ts` → Expected : 4 tests PASS.

- [ ] **Step 5: Commit** `git add src/nuage/state.ts tests/state.test.ts` puis `git commit -m "feat: machine à états NuageState"`

---

### Task 3 : Rendu Three.js — ciel et nuages procéduraux (GLSL)

**Files:**
- Create: `src/nuage/cloudShader.ts`, `src/nuage/scene.ts`
- Modify: `src/main.ts`

- [ ] **Step 1: Écrire `src/nuage/cloudShader.ts`** (shaders fbm, export purs)

```ts
// Shader des nuages : bruit fractal (fbm) déformé par les paramètres d'état.
export const SKY_FRAG = /* glsl */ `
precision mediump float;
uniform float uTime, uAltitude, uLuminosite, uTurbulence;
uniform vec3 uCol1, uCol2, uCol3;
varying vec2 vUv;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float noise(vec2 p){
  vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),
             mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y);
}
float fbm(vec2 p){
  float v=0.0, a=0.5;
  for(int i=0;i<5;i++){ v+=a*noise(p); p=p*2.1+uTurbulence; a*=0.5; }
  return v;
}
void main(){
  vec2 uv = vUv;
  float t = uTime * 0.03;
  float clouds = fbm(uv * 3.0 + vec2(t, t * 0.4));
  clouds = smoothstep(0.55 - uAltitude * 0.45, 0.95, clouds);
  vec3 sky = mix(uCol1, uCol2, uv.y);
  vec3 col = mix(sky, uCol3 * uLuminosite, clouds);
  gl_FragColor = vec4(col, 1.0);
}`;

export const SKY_VERT = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
```

- [ ] **Step 2: Écrire `src/nuage/scene.ts`**

```ts
import * as THREE from 'three';
import { SKY_FRAG, SKY_VERT } from './cloudShader';
import { SceneParams } from './state';

// Scène fullscreen : un seul quad + shader ; aucune géométrie inutile.
export function createScene(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
  const uniforms = {
    uTime: { value: 0 }, uAltitude: { value: 0.45 }, uLuminosite: { value: 0.7 },
    uTurbulence: { value: 0.2 },
    uCol1: { value: new THREE.Color('#1b2a4a') },
    uCol2: { value: new THREE.Color('#7fa8d9') },
    uCol3: { value: new THREE.Color('#dfefff') },
  };
  const mat = new THREE.ShaderMaterial({ SKY_VERT, SKY_FRAG } as never);
  mat.vertexShader = SKY_VERT; mat.fragmentShader = SKY_FRAG;
  (mat as unknown as { uniforms: typeof uniforms }).uniforms = uniforms;
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  const scene = new THREE.Scene(); scene.add(mesh);

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
  }
  window.addEventListener('resize', resize); resize();

  return {
    apply(params: SceneParams) {
      uniforms.uAltitude.value = params.altitude;
      uniforms.uLuminosite.value = params.luminosite;
      uniforms.uTurbulence.value = params.turbulence;
      uniforms.uCol1.value.set(params.palette[0]);
      uniforms.uCol2.value.set(params.palette[1]);
      uniforms.uCol3.value.set(params.palette[2]);
    },
    frame(dt: number) {
      uniforms.uTime.value += dt;
      renderer.render(scene, new THREE.Camera());
    },
  };
}
```

- [ ] **Step 3: Modifier `src/main.ts`** pour afficher le Nuage avec animation douce :

```ts
import { createScene } from './nuage/scene';
import { computeSceneParams, createInitialState } from './nuage/state';

const canvas = document.getElementById('scene') as HTMLCanvasElement;
const scene = createScene(canvas);
const state = createInitialState();
state.seed = localStorage.getItem('nuage.seed') ?? crypto.randomUUID();
localStorage.setItem('nuage.seed', state.seed);

let last = performance.now();
function boucle(now: number) {
  const dt = (now - last) / 1000; last = now;
  scene.apply(computeSceneParams(state));
  scene.frame(dt);
  requestAnimationFrame(boucle);
}
requestAnimationFrame(boucle);
console.log('NUAGE v1-alpha — by Nath-Tech');
```

- [ ] **Step 4: Vérification visuelle**

Run: `npm run dev` → ouvrir l'URL locale (RunPreview). Expected : ciel dégradé bleu profond avec bancs de nuages blancs dérivant lentement ; pied de page « NUAGE — by Nath-Tech » visible.
Run: `npm run test` → Expected : tous les tests existants PASS.

- [ ] **Step 5: Commit** `git add src/nuage src/main.ts` puis `git commit -m "feat: rendu nuages procéduraux Three.js"`

---

### Task 4 : Souffle — micro → niveau de souffle (pur + adaptateur)

**Files:**
- Create: `src/input/breath.ts`, `src/input/breathIO.ts`
- Test: `tests/breath.test.ts`

- [ ] **Step 1: Écrire le test échouant `tests/breath.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import { breathLevel, rms } from '../src/input/breath';

describe('souffle', () => {
  it('rms calcule l\'énergie d\'une trame', () => {
    expect(rms(new Float32Array([0, 0, 0]))).toBe(0);
    expect(rms(new Float32Array([1, -1, 1, -1]))).toBeCloseTo(1);
  });
  it('le niveau reste dans 0..1 et croît avec le signal', () => {
    const a = breathLevel(0.001, 0.0005);
    const b = breathLevel(0.05, 0.0005);
    expect(a).toBeGreaterThanOrEqual(0); expect(b).toBeLessThanOrEqual(1);
    expect(b).toBeGreaterThan(a);
  });
  it('sous le plancher de bruit, niveau nul', () => {
    expect(breathLevel(0.0001, 0.001)).toBe(0);
  });
});
```

- [ ] **Step 2: Run** `npx vitest run tests/breath.test.ts` → Expected : FAIL.

- [ ] **Step 3: Écrire `src/input/breath.ts`** (pur) puis `src/input/breathIO.ts` (adaptateur navigateur) :

```ts
// src/input/breath.ts — mathématiques du souffle, sans DOM.
export function rms(frame: Float32Array): number {
  let s = 0;
  for (let i = 0; i < frame.length; i++) s += frame[i] * frame[i];
  return Math.sqrt(s / frame.length);
}

export function breathLevel(r: number, floor: number, gain = 8): number {
  if (r <= floor) return 0;
  return Math.min(1, (r - floor) * gain);
}
```

```ts
// src/input/breathIO.ts — branchement micro Web Audio, appelant la logique pure.
import { breathLevel, rms } from './breath';

export async function startBreath(onLevel: (v: number) => void): Promise<boolean> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const ctx = new AudioContext();
    const srcNode = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser(); analyser.fftSize = 1024;
    srcNode.connect(analyser);
    const buf = new Float32Array(analyser.fftSize);
    let floor = 0.0005;
    setInterval(() => {
      analyser.getFloatTimeDomainData(buf);
      const r = rms(buf);
      floor = Math.min(floor * 0.999 + r * 0.001, 0.01); // plancher de bruit adaptatif
      onLevel(breathLevel(r, floor));
    }, 60);
    return true;
  } catch {
    return false; // pas de micro → le Nuage vit quand même (loi : jamais bloquant)
  }
}
```

- [ ] **Step 4: Run** `npx vitest run tests/breath.test.ts` → Expected : 3 tests PASS.

- [ ] **Step 5: Intégrer dans `src/main.ts`** — ajouter après la création de `state` :

```ts
import { startBreath } from './input/breathIO';
startBreath((v) => { state.breath = v; });
```

- [ ] **Step 6: Vérification** : `npm run dev`, souffler vers le micro (autoriser la permission) → les nuages montent et s'éclaircissent. `npm run test` → PASS.

- [ ] **Step 7: Commit** `git add src/input tests/breath.test.ts src/main.ts` puis `git commit -m "feat: souffle au micro pilote les nuages"`

---

### Task 5 : Émotions — maillage facial MediaPipe → humeur du ciel

**Files:**
- Create: `src/input/emotion.ts`, `src/input/faceIO.ts`
- Test: `tests/emotion.test.ts`

- [ ] **Step 1: Écrire le test échouant `tests/emotion.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import { mapEmotion, Shapes } from '../src/input/emotion';

const neutre: Shapes = { smile: 0, browDown: 0, eyeBlink: 0, jawOpen: 0 };

describe('mapEmotion', () => {
  it('neutre → calme', () => expect(mapEmotion(neutre)).toBe('calme'));
  it('sourire large → joie', () => expect(mapEmotion({ ...neutre, smile: 0.8 })).toBe('joie'));
  it('sourcils baissés → tension', () => expect(mapEmotion({ ...neutre, browDown: 0.9 })).toBe('tension'));
  it('yeux clos/mâchoire relâchée → tristesse si pas de sourire',
    () => expect(mapEmotion({ ...neutre, eyeBlink: 0.9, jawOpen: 0.1 })).toBe('tristesse'));
});
```

- [ ] **Step 2: Run** `npx vitest run tests/emotion.test.ts` → Expected : FAIL.

- [ ] **Step 3: Écrire `src/input/emotion.ts`** (pur)

```ts
// Interprétation des blendshapes MediaPipe → émotion dominante.
export interface Shapes { smile: number; browDown: number; eyeBlink: number; jawOpen: number }
export type Emotion = 'calme' | 'joie' | 'tristesse' | 'tension';

export function mapEmotion(s: Shapes): Emotion {
  const scores: Record<Emotion, number> = {
    joie: s.smile * 1.2,
    tension: s.browDown * 1.0 + (s.eyeBlink < 0.2 ? 0.1 : 0),
    tristesse: s.eyeBlink * 0.8 + s.jawOpen * 0.2 - s.smile,
    calme: 0.15, // le calme est le choix par défaut
  };
  return (Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]) as Emotion;
}
```

- [ ] **Step 4: Run** `npx vitest run tests/emotion.test.ts` → Expected : 4 PASS.

- [ ] **Step 5: Écrire `src/input/faceIO.ts`** (adaptateur MediaPipe Tasks-Vision, modèle chargé depuis le CDN Google)

```ts
// Caméra → FaceLandmarker (blendshapes) → onShapes. Échoue en silence si refusée.
import { FilesetResolver, FaceLandmarker } from '@mediapipe/tasks-vision';
import { Shapes } from './emotion';

const MODEL_URL = 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task';

export async function startFace(video: HTMLVideoElement, onShapes: (s: Shapes) => void): Promise<boolean> {
  try {
    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm');
    const landmarker = await FaceLandmarker.createFromOptions(vision, {
      baseOptions: { modelAssetPath: MODEL_URL },
      runningMode: 'VIDEO', numFaces: 1, outputFaceBlendshapes: true,
    });
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
    video.srcObject = stream;
    await video.play();
    let ts = 0;
    const boucle = () => {
      const now = performance.now();
      if (now > ts) {
        ts = now;
        const res = landmarker.detectForVideo(video, now);
        const b = res.faceBlendshapes?.[0]?.categories;
        if (b) {
          const get = (n: string) => b.find((c) => c.categoryName === n)?.score ?? 0;
          onShapes({
            smile: (get('mouthSmileLeft') + get('mouthSmileRight')) / 2,
            browDown: (get('browDownLeft') + get('browDownRight')) / 2,
            eyeBlink: (get('eyeBlinkLeft') + get('eyeBlinkRight')) / 2,
            jawOpen: get('jawOpen'),
          });
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
```

- [ ] **Step 6: Intégrer dans `src/main.ts`** :

```ts
import { startFace } from './input/faceIO';
import { mapEmotion } from './input/emotion';
const video = document.getElementById('cam') as HTMLVideoElement;
startFace(video, (s) => { state.emotion = mapEmotion(s); });
```

Afficher l'émotion courante dans `#etat` (mise à jour dans `boucle`) :

```ts
document.getElementById('etat')!.textContent =
  `humeur : ${state.emotion} · souffle : ${(state.breath * 100) | 0}% · pouls : ${state.bpm ?? '—'}`;
```

- [ ] **Step 7: Vérification** : `npm run dev`, sourire → le ciel bascule en palette dorée ; froncer → palette rouge assombrie. `npm run test` → PASS.

- [ ] **Step 8: Commit** `git add src/input tests/emotion.test.ts src/main.ts` puis `git commit -m "feat: émotions faciales via MediaPipe pilotent le ciel"`

---

### Task 6 : rPPG — pouls visible depuis la caméra (TDD signal)

**Files:**
- Create: `src/nuage/rppg.ts`
- Test: `tests/rppg.test.ts`

- [ ] **Step 1: Écrire le test échouant `tests/rppg.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import { detrend, estimateBpm } from '../src/nuage/rppg';

function sine(bpm: number, fps: number, seconds: number): number[] {
  const n = Math.floor(fps * seconds);
  return Array.from({ length: n }, (_, i) => Math.sin((2 * Math.PI * bpm / 60) * (i / fps)) * 10 + 128);
}

describe('rPPG', () => {
  it('detrend centre le signal', () => {
    const d = detrend(sine(60, 20, 4));
    const mean = d.reduce((a, b) => a + b, 0) / d.length;
    expect(Math.abs(mean)).toBeLessThan(1);
  });
  it('60 bpm détecté sur signal synthétique', () => {
    expect(estimateBpm(sine(60, 20, 6), 20)).toBeCloseTo(60, -1);
  });
  it('75 bpm détecté', () => {
    expect(estimateBpm(sine(75, 20, 8), 20)).toBeCloseTo(75, -1);
  });
  it('signal trop court → null', () => {
    expect(estimateBpm(sine(60, 20, 1), 20)).toBeNull();
  });
});
```

- [ ] **Step 2: Run** `npx vitest run tests/rppg.test.ts` → Expected : FAIL.

- [ ] **Step 3: Écrire `src/nuage/rppg.ts`**

```ts
// Estimation du pouls par variation de luminosité cutanée (rPPG, fenêtre 30–180 bpm).
export function detrend(x: number[]): number[] {
  const m = x.reduce((a, b) => a + b, 0) / x.length;
  return x.map((v) => v - m);
}

function crossesZero(x: number[]): number {
  let c = 0;
  for (let i = 1; i < x.length; i++) if (x[i - 1] <= 0 && x[i] > 0) c++;
  return c;
}

export function estimateBpm(luminances: number[], fps: number): number | null {
  const minSec = 4;
  if (luminances.length < fps * minSec) return null;
  const x = detrend(luminances.slice(-Math.floor(fps * 10))); // fenêtre glissante 10 s
  // passe-bande grossière : moyenne mobile (atténue les hautes fréquences)
  const sm = x.map((_, i) => {
    const s = Math.max(0, i - 2), e = Math.min(x.length, i + 3);
    return x.slice(s, e).reduce((a, b) => a + b, 0) / (e - s);
  });
  const beats = crossesZero(sm) - 1; // premier zéro = artefact du detrend
  const sec = sm.length / fps;
  const bpm = (beats / sec) * 60;
  return bpm >= 30 && bpm <= 180 ? bpm : null;
}
```

- [ ] **Step 4: Run** `npx vitest run tests/rppg.test.ts` → Expected : 4 PASS.

- [ ] **Step 5: Brancher la mesure réelle** — ajouter dans `src/nuage/rppg.ts` :

```ts
// Échantillonne la couleur moyenne de la joue (zone centrale) depuis la vidéo caméra.
export function cheekLuminance(video: HTMLVideoElement, ctx: CanvasRenderingContext2D): number | null {
  if (video.readyState < 2) return null;
  const w = 24, h = 24;
  ctx.drawImage(video, video.videoWidth * 0.35, video.videoHeight * 0.35, w, h, 0, 0, w, h);
  const d = ctx.getImageData(0, 0, w, h).data;
  let s = 0;
  for (let i = 0; i < d.length; i += 4) s += 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
  return s / (w * h);
}
```

- [ ] **Step 6: Intégrer dans `src/main.ts`** (échantillonnage ~8 fps, mise à jour de `state.bpm`) :

```ts
import { cheekLuminance, estimateBpm } from './nuage/rppg';
const rctx = document.createElement('canvas').getContext('2d')!;
const lum: number[] = [];
setInterval(() => {
  const v = cheekLuminance(video, rctx);
  if (v != null) { lum.push(v); if (lum.length > 80) lum.shift();
    state.bpm = estimateBpm(lum, 8); }
}, 125);
```

Et le Nuage « respire » au pouls : dans la `boucle`, moduler `state.breath = Math.max(state.breath, 0.08 * Math.sin(Date.now() / (60000 / (state.bpm ?? 60)) * 2 * Math.PI) + 0.08);`

- [ ] **Step 7: Vérification** : `npm run test` → PASS ; `npm run dev`, visage calme face caméra → un pouls 40–120 s'affiche dans `#etat` (admis : imprécis en conditions faibles — voir spec §7).

- [ ] **Step 8: Commit** `git add src/nuage/rppg.ts tests/rppg.test.ts src/main.ts` puis `git commit -m "feat: pouls rPPG — le nuage respire au rythme cardiaque"`

---

### Task 7 : Aura — identité sensorielle unique (pur, TDD)

**Files:**
- Create: `src/aura/aura.ts`
- Test: `tests/aura.test.ts`

- [ ] **Step 1: Écrire le test échouant `tests/aura.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import { generateAura } from '../src/aura/aura';

describe('aura', () => {
  it('déterministe pour une même graine', () => {
    expect(generateAura('graine-1')).toEqual(generateAura('graine-1'));
  });
  it('unique pour deux graines', () => {
    expect(generateAura('a').palette).not.toEqual(generateAura('b').palette);
  });
  it('palette de 3 couleurs hex valides + nom', () => {
    const a = generateAura('test');
    expect(a.palette).toHaveLength(3);
    a.palette.forEach((c) => expect(c).toMatch(/^#[0-9a-f]{6}$/));
    expect(a.nom.length).toBeGreaterThan(2);
  });
});
```

- [ ] **Step 2: Run** → Expected : FAIL.

- [ ] **Step 3: Écrire `src/aura/aura.ts`**

```ts
// Aura : palette et graine musicale uniques, dérivées de l'identifiant local (hash FNV-1a).
function fnv1a(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h >>> 0;
}

const NOMS = ['Brume', 'Aube', 'Zéphyr', 'Nimbus', 'Cirrus', 'Écho', 'Lueur', 'Souffle', 'Voile', 'Nébuleuse'];
const ADJ = ['dorée', 'bleue', 'polaire', 'douce', 'haute', 'sereine', 'vague', 'claire'];

function hex(n: number): string {
  return '#' + (n & 0xffffff).toString(16).padStart(6, '0');
}

export interface Aura { nom: string; palette: [string, string, string]; musiqueSeed: number }

export function generateAura(seed: string): Aura {
  const h = fnv1a(seed);
  const h2 = fnv1a(seed + '|2');
  return {
    nom: `${NOMS[h % NOMS.length]} ${ADJ[h2 % ADJ.length]}`,
    palette: [hex(0x102040 + (h & 0x2f2f3f)), hex(0x607090 + ((h >> 8) & 0x3f3f4f)), hex(0xd0e0f0 + ((h >> 16) & 0x0f0f0f))],
    musiqueSeed: h2,
  };
}
```

- [ ] **Step 4: Run** → Expected : 3 PASS. (Si une palette sort hors bornes, ajuster les masques — le test de format hex le détectera.)

- [ ] **Step 5: Intégrer** dans `src/main.ts` : afficher le nom d'aura dans `#etat` :

```ts
import { generateAura } from './aura/aura';
const aura = generateAura(state.seed);
// dans la boucle : `aura : ${aura.nom}` ajouté au textContent.
```

- [ ] **Step 6: Commit** `git add src/aura tests/aura.test.ts src/main.ts` puis `git commit -m "feat: aura unique par utilisateur"`

---

### Task 8 : Tactile & gyroscope — le ciel suit le doigt et l'inclinaison

**Files:**
- Create: `src/input/touch.ts`
- Modify: `src/main.ts`

- [ ] **Step 1: Écrire `src/input/touch.ts`**

```ts
// Le doigt « écarte » les nuages : le centre du shader suit le pointeur.
export function attachPointer(canvas: HTMLCanvasElement, onMove: (x: number, y: number) => void) {
  const set = (cx: number, cy: number) => {
    const r = canvas.getBoundingClientRect();
    onMove((cx - r.left) / r.width, 1 - (cy - r.top) / r.height);
  };
  canvas.addEventListener('pointermove', (e) => set(e.clientX, e.clientY));
  canvas.addEventListener('touchmove', (e) => {
    const t = e.touches[0]; if (t) set(t.clientX, t.clientY);
  }, { passive: true });
}

export function attachTilt(onTilt: (x: number, y: number) => void) {
  window.addEventListener('deviceorientation', (e) => {
    if (e.gamma != null && e.beta != null) {
      onTilt(Math.max(-1, Math.min(1, e.gamma / 45)), Math.max(-1, Math.min(1, (e.beta - 45) / 45)));
    }
  });
}
```

- [ ] **Step 2: Ajouter un uniform `uFocus` (vec2) au shader** (`cloudShader.ts` : `uniform vec2 uFocus;` et dans `main()` : `vec2 uv = vUv + (uFocus - 0.5) * 0.15;`), le propager dans `scene.ts` (`apply` accepte `focus?: [number, number]`).

- [ ] **Step 3: Brancher dans `src/main.ts`** : `attachPointer(canvas, (x, y) => (focus = [x, y]));` et `attachTilt((x) => { state.breath = Math.max(state.breath, Math.abs(x)); });`

- [ ] **Step 4: Vérification** : `npm run dev` → le doigt décale le champ de nuages ; sur mobile (ou simulateur devtools) l'inclinaison soulève le ciel. `npm run test` → PASS.

- [ ] **Step 5: Commit** `git add src/input/touch.ts src/nuage tests src/main.ts` puis `git commit -m "feat: toucher et gyroscope pilotent le nuage"`

---

### Task 9 : PWA installable, hors-ligne et léger (sans bridage)

**Files:**
- Modify: `vite.config.ts`
- Create: pas de fichiers supplémentaires (le plugin génère SW et manifest)

- [ ] **Step 1: Installer et configurer** `npm install -D vite-plugin-pwa`, puis remplacer `vite.config.ts` :

```ts
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'NUAGE — by Nath-Tech',
      short_name: 'NUAGE',
      description: 'La compagne vivante qui vous voit, vous entend, vous accompagne.',
      theme_color: '#05070f',
      icons: [{ src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
              { src: 'icon-512.png', sizes: '512x512', type: 'image/png' }],
    },
    workbox: { globPatterns: ['**/*.{js,css,html,webmanifest}'] },
  })],
});
```

- [ ] **Step 2: Icônes** — créer `public/icon-192.png` et `public/icon-512.png` : nuage blanc (#dfefff) sur fond #05070f, coins arrondis. Générés par la tool ImageGen puis recadrés aux dimensions exactes, ou par un petit script Node avec le package `sharp` (`npx sharp-cli`).

- [ ] **Step 3: Vérification** : `npm run build` → Expected : `dist/` contient `sw.js` et `manifest.webmanifest`. `npm run test` → PASS. Le precache couvre l'app shell ; caméra/modèles restent chargés à la demande (règle : le hors-ligne ne retire jamais rien à l'expérience connectée).

- [ ] **Step 4: Commit** `git add vite.config.ts public` puis `git commit -m "feat: PWA installable (manifest + service worker)"`

---

### Task 10 : Kit lancement — documentation du propriétaire (90 min de comptes + checklist)

**Files:**
- Create: `docs/LANCEMENT.md`

- [ ] **Step 1: Écrire `docs/LANCEMENT.md`** — checklist exacte des actions humaines (seules actions que l'IA ne peut pas faire) :

```
1. Créer les comptes (gratuits) : GitHub, Cloudflare (Pages + R2), Google (AdSense + YouTube + Gemini API free),
   Mistral (La Plateforme free), F-Droid (soumission gratuite), Simplifi ou PayDunn (Mobile Money — demande RCCM/pièce).
2. Déployer : `npm run build` puis Cloudflare Pages ← dossier `dist/` (projet connecté à ce repo git).
3. Marque : vérifier « NUAGE » + domaine (nuage.app / nuage.africa) et handles avant toute communication.
4. Signature : la mention « by Nath-Tech » est dans le manifeste, le pied de page et les meta — ne jamais la retirer.
```

- [ ] **Step 2: Commit** `git add docs/LANCEMENT.md` puis `git commit -m "docs: kit de lancement propriétaire (comptes + déploiement)"`

---

## Critères d'acceptation du Plan 1

- `npm run test` : tous les modules purs (state, breath, emotion, rppg, aura) au vert.
- `npm run build` : bundle statique, aucun serveur payant, PWA installable sur Android.
- Sur mobile réel : ouvrir → nuages ; souffler → le ciel monte ; sourire → aurores dorées ; pouls affiché ; doigt/inclinaison déplacent la scène ; « by Nath-Tech » visible en permanence ; fonctionne même caméra/micro refusés.
- Trajectoire : les plans 2 (moteur IA hors-ligne Compagne), 3 (usine sommeil) et 4 (Pro/billing) s'appuieront sur `NuageState` et la PWA.
