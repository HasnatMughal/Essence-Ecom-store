import React, { useState } from 'react'
import Logo from './Logo'
import authentication from "../auth/auth"
import {useNavigate,Link} from "react-router"
import Input from './Input'
import { useUser } from '../context/UserContext'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errormsg, setErrorMsg] = useState('')
  const navigate = useNavigate()
  const {setUser} = useUser() 
  
  

  const submitHandler = async ({email, password}) => {
    
    try {
     const session = await authentication.login({email, password});

     if(session){
      const loggedInUser = await authentication.checkUser()
      setUser(loggedInUser)
      navigate("/")
     } 
    } catch (error) {
      setErrorMsg(error.message)
      
    }

  }

  return (
    <div className='min-w-102 min-h-2/3 flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-md'>
    <Logo />
    <h1 className='text-2xl'>Login</h1>
    <h1>New here? <Link className="text-blue-500" to="/signup" >Register Now</Link> </h1>

    <form action="" className='flex flex-col w-full gap-2' onSubmit={(e) => {
      e.preventDefault()
      submitHandler({email, password})
    }}>
      
    <label htmlFor="email">
      Enter your email
    </label>
    <Input type="email" value={email}  onChangeFn={(e) => setEmail(e.target.value)} />
    <label htmlFor="password">
    Enter your password
    </label>
    <Input type="password"  onChangeFn={(e) => setPassword(e.target.value)}/>
    {errormsg && <p className='text-red-600 text-sm'>{errormsg}</p>}
    <button className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 mt-4 ' type='submit'>Login</button>
    </form>
    </div>
  )
}

export default Login