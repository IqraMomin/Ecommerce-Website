import React from "react"
import Store from "./pages/Store"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./pages/About"
import Root from "./pages/Root"
import CartProvider from "./store/CartProvider"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import ProdutcDetail from "./pages/ProductDetail"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      {path:"/store/:productId",element:<ProdutcDetail/>}
    ]
  }

])

const App = () => {
  return <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>

}




export default App
