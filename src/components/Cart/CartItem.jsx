import React from 'react'
import "./CartItem.css"

function CartItem() {
    return (
        <div className='cart-items'>
            <section className='item-name'>
                <h3>ITEM</h3>
            </section>
            <section className='item-price'>
            <h3>PRICE</h3>
            </section>
            <section className='item-quantity'>
                <h3>QUANTITY</h3>
            </section>
        </div>
    )
}

export default CartItem
