import { Box } from '@mui/material'
import React from 'react'

export default function Flexer({
   sx,
   justify,
   children,
   display,
   alignItems,
   width,
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
            width,
            mx: 'auto',
            display: display || 'flex',
            flexWrap: 'wrap',
            justifyContent: justify,
            alignItems: alignItems || 'center',
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
