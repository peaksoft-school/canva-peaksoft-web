import { Button as MUIButton, Typography } from '@mui/material'
import React from 'react'

export default function Button({
   children,
   variant,
   sx,
   align,
   disableRipple,
   className,
   type,
   ...other
}) {
   return (
      <Typography align={align || 'left'}>
         <MUIButton
            fullWidth
            type={type}
            className={className}
            variant={variant}
            sx={{ textTransform: 'none', ...sx }}
            disableRipple={disableRipple}
            {...other}
         >
            {children}
         </MUIButton>
      </Typography>
   )
}
