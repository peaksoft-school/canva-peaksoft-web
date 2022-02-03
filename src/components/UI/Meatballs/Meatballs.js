import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { IconButton } from '@mui/material'

const styles = {
   fontSize: '20px',
   fontWeight: 'bold',
   color: 'black',
   float: 'right',
}

const Meatballs = ({ onClick, align, sx, ...otherProps }) => {
   return (
      <IconButton
         disableRipple
         onClick={onClick}
         sx={{ ...styles, ...sx }}
         {...otherProps}
      >
         <MoreHorizIcon />
      </IconButton>
   )
}

export default Meatballs
