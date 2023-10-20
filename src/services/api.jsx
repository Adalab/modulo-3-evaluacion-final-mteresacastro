// Fichero src/services/api.js
const callToApi = () => {
  // Llamamos a la API
  return fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then((response) => response.json())
    .then((response) => {
      console.log("entre");
      // Cuando responde la API podemos limpiar los datos aquí
      const dataApi = {
        poster: response.poster,
        movie: response.movie,
        director: response.director,
        character: response.character,
        fullLine: response.full_line,
        year: response.year,
        audio: response.audio,
      }
      return dataApi;
    });
};

export default callToApi;