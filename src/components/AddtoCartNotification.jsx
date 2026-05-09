import React from 'react'

function AddtoCartNotification() {
  return (
    <div className='w-64 h-16 flex flex-col items-center justify-center  relative  text-center p-2 right-5'>
        <h2>Item added to cart</h2>
        <div className='h-1 bg-green-500 progress-bar '></div>
    </div>
  )
}

export default AddtoCartNotification