import axios from 'axios'

import {
  fetchEmployeesRequest,
  fetchEmployeesFailure,
  fetchEmployeesSuccess
} from '../../reducers/employee/employee-reducers'

import { BASE_URL } from '../../../utils/constants/app-constants'

const URL = `${BASE_URL.DEV}/api/employee`

export const getEmployees = (dispatch) => async () => {
  dispatch(fetchEmployeesRequest())
  try {
    const response = await axios.get(URL)
    dispatch(fetchEmployeesSuccess(response.data))
    return response.data
  } catch (error) {
    dispatch(fetchEmployeesFailure(error.response.data.message))
    throw new Error(error.response.data.message)
  }
}

export const createEmployee = () => async (employee) => {
  try {
    const response = await axios.post(URL, employee)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export default getEmployees
