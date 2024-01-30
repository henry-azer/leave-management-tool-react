import { combineReducers } from 'redux'

import employeeReducer from './employee/employee-reducers'
import attendanceReducer from './attendance/attendance-reducers'

const rootReducer = combineReducers({
  employee: employeeReducer,
  attendance: attendanceReducer
})

export default rootReducer
