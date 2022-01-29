import { Button } from '@mui/material'
import styled from 'styled-components'
import React from 'react'

const StyledButton = styled(Button)`
   font-size: 20px;
   font-weight: bold;
   color: black;
`
const StyledDiv = styled('div')`
   display: flex;
   justify-content: end;
`

const Meatballs = ({ onClick }) => {
   return (
      <StyledDiv>
         <StyledButton onClick={onClick}>...</StyledButton>
      </StyledDiv>
   )
}

export default Meatballs
