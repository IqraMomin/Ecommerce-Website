import React, { useContext,useEffect } from 'react'
import "./Music.css"
import MusicItem from './MusicItem'
import music1 from '../../assets/Music1.jpeg'
import music2 from '../../assets/Music2.jpeg'
import music3 from '../../assets/Music3.jpeg'
import music4 from '../../assets/Music4.jpeg'
import CartContext from '../../store/cart-context'



function Music() {

    const cartCtx = useContext(CartContext);
    useEffect(()=>{

        if (cartCtx.lastAction === "EXISTS") {
              alert("This item is already in the cart!");
              cartCtx.resetLastAction();

          }
    },[cartCtx.lastAction]);

    const album = [
        { id:1,title: "Album 1", price: 12.99, image: music1 },
        { id:2,title: "Album 2", price: 12.99, image: music2 },
        { id:3,title: "Album 3", price: 12.99, image: music3 },
        { id:4,title: "Album 4", price: 12.99, image: music4 },

    ]
    return (
        <section className='music-div'>
            <h2 className='metal-mania-regular'>MUSIC</h2>
            <ul className='music-list'>
                {album.map(ele => {
                    return <MusicItem key={ele.id} id={ele.id} title={ele.title} price={ele.price} image={ele.image} />
                })}

            </ul>
        </section>


    )
}

export default Music
