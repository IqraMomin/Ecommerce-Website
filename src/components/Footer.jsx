import React from 'react'
import Button from './UI/Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
          <div className='footer-text'>The Generics</div>  
          <div className='footer-btn'>
            <Button id='youtube' title='youtube' type='button'/>
            <Button id='spotify' title='spotify' type='button'/>
            <Button id='facebook' title='facebook' type='button'/>
            
          </div>
            
        </div>
    )
}

export default Footer
