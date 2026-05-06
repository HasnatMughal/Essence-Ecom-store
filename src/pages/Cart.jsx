import React, { useState } from 'react'
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'
import Container from '../components/Container/Container';

function Cart() {
  const {addToCartFn, removeFromCart, cartItems} = useCart()
  
    
  return (
    <Container>
    <div className='min-h-screen w-full flex flex-col mt-5 relative'>
        <h1 className='text-center text-3xl font-semibold'>Cart</h1>
        <div className='flex flex-col w-full item-center gap-2 mt-5'>
            {cartItems.length > 0 ? cartItems.map((item) => {
              return(
                <CartItem productName={item.productName} price={item.price} quantity={item.quantity } productImage={item.productImage} removeFn={() => removeFromCart(item.productId)} />
              )
            }) : 
            <h1 className='text-center text-xl'>Cart is empty</h1>}
        </div>
        <div className='flex justify-end mt-4 p-4 border-t min-w-6xl'>
  <div className='flex flex-col items-end gap-2'>
    <h2 className='text-xl'>{`Total: $${cartItems.reduce((sum,item) => sum + Number(item.price) * item.quantity, 0)}`} </h2>
     <button className='bg-black text-white p-3 w-40 rounded'>Checkout</button>
  </div> 
  </div>

        
    </div>
    </Container>
  )
}

export default Cart