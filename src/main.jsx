import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProvider from './context/UserContext.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Login from './components/Login.jsx'
import Homepage from './pages/Homepage.jsx'
import SignUp from './pages/SignUp.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Shop from './pages/Shop.jsx'
import UploadProduct from './pages/UploadProduct.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Cart from './pages/Cart.jsx'
import YourProducts from './pages/YourProducts.jsx'
import EditProduct from './pages/EditProduct.jsx'
import User from './pages/User.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import IsAdmin from './components/IsAdmin.jsx'
import About from "./pages/About.jsx"
import Contact from './pages/Contact.jsx'
import CartProvider from './context/CartContext.jsx'



const router = createBrowserRouter([
  {
    element : <App />,
    path : "/",
    children : [
      {
        path: "/",
        element : <Homepage />
      },
     {
      path : "/login",
      element : <LoginPage />
     },
     {
      path: "/signup",
      element: <SignUp />
     },
     {
      path: "/shop/:category",
      element : <Shop />
     },
     {
      path: "/shop",
      element : <Shop />
     },
     {
      path: "/admin/uploadproduct",
      element: <IsAdmin>
         <UploadProduct />
      </IsAdmin> 
     
     },
     {
      path : "/product/:id",
      element : <ProductPage />
     },
     {
      path: "/cart",
      element : <Cart />
     },
     {
      path:"/admin/yourProducts",
      element : <IsAdmin> <YourProducts /> </IsAdmin>
     },
     {
      path : "/admin/editProduct/:id",
      element : <IsAdmin> <EditProduct /></IsAdmin>

     },
     {
      path : "/user/:id",
      element : <ProtectedRoute> <User /> </ProtectedRoute>
     },
     {
      path : "/about",
      element :<About />
     },
     {
      path : "/contact",
      element :<Contact />
     }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <UserProvider >
    <CartProvider>
<RouterProvider router={router}/>
    </CartProvider>
  </UserProvider>
)
