import { describe, it, expect } from 'vitest';
import { choisirVignette, pageTournee, vignetteManquante } from '../src/etudes/encyclo';

// Les cinquante notices de l'éthère sont du texte brut : aucune image. Pour les
// illustrer sans inventer d'adresse, on demande au réseau l'image de l'article
// correspondant. Deux risques : coller une image d'un autre article parce que la
// personne a déjà tourné la page, et publier une adresse malformée. Ce module est
// la seule décision ; l'affichage n'obéit qu'à elle.

describe("vignette d'une notice", () => {
  it('une notice sans illustration appelle le réseau', () => {
    expect(vignetteManquante({})).toBe(true);
    expect(vignetteManquante({ image: '' })).toBe(true);
    expect(vignetteManquante({ image: 'https://x/y.png' })).toBe(false);
  });

  it("rien de ce qui n'est pas une adresse entière n'entre dans la maison", () => {
    expect(choisirVignette({ image: 'javascript:alert(1)' }, 'Mitose', 'Mitose')).toBe('');
    expect(choisirVignette({ image: '//x/y.png' }, 'Mitose', 'Mitose')).toBe('');
    expect(choisirVignette({ image: 'http://x/y.png' }, 'Mitose', 'Mitose')).toBe('http://x/y.png');
    expect(choisirVignette({ image: 'https://x/y.png' }, 'Mitose', 'Mitose')).toBe('https://x/y.png');
  });

  it("si la page a changé entre-temps, l'image reste au port", () => {
    // La personne a tourné vers un autre article pendant la demande.
    expect(choisirVignette({ image: 'https://x/y.png' }, 'Meiose', 'Mitose')).toBe('');
    // Le réseau a rendu un article différent de celui demandé : hors sujet.
    expect(choisirVignette({ image: 'https://x/y.png', titre: 'Mitochondrie' }, 'Mitose', 'Mitose')).toBe('');
  });

  it('sans réponse, sans image ou sans titre, aucune vignette', () => {
    expect(choisirVignette(null, 'Mitose', 'Mitose')).toBe('');
    expect(choisirVignette({}, 'Mitose', 'Mitose')).toBe('');
    expect(choisirVignette({ image: 'https://x/y.png' }, '', 'Mitose')).toBe('');
    expect(choisirVignette({ image: 'https://x/y.png' }, null, 'Mitose')).toBe('');
  });

  it("l'article rendu s'appelle souvent sans l'article du titre", () => {
    // On demande « La photosynthèse », l'encyclopédie écrit « Photosynthèse ».
    expect(
      choisirVignette({ image: 'https://x/p.png', titre: 'Photosynthèse' }, 'La photosynthèse', 'La photosynthèse'),
    ).toBe('https://x/p.png');
    // Un sujet voisin reste écarté : la souplesse ne devient pas un blanc-seing.
    expect(
      choisirVignette({ image: 'https://x/p.png', titre: 'Chlorophylle' }, 'La photosynthèse', 'La photosynthèse'),
    ).toBe('');
  });

  it('la page tournée se reconnaît — et elle interdit de parler', () => {
    expect(pageTournee('Mitose', 'Mitose')).toBe(false);
    // Même sujet, un article en trop : ce n'est pas une page tournée.
    expect(pageTournee('La photosynthèse', 'Photosynthèse')).toBe(false);
    expect(pageTournee(null, 'Mitose')).toBe(true);  // retourné à l'étagère
    expect(pageTournee('', 'Mitose')).toBe(true);    // pareil
    expect(pageTournee('Meiose', 'Mitose')).toBe(true); // autre article ouvert
  });

  it('le bon article, toujours affiché, donne sa vignette', () => {
    expect(
      choisirVignette({ image: 'https://upload.example/mitose.png', titre: 'Mitose' }, 'Mitose', 'Mitose'),
    ).toBe('https://upload.example/mitose.png');
  });
});
