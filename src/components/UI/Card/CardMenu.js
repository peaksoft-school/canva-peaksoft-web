import { Divider, ListItemIcon, Menu, MenuItem, styled } from '@mui/material'
import React from 'react'
import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg'
import { ReactComponent as ChangeIcon } from '../../../assets/icons/change.svg'

export default function CardMenu({
   handleClose,
   open,
   anchorEl,
   setAdd,
   setOnChange,
   setRemove,
}) {
   const onDelete = () => {
      handleClose()
      setRemove()
   }

   const onAdd = () => {
      handleClose()
      setAdd()
   }
   return (
      <StyledMenu
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
         transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
         <StyledMenuItem onClick={onAdd}>
            <ListItemIcon>
               <AddIcon />
            </ListItemIcon>
            Назначить учителя
         </StyledMenuItem>
         <Divider />
         <StyledMenuItem onClick={setOnChange}>
            <ListItemIcon>
               <ChangeIcon />
            </ListItemIcon>
            Редактировать
         </StyledMenuItem>
         <Divider />
         <StyledMenuItem onClick={onDelete}>
            <ListItemIcon>
               <DeleteIcon />
            </ListItemIcon>
            Удалить
         </StyledMenuItem>
      </StyledMenu>
   )
}

const StyledMenu = styled(Menu)(() => ({
   '& .MuiMenu-list': {
      color: '#232323',
      padding: '8px',
   },
}))

const StyledMenuItem = styled(MenuItem)(() => ({
   '&.MuiMenuItem-root': {
      '& svg path': {
         color: '#232323',
      },
      color: '#232323',
   },
   '&.MuiMenuItem-root:hover': {
      '& svg path': {
         color: 'blue',
      },
      color: 'blue',
      background: 'none',
   },
}))
