import React from 'react'

function AddtocartBtn({type, onClickFn}) {
  return (
    <button type={type} onClick={onClickFn}  className='w-full md:min-w-44 min-w-30 uppercase md:text-sm bg-emerald-600 hover:bg-emerald-700 md:h-12 h-8 text-xs text-white '>Add to Cart</button>
  )
}

export default AddtocartBtn