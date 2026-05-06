import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Container from '../components/Container/Container'
import databaseService from '../auth/config'
import AddtocartBtn from '../components/AddtocartBtn'
import { useCart } from '../context/CartContext'

function ProductPage() {
    const [quantity, setQuantity] = useState(0)
    const [cartQuantity, setCartQuantity] = useState(quantity > 0 ? quantity : 1)
    const {id} = useParams()
    const [productDetails, setProductDetails] = useState({})
    const imageUrlFromProduct = productDetails ? productDetails.productImage : ""
    const imageUrl = imageUrlFromProduct ? databaseService.showImage(imageUrlFromProduct) : null;
    console.log(imageUrl);
    const {addToCartFn, removeFromCart, cartItems} = useCart()

    console.log(cartQuantity);
    // console.log(quantity)
    

const fetchProduct = async () => {
    try {
        const response = await databaseService.showProduct(id)
        setProductDetails(response)
        
    } catch (error) {
        console.log(error);
        
    }
}

    useEffect(() => {
if(id){
    fetchProduct()
}


    },[id])
console.log(productDetails)
    
  return (
    <>
    <Container>
        <div className='flex flex-col md:flex-row  lg:flex-row gap-4 items-start  min-h-screen   mt-5 w-full bg-white '>
            <div className='lg:w-1/2 md:w-1/2  w-sm p-4 shadow-md'>
                <img src={imageUrl} alt=""  className='object-cover group-hover:scale-105 '/>
            </div>
            <div className='flex flex-col items-start uppercase md:items-start lg:items-start gap-2 md:w-1/3  p-4 w-full lg:w-1/2'>

                
                <h1 className='lg:text-2xl md:text-xl text-sm font-semibold'>{productDetails.productName}</h1>
                <h1 className='lg:text-xl md:text-xl text-sm font-medium text-gray-700'>{`$${productDetails.price}`}</h1>
                <div className='flex flex-col items-start '>
                <h1 className='lg:text-xl md:text-xl text-sm font-semibold  '>Product Details</h1>
                <p className='text-xs lg:text-xs  '>{productDetails.productDescription}</p>
                </div>
                
                <div className='flex items-center border '>
                    <div className='flex items-center'>
                    <button className=' w-7 h-7 ' onClick={() =>
                    { if(cartQuantity <= 0){
                        setCartQuantity(0)
                    } else{
setCartQuantity(prev => prev-1)}
                    }
                        
                        }>-</button>
                <input type="text" value={cartQuantity}   className='pl-2 w-7 h-7 '/>
                <button className=' w-7 h-7 ' onClick={() => setCartQuantity(prev => prev + 1)}>+</button>
</div>
                </div>
                <div className='mt-5 '>
                <AddtocartBtn onClickFn={() => addToCartFn(productDetails.$id ,productDetails.productName, productDetails.price, cartQuantity,imageUrl)}/>
                </div>
                
            </div>
        </div>
    </Container>
    </>
  )
}

export default ProductPage