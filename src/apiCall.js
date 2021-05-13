const axios = require('axios');

export default async function getCharacters() {
  try {
    const response = await axios.get('https://swapi.dev/api/people/');
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}
