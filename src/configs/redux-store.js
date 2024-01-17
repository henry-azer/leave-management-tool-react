import { configureStore } from '@reduxjs/toolkit'

import { thunk } from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

import rootReducer from '../store/reducers/index'

const preloadedState = {}

const store = configureStore({
  preloadedState,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([thunk, loggerMiddleware])
})

export default store
