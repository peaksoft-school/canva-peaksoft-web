import { Box } from '@mui/material'
import React from 'react'

export default function Flexer({ sx, justify, children, mt }) {
   return (
      <Box
         sx={{
            mx: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: justify,
            alignItems: 'center',
            mt,
            ...sx,
         }}
      >
         {children}
      </Box>
   )
}
