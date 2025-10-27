import React from 'react'
import "./ToursItem.css"

function ToursItem(props) {
    return (
        <li className='tours-list'>
            <span className='tours-date'>{props.date}</span>
            <span className='tours-city'>{props.city}</span>
            <span className='tours-place'>{props.place}</span>
            <button className="tours-btn" type='button'>BUY TICKETS</button>

        </li>
    )
}

export default ToursItem
