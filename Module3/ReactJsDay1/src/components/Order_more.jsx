import React from 'react'
import logo from "../assets/react.svg";

const Order_more = () => {
  return (
    <div id='order_more'>
        <div className='content_order_more'>
            <h1>Your order knocking on the door. Please receive</h1>
            <p>Pick one of our stock themes, or create your custom theme<br></br>with the most advanced theme editor on any online.</p>
            <div className="but_order_more">
                <button type="button" className="button_order_more">
                    Order More
                </button>
            </div>
        </div>


        <div className='img_order'>
            <img src={logo} className="img_order_more" alt="Logo" />
        </div>
    </div>
  )
}

export default Order_more
