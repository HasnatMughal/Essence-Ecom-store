import React from 'react'
import authentication from '../auth/auth'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router'

function LogoutBtn() {
    const {user,setUser} = useUser()
    const navigate = useNavigate()

    async function logoutFn(){
        try {
          const logouting =  await authentication.logout()
            
                setUser(null)
                navigate("/")
            
        } catch (error) {
            
        }
    }
  return (
    <button onClick={() => logoutFn()} className='w-64 min-w-32 bg-emerald-600 h-12 text-white'>Logout</button>
  )
}

export default LogoutBtn