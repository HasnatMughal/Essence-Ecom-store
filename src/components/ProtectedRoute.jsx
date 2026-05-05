import React, { useEffect } from 'react'
import { useUser } from '../context/UserContext'
import databaseService from '../auth/config'
import authentication from '../auth/auth'
import { Navigate, useNavigate } from 'react-router'

function ProtectedRoute({children}) {
    const navigate = useNavigate()
    const {user, setUser, loading} = useUser()

   
if(loading){
    return <p className='text-xl'>Loading...</p>
   } 
   if(!user){
    return <Navigate to="/login"/>
   }
   
    
   
  
  return (
    children
  )
}

export default ProtectedRoute