import React from "react";
import logo from "../assets/react.svg";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <h2>210,000+ people already use our app on a daily basis</h2>
      <div className="list_testi">
        <img className="img_testi" src={logo} alt="Logo" />
        <img className="img_testi" src={logo} alt="Logo" />
        <img className="img_testi" src={logo} alt="Logo" />
        <img className="img_testi" src={logo} alt="Logo" />
        <img className="img_testi" src={logo} alt="Logo" />
        <img className="img_testi" src={logo} alt="Logo" />
      </div>

      <div className="aboutus_testi">
        <div className="content_aboutus">
          <h1>What people say about us</h1>
          <p>
            OMG! I cannot believe that I have got a brand new landing page after
            getting this template we are able to use our most used e-commerce
            template with moderm and trending design.
          </p>
          <div className="list_member">
            <div className="member">
              <img src={logo} alt="Logo" />
              <div className="title_member">
                <p>Mariana Dickey</p>
                <p>UI Designer</p>
              </div>
            </div>

            <div className="member">
              <img src={logo} alt="Logo" />
              <div className="title_member">
                <p>Jonathan Taylor</p>
                <p>CEO at Creativex</p>
              </div>
            </div>
          </div>
        </div>

        <div className="img_content_testi">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
