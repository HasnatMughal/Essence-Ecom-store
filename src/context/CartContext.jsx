import { createContext, useContext, useEffect, useState } from "react";
import AddtoCartNotification from "../components/AddtoCartNotification"

const cartContext = createContext()

export default function CartProvider({children}){
    const [cartItems, setCartItems] = useState(() => {
        const oldCartItems = localStorage.getItem("cartItems")
        return(oldCartItems ? JSON.parse(oldCartItems) : [])
    })
    const [showNotification, setShowNotification] = useState(false)

    const addToCartFn = (id, productName, price, quantity, productImage) => {
        const cartItem = {
            productId : id,
            productName: productName,
            price: price,
            quantity : quantity,
            productImage : productImage
        }
        
        const itemAlreadyExists = cartItems.some(item => item.productId === cartItem.productId)

        if(!itemAlreadyExists){
            setCartItems([...cartItems, cartItem])
           
        } else if(itemAlreadyExists){
       const upadtedCart =   cartItems.map((item) => {
                if(item.productId === cartItem.productId){
              const newCartItem = {
                productId : id,
            productName: productName,
            price: price,
            quantity : item.quantity + 1,
            productImage : productImage
              }
              return newCartItem
            } else{
                return item
            }
                
            })
            setCartItems(upadtedCart)
            
            
        }
        
        setShowNotification(true)
             setTimeout(() => {
                setShowNotification(false)
            },2000)
        

      
      
    }

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.productId !== id))
    }
    useEffect(() => {
                localStorage.setItem("cartItems", JSON.stringify(cartItems))
            },[cartItems])
    return(
        <cartContext.Provider value={{addToCartFn, removeFromCart, cartItems,showNotification}}>
            {children}
        </cartContext.Provider>
    )
}


export const useCart =() => useContext(cartContext)




