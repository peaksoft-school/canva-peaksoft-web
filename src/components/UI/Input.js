import { TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const StyledTextField = styled(TextField)(() => ({
   '&.MuiTextField-root': {
      borderRadius: '10px',
   },
   '&.MuiButtonBase-root:hover': {
      background: 'none',
   },
   '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
   },
}))
export default function Input({
   children,
   placeholder,
   className,
   onChange,
   width,
   inputProps,
   hidden,
   id,
   multiple,
   sx,
   ...otherProps
}) {
   return (
      <StyledTextField
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
