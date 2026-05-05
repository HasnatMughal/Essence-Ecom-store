import { useState } from 'react'
import Signup from './components/Signup'
import Homepage from './pages/Homepage'
import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <div className='flex flex-col items-center'>
    <Header />
    <main>
    <Outlet />
    </main>
    <Footer />
    </div>
    </>
  )
}

export default App
