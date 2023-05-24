import { useState, useEffect } from 'react'

import personService from './services/persons'

import Filter from './components/Filter'
import CreateForm from './components/CreateForm'
import PersonList from './components/PersonList'

import axios from 'axios'

import './App.css';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

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

    personService.create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('');
        setNewNumber('');
      })
  }

  const deletePerson = (id) => {
    personService.remove(id)
      .then(data => {
        console.log("DELETING")
        console.log(id)
        console.log(data)
        setPersons(persons.filter((person) => person.id !== id))
      })

  }

  const updateName = (event) => {
    setNewName(event.target.value);
  }

  const updateNumber = (event) => {
    setNewNumber(event.target.value);
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
      <PersonList personsToShow={personsToShow} deletePerson={deletePerson} />

    </div>
  )
}

export default App