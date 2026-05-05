import React from 'react'
import databaseService from '../auth/config'
import { Link } from 'react-router'

function YourProduct({id,productName, price, productImage, removeFn}) {
    const imageUrl =  databaseService.showImage(productImage)
  return (
     <>
    <div className='w-7xl  h-26   flex justify-between items-center p-4 rounded shadow-md gap-4 bg-white'>
        <div className='flex justify-between items-center gap-4'>
            <div className='w-20 rounded-2xl'>
            <img src={imageUrl} alt="" className='rounded-2xl' />
            </div>
            <div className='flex items-center flex-col'>
                <h2 className='text-xs'>Product Name</h2>
            <h2 className='text-xl'>{productName}</h2>
            </div>
        </div>
        <div className='flex justify-between items-center gap-4'>
            <div className='flex flex-col items-center'>
                <h2 className="text-xs">Price</h2>
            <h2 className='text-2xl text-gray-500'>
                {`$${price}`}
            </h2>
            </div>
            <div className='flex items-center gap-2'>
                <Link to={`/editProduct/${id}`}>
                <button className='w-14 p-2 bg-yellow-700 text-white'>Edit</button>
                </Link>
            <button className='border p-2 bg-red-700 w-10 text-white ' onClick={removeFn} >X</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default YourProduct