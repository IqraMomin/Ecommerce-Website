import React from 'react'

function Label(props) {
    return (
        <label htmlFor={props.id}>{props.title}</label>
    )
}

export default Label
