import { createSlice } from '@reduxjs/toolkit'
import { login } from './action-creators/auth-action'

const initialState = {
   token: '',
   isLoading: false,
   isAuth: false,
   user: {},
}

const authSlice = createSlice({
   name: 'authSlice',
   initialState,
   extraReducers: {
      [login.pending]: (state) => {
         state.isLoading = true
      },
      [login.fulfilled]: (state, action) => {
         const { token, user } = action.payload
         state.token = token
         state.user = user
         state.isLoading = false
      },
      [login.rejected]: (state) => {
         state.isLoading = false
      },
   },
})

export default authSlice.reducer
