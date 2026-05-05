import React from 'react'
import { useUser } from '../context/UserContext'
import { Navigate } from 'react-router'

function IsAdmin({children}) {
    const {user} = useUser()
    const isAdmin = user?.email === import.meta.env.VITE_ADMIN_EMAIL
  // console.log(isAdmin);
  
  return ( isAdmin ? children :
    <Navigate to="/" />
  )
}

export default IsAdmin