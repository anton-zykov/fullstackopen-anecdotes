import { createSlice } from '@reduxjs/toolkit'

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
    dispatch(displayNotification(content))
    setTimeout(() => dispatch(clearNotification()), time * 1000)
  }
}

export const { displayNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer