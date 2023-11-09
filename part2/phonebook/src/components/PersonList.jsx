import Person from './Person'

const PersonList = ({ personsToShow, deletePerson }) => {
    return (
        <div>
            {
                personsToShow.map((person) =>
                    <Person person={person} key={person.name} deletePerson={deletePerson} />
                )
            }
        </div>
    )
}

export default PersonList