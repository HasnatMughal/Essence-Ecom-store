import React, { useState } from 'react'
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'
import Container from '../components/Container/Container';
import {Link} from "react-router"

// Cart.jsx
function Cart() {
  const { removeFromCart, cartItems } = useCart()
  const total = cartItems.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)

  return (
    <Container>
      <div className='min-h-screen w-full flex flex-col mt-8 px-2 md:px-0'>
        <h1 className='text-center text-2xl md:text-3xl font-semibold mb-8'>Cart</h1>

        {cartItems.length > 0 ? (
          <div className='flex flex-col xl:flex-row gap-6 items-start'>

            {/* Cart Items */}
            <div className='flex flex-col w-full xl:flex-1 gap-3'>
              {cartItems.map((item) => (
                <CartItem
                  key={item.productId}
                  productName={item.productName}
                  price={item.price}
                  quantity={item.quantity}
                  productImage={item.productImage}
                  removeFn={() => removeFromCart(item.productId)}
                />
              ))}
            </div>

            {/* Order Summary */}
            <div className='w-full xl:w-80 shrink-0 bg-white border border-gray-200 rounded-xl p-6 xl:sticky xl:top-20'>
              <h2 className='text-lg font-semibold mb-4 text-gray-800'>Order Summary</h2>
              <div className='flex flex-col gap-3 text-sm text-gray-500'>
                <div className='flex justify-between'>
                  <span>Items ({cartItems.length})</span>
                  <span>${total}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Shipping</span>
                  <span className='text-green-600'>Free</span>
                </div>
              </div>
              <div className='border-t border-gray-100 mt-4 pt-4 flex justify-between font-semibold text-gray-800'>
                <span>Total</span>
                <span>${total}</span>
              </div>
              <button className='w-full bg-gray-900 text-white py-3 rounded-lg mt-6 hover:bg-gray-700 transition-colors'>
                Checkout
              </button>
            </div>

          </div>
        ) : (
          <div className='flex flex-col items-center justify-center min-h-96 gap-4'>
            <p className='text-xl text-gray-400'>Your cart is empty</p>
            <Link to="/shop" className='bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700'>
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Cart