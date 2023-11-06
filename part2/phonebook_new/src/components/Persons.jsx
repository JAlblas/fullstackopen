const Persons = ({ personsToShow }) => {
    return (
        <div>
            {personsToShow.map(person => <p key={person.name}>{person.name}</p>)}
        </div>
    )
}

export default Persons