
import MovieSceneItem from './MovieSceneItem';

function MovieSceneList({ filteredYear, titleFilter }) {
    if (filteredYear.length === 0 && titleFilter !== "") {
        return <p>No se encontraron resultados para `{titleFilter}`. Por favor, ajusta tus filtros y vuelve a intentarlo.</p>;
    }

    const allMovies = filteredYear.map((eachMovie, index) => {
        return (
            <li className="" key={index}>
                <MovieSceneItem eachMovie={eachMovie} />
            </li>
        );
    });

    return (
        <section>
            <ul className="">
                {allMovies}
            </ul>
        </section>
    )
}
//}

export default MovieSceneList;