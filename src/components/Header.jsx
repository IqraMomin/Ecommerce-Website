import React from 'react'
import "./Header.css"
import CartButton from './Cart/CartButton'
import Banner from './Banner'

function Header() {
    return (
        <React.Fragment>
        <header className='header'>
            <div className='header-list'>
                <div className='header-item'>HOME</div>
                <div className='header-item'>STORE</div>
                <div className='header-item'>ABOUT</div>                
           </div>
           <CartButton/>

        </header>
        <Banner/>
        </React.Fragment>

    )
}

export default Header
