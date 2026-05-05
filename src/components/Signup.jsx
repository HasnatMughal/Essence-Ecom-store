import React, { useState } from 'react'
import authentication from '../auth/auth'
import { Link, useNavigate } from 'react-router'
import Input from './Input'
import Logo from "./Logo"
import { useUser } from '../context/UserContext'

function Signup() {

    const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [username, setUsername] = useState('')
      const navigate = useNavigate()

      const {setUser} = useUser()

      const submitHandler = async({name, email,password}) => {
        try {
             const userAlreadyExists = await authentication.checkUser()
             if(userAlreadyExists){
                navigate("/login")
             } else {
                const userCreated = await authentication.createAccount({email, password, name})
           if(userCreated){
               setUser(userCreated)
            navigate("/")
           }
             }
           
        } catch (error) {
            console.log('Error in creating user in Sign up component', error)
        }
      }
  return (
     <div className='w-96 flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-md'>
        <Logo />
        <h1 className='text-2xl'>SignUp</h1>
        <h1>Already have an account? <Link  to="/login" className='text-blue-500'>Login</Link> instead</h1>
        <form className='flex flex-col items-center w-full gap-2' action="" onSubmit={(e) => {
          e.preventDefault()
          submitHandler({name: username, email, password})
        }}>
        <label htmlFor="username">
          Username
        </label>
        <Input type="text" value={username} onChangeFn={(e) => setUsername(e.target.value)} />
        <label htmlFor="email">
          Email
        </label>
        <Input type="email" value={email} onChangeFn={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">
        Password
        </label>
        <Input type="password" value={password} onChangeFn={(e) => setPassword(e.target.value)}/>
        <button className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 ' type='submit'>Sign up</button>
        </form>
        </div>
  )
}

export default Signup