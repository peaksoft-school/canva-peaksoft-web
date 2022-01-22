import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../containers/LoginPage'
import Layout from '../layout/Layout'

export default function MainRouter() {
   return (
      <Routes>
         <Route path="login" element={<LoginPage />} />
         <Route path="admin/*" element={<Layout />} />
      </Routes>
   )
}
