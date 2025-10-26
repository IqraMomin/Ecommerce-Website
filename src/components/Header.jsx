import React, { useContext } from 'react'
import "./Header.css"
import CartContext from '../store/cart-context'

function Header(props) {
    const cartCtx = useContext(CartContext);
    const quantity = cartCtx.totalQuantity;
    return (
        <header className='header'>
            <nav className='navbar'>
                <ul>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>STORE</a></li>
                    <li><a href='#'>ABOUT</a></li>
                    <button onClick={props.modal} className='cart-btn'>Cart <span className='cart-count'>{quantity}</span></button>
                </ul>
            </nav>
        <div className='banner'>
            <h1>The Generics</h1>
        </div>
        </header>
    )
}

export default Header
