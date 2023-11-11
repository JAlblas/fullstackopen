const CountryList = ({ countries }) => {
    const countryNames = countries.map(country => country.name.common)
    console.log(countryNames)
    return (
        <div>
            <h3>Found countries</h3>
            <ul>
                {countryNames.map(country => <li>{country}</li>)}
            </ul>
        </div>
    )
}

export default CountryList