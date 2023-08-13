import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import cartReducer from './cartRedux'
import userReducer from './userRedux'
import authReducer from './authRedux'
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

export let persistor = persistStore(store)
