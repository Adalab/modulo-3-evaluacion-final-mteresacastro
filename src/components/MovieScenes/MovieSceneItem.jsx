import { Link } from 'react-router-dom';

const MovieSceneItem = ({ eachMovie }) => {
    return (
        <Link className="movie" to={"/details/" + eachMovie.id} >
            <img className="movie__poster" src={eachMovie.poster} alt={`${eachMovie.movie} poster`} />
            <h3>Película: {eachMovie.movie}</h3>
            <p>Año: {eachMovie.year}</p>
            <p>Frase: {eachMovie.fullLine}</p>
        </Link >

    );
};

export default MovieSceneItem;
