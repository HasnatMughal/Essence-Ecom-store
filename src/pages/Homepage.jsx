import React from 'react'
import { useUser } from '../context/UserContext'
import FeaturedProducts from '../components/FeaturedProducts'
import oversized from "../assets/oversized-tee.png"
import Shirt from "../assets/casual-denim-shirt.png"
import CategoryCard from '../components/CategoryCard'
import Pant from "../assets/slim-fit-jeans.png"
import winter from "../assets/wool-coat.png"
import shirt from "../assets/09-silk-dress-shirt.webp"
import pant from "../assets/14-cargo-pants.webp"
import hoodie from "../assets/product-hoodie.png"
import Container from '../components/Container/Container'
import { useNavigate } from 'react-router'

function Homepage() {
    const {user, setUser} = useUser()
    const navigate = useNavigate()
    
  return (
    <Container>
    <div className='mt-16 flex flex-col items-center w-full min-h-screen p-4 gap-16 '>
        <div className='flex md:text-center md:min-h-5xl md:w-full  md:flex  flex-col items-center w-3/4 gap-3'>
        <h1 className='md:text-3xl sm:text-2xl text-xl w-full '>TIMELESS CLOTHING FOR MODERN LIVING</h1>
        <h2 className='md:text-xl sm:text-lg md:w-full text-xs w-full'>Evaluate your wardrobe with our premium essentaials.</h2>
        <button className='bg-emerald-600 md:w-32 md:h-12 rounded-xs hover:bg-emerald-700 w-18 h-8 text-xs md:text-lg  text-white' onClick={() => navigate("/shop")}>Shop now</button>
        </div>
        <section className='p-16 min-h-screen flex items-center flex-col bg-white w-full'>
            <h1 className="md:text-3xl text-xl font-semibold mb-6">Featured Products</h1>
        <div className='grid  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-4 px-8'>
        {/* {TODO list all featured products} */}
        <FeaturedProducts productName={"Tee shirt" } imgUrl={oversized} price={"14$"} />
        <FeaturedProducts productName={"Full shirt" } imgUrl={shirt} price={"20$"} />
        <FeaturedProducts productName={"Cargo pant" } imgUrl={pant} price={"18$"} />
        <FeaturedProducts productName={"Black hoodie" } imgUrl={hoodie} price={"22$"} />
        </div>
        <div className='flex flex-col items-center gap-4 mt-16'>
            <h1 className="text-3xl font-semibold">Categories</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4  gap-4'>
            <CategoryCard name={"T-shirts"} imgUrl={oversized} urlPath={"t-shirts"}/>
            <CategoryCard name={"Shirts"} imgUrl={Shirt} urlPath={"shirts"}/>
            <CategoryCard name={"Pants"} imgUrl={Pant} urlPath={"pants"}/>
            <CategoryCard name={"Winter"} imgUrl={winter} urlPath={"winter"}/>
            </div>
        </div>
        </section>
    </div>
    </Container>
  )
}

export default Homepage