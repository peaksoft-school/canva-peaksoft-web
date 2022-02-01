import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const style = {
   textTransform: 'none',
   fontFamily: 'Open Sans',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '16px',
   lineHeight: '22px',
   color: '#000000',
}

const StyledBox = styled(Box)`
   width: 100%;
   margin-left: 580px;
`

export default function BasicTabs({ user }) {
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   const tabs = [
      <Tab sx={style} label="Студенты">
         <NavLink to="/students">Students</NavLink>
      </Tab>,
   ]
   if (user === 'admin') {
      tabs.unshift(
         <Tab sx={style} label="Учителя">
            <NavLink to="/teachers">Учителя</NavLink>
         </Tab>
      )
   } else {
      tabs.unshift(
         <Tab sx={style} label="Материалы">
            <NavLink to="/materials">Материалы</NavLink>
         </Tab>
      )
   }
   return (
      <StyledBox>
         <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
         >
            {tabs}
         </Tabs>
      </StyledBox>
   )
}
