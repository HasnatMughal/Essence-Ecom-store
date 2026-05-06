import React from 'react'
import { useUser } from '../context/UserContext'
import { Navigate } from 'react-router'
import conf from '../../conf/conf'

function IsAdmin({children}) {
    const {user} = useUser()
    const isAdmin = user?.email === conf.adminEmail
  
  
  return ( isAdmin ? children :
    <Navigate to="/" />
  )
}

export default IsAdmin