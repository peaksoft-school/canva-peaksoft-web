import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/Header/Header'
// import { useSelector } from 'react-redux'
// import { Navigate } from 'react-router-dom'
import Sidebar from '../components/UI/Sidebar'
import PanelRoute from '../routes/PanelRoute'

export default function Layout() {
   // const { user } = useSelector((state) => state.auth)
   // if (!user) return <Navigate to="/login" />

   return (
      <Box display="flex">
         <Sidebar />
         <Box
            sx={{
               backgroundColor: 'rgb(239,240,244)',
               width: '100vw',
               p: 1,
               minHeight: '100vh',
               height: '100%',
            }}
         >
            <Header />
            <PanelRoute />
         </Box>
      </Box>
   )
}
