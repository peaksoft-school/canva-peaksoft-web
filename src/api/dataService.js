import axios from 'axios'
import API_URL from './api'

//* for students
// const getPublicContent = () => {
//    return axios.get(`${API_URL}all`)
// }

// for instructor
const getInstructorContent = () => {
   return axios.get(`${API_URL}instructor`)
}

// for admin
const getAdminContent = () => {
   return axios.get(`${API_URL}admin`)
}

const dataService = {
   getInstructorContent,
   getAdminContent,
}

export default dataService
