import { Link } from 'react-router-dom';


const MovieSceneDetails = ({ poster, movie, director, character, fullLine, year, audio }) => {
    return (
        <Link className="movie" to={"./"} >
            <img src={poster} alt={`${movie} poster`} />
            <h2>Película: {movie}</h2>
            <h3>Director: {director}</h3>
            <h3>Año: {year}</h3>
            <p>Personaje: {character}</p>
            <p>Frase: {fullLine}</p>
            <audio src={audio}><i className="fa-solid fa-volume-low"></i></audio>
        </Link>
    );
};

export default MovieSceneDetails;