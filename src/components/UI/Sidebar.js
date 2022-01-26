import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import sidebarIcons from '../../assets/icons/sidebarIcons'
import classes from '../../assets/styles/AdminPage.module.css'
import Logo from '../../assets/images/PeaksoftLogo.png'

export default function Sidebar() {
   const translate = ['groups', 'courses', 'teachers', 'students']

   return (
      <Box display="flex">
         <Box
            sx={{ width: 250 }}
            className={classes.sidebar}
            textAlign="center"
         >
            <List>
               <img className={classes.logo} src={Logo} alt="peaksoft" />
               {['Группы', 'Курсы', 'Учителя', 'Студенты'].map(
                  (text, index) => (
                     <NavLink to={translate[index]} key={text}>
                        <ListItem button key={text} sx={{ p: 1.5 }}>
                           <ListItemIcon>
                              <img src={sidebarIcons[index]} alt="hello" />
                           </ListItemIcon>
                           <ListItemText primary={text} />
                        </ListItem>
                     </NavLink>
                  )
               )}
            </List>
         </Box>
      </Box>
   )
}
