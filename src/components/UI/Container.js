import { Box } from '@mui/material'
import React from 'react'

export default function Container({ width, children }) {
   return (
      <Box width={width} mx="auto">
         {children}
      </Box>
   )
}
