import { createSlice } from '@reduxjs/toolkit'
import { login, logout } from './action-creators/auth-action'

const initialState = {
   token: '',
   isLoading: false,
   isAuthorized: true,
   user: { role: 'ROLE_ADMIN' },
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
         state.isAuthorized = true
      },
      [login.rejected]: (state) => {
         state.isLoading = false
      },
      [logout.fulfilled]: (state) => {
         state.user = {}
         state.token = null
         state.isAuthorized = false
      },
   },
})

export default authSlice.reducer
