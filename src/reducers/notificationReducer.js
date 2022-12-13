import { createSlice } from '@reduxjs/toolkit'

let timeoutID = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    displayNotification(state, action) {
      return action.payload
    },
    clearNotification(/*state, action*/) {
      return ''
    }
  },
})

export const setNotification = (content, time) => {
  return async (dispatch) => {
    if (timeoutID) {
      clearTimeout(timeoutID)
    }
    dispatch(displayNotification(content))
    timeoutID = setTimeout(() => dispatch(clearNotification()), time * 1000)
  }
}

export const { displayNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer