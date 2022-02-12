import React from 'react'
import {
   Breadcrumbs as MuiBreadcrumbs,
   Link as MuiLink,
   styled,
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
   const { pathname } = useLocation()
   const pathnames = pathname.split('/').filter((x) => x)

   pathnames.shift() // remove it and you will see user role
   console.log(pathnames)
   return (
      <MuiBreadcrumbs sx={{ mx: '1%', p: 2, pb: 1 }}>
         {pathnames.map((name, index) => {
            const routeTo = `/admin/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1

            return (
               <StyledMuiLink
                  color={isLast ? '#000000' : '#747D74'}
                  component={Link}
                  to={routeTo}
                  key={name}
               >
                  {name}
               </StyledMuiLink>
            )
         })}
      </MuiBreadcrumbs>
   )
}

const StyledMuiLink = styled(MuiLink)(() => ({
   '&': {
      textDecoration: 'none',
      fontSize: '14px',
   },
}))
