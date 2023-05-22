import { useState } from 'react'

import Filter from './components/Filter'
import CreateForm from './components/CreateForm'
import PersonList from './components/PersonList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const updateName = (event) => {
    setNewName(event.target.value);
  }

  const updateNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  }

  const updateFilter = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = filter.length === 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter updateFilter={updateFilter} />

      <h2>Add a new</h2>
      <CreateForm newName={newName} updateName={updateName}
        newNumber={newNumber} updateNumber={updateNumber}
        addPerson={addPerson} />

      <h2>Numbers</h2>
      <PersonList personsToShow={personsToShow} />

    </div>
  )
}

export default App