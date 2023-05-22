const Person = ({ person }) => {
    return (
        <li><b>{person.name}</b>: {person.number}</li>
    )
}

export default Person