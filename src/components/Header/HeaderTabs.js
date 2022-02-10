import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { NavLink } from 'react-router-dom'
import { styled } from '@mui/material'

const style = {
   textTransform: 'none',
   fontWeight: '600',
   lineHeight: '22px',
   color: '#000000',
}

const StyledBox = styled(Box)(() => ({
   position: 'absolute',
   left: '50%',
}))

export default function HeaderTabs({ tabs = [] }) {
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <StyledBox>
         <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
         >
            {tabs.map((tabItem) => {
               return (
                  <Tab
                     key={tabItem}
                     sx={style}
                     label={tabItem.title}
                     component={NavLink}
                     to={tabItem.link}
                  />
               )
            })}
         </Tabs>
      </StyledBox>
   )
}
