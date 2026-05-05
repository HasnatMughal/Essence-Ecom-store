import React, { useState } from 'react'
import Logo from './Logo'
import { NavLink, Link } from 'react-router'
import {FaShoppingCart, FaTimes, FaUser, FaBars} from "react-icons/fa"
import { useUser } from '../context/UserContext'


function Header() {
   const {user} = useUser()
   const isAdmin = user?.email === import.meta.env.VITE_ADMIN_EMAIL 
   const [isOpen, setIsOpen] = useState(false)
   

  return (
     <nav className='w-full mt-4 p-4 h-18  bg-white border-b flex items-center justify-between shadow-md mb-5'>
        <div className=''><Logo /></div>
         <button className='md:hidden relative' onClick={
            () => {
               setIsOpen(!isOpen)
               
            }

         }>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} /> }
         </button>
        <div className='md:flex items-center uppercase text-sm justify-between gap-2 hidden    md:gap-8'>
        
         
            <NavLink className="hover:border-b" to="/" >Home</NavLink>
            <NavLink className="hover:border-b" to="/shop" >Shop</NavLink>
            <NavLink className="hover:border-b" to="/about" >About</NavLink>
            <NavLink className="hover:border-b" to="/contact" >Contact</NavLink>
        </div>
        <div >
        {
         isOpen && (
            <div className='flex flex-col items-start absolute right-1/5 bg-white min-w-32  mt-4  p-4  uppercase text-sm  gap-3 md:hidden ease-in-out transition-all   md:gap-8'>
        
         
            <NavLink className="hover:border-b" to="/" >Home</NavLink>
            <NavLink className="hover:border-b" to="/shop" >Shop</NavLink>
            <NavLink className="hover:border-b" to="/about" >About</NavLink>
            <NavLink className="hover:border-b" to="/contact" >Contact</NavLink>
        </div>
         )
        }
        </div>
        <div className='flex items-center justify-between text-sm uppercase gap-8'>
        <NavLink to="/cart"><FaShoppingCart /></NavLink>
        {user === null || !user ?<> <Link to="/login">Login</Link>  <Link to="/signup" className='flex items-center justify-center shadow-md min-w-32 w-full text-white text-center bg-emerald-600 h-12'>Register Now</Link></> : <Link to={`/user/${user.$id}`}><FaUser /></Link>}
        {/* {
         isAdmin ? <><Link to="/admin/uploadProduct">Upload a Product</Link></> : ""
        } */}


        
        
        </div>
     </nav>
  )
}

export default Header