import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'
import { Box } from '@mui/material'
import Input from './Input'

const StyledDialog = styled(Dialog)`
   .css-tlc64q-MuiPaper-root-MuiDialog-paper {
      border-radius: 10px;
   }
`

export default function FullScreenDialog() {
   const [open, setOpen] = React.useState(false)

   const handleClickOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   return (
      <div>
         <Button variant="contained" onClick={handleClickOpen}>
            Добавить студента
         </Button>
         <StyledDialog
            fullWidth
            maxWidth="sm"
            open={open}
            borderradius="10"
            onClose={handleClose}
         >
            <AppBar sx={{ position: 'relative' }}>
               <Toolbar>
                  <Typography
                     sx={{ flex: 1 }}
                     variant="h6"
                     component="div"
                     align="center"
                  >
                     Добавить студента
                  </Typography>
               </Toolbar>
            </AppBar>
            <List>
               <ListItem>
                  <Input placeholder="Имя" />
               </ListItem>
               <ListItem>
                  <Input placeholder="Фамилия" />
               </ListItem>
               <ListItem>
                  <Input placeholder="+996 ___ __ __ __" />
               </ListItem>
               <ListItem>
                  <Input placeholder="Email" />
               </ListItem>
               <Divider />
            </List>
            <Box
               display="flex"
               width="38%"
               p="20px"
               ml="auto"
               justifyContent="space-between"
            >
               <Button variant="outlined" onClick={handleClose}>
                  Отмена
               </Button>
               <Button variant="contained">Добавить</Button>
            </Box>
         </StyledDialog>
      </div>
   )
}
