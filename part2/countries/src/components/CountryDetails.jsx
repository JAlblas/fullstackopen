const CountryDetails = ({ country }) => {

    console.log(country)
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital: {country.capital}</p>
            <p>area: {country.area} </p>

            <b>languages</b>
            <ul>
                {Object.values(country.languages).map(language => <li>{language}</li>)}
            </ul>
            <img src={country.flags.png}></img>
        </div>
    )
}

export default CountryDetails