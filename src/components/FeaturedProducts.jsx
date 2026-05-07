import React from 'react'
import AddtocartBtn from './AddtocartBtn';

function FeaturedProducts({imgUrl, productName, price,  }) {
     
  return (
   <div className='min-w-36 md:min-w-48 lg:min-w-62 p-4 uppercase shadow-md bg-white flex flex-col justify-between'>
        <div className='w-full '>
            <img src={imgUrl} className='w-full ' alt="" />
        </div>
        <div className='p-4 w-full text-sm flex flex-col items-center  '>
        <h1 className='text-sm'>{productName}</h1>
        <p>{price}</p>
        <AddtocartBtn />
        </div>
        

    </div>
  )
}

export default FeaturedProducts