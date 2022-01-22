import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Table from '../components/UI/Table'

export default function PanelRoute() {
   return (
      <Routes>
         <Route path="groups" element={<Table />} />
         <Route path="courses" element={<Table />} />
         <Route path="teachers" element={<Table />} />
         <Route path="students" element={<Table />} />
      </Routes>
   )
}
