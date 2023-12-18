import { v4 as uuidv4 } from 'uuid';

// Fichero src/services/api.js
const callToApi = () => {
  // Llamamos a la API
  return fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((movies) => {
        const createId = uuidv4();
        return {
          poster: movies.poster,
          movie: movies.movie,
          director: movies.director,
          character: movies.character,
          fullLine: movies.full_line,
          year: movies.year,
          audio: movies.audio,
          id: createId,
        };
      });

      return cleanData;
    })

    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};

export default callToApi;

