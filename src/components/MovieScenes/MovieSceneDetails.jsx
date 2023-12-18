import PropTypes from "prop-types";

const MovieSceneDetails = ({ data }) => {
    console.log(data)

    return (
        <div className="divComplete">
            <img className="imgDetails" src={data.poster} alt={`${data.movie} poster`} />
            <div className="divInfo">
                <h2 className="divInfo__movie">
                    <i className="iconDetails fa-solid fa-film"></i>{data.movie}
                </h2>
                <h3 className="divInfo__director">
                    <i className="iconDetails fa-solid fa-clapperboard"></i>{data.director}
                </h3>
                <h3 className="divInfo__year">
                    <i className="iconDetails fa-regular fa-calendar-days"></i>{data.year}
                </h3>
                <p className="divInfo__char">
                    <i className="iconDetails fa-solid fa-person-circle-question"></i>{data.character}
                </p>
                <h2 className="divInfo__line">
                    <i className="iconDetails fa-solid fa-quote-left"></i>{data.fullLine}
                    <i className="iconDetails fa-solid fa-quote-right"></i>
                </h2>
                <audio className="divInfo__audio" controls>
                    <source src={data.audio} type="audio/mpeg" />
                    En este navegador no puedes oir el audio.
                </audio>
            </div>
        </div>
    );
};

MovieSceneDetails.propTypes = {
    data: PropTypes.shape({
        poster: PropTypes.string,
        movie: PropTypes.string,
        director: PropTypes.string,
        character: PropTypes.string,
        fullLine: PropTypes.string,
        year: PropTypes.number,
        audio: PropTypes.string,
        id: PropTypes.string,
    })
};
export default MovieSceneDetails;