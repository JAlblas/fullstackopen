import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import CreateForm from './components/CreateForm'
import PersonList from './components/PersonList'

import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log("Promise fulfilled!")
        setPersons(response.data)
      })
  }, [])

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

    axios.post('http://localhost:3001/persons', personObject)
      .then(response => {
        console.log("Promise fulfilled!")
        setPersons(persons.concat(response.data))
        setNewName('');
        setNewNumber('');
      })

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