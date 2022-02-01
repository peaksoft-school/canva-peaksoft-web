import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import styled from 'styled-components'

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 315,
   bgcolor: 'background.paper',
   boxShadow: 24,
   p: 4,
   borderRadius: 5,
   border: 'none',
}

const StyledText = styled(Typography)`
   font-family: Open Sans;
   font-size: 16px;
   line-height: 22px;
   text-align: center;
   color: #1f1c1c;
   margin: 0 62px 24px 62px;
`

const StyledDiv = styled('div')`
   width: 100%;
   margin: 0 auto;
   display: flex;
   justify-content: space-evenly;
`

const CancelButton = styled(Button)`
   font-weight: 400;
   font-size: 14;
   text-transform: none;
`

const DeleteButton = styled(Button)`
   background-color: rgba(201, 30, 30, 1);
   font-weight: 600;
   font-size: 14;
   text-transform: none;
`

export default function DeleteModal({
   isOpen,
   onClose,
   onConfirm,
   children,
   ...otherProps
}) {
   return (
      <Modal open={isOpen} onClose={onClose} {...otherProps}>
         <Box sx={style}>
            <StyledText variant="h6" component="h2">
               Вы уверены, что хотите удалить группу ... ?
            </StyledText>
            <StyledDiv>
               <CancelButton variant="outlined" onClick={onClose}>
                  Отмена
               </CancelButton>
               <DeleteButton variant="contained" onClick={onConfirm}>
                  Удалить
               </DeleteButton>
            </StyledDiv>
         </Box>
      </Modal>
   )
}
