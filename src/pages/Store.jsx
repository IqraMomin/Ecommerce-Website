import React from "react"
import './../App.css'
import Footer from "../components/Footer"
import Music from "../components/Music/Music"
import Merch from "../components/Merch/Merch"


function Store() {

  return (
   
    <div className="app">
             
      <main className="main-content">
      <Music/>
      <Merch/>
      <button className="see-cart">See Cart</button>
      </main>
      
      <Footer/>
    </div>
    
        
  )
}

export default Store
