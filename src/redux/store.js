import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import cartReducer from './cartRedux'
import userSlice from './userSlice'


const rootReducer = combineReducers({
  cart: cartReducer,
  user: userSlice
})

const store = configureStore({
  reducer: rootReducer
})

export default store









