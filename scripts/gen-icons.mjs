// scripts/gen-icons.mjs — icônes NUAGE (nuage #dfefff sur fond #05070f),
// PNG encodé en pur Node (zlib), zéro dépendance externe. By Nath-Tech.
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';

// Table CRC32
const CRC = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 255] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}
function png(size, pixel) {
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0; // filtre : aucun
    for (let x = 0; x < size; x++) {
      const [r, g, b, a] = pixel(x, y, size);
      const o = y * (size * 4 + 1) + 1 + x * 4;
      raw[o] = r; raw[o + 1] = g; raw[o + 2] = b; raw[o + 3] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8 bits, RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0)),
  ]);
}

// SDF d'un cercle (dist signée, normalisée par la taille)
function circle(px, py, cx, cy, r) {
  return Math.hypot(px - cx, py - cy) - r;
}
// Nuage : union de 4 disques ; super-échantillonnage 2x2 pour bords doux.
function cloudAlpha(x, y, s) {
  const u = (px, py) => {
    const d = Math.min(
      circle(px, py, 0.38 * s, 0.60 * s, 0.15 * s),
      circle(px, py, 0.52 * s, 0.52 * s, 0.19 * s),
      circle(px, py, 0.68 * s, 0.60 * s, 0.14 * s),
      circle(px, py, 0.52 * s, 0.66 * s, 0.16 * s),
    );
    return Math.max(0, Math.min(1, 0.5 - d / 2));
  };
  let a = 0;
  for (const [ox, oy] of [[0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]]) {
    a += u(x + ox, y + oy);
  }
  return a / 4;
}

function makeIcon(size) {
  return png(size, (x, y) => {
    const a = cloudAlpha(x, y, size);
    // fond #05070f, nuage #dfefff
    const bg = [5, 7, 15], fg = [223, 239, 255];
    return [
      Math.round(bg[0] + (fg[0] - bg[0]) * a),
      Math.round(bg[1] + (fg[1] - bg[1]) * a),
      Math.round(bg[2] + (fg[2] - bg[2]) * a),
      255,
    ];
  });
}

mkdirSync('public', { recursive: true });
writeFileSync('public/icon-192.png', makeIcon(192));
writeFileSync('public/icon-512.png', makeIcon(512));
console.log('ICÔNES OK : public/icon-192.png, public/icon-512.png');
