import React from 'react'
import Modal from '../UI/Modal'
import "./Cart.css"

function Cart(props) {
    const cartElements = [

        {

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

            quantity: 2,

        },

        {

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

            quantity: 3,

        },

        {

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

            quantity: 1,

        }

    ]
    return (
        <Modal>
            <h2>CART</h2>
            <button onClick={props.modal} className='cancel'>X</button>
            <div className='cart-items'>
            <span className='cart-column'>ITEMS</span>
            <span className='cart-column'>PRICE</span>
            <span className='cart-column'>QUANTITY</span>
            </div>
            
        </Modal>
    )
}

export default Cart
