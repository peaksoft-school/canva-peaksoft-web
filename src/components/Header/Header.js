import React from 'react'
import ListItemText from '@mui/material/ListItemText'
import { MenuItem, Menu, Divider, styled } from '@mui/material'
import { ReactComponent as UserLogo } from '../../assets/icons/userLogo.svg'
import HeaderTabs from './HeaderTabs'
import Wrapper from '../UI/Wrapper'
import { ReactComponent as ArrowDown } from '../../assets/icons/arrowDownIcon.svg'
import { ReactComponent as Logout } from '../../assets/icons/logoutIcon.svg'
import Flexer from '../UI/Flexer'

export default function Header({
   userRole,
   withTabs = false,
   tabs = [
      { title: 'Учителя', link: 'Teachers' },
      { title: 'Студенты', link: 'students' },
   ],
}) {
   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <>
         <StyledMenu
            disableScrollLock
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
         >
            <MenuItem onClick={handleClose}>
               <Logout />
               <span>Выйти</span>
            </MenuItem>
         </StyledMenu>
         <Wrapper align="right" width="98%">
            {!withTabs && <HeaderTabs role={userRole} tabs={tabs} />}
            <StyledDiv onClick={handleClick}>
               <Flexer>
                  <UserLogo />
                  <StyledText>{userRole || 'Администратор'}</StyledText>
                  <StyledArrowDown open={open} />
               </Flexer>
            </StyledDiv>
            <Divider />
         </Wrapper>
      </>
   )
}

const StyledArrowDown = styled(ArrowDown)(({ open }) => ({
   transition: '0.2s',
   transform: `rotate(${open ? '180deg' : '360deg'})`,
}))

const StyledDiv = styled('div')`
   display: inline-block;
`

const StyledText = styled(ListItemText)`
   margin: 8px 1rem 14px;
`

const StyledMenu = styled(Menu)(() => ({
   '& .MuiMenu-list': {
      padding: 0,
      width: '200px',
   },
   '& li': {
      padding: '0.7rem',
      backgroundColor: 'transparent !important',
   },
   '& li:hover': {
      textDecoration: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.04) !important',
   },
   '& span': {
      padding: '0 8px 0',
   },
}))
