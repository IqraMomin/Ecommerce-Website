import React from "react"
import Store from "./pages/Store"
import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Root from "./pages/Root"
import CartProvider from "./store/CartProvider"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import ProductDetail from "./pages/ProductDetail"
import ProductProvider from "./store/ProductProvider"
import Login from "./pages/Login"



const App = () => {
  return <CartProvider>
    <ProductProvider>
    <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<Home />} />
              <Route path="store" element={<Store />} />
              <Route path="store/:productId" element={<ProductDetail />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="login" element={<Login/>}/>
            </Route>
          </Routes>
    </ProductProvider>
  </CartProvider>

}




export default App
