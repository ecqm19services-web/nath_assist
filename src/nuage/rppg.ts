// Estimation du pouls par variation de luminosité cutanée (rPPG, fenêtre 30–180 bpm).
export function detrend(x: number[]): number[] {
  const m = x.reduce((a, b) => a + b, 0) / x.length;
  return x.map((v) => v - m);
}

function movingAvg(x: number[], w: number): number[] {
  return x.map((_, i) => {
    const s = Math.max(0, i - w + 1);
    return x.slice(s, i + 1).reduce((a, b) => a + b, 0) / (i + 1 - s);
  });
}

function positiveCrossings(x: number[]): number[] {
  const idx: number[] = [];
  for (let i = 1; i < x.length; i++) if (x[i - 1] <= 0 && x[i] > 0) idx.push(i);
  return idx;
}

export function estimateBpm(luminances: number[], fps: number): number | null {
  if (luminances.length < Math.floor(fps * 4)) return null; // mini 4 s
  const x = detrend(luminances.slice(-Math.floor(fps * 10))); // fenêtre glissante 10 s
  const sm = movingAvg(x, 5); // atténue les hautes fréquences (bruit, micro-mouvements)
  const idx = positiveCrossings(sm);
  if (idx.length < 3) return null;
  const period = (idx[idx.length - 1] - idx[0]) / (idx.length - 1); // échantillons/battement
  const bpm = (60 * fps) / period;
  return bpm >= 30 && bpm <= 180 ? bpm : null;
}

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
