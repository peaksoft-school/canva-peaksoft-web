import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import dataSlice from './dataSlice'

const store = configureStore({
   reducer: {
      data: dataSlice,
      auth: authSlice,
   },
})

export default store
