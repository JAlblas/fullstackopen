import Person from "./Person"


const PersonList = ({ personsToShow }) => {
    return (
        <div id="phonebook">
            <ul>
                {
                    personsToShow.map((person) =>
                        <Person person={person} key={person.name} />
                    )
                }
            </ul>
        </div>
    )
}

export default PersonList;