export const getToken = () => localStorage.getItem('token')

export const setToken = (token) =>
   localStorage.setItem('token', JSON.stringify(token))

export const removeToken = () => localStorage.removeItem('token')
