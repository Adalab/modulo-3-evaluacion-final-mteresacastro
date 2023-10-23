import '../../styles/App.scss';
import PropTypes from "prop-types";

import MovieSceneItem from './MovieSceneItem';

function MovieSceneList({ filteredYear, titleFilter }) {
    if (filteredYear.length === 0 && titleFilter !== "") {
        return <p className="error-msg">No se encontraron resultados para *{titleFilter}*. Inténtelo de nuevo.</p>;
    }

    const allMovies = filteredYear.map((eachMovie, index) => {
        return (
            <li className="section__list--ul-li" key={index}>
                <MovieSceneItem eachMovie={eachMovie} />
            </li>
        );
    });

    return (
        <section className="section__list">
            <ul className="section__list--ul">
                {allMovies}
            </ul>
        </section>
    )
}

MovieSceneList.propTypes = {
    filteredYear: PropTypes.array,
    titleFilter: PropTypes.string,
};

export default MovieSceneList;