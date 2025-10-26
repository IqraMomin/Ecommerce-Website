import React, { useContext } from 'react'
import './CartButton.css'
import CartContext from '../../store/cart-context'

function CartButton() {
    const cartCtx = useContext(CartContext);
    const quantity = cartCtx.totalQuantity;
    return (
        <React.Fragment>
        <button className='cart-btn'>Cart</button>
        <label>{quantity}</label>
        </React.Fragment>
    )
}

export default CartButton
