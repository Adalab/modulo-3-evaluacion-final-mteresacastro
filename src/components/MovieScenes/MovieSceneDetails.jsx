import PropTypes from "prop-types";

const MovieSceneDetails = ({ data }) => {
    console.log(data)
    return (
        <>
            <img className="imgDetails" src={data.poster} alt={`${data.movie} poster`} />
            <h2><i className="fa-solid fa-film"></i>{data.movie}</h2>
            <h3><i className="fa-solid fa-clapperboard"></i>{data.director}</h3>
            <h3><i className="fa-regular fa-calendar-days"></i>{data.year}</h3>
            <p><i className="fa-solid fa-person-circle-question"></i>{data.character}</p>
            <h2><i className="fa-solid fa-quote-left"></i>{data.fullLine}<i className="fa-solid fa-quote-right"></i></h2>
            <audio controls>
                <source src={data.audio} type="audio/mpeg" />
                Tu navegador no soporta la etiqueta audio.
            </audio>
        </>
    );
};

MovieSceneDetails.propTypes = {
    data: PropTypes.object,
};
export default MovieSceneDetails;