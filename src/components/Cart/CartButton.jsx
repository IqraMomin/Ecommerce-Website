import React, { useContext } from 'react'
import './CartButton.css'
import CartContext from '../../store/cart-context'

function CartButton() {
    const cartCtx = useContext(CartContext);
    const quantity = cartCtx.totalQuantity;
    console.log(quantity);
    return (
        <React.Fragment>
        <button className='cart-btn'>Cart</button>
        <label>10</label>
        </React.Fragment>
    )
}

export default CartButton
