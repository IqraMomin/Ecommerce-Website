import React, { useContext } from 'react'
import "./Header.css"
import CartContext from '../store/cart-context'
import { NavLink , useLocation} from 'react-router-dom';

function Header(props) {
    const cartCtx = useContext(CartContext);
    const quantity = cartCtx.totalQuantity;
    const location = useLocation();
    let isStorePage = location.pathname==="/store";
    let isHomePage = location.pathname=== "/home";
    return (
        <header className='header'>
            <nav className='navbar'>
                <ul>
                    <li><NavLink to="/home">HOME</NavLink></li>
                    <li><NavLink to="/store">STORE</NavLink></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                    <li><NavLink to="/contact">CONTACT US</NavLink></li>
                    <li><NavLink to="/login">LOGIN</NavLink></li>
                    {isStorePage && <button onClick={props.modal} className='cart-btn'>Cart <span className='cart-count'>{quantity}</span></button>}
                </ul>
            </nav>
        <div className='banner'>
            <h1>The Generics</h1>
            {isHomePage && <div className='btn-div'>
                <button className='latest-album'>Get Our Latest Album</button>
                <div>
                <button className='play-btn'>►</button>
                </div>
                
            </div>}           
        </div>
        </header>
    )
}

export default Header
