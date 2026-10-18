// Juge de relecture : balaie un segment de pack.ts à la recherche des
// intrusions de génération (CJK, ellipses, mots anglais, apostrophes droites,
// doublons de mots) — la leçon des vagues 5 et 6 : le garde-fou langue ne
// voit pas ces fautes-là.
import { readFileSync } from 'node:fs';

const fichier = process.argv[2] ?? 'src/metiers/pack.ts';
const depuis = process.argv[3] ?? "id: 'menuiserie'";
const texte = readFileSync(fichier, 'utf8');
const i = texte.indexOf(depuis);
if (i < 0) {
  console.error(`born introuvable : ${depuis}`);
  process.exit(2);
}
const seg = texte.slice(i);
let releves = 0;
const signaler = (etiquette, motif) => {
  const m = seg.match(motif);
  if (m) {
    console.log(`${etiquette} :: ${JSON.stringify(m[0]).slice(0, 120)}`);
    releves++;
  }
};

signaler('CJK', /[\u3000-\u9fff\uac00-\ud7af]/);
signaler('ellipse', /…/);
signaler('apostrophe-droite-dans-phrase', /[a-zà-ö]\u0027(?:[a-zà-ö]|s\u0027)/i);
const anglicismes = ['the', 'and', 'with', 'key', 'airing', 'cardboard', 'dry', 'then', 'make', 'take', 'from', 'water', 'wood', 'metal', 'line', 'file', 'put', 'cut', 'glue', 'paint', 'sand', 'safe', 'store', 'price', 'sell', 'buy', 'wash', 'wear', 'work'];
for (const a of anglicismes) {
  const r = new RegExp(`\\b${a}\\b`, 'i');
  const m = seg.match(new RegExp(`.{0,50}\\b${a}\\b.{0,50}`, 'i'));
  if (m && !/\b(empreinte|employé|établi)\b/.test(m[0])) {
    console.log(`anglo :: ${a} :: ${m[0].replace(/\s+/g, ' ').slice(0, 110)}`);
    releves++;
  }
}
// doublons de mots (« le le », « que la la »…)
signaler('doublon', /\b(\p{L}{2,})\s+\1\b/u);
// majuscule en milieu de phrase dans un sens de glossaire
signaler('majuscule-suspecte', /sens: '[a-zà-ö]+: '?[A-ZÀ-Ö][a-zà-ö]{2,}/);
// verbes mal conjugués vus dans les vagues précédentes
signaler('conjugaison', /\b(stockera|pesrer|sertit|remployer|rabout|javelle|tempérement|envoyent|achale|infiltri|forrit|flottteur|fileture|regularise|dilution de|crouteux|lourder|reformer|finer)\b/i);

console.log(releves ? `RELEVÉS : ${releves}` : 'SEGMENT PROPRES');
process.exit(releves ? 1 : 0);
