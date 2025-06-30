import React from "react";
import logo from "../assets/react.svg";

const Delivery = () => {
  return (
    <div id="delivery_experience">
      <div className="list_img_exper">
        <img src={logo} className="imgodd" alt="Logo" />
        <img src={logo} className="imgeven" alt="Logo" />
        <img src={logo} className="imgodd" alt="Logo" />
        <img src={logo} className="imgeven" alt="Logo" />
      </div>

      <div className="content_delivery">
        <h1>Let’s take your Delivery Experience to the next level</h1>
        <p>Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.</p>
      </div>
    </div>
  );
};

export default Delivery;
