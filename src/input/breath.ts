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
