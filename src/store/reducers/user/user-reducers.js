import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCEEDED,
  REGISTRATION_ERROR,
  CLEAR_REGISTRATION_DETAILS
} from '../../types/user/users-types'

export default function userReducer(state = {}, action = {}) {
  switch (action.type) {
    // REGISTRATION
    case REGISTRATION_REQUEST:
      return { ...state, registrationRequest: true }
    case REGISTRATION_SUCCEEDED:
      return {
        ...state,
        registeredUser: action.payload,
        registrationSucceeded: true,
        registrationRequest: false
      }
    case REGISTRATION_ERROR:
      return {
        ...state,
        registrationError: action.payload,
        registrationErrorOccurred: true,
        registrationRequest: false,
        registrationSucceeded: false
      }
    case CLEAR_REGISTRATION_DETAILS:
      return {
        ...state,
        registeredUser: action.payload,
        registrationError: action.payload,
        registrationRequest: action.payload,
        registrationSucceeded: action.payload,
        registrationErrorOccurred: action.payload
      }
    default:
      return state
  }
}
