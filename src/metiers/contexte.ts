// Le contexte Métiers : le pays choisi par l'utilisateur (par défaut, celui
// deviné depuis la langue du navigateur) + un interrupteur « mode crise » qui
// remonte en tête les packs « survie » et « approvisionnement ».
// Stocké sous « nath.metiers.contexte » pour voyager avec le coffre.

import { PAYS, paysDe } from './pays';

export interface Contexte {
  pays: string;   // code ISO 3166-1 alpha-2, ou '' pour « pas de pays choisi »
  crise: boolean; // true = prioriser les packs survie/approvisionnement
}

export const CONTEXTE_PAR_DEFAUT: Contexte = { pays: '', crise: false };
export const CLE_CONTEXTE = 'nath.metiers.contexte';

type Stockage = Pick<Storage, 'getItem' | 'setItem'>;

function estCodeValide(code: unknown): code is string {
  return typeof code === 'string' && paysDe(code) !== null;
}

export function lireContexte(stock: Stockage): Contexte {
  const brut = stock.getItem(CLE_CONTEXTE);
  if (!brut) return { ...CONTEXTE_PAR_DEFAUT };
  try {
    const o = JSON.parse(brut) as Partial<Contexte>;
    return {
      pays: estCodeValide(o.pays) ? o.pays : '',
      crise: o.crise === true,
    };
  } catch {
    return { ...CONTEXTE_PAR_DEFAUT };
  }
}

export function ecrireContexte(stock: Stockage, ctx: Contexte): void {
  const propre: Contexte = {
    pays: estCodeValide(ctx.pays) ? ctx.pays : '',
    crise: ctx.crise === true,
  };
  stock.setItem(CLE_CONTEXTE, JSON.stringify(propre));
}

// Le navigateur nous parle en BCP-47 : « fr-SN », « en-GH », « fr_FR », etc.
// On extrait la région si elle correspond à un pays servi ; sinon, on passe
// à la langue suivante ; et si rien ne marche, on renvoie ''.
export function devinerPaysDepuisLangue(langues: readonly string[]): string {
  for (const l of langues) {
    if (typeof l !== 'string') continue;
    const m = /[-_]([A-Za-z]{2})(?:$|[-_])/.exec(l);
    if (!m) continue;
    const code = m[1].toUpperCase();
    if (PAYS.some((p) => p.code === code)) return code;
  }
  return '';
}

// Pratique : quand on veut une valeur même si l'utilisateur n'a rien choisi.
export function paysEffectif(ctx: Contexte, langues: readonly string[]): string {
  if (ctx.pays) return ctx.pays;
  return devinerPaysDepuisLangue(langues);
}
