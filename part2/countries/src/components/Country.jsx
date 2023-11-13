import { useState } from 'react'

import CountryDetails from "./CountryDetails"

const Country = ({ country }) => {
    //let showDetails = false
    const [showDetails, setShowDetails] = useState(false)

    const toggleDetails = () => {
        setShowDetails(!showDetails)
        console.log(showDetails)
    }

    return (
        <div className="country">
            <li>{country.name.common}<button onClick={toggleDetails}>Show</button>{showDetails}</li>

            {showDetails ? <CountryDetails country={country} /> : null}
        </div>

    )
}

export default Country