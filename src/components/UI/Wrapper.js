import { Box } from '@mui/material'
import React from 'react'

export default function Wrapper({ children, align, ...other }) {
   return (
      <Box {...other} mx="auto" textAlign={align || 'left'}>
         {children}
      </Box>
   )
}
