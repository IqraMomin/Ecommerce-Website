import React, { useContext} from 'react'
import Button from '../UI/Button'
import "./MusicItem.css"
import CartContext from '../../store/cart-context'


function MusicItem(props) {

    const cartCtx = useContext(CartContext);
 

    const addToCartHandler =()=>{
        const item ={
            id:props.id,
            title:props.title,
            price:props.price,
            imageUrl:props.image,
            quantity:1
        }
        cartCtx.addToCart(item);

    }
    return (
        <li className='item-div'>
                        <h3>{props.title}</h3>
                        <img src={props.image}/>
                        <div className='item-detail'>
                            <p>{props.price}</p>
                            <Button onClick={addToCartHandler} title='Add To Cart'/>
                        </div>
        </li>
    )
}

export default MusicItem
