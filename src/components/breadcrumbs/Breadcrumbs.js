import React from 'react'
import {
   Breadcrumbs as MuiBreadcrumbs,
   Link as MuiLink,
   styled,
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
   const { pathname } = useLocation()

   const pathTranslate = {
      groups: 'Группы',
      courses: 'Курсы',
      'my-courses': 'Мои курсы',
   }

   const [role, ...paths] = pathname.split('/').filter((x) => x)
   const pathnames = paths.map((path) => ({
      path,
      name: pathTranslate[path] || path, // path - route/:id
   }))

   return (
      <MuiBreadcrumbs sx={{ mx: '1%', p: 2, pb: 1 }}>
         {pathnames.map(({ path, name }, index) => {
            const routeTo = `/${role}/${paths.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1

            return (
               <StyledMuiLink
                  color={isLast ? '#000000' : '#747D74'}
                  component={Link}
                  to={routeTo}
                  key={path}
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
