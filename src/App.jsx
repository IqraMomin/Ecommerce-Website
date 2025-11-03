import React,{useContext} from "react"
import Store from "./pages/Store"
import { Route ,Switch} from "react-router-dom"
import About from "./pages/About"
import CartProvider from "./store/CartProvider"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import ProductDetail from "./pages/ProductDetail"
import ProductProvider from "./store/ProductProvider"
import Login from "./pages/Login"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import Root from "./components/Root"
import AuthContext from "./store/auth-context"



const App = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return <CartProvider>
    <ProductProvider>
      <Root>
              <Switch>
              <Route path="/home"><Home/></Route>
              <Route path="/store">
                {isLoggedIn && <Store/>}
                {!isLoggedIn && <Redirect to="/login"/>}
              </Route>
              <Route path="/store/:productId">
                {isLoggedIn && <ProductDetail/>}
                {!isLoggedIn && <Redirect to="/login"/>}
                </Route>
              <Route path="/about"><About/></Route>
              <Route path="/contact"><ContactUs /></Route>
              <Route path="/login"><Login/></Route>
              <Route path="*"><Redirect to="/home"/></Route>
              </Switch>
              </Root>
    </ProductProvider>
  </CartProvider>

}




export default App
