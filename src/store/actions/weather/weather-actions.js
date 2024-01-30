import axios from 'axios'

import { WEATHER_API_KEY } from '../../../utils/constants/app-constants'

const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
    )
    return response.data
  } catch (error) {
    throw new Error(error.message)
  }
}

const getCityByCoordinates = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    const { latitude, longitude } = position.coords
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${WEATHER_API_KEY}`
    )
    return response.data[0].name
  } catch (error) {
    throw new Error(error.message)
  }
}

const fetchWeatherData = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        getCityByCoordinates(latitude, longitude)
          .then((city) => getWeatherData(city))
          .then((weatherData) => {
            resolve(weatherData)
          })
          .catch(() => {
            reject(new Error('Failed to get weather data.'))
          })
      },
      () => {
        reject(new Error('Failed to detect user location.'))
      }
    )
  })
}

export default fetchWeatherData
