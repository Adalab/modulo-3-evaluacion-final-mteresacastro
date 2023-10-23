import '../../styles/App.scss';
import ls from '../../services/localStorage';

function FilteredByTitle({ titleFilter, handleChangeInput }) {

    const handleInput = (ev) => {
        const title = ev.target.value;
        ls.set("search", title);

        handleChangeInput(title);
    }

    return (
        <>
            <label className="sectionForm__form--label" htmlFor="title">Título: </label>
            <input
                className="sectionForm__form--input"
                type="text"
                value={titleFilter}
                onChange={handleInput}
                id="title"
                name="title"

            />
        </>
    );

}

export default FilteredByTitle;