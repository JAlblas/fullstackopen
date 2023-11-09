const Filter = ({ filter, handleFilterChange }) => {
    return (
        <div>
            Filter phonebook with name: <br /><input value={filter} onChange={handleFilterChange} />
        </div>
    )
}

export default Filter