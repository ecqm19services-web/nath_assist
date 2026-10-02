// Aura : palette et graine musicale uniques, dérivées de l'identifiant local (hash FNV-1a).
function fnv1a(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

const NOMS = ['Brume', 'Aube', 'Zéphyr', 'Nimbus', 'Cirrus', 'Écho', 'Lueur', 'Souffle', 'Voile', 'Nébuleuse'];
const ADJ = ['dorée', 'bleue', 'polaire', 'douce', 'haute', 'sereine', 'vague', 'claire'];

function hex(n: number): string {
  return '#' + (n & 0xffffff).toString(16).padStart(6, '0');
}

export interface Aura {
  nom: string;
  palette: [string, string, string];
  musiqueSeed: number;
}

export function generateAura(seed: string): Aura {
  const h = fnv1a(seed);
  const h2 = fnv1a(seed + '|2');
  return {
    nom: `${NOMS[h % NOMS.length]} ${ADJ[h2 % ADJ.length]}`,
    palette: [
      hex(0x102040 + (h & 0x2f2f3f)),
      hex(0x607090 + ((h >> 8) & 0x3f3f4f)),
      hex(0xd0e0f0 + ((h >> 16) & 0x0f0f0f)),
    ],
    musiqueSeed: h2,
  };
}
