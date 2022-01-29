import React from 'react'
import { Box } from '@mui/system'

import FormControlLabel from '@mui/material/FormControlLabel'
import StyledSwitch from './StyledSwitch'

export default function CustomizedSwitch({
   quantity,
   checked,
   onChangeHandler,
}) {
   const backgroundStyle = {
      backgroundColor: checked
         ? 'rgba(54, 172, 12, 0.1)'
         : 'rgba(201, 30, 30, 0.1)',
      transition: 'all 0.5s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: checked ? '#36AC0C' : '#C91E1E',
      px: 4,
   }

   return (
      <Box sx={{ ...backgroundStyle }}>
         <span>{quantity || 4} answers</span>
         <FormControlLabel
            labelPlacement="start"
            label={checked ? 'Ответы принимаютcя' : 'Ответы не принимаются'}
            onChange={onChangeHandler}
            control={<StyledSwitch sx={{ m: 2 }} checked={checked} />}
         />
      </Box>
   )
}
