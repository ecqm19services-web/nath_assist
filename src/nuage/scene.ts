import * as THREE from 'three';
import { SKY_FRAG, SKY_VERT } from './cloudShader';
import type { SceneParams } from './state';

// Scène fullscreen : un seul quad + shader ; aucune géométrie inutile.
export function createScene(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
  const uniforms = {
    uTime: { value: 0 },
    uAltitude: { value: 0.45 },
    uLuminosite: { value: 0.7 },
    uTurbulence: { value: 0.2 },
    uCol1: { value: new THREE.Color('#1b2a4a') },
    uCol2: { value: new THREE.Color('#7fa8d9') },
    uCol3: { value: new THREE.Color('#dfefff') },
  };
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
  }
  window.addEventListener('resize', resize);
  resize();

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
