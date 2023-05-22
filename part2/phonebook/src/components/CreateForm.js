const CreateForm = ({ newName, updateName, newNumber, updateNumber, addPerson }) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                Name: <input value={newName} onChange={updateName} />
                <br></br>
                Number: <input value={newNumber} onChange={updateNumber} />
                <br></br>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default CreateForm