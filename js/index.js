import * as api from './apiCall';
import 'regenerator-runtime/runtime';
import CharacterCard from './card';

const gallery = document.getElementById('galleryRoot');
const items = api.getCharacters();
const cards = items.map(({
  name, gender, eyeColor, birthYear,
}) => {
  const card = new CharacterCard(name, gender, eyeColor, birthYear);
  return card.component;
});
gallery.append(cards);
console.log(items);
