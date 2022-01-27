import { CardMedia } from '@mui/material'
import React from 'react'

export default function Image(props) {
   const { width, height, src, ...otherProps } = props
   return (
      <CardMedia
         component="img"
         height={height || '30px'}
         width={width || '20px'}
         src={src}
         {...otherProps}
      />
   )
}
