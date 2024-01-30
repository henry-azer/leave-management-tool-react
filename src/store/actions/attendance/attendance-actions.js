import axios from 'axios'

import {
  fetchAttendanceRequest,
  fetchAttendanceFailure,
  fetchAttendanceSuccess
} from '../../reducers/attendance/attendance-reducers'

import { BASE_URL } from '../../../utils/constants/app-constants'

const URL = `${BASE_URL.DEV}/api/attendance`

export const getAttendance = (dispatch) => async () => {
  dispatch(fetchAttendanceRequest())
  try {
    const response = await axios.get(URL)
    dispatch(fetchAttendanceSuccess(response.data))
    return response.data
  } catch (error) {
    dispatch(fetchAttendanceFailure(error.response.data.message))
    throw new Error(error.response.data.message)
  }
}

export default getAttendance
