import React from 'react'
import "./Header.css"
import CartButton from './Cart/CartButton'

function Header() {
    return (
        <header className='header'>
            <div className='header-list'>
                <div className='header-item'>HOME</div>
                <div className='header-item'>STORE</div>
                <div className='header-item'>ABOUT</div>                
           </div>
           <CartButton/>

        </header>
    )
}

export default Header
