import React, { useContext, useState } from 'react'
import Modal from '../UI/Modal'
import "./Cart.css"
import CartContext from '../../store/cart-context'

function Cart(props) {
    const cartCtx = useContext(CartContext);
    const [quantity,setQuantity] = useState(1);

    const quantityChangeHandler = (e)=>{
        setQuantity(e.target.value);
    }
    const cartElements = cartCtx.items;
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
                    return <div className='cart-row' key={ele.id} id={ele.id}>
                        <span className='cart-row cart-column'>
                        <img className="cart-img" src={ele.imageUrl}/>
                        <span>{ele.title}</span>
                        </span>
                        <h6>{ele.price}</h6>
                        <span className='cart-row cart-column'>
                            <input onChange={quantityChangeHandler} value={quantity}/>
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
