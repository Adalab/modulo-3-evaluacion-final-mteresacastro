import React from 'react';
import FilteredByTitle from './FilteredByTitle';
import FilteredByYear from './FilteredByYear';

function Form({ titleFilter, handleChangeInput, yearFilter, handleChangeSelect, years }) {

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <section>
            <form action="" className="form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Filtrar por nombre de película</legend>
                    <FilteredByTitle titleFilter={titleFilter} handleChangeInput={handleChangeInput} />
                </fieldset>
                <fieldset>
                    <legend>Filtrar por año de estreno</legend>
                    <FilteredByYear yearFilter={yearFilter} handleChangeSelect={handleChangeSelect} years={years} />
                </fieldset>
            </form>
        </section>
    );
}

export default Form;