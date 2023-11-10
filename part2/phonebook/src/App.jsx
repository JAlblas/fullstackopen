import { useState, useEffect } from 'react'

import personService from './services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import Notification from './components/Notification'

import './App.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [succesMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personService.getAll()
      .then(persons => {
        setPersons(persons)
      })
      .catch(error => {
        setErrorMessage(
          `Persons can not be fetched`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      if (confirm(`${newName} is already added to phonebook, replace the old number with the new number?`)) {

        const personToUpdate = persons.find(person => person.name === newName)
        updatePerson(personToUpdate.id)

      } else {
        return
      }
    } else {
      // Person does not exist
      const personObject = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }

      personService.create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))

          setSuccessMessage(
            `${newName} is saved.`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)

          setNewName('')
          setNewNumber('')

        })
        .catch(error => {
          setErrorMessage(
            `Person '${newName}' could not be added.`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }
  }

  const updatePerson = (id) => {
    const person = persons.find(person => person.id === id)
    const changedPerson = {
      ...person, number: newNumber
    }

    personService
      .update(id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        setNewName('');
        setNewNumber('');

        setSuccessMessage(
          `${newName} is updated.`
        )
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })
      .catch(error => {
        setErrorMessage(
          `The person '${person.name}' does not exist on the server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)

        setPersons(persons.filter(person => person.id !== id))
      })
  }

  const deletePerson = (id) => {
    const person = persons.find(person => person.id === id)
    if (confirm(`Are you sure you want to remove ${person.name}?`)) {
      personService.remove(id)
        .then(returnedPerson => {
          console.log(returnedPerson)
          setPersons(persons.filter((person) => person.id !== id))

          setSuccessMessage(
            `${person.name} is deleted.`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage(
            `Person '${person.name}' was already removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(n => n.id !== id))
        })
    }
  }

  const personsToShow = filter.length === 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div id="phonebook">
      <h1>Phonebook</h1>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <Notification successMessage={succesMessage} errorMessage={errorMessage} />

      <h3>Numbers</h3>
      <PersonList personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App