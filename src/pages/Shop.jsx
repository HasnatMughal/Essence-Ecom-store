import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import databaseService from "../auth/config";
import Product from "../components/Product";
import Container from "../components/Container/Container";
import { useNavigate } from "react-router";

function Shop() {
  const navigate = useNavigate()
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryVar, setCategoryVar] = useState(category);
  const [selectedCategories, setSelectedCategories ] = useState([])
 

  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = selectedCategories.length === 0 ? products : products.filter((product) => selectedCategories.includes(product.category))
  
  const fetchAllProducts = async () => {
    const result = await databaseService.listAllProducts();
    setProducts(result.documents);
  };



  const fetchCategoryProducts = async () => {
    try {

      const fetchedProducts = await databaseService.listProducts(categoryVar);
      if (fetchedProducts) {
        setProducts(fetchedProducts.documents);
      }
    } catch (error) {
      console.log(error);
    }
  };

 useEffect(() => {
  if(!categoryVar){
    fetchAllProducts()
  } else if(categoryVar){
    fetchCategoryProducts()
  }
 },[categoryVar])
   
  
  // getAllProducts()

  return (
    <>
      <Container>
        <h1 className="lg:text-3xl md:text-2xl text-xl text-center  p-2 mb-5 font-semibold">Shop All Products</h1>
        <div className="flex flex-col md:flex-row md:items-start lg:items-start  lg:flex-row  gap-4 items-center  lg:min-w-7xl   md:min-h-screen lg:min-h-screen min-h-0 w-full">
          <div className="flex flex-col  md:w-32 lg:w-64 shrink-0 self-start md:border-r lg:border-r border-gray-200 bg-white md:min-h-screen lg:min-h-screen">
  {/* <div className="p-4 border-b border-gray-200 md:block lg:block hidden">
    <h2 className="text-sm  font-semibold text-gray-800 uppercase tracking-wide">Filters</h2>
  </div> */}
  <button onClick={() => {
    setShowFilters(!showFilters)
  }} className="md:hidden lg:hidden block bg-black text-white min-w-48 min-h-12 sticky top-20 right-6 z-50  border px-4 py-2 text-sm mb-4">
    {!showFilters ? "Filters" : "X"}
  </button>
  <div className={`p-4 ${showFilters? 'block' : 'hidden'} mt-2 absolute md:block lg:block`}>
    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Category</h3>
    <div className="flex flex-col gap-3">
      {["t-shirts", "shirts", "pants", "winter"].map((cat) => (
        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
          <input 
            type="checkbox"
            className="w-4 h-4 accent-gray-800 cursor-pointer"
            onChange={() => {
              if(selectedCategories.includes(cat)){
                setSelectedCategories(selectedCategories.filter(c => c !== cat))
                navigate("/shop")
              } else {
                setSelectedCategories([...selectedCategories, cat])
                navigate(`/shop/${cat}`)
              }
            }}
          />
          <span className="text-sm text-gray-600 capitalize group-hover:text-gray-900">{cat}</span>
        </label>
      ))}
    </div>
  </div>
</div>
          <div className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4  ">
            { filteredProducts
              ? filteredProducts.map((product) => {
                  return (
                    
                    <li key={product.$id} className=" gap-4">
                      <Product
                        productName={product.productName}
                        price={product.price}
                        imgUrl={product.productImage}
                        id={product.$id}
                        
                      />
                    </li>
                  
                  );
                })
              : 
              []}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Shop;
