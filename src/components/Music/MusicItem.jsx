import React from 'react'
import Button from '../UI/Button'
import "./MusicItem.css"

function MusicItem(props) {
    return (
        <li className='item-div'>
                        <h3>{props.title}</h3>
                        <img src={props.image}/>
                        <div className='item-detail'>
                            <p>{props.price}</p>
                            <Button title='Add To Cart'/>
                        </div>
        </li>
    )
}

export default MusicItem
