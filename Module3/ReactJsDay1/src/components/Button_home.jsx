import React from "react";
import logo from "../assets/react.svg";

const Button_home = (props) => {
  return (
    <div className="download">
      <button type="button" className="button_download">
        <img className="logo" src={logo} alt="Logo" />
        <div className="title_download">
          <p>Download on the </p>
          <p>
            <b>{props.platform}</b>
          </p>
        </div>
      </button>
    </div>
  );
};

export default Button_home;
