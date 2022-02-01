import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import { IconButton } from '@mui/material'
import { ReactComponent as CheckMark } from '../../../assets/icons/checkMark.svg'

export default function MySnackbar({ open, handleMessage, handleClose }) {
   return (
      <div>
         <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
            message={handleMessage}
            ContentProps={{
               sx: {
                  background: 'green',
               },
            }}
            action={[
               <IconButton onClick={handleClose}>
                  <CheckMark />
               </IconButton>,
            ]}
         />
      </div>
   )
}
