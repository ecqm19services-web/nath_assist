// src/input/breathIO.ts — branchement micro Web Audio, appelant la logique pure.
import { breathLevel, rms } from './breath';

export async function startBreath(onLevel: (v: number) => void): Promise<boolean> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const ctx = new AudioContext();
    const srcNode = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 1024;
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
