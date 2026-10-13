// Sonde de langue sur le Worker déployé : ce qui part, ce qui revient, et si
// les accents survivent. Utile pour distinguer un vrai défaut de l'app d'un
// artefact de console (PowerShell 5.1 décode en Latin-1 et invente des « Ã »).
const endpoint = 'https://nath-cerveau.nath-assist.workers.dev/dire';
const question = process.argv[2] || 'Na nga def? Lan nga xam ci asman bi?';
const consigne = process.argv[3] || 'Reponds tres court, une seule phrase.';

const reponse = await fetch(endpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [{ role: 'system', content: consigne }, { role: 'user', content: question }],
  }),
});
const donnees = await reponse.json();
const texte = (donnees.result && donnees.result.response) || '';

const echappe = texte.replace(/[\u0080-\uffff]/g, (c) => '\\u' + c.codePointAt(0).toString(16).padStart(4, '0'));
console.log('statut:', reponse.status, '| content-type:', reponse.headers.get('content-type'));
console.log('longueur:', texte.length, '| mots:', texte.trim().split(/\s+/).length);
const phrases = texte.split(/[.!?]/).map((p) => p.trim()).filter(Boolean);
console.log('propositions:', phrases.length, '| distinctes:', new Set(phrases.map((p) => p.toLowerCase())).size);
console.log('caracteres non-ASCII (points de code) :', echappe.match(/\\u[0-9a-f]{4}/g)?.join(' ') || 'aucun');
console.log('tel que recu:', echappe.slice(0, 400));
