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

export default function DeleteModal() {
   const [open, setOpen] = React.useState(false)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   return (
      <div>
         <Button onClick={handleOpen}>Delete</Button>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <StyledText variant="h6" component="h2">
                  Вы уверены, что хотите удалить группу ... ?
               </StyledText>
               <div
                  style={{
                     width: 221,
                     marginLeft: 48,
                     display: 'flex',
                     justifyContent: 'space-evenly',
                  }}
               >
                  <Button
                     style={{
                        fontWeight: 400,
                        fontSize: 14,
                        textTransform: 'none',
                     }}
                     variant="outlined"
                     onClick={handleClose}
                  >
                     Отмена
                  </Button>
                  <Button
                     style={{
                        backgroundColor: 'rgba(201, 30, 30, 1)',
                        fontWeight: 600,
                        fontSize: 14,
                        textTransform: 'none',
                     }}
                     variant="contained"
                     onClick={handleClose}
                  >
                     Удалить
                  </Button>
               </div>
            </Box>
         </Modal>
      </div>
   )
}
