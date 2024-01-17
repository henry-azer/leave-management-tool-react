import React from 'react'
import { createRoot } from 'react-dom/client'

import { SnackbarProvider } from 'notistack'

import { Provider } from 'react-redux'
import Router from './router/router'
import store from './configs/redux-store'

import ThemeButton from './components/buttons/theme/theme-button'
import TranslateButton from './components/buttons/translate/translate-button'
import { ThemeProvider } from './services/theme/theme-context'

import './configs/axios'
import './styles/styles.scss'
import './services/localization/i18n'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SnackbarProvider>
        <Provider store={store}>
          <Router />
          <ThemeButton />
          <TranslateButton />
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
)
