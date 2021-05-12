const axios = require('axios');

export async function getCharacters() {
  try {
    const response = await axios.get('https://swapi.dev/api/people');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
