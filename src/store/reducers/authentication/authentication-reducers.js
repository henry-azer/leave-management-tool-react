import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCEEDED,
  CLEAR_LOGIN_DETAILS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILURE,
  CLEAR_LOGOUT_DETAILS
} from '../../types/authentication/authentication-types'

export function loginReducer(action = {}, state = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loginRequest: true }
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        authenticatedUser: action.payload.user,
        authenticationToken: action.payload.token,
        isUserAuthenticated: true,
        loginRequest: false
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload,
        isUserAuthenticated: false,
        loginErrorOccurred: true,
        loginRequest: false
      }
    case CLEAR_LOGIN_DETAILS:
      return {
        ...state,
        loginError: null,
        authenticationToken: null,
        isUserAuthenticated: null,
        loginErrorOccurred: null,
        loginRequest: null
      }
    default:
      return state
  }
}

export function logoutReducer(action = {}, state = {}) {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return { ...state, logoutRequest: true }
    case LOGOUT_SUCCEEDED:
      return {
        ...state,
        authenticatedUser: null,
        authenticationToken: null,
        isUserAuthenticated: false,
        logoutRequest: false
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        logoutError: action.payload,
        isUserAuthenticated: false,
        logoutErrorOccurred: true,
        logoutRequest: false
      }
    case CLEAR_LOGOUT_DETAILS:
      return {
        ...state,
        logoutError: null,
        isUserAuthenticated: null,
        logoutErrorOccurred: null,
        logoutRequest: null
      }
    default:
      return state
  }
}
