import React from 'react'
import merch1 from "../../assets/Cofee.png"
import merch2 from "../../assets/Shirt.png"
import "./Merch.css"
import MusicItem from '../Music/MusicItem'

function Merch() {
    const merch = [
        {id:"merch1",title:"T-Shirt",price:12.99,image:merch1},
        {id:"merch2",title:"Cup",price:12.99,image:merch2},
    ]
    return (
        <section className='merch-div'>
            <h2>Merch</h2>
            <ul className='merch-list'>
                {merch.map(ele => {
                    return <MusicItem key={ele.id} id={ele.id} title={ele.title} price={ele.price} image={ele.image} />
                })}

            </ul>

        </section>
    )
}

export default Merch
