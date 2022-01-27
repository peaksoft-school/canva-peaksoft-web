import axios from 'axios'
import API_URL from './api'

const login = async (email, password) => {
   const res = await axios.post(`${API_URL}signin`, { email, password })
   const { data } = res
   localStorage.setItem('user', JSON.stringify(data.accessToken))

   return data
}

const logout = () => localStorage.removeItem('user')

const authService = {
   login,
   logout,
}

export default authService
