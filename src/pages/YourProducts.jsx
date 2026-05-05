import React, { useEffect, useState } from 'react'
import databaseService from '../auth/config'
import Container from '../components/Container/Container'
import YourProduct from '../components/YourProduct'

function YourProducts() {

    const [products, setProducts] = useState([])

    async function getAllProducts(){
        try {
          const fetchProducts =  await databaseService.listAllProducts()
          if(fetchProducts){
            // console.log(fetchProducts)
            setProducts(fetchProducts.documents)
            console.log(products);
            
          }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getAllProducts()
    },[])

    async function removeProduct(id){
        try {
            const deletedProduct = await databaseService.deleteProduct(id)
            if(deletedProduct){
                getAllProducts()
            }
        } catch (error) {
            console.log("error while removing product", error)
        }
    }
  return (
    <div>
        <Container>
                <h1 className='text-center text-3xl mt-5 font-semibold'>Your Products</h1>
        <div className='flex flex-col w-full item-center gap-2 mt-5'>
            {products.length > 0 ? products.map((product) => {
              return(
                <YourProduct productName={product.productName} price={product.price} productImage={product.productImage} removeFn={() => removeProduct(product.$id)} id={product.$id} />
              )
            }) : 
            <h1 className='text-center text-xl'>You have no products</h1>}
        </div>
        </Container>
    </div>
  )
}

export default YourProducts