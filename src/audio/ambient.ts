// Ambiance générative de l'aura : le pur (tones) rencontre WebAudio.
// Zéro fichier audio, zéro droit — la musique est recomposée note à note,
// uniquement à partir de la graine de l'utilisateur et de son état vivant.
import { midiToFreq, nextNote, type ToneEmotion } from './tones';

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let step = 0;
let seed = 0;
let emotion: ToneEmotion = 'calme';
let level = 0; // souffle 0..1 → intensité

function playNote() {
  if (!ctx || !master) return;
  const n = nextNote(seed, step++, emotion);
  const t = ctx.currentTime;
  const g = ctx.createGain();
  g.connect(master);
  // ADSR très lent : tout reste doux, jamais de clic.
  const peak = 0.16 + level * 0.1;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(peak, t + Math.min(1.2, n.duree * 0.4));
  g.gain.exponentialRampToValueAtTime(0.0001, t + n.duree + 1.5);
  const osc = ctx.createOscillator();
  osc.type = 'triangle';
  osc.frequency.value = midiToFreq(n.midi);
  const sub = ctx.createOscillator();
  sub.type = 'sine';
  sub.frequency.value = midiToFreq(n.midi - 12); // octave grave : le corps du son
  const subG = ctx.createGain();
  subG.gain.value = 0.5;
  sub.connect(subG);
  subG.connect(g);
  osc.connect(g);
  osc.start(t);
  sub.start(t);
  osc.stop(t + n.duree + 1.6);
  sub.stop(t + n.duree + 1.6);
}

export function startAmbient(musiqueSeed: number): boolean {
  if (ctx) return true;
  try {
    ctx = new AudioContext();
    seed = musiqueSeed >>> 0;
    master = ctx.createGain();
    master.gain.value = 0.5;
    const lp = ctx.createBiquadFilter(); // tamis anti-brillance numérique
    lp.type = 'lowpass';
    lp.frequency.value = 1200;
    lp.Q.value = 0.4;
    master.connect(lp);
    lp.connect(ctx.destination);
    window.setInterval(playNote, 2600);
    playNote();
    return true;
  } catch {
    return false; // pas d'audio disponible → le visuel continue, loi du jamais-bloquant
  }
}

export function ambientMood(e: ToneEmotion): void {
  emotion = e;
}

export function ambientLevel(v: number): void {
  level = Math.max(0, Math.min(1, v));
}
