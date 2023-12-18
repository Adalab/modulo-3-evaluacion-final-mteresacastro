import '../../styles/App.scss';
import ls from '../../services/localStorage';
import { useEffect } from 'react';

function FilteredByTitle({ titleFilter, handleChangeInput }) {

    const handleInput = (ev) => {
        const title = ev.target.value;
        handleChangeInput(title);
    }

    useEffect(() => {
        ls.set('search', titleFilter);
    }, [titleFilter]);

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