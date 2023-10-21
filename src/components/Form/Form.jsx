import React from 'react';
import FilteredByTitle from './FilteredByTitle';
import FilteredByYear from './FilteredByYear';

function Form({ titleFilter, handleChangeInput, yearFilter }) {

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <section>
            <form action="" className="form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Filtrar por nombre de película</legend>
                    <FilteredByTitle titleFilter={titleFilter} handleChangeInput={handleChangeInput} yearFilter={yearFilter} />
                </fieldset>
                <fieldset>
                    <legend>Filtrar por año de estreno</legend>
                    <FilteredByYear />
                </fieldset>
            </form>
        </section>
    );
}

export default Form;