
function FilteredByYear({ yearFilter, handleChangeSelect, years }) {

    const handleSelect = (ev) => {
        handleChangeSelect(ev.target.value);
    };

    const renderCitiesOptions = () => {

        return years.map((year, i) => <option key={i} value={year}>{year}</option>);

    };

    return (
        <>
            <label htmlFor="year" className="form__label">Año: </label>
            <select name="year" id="year" className="form__select" value={yearFilter} onChange={handleSelect}>
                <option value="">Cualquier año</option>
                {renderCitiesOptions()}
            </select>
        </>
    );

}

export default FilteredByYear;