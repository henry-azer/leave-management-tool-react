import { combineReducers } from 'redux'
import user from './user/user-reducers'
import {
  loginReducer,
  logoutReducer
} from './authentication/authentication-reducers'

const rootReducer = combineReducers({
  auth: combineReducers({
    login: loginReducer,
    logout: logoutReducer
  }),
  user
})

export default rootReducer
