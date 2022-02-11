import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ Component, roles }) {
   const { isAuthorized, loading, user } = useSelector((state) => state.auth)

   const isUserHasRole = user && roles.includes(user.role)

   // need to create loading spinner
   if (loading) return <p>hehe</p>
   if (!isAuthorized) return <Navigate to="/login" />

   // need to create access denied page
   if (isAuthorized && !isUserHasRole) return <Navigate to="/login" />
   return Component
}
