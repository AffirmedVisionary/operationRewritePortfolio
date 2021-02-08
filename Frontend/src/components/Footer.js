import React from 'react'
import Socials from './Socials'
import "../App.css"

const Footer = () => {
    return (
        <div id='footer'>
            <hr className='foot-line'></hr>
            <span>Thank you for visiting</span>
            <Socials />
            <hr className='foot-line'></hr>
            <span>:Copyright/Copy Claim :charlene :grant</span>
        </div>
    )
}

export default Footer
