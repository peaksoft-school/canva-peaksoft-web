import React from 'react'
import { Link as MuiLink, styled } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs/Breadcrumbs'
import { Link, useLocation } from 'react-router-dom'

export default function CustomBreadcrumbs() {
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

   const renderLinkItem = (i) => {
      return {
         to: `/${role}/${paths.slice(0, i + 1).join('/')}`,
         color: i === pathnames.length - 1 ? '#000000' : '#747D74',
      }
   }

   return (
      <StyledBreadCrumbs>
         {pathnames.map(({ path, name }, i) => (
            <MuiLink {...renderLinkItem(i)} component={Link} key={path}>
               {name}
            </MuiLink>
         ))}
      </StyledBreadCrumbs>
   )
}

const StyledBreadCrumbs = styled(Breadcrumbs)(() => ({
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
