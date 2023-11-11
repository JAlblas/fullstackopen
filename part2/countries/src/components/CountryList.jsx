import CountryDetails from "./CountryDetails"

const CountryList = ({ countries }) => {
    const countryNames = countries.map(country => country.name.common)

    if (countryNames.length == 1) {
        return <CountryDetails country={countries[0]} key={countries[0].name.common} />
    } else if (countryNames.length <= 10) {
        return (
            <div>
                <h3>Found countries</h3>
                <ul>
                    {countryNames.map(country => <li>{country}</li>)}
                </ul>
            </div>
        )
    } else {
        return <p>Too many results. Specify a filter</p>
    }

}

export default CountryList