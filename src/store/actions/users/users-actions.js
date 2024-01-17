import axios from 'axios'

import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCEEDED,
  REGISTRATION_ERROR,
  CLEAR_REGISTRATION_DETAILS
} from '../../types'

const URL = 'http://localhost:8080/api/user'

export const userRegistration = (user) => (dispatch) => {
  dispatch({ type: REGISTRATION_REQUEST })

  axios
    .post(`${URL}`, user, {})
    .then((response) => {
      if (response.data.status === 200) {
        dispatch({
          type: REGISTRATION_SUCCEEDED,
          payload: response.data.body
        })
      } else {
        dispatch({
          type: REGISTRATION_ERROR,
          payload: response.data.message
        })
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

export function clearRegistrationDetails() {
  return {
    type: CLEAR_REGISTRATION_DETAILS,
    payload: null
  }
}
