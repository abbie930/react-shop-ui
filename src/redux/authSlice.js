import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload
    },
    setLogout: (state) => {
      state.isLoggedIn = false
      state.user = null
    }
  }
})

export const { setLogin, setLogout } = authSlice.actions
export default authSlice.reducer
