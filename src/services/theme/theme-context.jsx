import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo
} from 'react'

import PropTypes from 'prop-types'

import {
  createTheme,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles'

import { THEME } from '../../utils/constants/app-constants'
import LocalStorageProvider from '../storage/local-storage-provider'

const ThemeContext = createContext(undefined)

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = LocalStorageProvider.get(THEME)
    return savedTheme || 'light'
  })

  useEffect(() => {
    document.body.className = `${theme}-theme`
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      LocalStorageProvider.set(THEME, newTheme)
      return newTheme
    })
  }

  const muiTheme = createTheme({
    palette: {
      mode: theme === 'light' ? 'light' : 'dark'
    }
  })

  const memoizedValue = useMemo(() => ({ theme, toggleTheme }), [theme])

  return (
    <ThemeContext.Provider value={memoizedValue}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { ThemeContext, useTheme, ThemeProvider }
