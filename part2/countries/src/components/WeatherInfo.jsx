import { useState, useEffect } from 'react'
import axios from 'axios'


const WeatherInfo = ({ country }) => {

    const [weather, setWeather] = useState(null)

    const api_key = import.meta.env.VITE_WEATHER_KEY

    const lat = country.capitalInfo.latlng[0]
    const lng = country.capitalInfo.latlng[1]

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${api_key}`

    useEffect(() => {
        axios.get(url)
            .then(response => setWeather(response.data))
            .catch(error => {
                console.log("Error fetching weather", error)
            })
    }, [])

    if (weather) {
        console.log(weather)
        return (
            <div className="weather">
                <h3>Weather in {country.capital}</h3>
                <p>Temperature: {weather.main.temp} Celcius</p>
                <p>Humidity: {weather.main.humidity}</p>
                <p>Wind: {weather.wind.speed}</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
            </div>
        )
    } else {
        return null
    }
}

export default WeatherInfo