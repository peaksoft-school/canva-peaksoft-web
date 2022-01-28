import { LinearProgress } from '@mui/material'
import React from 'react'

export default function Loading({ className, display, ...otherProps }) {
   return (
      <LinearProgress
         className={className}
         sx={{
            flex: '0 0 100%',
            display: display ? 'block' : 'none',
         }}
         {...otherProps}
      />
   )
}
