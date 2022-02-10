import React from 'react'
import { Skeleton as MuiSkeleton, Stack } from '@mui/material'

export default function Skeleton({ ...other }) {
   return (
      <Stack spacing={1} m="10px" height="250px" {...other}>
         <MuiSkeleton variant="rectangular" width={250} height={140} />
         <MuiSkeleton variant="text" width="60%" height="auto" />
         <MuiSkeleton animation="wave" height={10} sx={{ mb: 1 }} />
         <MuiSkeleton animation="wave" height={10} />
         <MuiSkeleton animation="wave" height={10} width="80%" />
      </Stack>
   )
}
