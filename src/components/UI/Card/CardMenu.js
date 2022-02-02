import {
   Divider,
   ListItemIcon,
   Menu,
   MenuItem,
   styled,
   Backdrop,
} from '@mui/material'
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
      <Backdrop
         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
         open={open}
         onClick={handleClose}
      >
         <StyledMenu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
         >
            <StyledMenuItem onClick={onAdd}>
               <ListItemIcon>
                  <AddIcon />
               </ListItemIcon>
               Назначить учителя
            </StyledMenuItem>
            <StyledDivider />
            <StyledMenuItem onClick={setOnChange}>
               <ListItemIcon>
                  <ChangeIcon />
               </ListItemIcon>
               Редактировать
            </StyledMenuItem>
            <StyledDivider />
            <StyledMenuItem onClick={onDelete}>
               <ListItemIcon>
                  <DeleteIcon />
               </ListItemIcon>
               Удалить
            </StyledMenuItem>
         </StyledMenu>
      </Backdrop>
   )
}

const StyledMenu = styled(Menu)(() => ({
   '& .MuiPopover-paper': {
      borderRadius: '10px',
   },
   // '& .MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper'
   '& .MuiMenu-list': {
      color: '#232323',
   },
   '& ul': {
      padding: 0,
   },
}))

const StyledDivider = styled(Divider)(() => ({
   '&.MuiDivider-root': {
      margin: '0px !important',
   },
}))

const StyledMenuItem = styled(MenuItem)(() => ({
   '&.MuiMenuItem-root': {
      '& svg path': {
         color: '#232323',
      },
      padding: '15px 15px 15px 15px',
      color: '#232323',
   },
   '&.MuiMenuItem-root:hover': {
      '& svg path': {
         color: 'blue',
      },
      background: 'rgba(26, 35, 126, 0.07)',
      color: 'blue',
   },
}))
