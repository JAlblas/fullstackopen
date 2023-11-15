import { useState } from 'react'

import CountryDetails from "./CountryDetails"
import WeatherInfo from "./WeatherInfo"

const Country = ({ country }) => {
    //let showDetails = false
    const [showDetails, setShowDetails] = useState(false)

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    return (
        <div className="country">
            <li>{country.name.common}<button onClick={toggleDetails}>Show</button>{showDetails}</li>

            {showDetails ? <CountryDetails country={country} /> : null}
            {showDetails ? <WeatherInfo country={country} /> : null}
        </div>

    )
}

export default Country