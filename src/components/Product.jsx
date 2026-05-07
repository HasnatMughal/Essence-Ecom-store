import React, { useState } from 'react'
import AddtocartBtn from "./AddtocartBtn"
import databaseService from "../auth/config"
import { useCart } from '../context/CartContext'
import { Link } from 'react-router'

function Product({id, imgUrl,productName, price, }) {
  
  const imageUrl = databaseService.showImage(imgUrl)
  const {addToCartFn, removeFromCart, cartItems} = useCart()
  const [cartQuantity, setCartQuantity] = useState(1)

  // console.log("cart items on shop",cartItems);
  
  // console.log(imageUrl);
  
  return( 
    <div className='w-full  p-4 shadow-md bg-white flex flex-col justify-between'>
    <Link to={`/product/${id}`}>
      <div>
      
        <div className='w-full '>
            <img src={imageUrl} className='w-full ' alt="" />
        </div>
        <div className='p-4 w-full text-sm uppercase text-center '>
        <h1 className=' font-semibold'>{productName}</h1>
        <p>{`${price}$`}</p>
        </div>
        </div>
        </Link>
        <AddtocartBtn onClickFn={() => addToCartFn(
         id ,productName,price, cartQuantity,imageUrl
        )} />
        
        
        

    </div>
  )
}

export default Product