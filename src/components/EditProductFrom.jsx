import React, { useEffect } from 'react'
import databaseService from '../auth/config'
import { data, useParams } from 'react-router'
import { useState } from 'react'
import Input from './Input'

function EditProductFrom({}) {
    const {id} = useParams()
 const [productname, setProductname] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDesc] = useState('')
    const [ stock, setStock] = useState(0)
    const [category, setCategory] = useState('')
    const [imageFile, setImageFile] = useState(null)
    const [inStock, setInStock] = useState(false)
    console.log(category)
   async function getProductData(){
        try {
            const fetchProduct = await databaseService.showProduct(id)
            if(fetchProduct){
                console.log(fetchProduct);
                setProductname(fetchProduct.productName)
                setPrice(fetchProduct.price)
                setDesc(fetchProduct.productDescription)
                setStock(fetchProduct.stock)
                setCategory(fetchProduct.category)

                
            }
           
        } catch (error) {
            console.log("Error upoading a product in productform", error)
        }
    }
    async function handleSubmit(){
        try {
            const file = await databaseService.imageUpload(imageFile)
            if(file){
                const updatedProduct = await databaseService.updateProduct(id, {productName : productname, price : price,stock: stock,productDescription : description,  productImage : file.$id,category: category})
            }
            
        } catch (error) {
            console.log("Error while editing product details", error)
        }
    }
    useEffect(() => {
        getProductData()
    },[])
  return (
    <>
    <h1 className='text-3xl'>Upload a product</h1>
    <form action="" className='flex  items-center' onSubmit={(e) => {
e.preventDefault()
        handleSubmit()}}>
            <div className='w-1/2 '>
        <label htmlFor="productName">Enter the product name</label>
    <Input type="text" value= {productname} placeholder={"Enter product name"} onChangeFn={(e) => setProductname(e.target.value)} />
        <label htmlFor="price">Enter the product price</label>
    <Input type="text" value= {price} placeholder={"Enter product price"} onChangeFn={(e) => setPrice(e.target.value)} />
        <label htmlFor="desc">Enter the product description</label>
    <Input type="text" value={description} placeholder={"Enter product description"} onChangeFn={(e) => setDesc(e.target.value)} />
    <label htmlFor="productStock">Enter the stock</label>
    <Input type="text" value={stock} placeholder={"Enter product stock"} onChangeFn={(e) => setStock(e.target.value)} />
        <label htmlFor="category">Enter the product category</label>
    <select name="category" id="" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value=""></option>
        <option value="t-shirts">T-Shirts</option>
        <option value="shirts">Shirts</option>
        <option value="pants">Pants</option>
        <option value="winter">Winter</option>
    </select>
        
    </div>
        <div className='self-start ml-4 flex flex-col'>
    <Input type="file" placeholder={"Choose a product image to upload"}  onChangeFn={(e) => setImageFile(e.target.files[0])}/>
    <button className='w-1/2 border bg-lime-500 mt-5 min-w-xl h-12' type='submit'>Upload</button>
</div>
    </form>
    </>
  )
}


export default EditProductFrom