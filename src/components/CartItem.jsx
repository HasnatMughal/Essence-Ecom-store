import React from 'react'

function CartItem({id,productName, price, quantity, productImage, removeFn}) {
  return (
    <>
    <div className='w-7xl  h-26   flex justify-between items-center p-4 rounded shadow-md gap-4 bg-white'>
        <div className='flex justify-between items-center gap-4'>
            <div className='w-20 rounded-2xl'>
            <img src={productImage} alt="" className='rounded-2xl' />
            </div>
            <div className='flex items-center flex-col'>
                <h2 className='text-xs'>Product Name</h2>
            <h2 className='text-xl'>{productName}</h2>
            </div>
        </div>
        <div className='flex items-center flex-col '>
            <h2 className='text-xs'>Quantity</h2>
            <h2 className='text-xl'>{quantity}</h2>
        </div>
        <div className='flex justify-between items-center gap-4'>
            <div className='flex flex-col items-center'>
                <h2 className="text-xs">Price</h2>
            <h2 className='text-2xl text-gray-500'>
                {`$${price}`}
            </h2>
            </div>
            <button className='border p-2 ' onClick={removeFn} >X</button>
        </div>
    </div>
    </>
  )
}

export default CartItem