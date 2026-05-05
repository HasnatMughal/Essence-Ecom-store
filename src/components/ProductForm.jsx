import React, { useState } from 'react'
import databaseService from '../auth/config'
import Input from './Input'
import { data } from 'react-router'
import { ID } from 'appwrite'
function ProductForm( ) {
    const [productname, setProductname] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDesc] = useState('')
    const [ stock, setStock] = useState(0)
    const [category, setCategory] = useState('')
    const [imageFile, setImageFile] = useState(null)
    const [inStock, setInStock] = useState(false)
    // console.log(category)
   async function handleSubmit(){
        try {
            
           if(imageFile){
            const file = await databaseService.imageUpload(imageFile)
            if(file){
                const prdoduct = await databaseService.createProduct(ID.unique(),{productName : productname, price : price,stock: stock,productDescription : description,  productImage : file.$id,category: category})
            } else {
                return
            }
           }
        } catch (error) {
            console.log("Error upoading a product in productform", error)
        }
    }
  return (
    <>
    <h1 className='text-3xl mb-4'>Upload a product</h1>
    <form action="" className='flex w-full  flex-col gap-4  items-center' onSubmit={(e) => {
e.preventDefault()
        handleSubmit()}}>
            <div className='w-full'>
            <div className='flex flex-col '>
        <label htmlFor="productName">Enter the product name</label>
    <Input type="text" value= {productname} onChangeFn={(e) => setProductname(e.target.value)} />
    </div>
    <div className='flex flex-col '>
        <label htmlFor="price">Enter the product price</label>
    <Input type="text" value= {price}  onChangeFn={(e) => setPrice(e.target.value)} />
    </div>
    <div className='flex flex-col '>
        <label htmlFor="desc">Enter the product description</label>
    <textarea type="text" value={description} className='lg:w-96 h-48 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'   onChange={(e) => setDesc(e.target.value)} />
    </div>
    <div className='flex flex-col '>
    <label htmlFor="productStock">Enter the stock</label>
    <Input type="text" value={stock} placeholder={"Enter product stock"} onChangeFn={(e) => setStock(e.target.value)} />
    </div>
    <div className='flex flex-col mt-2 '>
    <select name="category" id="" className='h-12 bg-black text-white w-72 p-2'  value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select a category</option>
        <option value="t-shirts">T-Shirts</option>
        <option value="shirts">Shirts</option>
        <option value="pants">Pants</option>
        <option value="winter">Winter</option>
    </select>
    </div>
        
    </div>
        <div className='self-start flex flex-col'>
    <Input type="file"   onChangeFn={(e) => setImageFile(e.target.files[0])}/>
    <button className='w-96  border bg-emerald-600 hover:bg-emerald-700 text-white text-sm uppercase mt-5  h-12' type='submit'>Upload</button>
</div>
    </form>
    </>
  )
}

export default ProductForm