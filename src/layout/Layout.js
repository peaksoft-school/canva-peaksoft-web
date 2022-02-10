import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/UI/Sidebar'
import PanelRoute from '../routes/PanelRoute'

export default function Layout() {
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
