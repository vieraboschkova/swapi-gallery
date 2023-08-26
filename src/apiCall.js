const axios = require('axios');

const baseUrl = 'https://swapi.dev/api/people/?page=';

export async function getCharacters(pageNumber = 1) {
  try {
    const response = await axios.get(`${baseUrl}${pageNumber}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

export async function getCharacterDetails(url) {
  try {
    const secureUrl = 'https'.concat(url.slice(5));
    const response = await axios.get(secureUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}
