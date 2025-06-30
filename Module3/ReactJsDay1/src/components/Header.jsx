import React from 'react'
import logo from "../assets/react.svg";

const Header = () => {
  return (
    <div id="header">
        <img className="logo" src={logo} alt="Logo" />
        <button type="button" className="button_header">
          <a href='#home'>Home</a>
        </button>
        <button type="button" className="button_header">
          <a href='#restaurants'>Restaurants</a>
        </button>
        <button type="button" className="button_header">
          <a href='#features'>Features</a>
        </button>
        <button type="button" className="button_header">
          <a href='#testimonials'>Testimonials</a>
        </button>
        <button type="button" className="button_header">
          <a href='#download'>Download</a>
        </button>
        <button type="button" className="button_rightside">
          Login Now
        </button>
        <button type="button" className="button_header_last">
          Join Free
        </button>
      </div>
  )
}

export default Header
