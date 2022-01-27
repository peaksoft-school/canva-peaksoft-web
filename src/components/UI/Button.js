import { Button as MUIButton } from '@mui/material'
import React from 'react'

export default function Button({ children, variant, sx, ...other }) {
   return (
      <MUIButton
         variant={variant}
         sx={{ textTransform: 'none', ...sx }}
         {...other}
      >
         {children}
      </MUIButton>
   )
}
