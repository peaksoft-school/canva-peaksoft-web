import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './routes/LoginPage'

function App() {
   return (
      <Routes>
         <Route path="/login" element={<LoginPage />} />
      </Routes>
   )
}

export default App
