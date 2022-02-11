const TOKEN_KEY = 'PEAKSOFT_CANVA_TOKEN'

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const setToken = (token) =>
   localStorage.setItem(TOKEN_KEY, JSON.stringify(token))

export const removeToken = () => localStorage.removeItem(TOKEN_KEY)
