import React from 'react'
import { Link, NavLink } from 'react-router'
function CategoryCard({imgUrl, name, urlPath}) {
  return (
    <>
    <NavLink to={`/shop/${urlPath}`}>
  <div className='relative overflow-hidden rounded-lg cursor-pointer group'>
  <img src={imgUrl} className='w-full lg:h-72 h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300' />
  <div className='absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-3'>
    <h2 className='text-gray-800  text-center font-medium tracking-wide uppercase'>{name}</h2>
  </div>
</div>
        

    
    </NavLink>
    </>
  )
}

export default CategoryCard