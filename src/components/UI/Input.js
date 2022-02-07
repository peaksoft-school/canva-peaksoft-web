import { TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const StyledTextField = styled(TextField)`
   .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
      border-radius: 10px;
   }
`
export default function Input({
   children,
   placeholder,
   className,
   onChange,
<<<<<<< HEAD
   width,
   inputProps,
   hidden,
   id,
   multiple,
   sx,
=======
   value,
>>>>>>> 33ed09735f741092afb3799cb11dfb1d7ececac8
   ...otherProps
}) {
   return (
      <StyledTextField
         value={value}
         className={className}
         id={id}
         multiple={multiple}
         hidden={hidden}
         sx={{ width: width || 1, m: 0.5, ...sx }}
         placeholder={placeholder}
         onChange={onChange}
         size="small"
         {...otherProps}
      />
   )
}
