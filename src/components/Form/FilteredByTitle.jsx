import ls from '../../services/localStorage';

function FilteredByTitle({ titleFilter, handleChangeInput }) {

    const handleInput = (ev) => {
        const title = ev.target.value;
        ls.set("search", title);

        handleChangeInput(title);
    }

    return (
        <>
            <label htmlFor="title" className='form__label'>Título: </label>
            <input
                className='form__input'
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