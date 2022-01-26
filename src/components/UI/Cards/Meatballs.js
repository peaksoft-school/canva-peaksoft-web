import { Button } from '@mui/material'
import styled from 'styled-components'
import React from 'react'

const StyledButton = styled(Button)`
   font-size: 20px;
   font-weight: bold;
   color: black;
`

const style = {
   display: 'flex',
   justifyContent: 'end',
}

const Meatballs = () => {
   const [open, setOpen] = React.useState(false)

   const meatballs = () => {
      setOpen(!open)
   }
   return (
      <div style={style}>
         <StyledButton onClick={meatballs}>...</StyledButton>
      </div>
   )
}

export default Meatballs
