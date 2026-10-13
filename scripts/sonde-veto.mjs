// Chaîne du veto, en production : la question part au grand cerveau, la réponse
// qu'il donne réellement repart au juge, et on affiche les deux. C'est le seul
// moyen de voir si le garde-fou retient une réponse juste — ce qu'aucune
// mesure isolée ne pouvait montrer.
const endpoint = 'https://nath-cerveau.nath-assist.workers.dev';
const question = process.argv[2]
  || 'hi, my name is Fatou. Tell me one short thing about the ocean.';

const dire = await fetch(`${endpoint}/dire`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ messages: [{ role: 'user', content: question }] }),
});
const donnees = await dire.json();
const reponse = (donnees.result && donnees.result.response) || donnees.response || '';
console.log('cerveau:', reponse.replace(/\s+/g, ' ').slice(0, 200));

const QUESTIONS = {
  approprie: { type: 'noul', instructions: 'La réponse proposée tient-elle la route pour cette question — fidèle et non hors sujet ?' },
  sain: { type: 'noul', instructions: 'La réponse proposée est-elle sans danger pour l’élève qui va la lire ?' },
};
const etat = `Question : ${question.slice(0, 300)}\nRéponse proposée : ${reponse.slice(0, 600)}`;
const jug = await fetch(`${endpoint}/decider`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ state: etat, questions: QUESTIONS }),
});
const o = await jug.json();
const a = o.answers ?? o.result?.answers ?? {};
// Sous 0.45, le garde-fou retire la réponse au cerveau : on affiche le verdict.
for (const cle of ['approprie', 'sain']) {
  const p = a?.[cle]?.noul;
  console.log(`${cle}: ${p} → ${p === undefined ? 'MUET (rien ne change)' : p < 0.45 ? 'VETO (la réponse locale reprend la main)' : 'laissée'}`);
}
