import React from 'react'
import { Button } from '@mui/material'
import styled from 'styled-components'
import { ReactComponent as GreenEdit } from '../../../assets/icons/LessonCardsSvg/greenEdit.svg'
import { ReactComponent as Deletesvg } from '../../../assets/icons/LessonCardsSvg/deleteBasket.svg'

const StyledDiv = styled('div')`
   opacity: 0;
   :hover {
      opacity: 1;
   }
`

const CardSettings = ({ onClick }) => {
   return (
      <StyledDiv>
         <Button
            variant="text"
            style={{ textTransform: 'none', color: 'black', fontSize: 13 }}
            onClick={onClick}
         >
            <GreenEdit style={{ margin: 5 }} />
            Редактировать
         </Button>
         <Button
            variant="text"
            style={{ textTransform: 'none', color: 'black', fontSize: 13 }}
            onClick={onClick}
         >
            <Deletesvg style={{ margin: 5 }} />
            Удалить
         </Button>
      </StyledDiv>
   )
}

export default CardSettings
