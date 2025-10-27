import React from "react"
import Store from "./pages/Store"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./pages/About"
import Root from "./pages/Root"
import CartProvider from "./store/CartProvider"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {path:"/store",element:<Store/>},
      { path: "/about", element: <About /> }
    ]
  }

])

const App = () => {
  return <CartProvider>
  <RouterProvider router={router} />
  </CartProvider>

}




export default App
