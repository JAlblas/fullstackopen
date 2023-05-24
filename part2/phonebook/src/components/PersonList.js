import Person from "./Person"


const PersonList = ({ personsToShow, deletePerson }) => {
    return (
        <div id="phonebook">
            <ul>
                {
                    personsToShow.map((person) =>
                        <Person person={person} key={person.name} deletePerson={deletePerson} />
                    )
                }
            </ul>
        </div>
    )
}

export default PersonList;