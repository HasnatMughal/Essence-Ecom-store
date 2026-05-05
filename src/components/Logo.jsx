import React from 'react'
import { Link } from 'react-router'

function Logo() {
  return (
    <>
    <Link to="/">
    <h1 className='text-xl md:text-2xl font-semibold p-4'>ESSENCE</h1>
    </Link>
    </>
  )
}

export default Logo