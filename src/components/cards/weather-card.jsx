import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { useSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'

import { Oval } from 'react-loader-spinner'

import {
  LocationOnOutlined as LocationIcon,
  AirOutlined as WindIcon
} from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { WiHumidity as HumidityIcon } from 'react-icons/wi'

import ErrorImage from '../../assets/images/error.png'
import Divider from '../divider/divider'

import fetchWeatherData from '../../store/actions/weather/weather-actions'

function WeatherCard() {
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()

  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  const { data: weatherData, isLoading } = useQuery(
    'weather',
    fetchWeatherData,
    {
      retry: 0,
      onError: (error) => {
        enqueueSnackbar(error.message, { variant: 'error' })
      }
    }
  )

  useEffect(() => {
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

    const interval = setInterval(updateTimeAndDate, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  if (isLoading) {
    return (
      <Box className="weather-card weather-card-theme">
        <Box className="weather-card-wrapper px-2 py-6 gap-4 flex-1 h-full w-full">
          <Box className="flex flex-col justify-center items-center gap-3 flex-1 h-full">
            <Oval
              visible
              height="80"
              width="80"
              color="#2e63f7"
              secondaryColor="#d8d8da"
              ariaLabel="oval-loading"
            />
          </Box>
        </Box>
      </Box>
    )
  }

  if (!weatherData) {
    return (
      <Box className="weather-card weather-card-theme">
        <Box className="weather-card-wrapper px-2 py-6 gap-4 flex-1 h-full w-full">
          <Box className="flex flex-col justify-center items-center gap-3 flex-1 h-full">
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
        </Box>
      </Box>
    )
  }

  return (
    <Box className="weather-card weather-card-theme">
      <Box className="weather-card-wrapper px-2 py-6 gap-4 flex-1 h-full w-full">
        <Box className="flex flex-col justify-center items-center gap-3 flex-1 h-full">
          <Box className="flex flex-col items-center gap-1">
            <Box className="flex items-end justify-between w-full">
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
      </Box>
    </Box>
  )
}

export default WeatherCard
