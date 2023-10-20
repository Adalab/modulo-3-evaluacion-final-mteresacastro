import { Link } from 'react-router-dom';
import MovieSceneDetails from './MovieSceneDetails';

const MovieSceneItem = ({ poster, movie, director, character, fullLine, year, audio }) => {
    return (
        <Link className="movie" to={"./"} >
            <img src={poster} alt={`${movie} poster`} />
            <h3>Película: {movie} Año: {year}</h3>
            <p>{fullLine}</p>
        </Link>

    );
};

export default MovieSceneItem;
