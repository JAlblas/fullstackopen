const Person = ({ person, deletePerson }) => {
    return (
        <li><b>{person.name}</b>: {person.number}
            <button onClick={() => deletePerson(person.id)} className="delete">Delete</button>
        </li>
    )
}

export default Person