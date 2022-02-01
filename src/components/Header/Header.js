import * as React from 'react'
import Paper from '@mui/material/Paper'
import ListItemText from '@mui/material/ListItemText'
import { MenuItem, Menu } from '@mui/material'
import { Logout } from '@mui/icons-material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import styled from 'styled-components'
import { ReactComponent as UserLogo } from '../../assets/icons/userLogo.svg'
import HeaderTabs from './HeaderTabs'


const StyledPaper = styled(Paper)`
   &.MuiPaper-root {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 100%;
      height: 50px;
      background: #eff0f4;
   }
`

const StyledDiv = styled('div')`
   display: flex;
   align-items: center;
   position: absolute;
   width: 181px;
   height: 46px;
   left: 1219px;
`

const StyledText = styled(ListItemText)`
   margin: 1rem;
   font-family: Open Sans;
   font-size: 16px;
   line-height: 22px;
`

const StyledMenuItem = styled(MenuItem)`
   width: 213px;
`

const StyledDivWrapper = styled('div')`
   display: flex;
   align-items: center;
`

export default function Header({ role, withTabs = false, tabs = [] }) {
   const anchorEl = null //я не знаю что тут должно быть сами сделаете правильно
   const open = true


   const handleClick = () => {
      // do something
   }

   const handleClose = () => {
      // do some thing
   }




   return (
      <StyledPaper>
         {withTabs && <HeaderTabs role={role} tabs={tabs}/>}

         <StyledDiv
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
         >
            <Menu
               id="basic-menu"
               anchorEl={anchorEl}
               open={open}
               onClose={handleClose}
               MenuListProps={{
                  'aria-labelledby': 'basic-button',
               }}
            >
               <StyledMenuItem onClick={handleClose}>
                  <Logout />
                  Выйти
               </StyledMenuItem>
            </Menu>
            <StyledDivWrapper>
               <UserLogo />
               <StyledText>{role}</StyledText>
               <KeyboardArrowDownIcon />
            </StyledDivWrapper>
         </StyledDiv>
      </StyledPaper>
   )
}
