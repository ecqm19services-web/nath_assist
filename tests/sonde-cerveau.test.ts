// La page de mesure de terrain : « ?sonde=cerveau » ouvre un écran de chiffres
// pour éprouver le gros cerveau sur l'appareil visé (téléphone du terrain).
// Doctrine : des nombres et du français simple — jamais un nom de technologie
// à l'écran, même ici. Ce fichier verrouille le parsing, la description et le
// câblage dans le point d'entrée.
import { describe, expect, it } from 'vitest';
import { decrireSonde, sondeDemandee, type MesuresSonde } from '../src/compagne/sondeCerveau';

describe('sondeDemandee — le drapeau d’url', () => {
  it('?sonde=cerveau ouvre la mesure', () => {
    expect(sondeDemandee('?sonde=cerveau')).toBe(true);
    expect(sondeDemandee('a=1&sonde=cerveau&b=2')).toBe(true);
  });
  it('rien d’autre ne l’ouvre (l’app normale reste l’app normale)', () => {
    expect(sondeDemandee('')).toBe(false);
    expect(sondeDemandee('?sonde=')).toBe(false);
    expect(sondeDemandee('?sonde=autre')).toBe(false);
    expect(sondeDemandee('?cerveau=1')).toBe(false);
  });
});

const exemple: MesuresSonde = {
  adaptateur: true,
  precise: true,
  format: 'fin',
  memoirePreteeMo: 6992,
  poidsPoseMo: 277,
  atterrissageS: 45,
  reponseMs: 761,
};

describe('decrireSonde — des lignes lisibles, zéro nom de machine', () => {
  it('les nombres parlent français : mémoire, poids, durées', () => {
    const lignes = decrireSonde(exemple).join('\n');
    expect(lignes).toContain('6 992');      // espace français comme séparateur de milliers
    expect(lignes).toContain('277');
    expect(lignes).toContain('45');
    expect(lignes).toContain('761');
    expect(lignes).toContain('cerveau');    // le mot d’usage, jamais la marque
  });
  it('aucun nom de technologie ne s’affiche (garde-fou discrétion, version sonde)', () => {
    const interdits = [
      'webllm', 'qwen', 'llama', 'mistral', 'huggingface', 'webgpu', 'shader',
      'mlc', 'transformers', 'openai', 'cloudflare', 'wasm',
    ];
    const lignes = decrireSonde(exemple).join(' ').toLowerCase();
    for (const t of interdits) expect(lignes).not.toContain(t);
  });
  it('machine trop modeste : la sonde le dit sans dramatiser', () => {
    const pauvre = decrireSonde({ ...exemple, adaptateur: false, precise: false, format: 'inconnu', atterrissageS: null, reponseMs: null });
    const texte = pauvre.join(' ');
    expect(texte).toContain('refuse');
    expect(texte).toContain('petit moteur'); // le repli est nommé, pas la technique
  });
  it('mesures incomplètes : rien d’inventé, la ligne est absente', () => {
    const vide = decrireSonde({ ...exemple, atterrissageS: null, reponseMs: null, poidsPoseMo: null });
    const texte = vide.join(' ');
    expect(texte).not.toMatch(/atterri/i);
    expect(texte).not.toContain('null');
  });
});

// Le point d’entrée doit brancher la sonde — verrouillé dans la source, comme
// d’habitude pour ce qui ne s’éprouve qu’un écran allumé.
const entree = (
  import.meta.glob('../src/main.ts', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
)['../src/main.ts'] ?? '';

describe('main.ts — la sonde est branchée à l’url', () => {
  it('importe le module de mesure', () => {
    expect(/from\s+'\.\/compagne\/sondeCerveau'/.test(entree)).toBe(true);
  });
  it('teste le drapeau avant de monter la vie de l’app', () => {
    expect(entree).toMatch(/sondeDemandee\(/);
    // La branchure se fait tôt : le drapeau est lu avant les gros montages.
    const idxSonde = entree.indexOf('sondeDemandee');
    const idxScene = entree.indexOf('createScene');
    expect(idxSonde).toBeGreaterThan(-1);
    expect(idxSonde).toBeLessThan(idxScene);
  });
});
