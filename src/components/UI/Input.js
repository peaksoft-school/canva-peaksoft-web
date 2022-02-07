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
   value,
   ...otherProps
}) {
   return (
      <StyledTextField
         value={value}
         className={className}
         sx={{ width: 1 }}
         placeholder={placeholder}
         onChange={onChange}
         size="small"
         {...otherProps}
      />
   )
}
