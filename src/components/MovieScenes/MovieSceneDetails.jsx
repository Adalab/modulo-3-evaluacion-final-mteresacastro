
const MovieSceneDetails = ({ data }) => {
    console.log(data)
    return (
        <>
            <img className="imgDetails" src={data.poster} alt={`${data.movie} poster`} />
            <h2>Película: {data.movie}</h2>
            <h3>Director: {data.director}</h3>
            <h3>Año: {data.year}</h3>
            <p>Personaje: {data.character}</p>
            <h2>Frase: {data.fullLine}</h2>
            <audio controls>
                <source src={data.audio} type="audio/mpeg" />
                Tu navegador no soporta la etiqueta audio.
            </audio>
        </>
    );
};

export default MovieSceneDetails;