import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import { SnackbarProvider } from 'notistack'

import { Provider } from 'react-redux'
import Router from './router/router'
import store from './configs/redux-store'

import { ThemeProvider } from './services/theme/theme-context'

import './configs/axios'
import './styles/styles.scss'
import './services/localization/i18n'

const queryClient = new QueryClient()

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <SnackbarProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  </QueryClientProvider>
)
