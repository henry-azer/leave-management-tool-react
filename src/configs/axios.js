import axios from 'axios'
import { BASE_URL } from '../utils/constants/app-constants'

const instance = axios.create({
  baseURL: BASE_URL.DEV
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      // do something
    }
    return Promise.reject(error)
  }
)

instance.interceptors.request.use(
  function requestDefault(config) {
    return config
  },
  function requestPromise(error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function responseDefault(response) {
    return response
  },
  function responseError(error) {
    return Promise.reject(error)
  }
)

export default instance
