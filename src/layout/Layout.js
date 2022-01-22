import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../components/UI/Sidebar'
import PanelRoute from '../routes/PanelRoute'

export default function Layout() {
   return (
      <Box display="flex">
         <Sidebar />
         <Box
            sx={{
               backgroundColor: 'rgb(239,240,244)',
               width: '100%',
               height: '100vh',
            }}
         >
            <PanelRoute />
         </Box>
      </Box>
   )
}
