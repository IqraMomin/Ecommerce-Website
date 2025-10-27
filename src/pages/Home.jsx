import React from 'react'
import ToursItem from '../components/ToursItem' 
import "./../components/ToursItem.css"

function Home() {
    const tours = [
        {
            id:"t1",
            date: "JUL16",
            city: "DETROIT, MI",
            place: "DTE ENERGY MUSIC THEATRE"
        },

        {
            id:"t2",
            date: "JUL19",
            city: "TORONTO,ON",
            place: "BUDWEISER STAGE"
        },
        {
            id:"t3",
            date: "JUL22",
            city: "BRISTOW, VA",
            place: "JIGGY LUBE LIVE"
        },

        {
            id:"t4",
            date: "JUL29",
            city: "PHOENIX, AZ",
            place: "AK-CHIN PAVILION"
        },
        {
            id:"t5",
            date: "AUG2",
            city: "LAS VEGAS, NV",
            place: "T-MOBILE ARENA"
        },
        {
            id:"t6",
            date: "AUG7",
            city: "CONCORD, CA",
            place: "CONCORD PAVILION"
        }

        

    ]
    return (
        <div>
            <h2>TOURS</h2>
            <br/>
            <ul className='tours-ul'>
                {tours.map(ele=>{
                    return <ToursItem key={ele.id}
                    id={ele.id}
                    date={ele.date}
                    city={ele.city}
                    place={ele.place}/>
                })}
                
            </ul>

        </div>
    )
}

export default Home
