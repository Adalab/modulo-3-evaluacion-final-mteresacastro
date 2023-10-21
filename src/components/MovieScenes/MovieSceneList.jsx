
import MovieSceneItem from './MovieSceneItem';

function MovieSceneList({ data, titleFilter }) {
    console.log(data);
    if (data.length === 0) {
        return <li className="">
            <p>No existe ningún título que coincida con {titleFilter}.</p>
        </li>;
    } else {
        const allMovies = data.map((eachMovie, index) => {
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
};

export default MovieSceneList;