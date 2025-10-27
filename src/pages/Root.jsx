import React,{useState} from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Cart from "./../components/Cart/Cart"
import CartProvider from '../store/CartProvider'

function Root() {
    const [modal,setModal] = useState(false);

  const modalHandler = ()=>{
    setModal(prev=> !prev);
  }
    return (
        <>
        <Header modal={modalHandler}/>
        {modal && <Cart modal={modalHandler}/>}
        <Outlet/>
        </>

    )
}

export default Root
