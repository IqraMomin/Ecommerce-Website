import React from 'react'
import "./Music.css"
import MusicItem from './MusicItem'
import music1 from '../../assets/Music1.jpeg'
import music2 from '../../assets/Music2.jpeg'
import music3 from '../../assets/Music3.jpeg'
import music4 from '../../assets/Music4.jpeg'



function Music() {
    const album = [
        { title: "Album 1", price: 12.99, image: music1 },
        { title: "Album 2", price: 12.99, image: music2 },
        { title: "Album 3", price: 12.99, image: music3 },
        { title: "Album 4", price: 12.99, image: music4 },

    ]
    return (
        <section className='music-div'>
            <h2 className='metal-mania-regular'>MUSIC</h2>
            <ul className='music-list'>
                {album.map(ele => {
                    return <MusicItem title={ele.title} price={ele.price} image={ele.image} />
                })}

            </ul>
        </section>


    )
}

export default Music
