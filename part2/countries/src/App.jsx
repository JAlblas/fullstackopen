import { useState, useEffect } from 'react'
import axios from 'axios'

import CountryList from './components/CountryList'

import './App.css'

const App = () => {

  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  const countriesToDisplay =
    countries.filter((country) =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    );

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data))
      .catch(error => {
        console.log("Error fetching countries", error)
      })
  }, [])

  /*
  const onSearch = (event) => {
    event.preventDefault()
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${searchValue}`)
      .then(response => {
        console.log(response)
      })
  }
  */

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h1>Countrypedia</h1>

      <form>
        find countries: <input value={filter} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      <CountryList countries={countriesToDisplay} />
    </div>
  )
}

export default App
