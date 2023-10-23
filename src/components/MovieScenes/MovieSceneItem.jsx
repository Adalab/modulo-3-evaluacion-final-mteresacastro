import '../../styles/App.scss';
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';

const MovieSceneItem = ({ eachMovie }) => {
    return (
        <Link className="movie" to={"/details/" + eachMovie.id} target="_blank" >
            <img className="movie__poster" src={eachMovie.poster} alt={`${eachMovie.movie} poster`} />
            <h3 className="movie__title">
                <i className="icon fa-solid fa-film"></i>{eachMovie.movie}
            </h3>
            <p className="movie__year">
                <i className="icon fa-regular fa-calendar-days"></i>{eachMovie.year}
            </p>
            <p className="movie__line">
                <i className="icon fa-solid fa-quote-left"></i>{eachMovie.fullLine}
                <i className="icon fa-solid fa-quote-right"></i>
            </p>
        </Link >

    );
};

MovieSceneItem.propTypes = {
    eachMovie: PropTypes.object,
};

export default MovieSceneItem;
