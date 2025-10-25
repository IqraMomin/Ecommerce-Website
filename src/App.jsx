import React, { useState } from "react"
import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer"
import Music from "./components/Music/Music"
import Merch from "./components/Merch/Merch"
import Cart from "./components/Cart/Cart"

function App() {

  const [modal,setModal] = useState(false);

  const modalHandler = ()=>{
    setModal(prev=> !prev);
  }

  return (
    <div className="app">
      <Header modal={modalHandler}/>
      {modal && <Cart modal={modalHandler}/>}
      <main className="main-content">
      <Music/>
      <Merch/>
      <button className="see-cart">See Cart</button>
      </main>
      
      <Footer/>
    </div>

        
  )
}

export default App
