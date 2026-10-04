import * as THREE from 'three';
import { SKY_FRAG, SKY_VERT } from './cloudShader';
import type { SceneParams } from './state';

// Scène fullscreen : un seul quad + shader ; toutes les transitions sont lissées
// (le ciel ne "flashe" jamais quand l'humeur ou le souffle change).
export function createScene(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
  const uniforms = {
    uTime: { value: 0 },
    uAltitude: { value: 0.45 },
    uLuminosite: { value: 0.7 },
    uTurbulence: { value: 0.2 },
    uNight: { value: 0 },
    uAurora: { value: 0.55 },
    uPulse: { value: 0 },
    uPluie: { value: 0 },
    uEclair: { value: 0 },
    uMeteor: { value: new THREE.Vector4(0, 0, 0, 0) },
    uFocus: { value: new THREE.Vector2(0.5, 0.5) },
    uAspect: { value: 1 },
    uTap: { value: new THREE.Vector3(0.5, 0.5, 999) },
    uCol1: { value: new THREE.Color('#1b2a4a') },
    uCol2: { value: new THREE.Color('#7fa8d9') },
    uCol3: { value: new THREE.Color('#dfefff') },
  };
  // Cible (immédiate) vs courant (lissé) : exponentielle ~1 s.
  const target = {
    alt: 0.45, lum: 0.7, turb: 0.2, night: 0, aurora: 0.55, pluie: 0,
    col1: new THREE.Color('#1b2a4a'), col2: new THREE.Color('#7fa8d9'),
    col3: new THREE.Color('#dfefff'),
    focus: new THREE.Vector2(0.5, 0.5),
  };
  const current = {
    alt: 0.45, lum: 0.7, turb: 0.2, night: 0, aurora: 0.55,
    col1: new THREE.Color('#1b2a4a'), col2: new THREE.Color('#7fa8d9'),
    col3: new THREE.Color('#dfefff'),
    focus: new THREE.Vector2(0.5, 0.5),
  };
  let bpm = 0;
  let pulsePhase = 0;
  let tapAge = 999;
  let pluieCur = 0;
  let eclairV = 0;
  const meteor = { x: 0, y: 0, age: 0, actif: 0 };

  const mat = new THREE.ShaderMaterial({
    vertexShader: SKY_VERT,
    fragmentShader: SKY_FRAG,
    uniforms,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  const scene = new THREE.Scene();
  scene.add(mesh);

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    uniforms.uAspect.value = window.innerWidth / Math.max(1, window.innerHeight);
  }
  window.addEventListener('resize', resize);
  resize();

  return {
    apply(params: SceneParams, focus?: [number, number]) {
      target.alt = params.altitude;
      target.lum = params.luminosite;
      target.turb = params.turbulence;
      target.night = params.night;
      target.aurora = params.aurora;
      target.pluie = params.pluie;
      target.col1.setStyle(params.palette[0]);
      target.col2.setStyle(params.palette[1]);
      target.col3.setStyle(params.palette[2]);
      if (focus) target.focus.set(focus[0], focus[1]);
    },
    setBpm(v: number | null) {
      bpm = v ?? 0;
    },
    // La foudre intérieure : un flash qui s'éteint en ~1 s.
    eclair() {
      eclairV = 1;
    },
    // Une étoile filante au départ choisi (x,y ∈ ciel haut).
    filer(x: number, y: number) {
      meteor.x = x;
      meteor.y = y;
      meteor.age = 0;
      meteor.actif = 1;
    },
    tap(x: number, y: number) {
      tapAge = 0;
      uniforms.uTap.value.set(x, y, 0);
    },
    frame(dt: number) {
      uniforms.uTime.value += dt;
      // Lissage exponentiel : factoriel ~2,5 → une seconde pour atteindre la cible.
      const k = 1 - Math.exp(-dt * 2.5);
      current.alt += (target.alt - current.alt) * k;
      current.lum += (target.lum - current.lum) * k;
      current.turb += (target.turb - current.turb) * k;
      current.night += (target.night - current.night) * k;
      current.aurora += (target.aurora - current.aurora) * k;
      pluieCur += (target.pluie - pluieCur) * (1 - Math.exp(-dt * 0.8)); // une pluie s'annonce, elle ne débarque pas
      eclairV *= Math.exp(-dt * 2.6);
      if (meteor.actif > 0) {
        meteor.age += dt;
        if (meteor.age > 1.4) meteor.actif = 0;
      }
      current.col1.lerp(target.col1, k);
      current.col2.lerp(target.col2, k);
      current.col3.lerp(target.col3, k);
      current.focus.lerp(target.focus, k);
      // Pulsation lumineuse au rythme du cœur (± si aucun pouls mesuré).
      pulsePhase += dt * (bpm > 0 ? bpm / 60 : 0.2);
      uniforms.uPulse.value = Math.sin(pulsePhase * 2 * Math.PI);
      if (tapAge < 100) {
        tapAge += dt;
        uniforms.uTap.value.z = tapAge;
      }
      uniforms.uAltitude.value = current.alt;
      uniforms.uLuminosite.value = current.lum;
      uniforms.uTurbulence.value = current.turb;
      uniforms.uNight.value = current.night;
      uniforms.uAurora.value = current.aurora;
      uniforms.uPluie.value = pluieCur;
      uniforms.uEclair.value = eclairV;
      uniforms.uMeteor.value.set(meteor.x, meteor.y, meteor.age, meteor.actif);
      uniforms.uFocus.value.copy(current.focus);
      uniforms.uCol1.value.copy(current.col1);
      uniforms.uCol2.value.copy(current.col2);
      uniforms.uCol3.value.copy(current.col3);
      renderer.render(scene, new THREE.Camera());
    },
  };
}
