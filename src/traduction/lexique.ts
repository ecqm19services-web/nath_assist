// Traduire tout le monde, avec ce qu'on a sous la main — et rien de plus.
// Aujourd'hui : un lexique local que chacun peut enrichir (le français vers la
// langue de ton choix, partagé entrée par entrée), un socle de mots sûrs pour
// ne jamais commencer face à un vide, et un carnet qui se transmet de main en
// main (copier/coller, hors-ligne, sans compte ni serveur). Demain : un moteur
// de traduction local s'il existe ; la couture choisirMoteurTraduction est
// prête, personne ne devra rien réécrire. On n'invente jamais une traduction
// inconnue.

import { normaliser } from '../etudes/quiz';

export interface Entree {
  de: string; // le mot ou l'expression, côté français
  a: string; // la traduction, dans la langue cible
  langue: string; // le nom que la personne donne à sa langue
}

export type MoteurTrad = 'moteur' | 'lexique';

// Couture d'avenir : dès qu'un moteur local est prêt, il passe avant le lexique.
export function choisirMoteurTraduction(etat: { moteurLocalPret: boolean }): MoteurTrad {
  return etat.moteurLocalPret ? 'moteur' : 'lexique';
}

const cle = (de: string, langue: string) => `${normaliser(de)}|${normaliser(langue)}`;

// Ajouter une entrée : on refuse le vide, on remplace le doublon plutôt que
// de le dupliquer (la dernière parole donnée gagne).
export function ajouterEntree(
  entrees: readonly Entree[],
  de: string,
  a: string,
  langue: string,
): Entree[] {
  const d = de.trim();
  const r = a.trim();
  const l = langue.trim();
  if (!d || !r || !l) return [...entrees];
  const k = cle(d, l);
  const propres = entrees.filter((e) => cle(e.de, e.langue) !== k);
  return [...propres, { de: d, a: r, langue: l }];
}

export function traduireExpression(
  texte: string,
  langue: string,
  entrees: readonly Entree[],
): { resultat: string | null; manques: string[] } {
  const l = normaliser(langue);
  const dispo = entrees.filter((e) => normaliser(e.langue) === l);
  const mots = normaliser(texte) ? normaliser(texte).split(' ') : [];
  if (mots.length === 0) return { resultat: null, manques: [] };

  // L'expression entière est connue telle quelle → on la donne tout de suite.
  const exacte = dispo.find((e) => normaliser(e.de) === normaliser(texte));
  if (exacte) return { resultat: exacte.a, manques: [] };

  const motsSens = new Map<string, string>();
  for (const e of dispo) {
    const n = normaliser(e.de);
    if (n && !n.includes(' ')) motsSens.set(n, e.a);
  }
  const sortie: string[] = [];
  const manques: string[] = [];
  for (const m of mots) {
    const t = motsSens.get(m);
    if (t) sortie.push(t);
    else {
      sortie.push(m);
      manques.push(m);
    }
  }
  if (manques.length === mots.length) return { resultat: null, manques };
  return { resultat: sortie.join(' '), manques };
}

// Le stockage peut mentir : on ne garde que les entrées honnêtes.
export function validerEntrees(brut: string | null | undefined): Entree[] {
  if (!brut) return [];
  try {
    const o = JSON.parse(brut) as unknown;
    if (!Array.isArray(o)) return [];
    return o
      .map((e) => {
        if (!e || typeof e !== 'object') return null;
        const b = e as Record<string, unknown>;
        const de = typeof b.de === 'string' ? b.de.trim() : '';
        const a = typeof b.a === 'string' ? b.a.trim() : '';
        const langue = typeof b.langue === 'string' ? b.langue.trim() : '';
        return de && a && langue ? { de, a, langue } : null;
      })
      .filter((e): e is Entree => e !== null);
  } catch {
    return [];
  }
}

