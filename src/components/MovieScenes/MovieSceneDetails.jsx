import { Link } from 'react-router-dom';


const MovieSceneDetails = ({ data }) => {
    return (
        <>
            <img src={data.poster} alt={`${data.movie} poster`} />
            <h2>Película: {data.movie}</h2>
            <h3>Director: {data.director}</h3>
            <h3>Año: {data.year}</h3>
            <p>Personaje: {data.character}</p>
            <p>Frase: {data.fullLine}</p>
            <p>Audio <i className="fa-solid fa-volume-low"></i><audio src={data.audio}></audio></p>
        </>
    );
};

export default MovieSceneDetails;