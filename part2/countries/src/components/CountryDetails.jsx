const CountryDetails = ({ country }) => {
    return (
        <div className="details">
            <h2>{country.name.common}</h2>
            <p>capital: {country.capital}</p>
            <p>area: {country.area} </p>

            <b>languages</b>
            <ul>
                {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png}></img>
        </div>
    )
}

export default CountryDetails