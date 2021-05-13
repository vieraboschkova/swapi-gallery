/* eslint-disable camelcase */
import getCharacters from './apiCall';
import 'regenerator-runtime/runtime';
import CharacterCard from './Card';

const gallery = document.getElementById('galleryRoot');
const appendCards = async () => {
  const items = await getCharacters();
  const cards = items.map(({
    name, gender, eye_color, birth_year,
  }) => {
    const card = new CharacterCard(name, gender, eye_color, birth_year);
    return card.component;
  });

  gallery.innerHTML = cards.join('');
};

appendCards();
