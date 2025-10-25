import React from 'react'
import "./Modal.css"
import ReactDOM from "react-dom"

const ModalOverlay = (props)=>{
    return <div className='modal'>
        <div className='modal-content'>{props.children}</div>
    </div>
}

function Modal(props) {
    const portalElement = document.getElementById("Overlay");
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </React.Fragment>
    )
}

export default Modal
