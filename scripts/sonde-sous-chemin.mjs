// Sonde : le pré-cache se monte-t-il quand la page vit sous un sous-chemin,
// comme sur GitHub Pages (/nath_assist/) ? Le même build, servi localement.
import http from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { extname, resolve } from 'node:path';

const RACINE = resolve(new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const PRE = '/nath_assist';
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
};

const serveur = http.createServer((req, res) => {
  let chemin = decodeURIComponent(req.url.split('?')[0]);
  if (chemin === '/') { res.writeHead(302, { location: PRE + '/' }); res.end(); return; }
  if (!chemin.startsWith(PRE)) { res.writeHead(404); res.end('hors sonde'); return; }
  chemin = chemin.slice(PRE.length) || '/';
  if (chemin.endsWith('/')) chemin += 'index.html';
  const fichier = resolve(RACINE, '.' + chemin);
  if (!fichier.startsWith(RACINE) || !existsSync(fichier) || !statSync(fichier).isFile()) {
    res.writeHead(404); res.end('absent'); return;
  }
  res.writeHead(200, {
    'content-type': TYPES[extname(fichier)] || 'application/octet-stream',
    'cache-control': 'no-store',
  });
  res.end(readFileSync(fichier));
});

serveur.listen(4201, () => console.log('sonde sous-chemin sur http://localhost:4201/nath_assist/'));
