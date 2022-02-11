import axios from 'axios'

const baseURL = 'http://3.127.54.51/api'

const api = axios.create({
   baseURL,
})

export default api
