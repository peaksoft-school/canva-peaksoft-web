import { createAsyncThunk } from '@reduxjs/toolkit'
import { setToken, removeToken } from '../../utils/helpers/localstorage'
import api from '../../api/api'

export const login = createAsyncThunk('auth/login', async (payload) => {
   const response = await api.post('/authentication', payload)
   setToken(response.data.token)
   return response.data
})

export const logout = createAsyncThunk('auth/logout', async () => {
   removeToken()
})
