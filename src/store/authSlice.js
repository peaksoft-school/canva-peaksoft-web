import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user')) //* get token from localstorage

const initialState = user
   ? { isLoggedIn: true, user }
   : { isLoggedIn: false, user: null }

export const login = createAsyncThunk(
   'auth/login',
   async ({ email, password }, thunkAPI) => {
      try {
         return console.log(email, password)
      } catch (e) {
         console.error(e)
         return thunkAPI.rejectWithValue()
      }
   }
)

export const logout = createAsyncThunk('auth/logout', () => {
   // logout function
})

const authSlice = createSlice({
   name: 'authSlice',
   initialState,
   reducers: {},
   extraReducers: {
      [login.fulfilled]: (state) => {
         state.isLoggenIn = true
      },
      [login.rejected]: (state) => {
         state.isLoggenIn = false
      },
      [logout.fulfilled]: (state) => {
         state.user = null
         state.isLoggenIn = false
      },
   },
})

export default authSlice.reducer
