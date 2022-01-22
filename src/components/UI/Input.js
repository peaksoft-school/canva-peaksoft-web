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
   htmlFor,
   className,
   onChange,
}) {
   return (
      <StyledTextField
         className={className}
         onChange={onChange}
         sx={{ width: 1 }}
         placeholder={placeholder}
         htmlFor={htmlFor}
         size="small"
      >
         {children}
      </StyledTextField>
   )
}
