import { Box } from '@mui/material'
import React from 'react'

export default function Flexer({ sx, justify, children, mt }) {
   return (
      <Box
         sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: justify || 'center',
            alignItems: 'center',
            mt,
            ...sx,
         }}
      >
         {children}
      </Box>
   )
}
