import { Box } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import Sidebar from '../components/UI/Sidebar'

export default function Layout({ sidebarData, children }) {
   const { pathname } = useLocation()
   console.log(pathname)
   return (
      <Box display="flex">
         <Sidebar items={sidebarData} />
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
            {children}
         </Box>
      </Box>
   )
}
