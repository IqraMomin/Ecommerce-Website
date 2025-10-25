import React from 'react'

function Button(props) {
    return (
        <button className="btn" onClick={props.onClick} type={props.type} id={props.id}>{props.title}</button>
    )
}

export default Button
