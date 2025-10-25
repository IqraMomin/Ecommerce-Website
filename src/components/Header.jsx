import React from 'react'
import "./Header.css"

function Header(props) {
    return (
        <header className='header'>
            <nav className='navbar'>
                <ul>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>STORE</a></li>
                    <li><a href='#'>ABOUT</a></li>
                    <button onClick={props.modal} className='cart-btn'>Cart <span className='cart-count'>0</span></button>
                </ul>
            </nav>
        <div className='banner'>
            <h1>The Generics</h1>
        </div>
        </header>
    )
}

export default Header
