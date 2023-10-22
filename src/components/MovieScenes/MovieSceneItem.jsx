import { Link } from 'react-router-dom';

const MovieSceneItem = ({ eachMovie }) => {
    return (
        <Link className="movie" to={"/details/" + eachMovie.id} target="_blank" >
            <img className="movie__poster" src={eachMovie.poster} alt={`${eachMovie.movie} poster`} />
            <h3><i className="fa-solid fa-film"></i>{eachMovie.movie}</h3>
            <p><i className="fa-regular fa-calendar-days"></i>{eachMovie.year}</p>
            <p><i className="fa-solid fa-quote-left"></i>{eachMovie.fullLine}<i className="fa-solid fa-quote-right"></i></p>
        </Link >

    );
};

export default MovieSceneItem;
