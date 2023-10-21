// Fichero src/services/api.js
const callToApi = () => {
  // Llamamos a la API
  return fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then((response) => response.json())
    .then((data) => {
      let i = 0
      const cleanData = data.map((movies) => {
        i++
        return {
          poster: movies.poster,
          movie: movies.movie,
          director: movies.director,
          character: movies.character,
          fullLine: movies.full_line,
          year: movies.year,
          audio: movies.audio,
          id: i
        };
      });

      return cleanData;
    });
};

export default callToApi;

