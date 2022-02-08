import { Box } from '@mui/material'
import React from 'react'

export default function Flexer({
   sx,
   justify,
   children,
   alignItems,
   flexWrap,
   width,
   m,
   mt,
   mb,
   my,
   p,
   pl,
   py,
}) {
   return (
      <Box
         sx={{
            width: width || 1,
            mx: 'auto',
            display: 'flex',
            flexWrap: flexWrap || 'wrap',
            justifyContent: justify,
            alignItems: alignItems || 'center',
            m,
            mt,
            my,
            mb,
            p,
            py,
            pl,
            ...sx,
         }}
      >
         {children}
      </Box>
   )
}
