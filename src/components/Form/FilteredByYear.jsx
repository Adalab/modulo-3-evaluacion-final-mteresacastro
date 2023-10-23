
function FilteredByYear({ yearFilter, handleChangeSelect, years }) {

    const handleSelect = (ev) => {
        handleChangeSelect(ev.target.value);
    };

    const renderCitiesOptions = () => {

        return years.map((year, i) => <option key={i} value={year} className="sectionForm__form--select-option" >{year}</option>);

    };

    return (
        <>
            <label htmlFor="year" className="sectionForm__form--label">Año: </label>
            <select name="year" id="year" className="sectionForm__form--select" value={yearFilter} onChange={handleSelect}>
                <option className="sectionForm__form--select-option" value="">Cualquier año</option>
                {renderCitiesOptions()}
            </select>
        </>
    );

}

export default FilteredByYear;