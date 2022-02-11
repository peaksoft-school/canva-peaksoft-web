import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import classes from '../../assets/styles/AdminPage.module.css'
import Logo from '../../assets/images/PeaksoftLogo.png'

export default function Sidebar({ items }) {
   return (
      <Box display="flex">
         <Box
            sx={{ width: 250 }}
            className={classes.sidebar}
            textAlign="center"
         >
            <List>
               <img className={classes.logo} src={Logo} alt="peaksoft" />
               {items.map((item) => (
                  <NavLink to={item.route} key={item.title}>
                     <ListItem button key={item} sx={{ p: 1.5 }}>
                        <ListItemIcon>
                           <img src={item.icon} alt="hello" />
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                     </ListItem>
                  </NavLink>
               ))}
            </List>
         </Box>
      </Box>
   )
}
