import React from 'react'
import './CartButton.css'

function CartButton() {
    return (
        <React.Fragment>
        <button className='cart-btn'>Cart</button>
        <label>0</label>
        </React.Fragment>
    )
}

export default CartButton
