import CountryDetails from "./CountryDetails"
import Country from "./Country"

const CountryList = ({ countries }) => {
    //const countryNames = countries.map(country => country.name.common)

    if (countries.length == 1) {
        return <CountryDetails country={countries[0]} key={countries[0].name.common} />
    } else if (countries.length <= 10) {
        return (
            <div>
                <h3>Found countries</h3>
                <ul>
                    {countries.map(country => <Country country={country} key={country.name.common} />)}
                </ul>
            </div>
        )
    } else {
        return <p>Too many results. Specify a filter</p>
    }

}

export default CountryList