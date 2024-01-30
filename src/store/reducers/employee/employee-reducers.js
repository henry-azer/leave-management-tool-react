import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    all: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchEmployeesRequest: (state) => {
      state.loading = true
      state.error = null
    },
    fetchEmployeesSuccess: (state, action) => {
      state.loading = false
      state.all = action.payload
    },
    fetchEmployeesFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  fetchEmployeesRequest,
  fetchEmployeesSuccess,
  fetchEmployeesFailure
} = employeeSlice.actions

export default employeeSlice.reducer
