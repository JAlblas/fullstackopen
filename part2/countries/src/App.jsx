import { useState, useEffect } from 'react'
import axios from 'axios'

import CountryList from './components/CountryList'

import './App.css'

const App = () => {

  const [searchValue, setsearchValue] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data))
      .catch(error => {
        console.log("Error fetching countries", error)
      })
  }, [])

  const onSearch = (event) => {
    event.preventDefault()
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${searchValue}`)
      .then(response => {
        console.log(response)
      })
  }

  const handleChange = (event) => {
    setsearchValue(event.target.value)
  }

  return (
    <div>
      <h1>Countrypedia</h1>

      <form onSubmit={onSearch}>
        find countries: <input value={searchValue} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      <CountryList countries={countries} />
    </div>
  )
}

export default App
