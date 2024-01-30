import { createSlice } from '@reduxjs/toolkit'

export const attendanceSlice = createSlice({
  name: 'attendance',
  initialState: {
    all: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchAttendanceRequest: (state) => {
      state.loading = true
      state.error = null
    },
    fetchAttendanceSuccess: (state, action) => {
      state.loading = false
      state.all = action.payload
    },
    fetchAttendanceFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  fetchAttendanceRequest,
  fetchAttendanceSuccess,
  fetchAttendanceFailure
} = attendanceSlice.actions

export default attendanceSlice.reducer
