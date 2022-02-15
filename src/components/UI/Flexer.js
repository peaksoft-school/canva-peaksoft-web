import { Box } from '@mui/material'
import React from 'react'

export default function Flexer({
   sx,
   justify,
   children,
   display,
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
            flexWrap: flexWrap || 'wrap',
            display: display || 'flex',
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
