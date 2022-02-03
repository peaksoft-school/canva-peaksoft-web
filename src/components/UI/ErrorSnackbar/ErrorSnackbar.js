import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import { IconButton } from '@mui/material'
import styled from 'styled-components'
import { ReactComponent as Errorsvg } from '../../../assets/icons/error.svg'

const StyledSnackbar = styled(Snackbar)`
   .MuiPaper-root {
      min-width: 180px;
   }
`

export default function ErrorSnackbar({ open, handleClose, contentMessage }) {
   return (
      <StyledSnackbar
         anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
         open={open}
         autoHideDuration={1000}
         onClose={handleClose}
         message={contentMessage}
         ContentProps={{
            sx: {
               background: '#C91E1E',
            },
         }}
         action={[
            <IconButton onClick={handleClose}>
               <Errorsvg />
            </IconButton>,
         ]}
      />
   )
}
