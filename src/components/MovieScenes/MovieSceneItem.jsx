import { Link } from 'react-router-dom';
import MovieSceneDetails from './MovieSceneDetails';

const MovieSceneItem = ({ eachMovie }) => {
    return (
        <Link className="movie" to={"./"} >
            <img src={eachMovie.poster} alt={`${eachMovie.movie} poster`} />
            <h3>Película: {eachMovie.movie}</h3>
            <p>Año: {eachMovie.year}</p>
            <p>Frase: {eachMovie.fullLine}</p>
        </Link>

    );
};

export default MovieSceneItem;
