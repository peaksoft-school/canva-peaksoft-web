import React from 'react'
import { Button } from '@mui/material'
import styled from 'styled-components'
import { ReactComponent as GreenEdit } from '../../assets/icons/LessonCardsSvg/greenEdit.svg'
import { ReactComponent as Deletesvg } from '../../assets/icons/LessonCardsSvg/deleteBasket.svg'

const StyledDiv = styled('div')`
   opacity: 0;
   :hover {
      opacity: 1;
   }
`

const StyledButton = styled(Button)`
   &.MuiButton-root {
      text-transform: none;
      color: black;
      font-size: 13;
   }
`

const CardSettings = ({ onDeleteHandler, onEditHandler }) => {
   return (
      <StyledDiv>
         <StyledButton variant="text" onClick={onEditHandler}>
            <GreenEdit style={{ margin: 5 }} />
            Редактировать
         </StyledButton>
         <StyledButton variant="text" onClick={onDeleteHandler}>
            <Deletesvg style={{ margin: 5 }} />
            Удалить
         </StyledButton>
      </StyledDiv>
   )
}

export default CardSettings
