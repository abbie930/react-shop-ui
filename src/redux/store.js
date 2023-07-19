import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import cartReducer from './cartRedux'


const rootReducer = combineReducers({
  cart: cartReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store









