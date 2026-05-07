import React from 'react'

// CartItem.jsx
function CartItem({productName, price, quantity, productImage, removeFn}) {
  return (
    <div className='w-full flex flex-col sm:flex-row justify-between items-center p-4 rounded-xl shadow-sm gap-4 bg-white border border-gray-100'>
      
      <div className='flex items-center gap-4 flex-1'>
        <div className='w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-gray-50'>
          <img src={productImage} alt="" className='w-full h-full object-cover' />
        </div>
        <div>
          <p className='text-xs text-gray-400 uppercase tracking-wide'>Product</p>
          <p className='text-base font-medium text-gray-800'>{productName}</p>
        </div>
      </div>

      <div className='flex items-center gap-8 sm:gap-12'>
        <div className='text-center'>
          <p className='text-xs text-gray-400 uppercase tracking-wide'>Qty</p>
          <p className='text-base font-medium'>{quantity}</p>
        </div>
        <div className='text-center'>
          <p className='text-xs text-gray-400 uppercase tracking-wide'>Price</p>
          <p className='text-base font-medium text-gray-700'>${price}</p>
        </div>
        <button onClick={removeFn} className='text-gray-400 hover:text-red-500 transition-colors text-lg'>✕</button>
      </div>

    </div>
  )
}

export default CartItem

