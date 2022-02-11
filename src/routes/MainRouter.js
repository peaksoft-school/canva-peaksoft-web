import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Loading from '../components/UI/Loading'
import { ROLES } from '../utils/constants/roles'
import PrivateRoute from './PrivateRoute'

const LoginPage = React.lazy(() => import('../containers/LoginPage'))
const AdminPage = React.lazy(() => import('../layout/AdminPage'))
const InstructorPage = React.lazy(() => import('../layout/InstructorPage'))
// import LoginPage from '../containers/LoginPage'
// import AdminPage from '../layout/AdminPage'
// import InstructorPage from '../layout/InstructorPage'

export default function MainRouter() {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="login" />} />
         <Route
            path="login"
            element={
               <React.Suspense fallback={<Loading />}>
                  <LoginPage />
               </React.Suspense>
            }
         />
         <Route
            path="admin/*"
            element={
               <React.Suspense fallback={<Loading />}>
                  <PrivateRoute
                     Component={<AdminPage />}
                     roles={[ROLES.admin]}
                  />
               </React.Suspense>
            }
         />
         <Route
            path="instructor/*"
            element={
               <React.Suspense fallback={<Loading />}>
                  <PrivateRoute
                     Component={<InstructorPage />}
                     roles={[ROLES.instructor]}
                  />
               </React.Suspense>
            }
         />
      </Routes>
   )
}
