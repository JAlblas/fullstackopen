const Person = ({ person, deletePerson }) => {
    return (
        <p><b>{person.name}</b>: {person.number}
            <button onClick={() => deletePerson(person.id)} className="delete">Delete</button>
        </p>
    )
}

export default Person