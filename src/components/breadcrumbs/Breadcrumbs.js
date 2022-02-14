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

   const renderLinkItem = (i) => `/${role}/${paths.slice(0, i + 1).join('/')}`

   return (
      <StyledBreadCrumbs>
         {pathnames.map(({ path, name }, index) => {
            const routeTo = renderLinkItem(index)
            const isLast = index === pathnames.length - 1

            return (
               <MuiLink
                  color={isLast ? '#000000' : '#747D74'}
                  component={Link}
                  to={routeTo}
                  key={path}
               >
                  {name}
               </MuiLink>
            )
         })}
      </StyledBreadCrumbs>
   )
}

const StyledBreadCrumbs = styled(MuiBreadcrumbs)(() => ({
   '&': {
      margin: '0 1%',
      padding: '1rem',
      paddingBottom: '8px',
   },

   '& a': {
      textDecoration: 'none',
      fontSize: '14px',
   },
}))
