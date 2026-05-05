import { createContext, useContext, useState } from "react";

const cartContext = createContext()

export default function CartProvider({children}){
    const [cartItems, setCartItems] = useState([])

    const addToCartFn = (id, productName, price, quantity, productImage) => {
        const cartItem = {
            productId : id,
            productName: productName,
            price: price,
            quantity : quantity,
            productImage : productImage
        }
        setCartItems([...cartItems, cartItem])
    }

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.productId !== id))
    }
    
    return(
        <cartContext.Provider value={{addToCartFn, removeFromCart, cartItems}}>
            {children}
        </cartContext.Provider>
    )
}


export const useCart =() => useContext(cartContext)




