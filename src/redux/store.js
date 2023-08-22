import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import cartReducer, { getTotals } from './cartSlice'
import userReducer from './userSlice'
import authReducer from './authSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducers = combineReducers({ 
  auth: persistReducer(persistConfig, authReducer),
  user: userReducer, 
  cart: cartReducer 
})

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

store.dispatch(getTotals())

export let persistor = persistStore(store)
