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

        }

    ]
    return (
        <Modal>
            <div className='cart-div'>
            <h2>CART</h2>
            <button onClick={props.modal} className='cancel'>X</button>
            <div className='cart-items'>
            <span className='cart-column'>ITEMS</span>
            <span className='cart-column'>PRICE</span>
            <span className='cart-column'>QUANTITY</span>
            </div>   
            <ul>        
                {cartElements.map(ele=>{
                    return <div className='cart-row'>
                        <span className='cart-row cart-column'>
                        <img className="cart-img" src={ele.imageUrl}/>
                        <span>{ele.title}</span>
                        </span>
                        <h6>{ele.price}</h6>
                        <span className='cart-row cart-column'>
                            <h6>{ele.quantity}</h6>
                            <span>
                                <button className='remove'>REMOVE</button>
                            </span>
                        </span>
                        
                        </div>   
                })}
            </ul> 
            
            </div>
        </Modal>
    )
}

export default Cart
