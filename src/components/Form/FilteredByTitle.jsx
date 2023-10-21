import React from 'react';

function FilteredByTitle({ titleFilter, handleChangeInput }) {

    const handleInput = (ev) => {
        handleChangeInput(ev.target.value);
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