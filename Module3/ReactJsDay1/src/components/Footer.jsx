import React from 'react'
import logo from "../assets/react.svg";

const Footer = () => {
  return (
    <div id='footer'>
        <img src={logo} className="img_footer" alt="Logo" />
        <p>Copyright © 2025</p>
        <a href='#'>RedQ, Inc.</a>
        <button type='button'>Support</button>
        <button type='button'>About Us</button>
        <button type='button'>Privacy</button>
        <button type='button'>Contact</button>
        <p>Social: </p>
        <img src={logo} className="img_social" alt="Logo" />
        <img src={logo} className="img_social" alt="Logo" />
        <img src={logo} className="img_social" alt="Logo" />
    </div>
  )
}

export default Footer