// Le socle : uniquement des mots sûrs, dans les deux langues les plus demandées.
// Une langue que personne ne nous a encore apprise reste vide — c'est le rôle
// des gens de la remplir, pas le nôtre d'inventer.
const DEPART: Record<string, Entree[]> = {
  anglais: [
    ['bonjour', 'hello'], ['merci', 'thank you'], ['oui', 'yes'], ['non', 'no'],
    ['eau', 'water'], ['pain', 'bread'], ['maison', 'house'], ['ami', 'friend'],
    ['père', 'father'], ['mère', 'mother'], ['chien', 'dog'], ['chat', 'cat'],
    ['livre', 'book'], ['école', 'school'], ['jour', 'day'], ['nuit', 'night'],
  ].map(([de, a]) => ({ de, a, langue: 'anglais' })),
  espagnol: [
    ['bonjour', 'hola'], ['merci', 'gracias'], ['oui', 'sí'], ['non', 'no'],
    ['eau', 'agua'], ['pain', 'pan'], ['maison', 'casa'], ['ami', 'amigo'],
    ['père', 'padre'], ['mère', 'madre'], ['chien', 'perro'], ['chat', 'gato'],
    ['livre', 'libro'], ['école', 'escuela'], ['jour', 'día'], ['nuit', 'noche'],
  ].map(([de, a]) => ({ de, a, langue: 'espagnol' })),
  allemand: [
    ['bonjour', 'hallo'], ['merci', 'danke'], ['oui', 'ja'], ['non', 'nein'],
    ['eau', 'Wasser'], ['pain', 'Brot'], ['maison', 'Haus'], ['ami', 'Freund'],
    ['père', 'Vater'], ['mère', 'Mutter'], ['chien', 'Hund'], ['chat', 'Katze'],
    ['livre', 'Buch'], ['école', 'Schule'], ['jour', 'Tag'], ['nuit', 'Nacht'],
  ].map(([de, a]) => ({ de, a, langue: 'allemand' })),
  italien: [
    ['bonjour', 'ciao'], ['merci', 'grazie'], ['oui', 'sì'], ['non', 'no'],
    ['eau', 'acqua'], ['pain', 'pane'], ['maison', 'casa'], ['ami', 'amico'],
    ['père', 'padre'], ['mère', 'madre'], ['chien', 'cane'], ['chat', 'gatto'],
    ['livre', 'libro'], ['école', 'scuola'], ['jour', 'giorno'], ['nuit', 'notte'],
  ].map(([de, a]) => ({ de, a, langue: 'italien' })),
  portugais: [
    ['bonjour', 'olá'], ['merci', 'obrigado'], ['oui', 'sim'], ['non', 'não'],
    ['eau', 'água'], ['pain', 'pão'], ['maison', 'casa'], ['ami', 'amigo'],
    ['père', 'pai'], ['mère', 'mãe'], ['chien', 'cachorro'], ['chat', 'gato'],
    ['livre', 'livro'], ['école', 'escola'], ['jour', 'dia'], ['nuit', 'noite'],
  ].map(([de, a]) => ({ de, a, langue: 'portugais' })),
  arabe: [
    ['bonjour', 'مرحبا'], ['merci', 'شكرا'], ['oui', 'نعم'], ['non', 'لا'],
    ['eau', 'ماء'], ['pain', 'خبز'], ['maison', 'بيت'], ['ami', 'صديق'],
    ['père', 'أب'], ['mère', 'أم'], ['chien', 'كلب'], ['chat', 'قط'],
    ['livre', 'كتاب'], ['école', 'مدرسة'], ['jour', 'يوم'], ['nuit', 'ليلة'],
  ].map(([de, a]) => ({ de, a, langue: 'arabe' })),
  chinois: [
    ['bonjour', '你好'], ['merci', '谢谢'], ['oui', '是'], ['non', '不'],
    ['eau', '水'], ['pain', '面包'], ['maison', '家'], ['ami', '朋友'],
    ['père', '爸爸'], ['mère', '妈妈'], ['chien', '狗'], ['chat', '猫'],
    ['livre', '书'], ['école', '学校'], ['jour', '日'], ['nuit', '夜'],
  ].map(([de, a]) => ({ de, a, langue: 'chinois' })),
};
const ALIAS: Record<string, string> = {
  english: 'anglais', spanish: 'espagnol', german: 'allemand',
  italian: 'italien', portuguese: 'portugais', arabic: 'arabe', chinese: 'chinois',
};

export function lexiqueDepart(langue: string): Entree[] {
  const n = normaliser(langue);
  const clef = ALIAS[n] ?? n;
  return (DEPART[clef] ?? []).map((e) => ({ ...e }));
}

// Le carnet se transmet de main en main : un texte simple, une ligne par mot.
export function serialiserEntrees(entrees: readonly Entree[]): string {
  return entrees.map((e) => `${e.langue} | ${e.de} :: ${e.a}`).join('\n');
}

// Importer le carnet d'un autre : ligne « langue | mot :: traduction »,
// « # » pour les commentaires ; le doublon s'efface devant la nouvelle parole.
export function importerEntrees(texte: string, base: readonly Entree[]): Entree[] {
  let out = [...base];
  for (const ligne of texte.split(/\r?\n/)) {
    const l = ligne.trim();
    if (!l || l.startsWith('#')) continue;
    const sep = l.indexOf('|');
    const deuxPoints = l.indexOf('::', sep + 1);
    if (sep <= 0 || deuxPoints < 0) continue;
    const langue = l.slice(0, sep).trim();
    const de = l.slice(sep + 1, deuxPoints).trim();
    const a = l.slice(deuxPoints + 2).trim();
    if (!langue || !de || !a) continue;
    out = ajouterEntree(out, de, a, langue);
  }
  return out;
}
