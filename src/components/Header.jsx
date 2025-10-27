import React, { useContext } from 'react'
import "./Header.css"
import CartContext from '../store/cart-context'
import { Link , useLocation} from 'react-router-dom';

function Header(props) {
    const cartCtx = useContext(CartContext);
    const quantity = cartCtx.totalQuantity;
    const location = useLocation();
    let isStorePage = location.pathname==="/store";
    return (
        <header className='header'>
            <nav className='navbar'>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/store">STORE</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    {isStorePage && <button onClick={props.modal} className='cart-btn'>Cart <span className='cart-count'>{quantity}</span></button>}
                </ul>
            </nav>
        <div className='banner'>
            <h1>The Generics</h1>
        </div>
        </header>
    )
}

export default Header
