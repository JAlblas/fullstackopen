const Filter = ({ updateFilter }) => {
    return (
        <div id="filter">
            <p>Filter persons by name</p>
            <input onChange={updateFilter}></input>
        </div>
    )
}

export default Filter;