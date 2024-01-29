import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import axios from 'axios'

import {
  LocationOnOutlined as LocationIcon,
  AirOutlined as WindIcon
} from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { WiHumidity as HumidityIcon } from 'react-icons/wi'

import ErrorImage from '../../assets/images/error.png'
import { WEATHER_APIKEY } from '../../utils/constants/app-constants'
import Divider from '../divider/divider'

const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_APIKEY}`
    )
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const getCityByCoordinates = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    const { latitude, longitude } = position.coords
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${WEATHER_APIKEY}`
    )
    return response.data[0].name
  } catch (error) {
    console.error(error)
    throw error
  }
}

function WeatherCard() {
  const { t } = useTranslation()
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const city = await getCityByCoordinates()
        const data = await getWeatherData(city)
        setWeatherData(data)
      } catch (error) {
        console.error(error)
      }
    }

    const updateTimeAndDate = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      )
      setDate(
        now.toLocaleDateString('en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
      )
    }

    fetchData()
    const interval = setInterval(updateTimeAndDate, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Box className="weather-card dashboard-card-theme">
      <Box className="weather-card-wrapper grid grid-cols-1 gap-6 p-5 w-full h-full">
        {!weatherData ? (
          <Box className="flex flex-col items-center justify-around py-6">
            <Typography variant="h6" component="p">
              {t('dashboard:weather:title')}
            </Typography>
            <Typography variant="subtitle1" component="p">
              {t('dashboard:weather:error')}
            </Typography>
            <img
              className="prevent-drag pt-5"
              src={ErrorImage}
              alt="error"
              width="150"
            />
          </Box>
        ) : (
          <Box className="flex flex-col items-center gap-5 flex-1">
            <Box className="flex flex-col items-center gap-1">
              <Box className="flex items-end justify-between gap-2">
                <Box className="flex items-center gap-1">
                  <LocationIcon />
                  <Typography variant="h5" component="p">
                    {weatherData.name}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" component="p">
                  {time.toLocaleUpperCase()}
                </Typography>
              </Box>
              <Typography variant="subtitle1" component="p">
                {date}
              </Typography>
            </Box>
            <Divider />
            <Box className="flex flex-col gap-4 justify-center items-center flex-1 h-full w-full">
              <Box className="flex justify-center items-center gap-4">
                <img
                  className="circle-icon"
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                  alt="Weather icon"
                />
                <Box>
                  <Typography variant="h5" component="p">
                    {weatherData.main.temp}°C
                  </Typography>
                  <Typography variant="body2" component="p">
                    {weatherData.main.temp_min}°C /{weatherData.main.temp_max}°C
                  </Typography>
                </Box>
              </Box>
              <Typography variant="subtitle1" component="p">
                {weatherData.weather[0].main},{' '}
                {weatherData.weather[0].description}
              </Typography>
            </Box>
            <Divider />
            <Box className="flex justify-around gap-4 w-full">
              <Box className="weather-icon">
                <HumidityIcon size="26px" />
                <Typography
                  className="weather-icon-text"
                  variant="body2"
                  component="p"
                >
                  {`${weatherData.main.humidity} %`}
                </Typography>
              </Box>
              <Box className="weather-icon">
                <WindIcon />
                <Typography
                  className="weather-icon-text"
                  variant="body2"
                  component="p"
                >
                  {`${weatherData.wind.speed} ${t('dashboard:weather:wind:unit')}`}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default WeatherCard
