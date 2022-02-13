import React from 'react'
import { NavLink } from 'react-router-dom'
import {
   Box,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   styled,
} from '@mui/material'
import classes from '../../assets/styles/AdminPage.module.css'
import Logo from '../../assets/images/PeaksoftLogo.png'

export default function Sidebar({ items }) {
   // const activeStyles = {
   //    backgroundColor: 'red',
   // }

   return (
      <Box display="flex">
         <Box
            sx={{ width: 250 }}
            className={classes.sidebar}
            textAlign="center"
         >
            <SidebarList>
               <img className={classes.logo} src={Logo} alt="peaksoft" />
               {items.map((item) => (
                  <NavLink
                     end
                     to={item.route}
                     key={item.title}
                     className={({ isActive }) =>
                        isActive ? 'active' : 'notActive'
                     }
                  >
                     <ListItem button key={item} sx={{ p: 1.5, pl: 4 }}>
                        <div className="selectedLink" />
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                     </ListItem>
                  </NavLink>
               ))}
            </SidebarList>
         </Box>
      </Box>
   )
}

const SidebarList = styled(List)(() => ({
   '& .MuiListItem-root': {
      width: '93%',
      borderRadius: '0 10px 10px 0',
      color: '#292929',
      '& .MuiTypography-root': {
         fontWeight: '600',
         fontSize: '16px',
         lineHeight: '22px',
      },

      '& path': {
         fill: '#292929',
      },
   },
   '& a': {
      textDecoration: 'none',
   },

   '.selectedLink': {
      display: 'none',
      position: 'absolute',
      background: '#1F6ED4',
      left: 0,
      width: '8px',
      height: '100%',
   },

   '& .active': {
      '& .MuiListItem-root': {
         color: '#1F6ED4',
         background: 'rgb(221,233,249)',
      },
      '& .selectedLink': {
         display: 'block',
      },
      '& path': {
         fill: '#1F6ED4',
      },
   },
}))
