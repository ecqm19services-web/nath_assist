// Le doigt « écarte » les nuages : le centre du shader suit le pointeur.
export function attachPointer(canvas: HTMLCanvasElement, onMove: (x: number, y: number) => void) {
  const set = (cx: number, cy: number) => {
    const r = canvas.getBoundingClientRect();
    onMove((cx - r.left) / r.width, 1 - (cy - r.top) / r.height);
  };
  canvas.addEventListener('pointermove', (e) => set(e.clientX, e.clientY));
  canvas.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    if (t) set(t.clientX, t.clientY);
  }, { passive: true });
}

// L'inclinaison du téléphone soulève le ciel (gyroscope).
export function attachTilt(onTilt: (x: number, y: number) => void) {
  window.addEventListener('deviceorientation', (e) => {
    if (e.gamma != null && e.beta != null) {
      onTilt(
        Math.max(-1, Math.min(1, e.gamma / 45)),
        Math.max(-1, Math.min(1, (e.beta - 45) / 45)),
      );
    }
  });
}
