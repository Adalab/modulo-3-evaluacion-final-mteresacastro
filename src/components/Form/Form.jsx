import '../../styles/App.scss';

import FilteredByTitle from './FilteredByTitle';
import FilteredByYear from './FilteredByYear';

function Form({ titleFilter, handleChangeInput, yearFilter, handleChangeSelect, years }) {

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <section className="sectionForm">
            <form className="sectionForm__form" onSubmit={handleSubmit}>
                <fieldset className="fieldset">
                    <legend className="sectionForm__form--legend" >Filtrar por nombre de película</legend>
                    <FilteredByTitle titleFilter={titleFilter} handleChangeInput={handleChangeInput} />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="sectionForm__form--legend">Filtrar por año de estreno</legend>
                    <FilteredByYear yearFilter={yearFilter} handleChangeSelect={handleChangeSelect} years={years} />
                </fieldset>
            </form>
        </section>
    );
}

export default Form;