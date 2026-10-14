// Sonde du hors-ligne : sert le build sous un sous-chemin, et peut être coupée
// en écrivant « hors » dans .sonde-reseau. Une page rechargée réseau coupé ne
// peut vivre que par son Service Worker.
import http from 'node:http';
import { readFileSync, existsSync, statSync, writeFileSync } from 'node:fs';
import { extname, resolve } from 'node:path';

const RACINE = resolve(new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const DETONATEUR = resolve(new URL('../.sonde-reseau', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
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

const coupe = () => existsSync(DETONATEUR) && readFileSync(DETONATEUR, 'utf8').trim() === 'hors';

const serveur = http.createServer((req, res) => {
  if (req.url === '/COUPE') { writeFileSync(DETONATEUR, 'hors'); res.writeHead(200); res.end('reseau coupe'); return; }
  if (req.url === '/RETABLI') { writeFileSync(DETONATEUR, 'la'); res.writeHead(200); res.end('reseau retabli'); return; }
  if (req.url === '/ETAT') { res.writeHead(200, { 'content-type': 'text/plain' }); res.end(coupe() ? 'hors' : 'la'); return; }
  if (coupe()) { req.socket.destroy(); return; } // aucune réponse ne part, comme un câble débranché
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

serveur.listen(4209, () => console.log('sonde hors-ligne sur http://localhost:4209/nath_assist/'));
