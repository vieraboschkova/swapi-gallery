const axios = require('axios');

const baseUrl = 'https://swapi.dev/api/people/?page=';

export default async function getCharacters(pageNumber = 1) {
  try {
    const response = await axios.get(`${baseUrl}${pageNumber}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}
