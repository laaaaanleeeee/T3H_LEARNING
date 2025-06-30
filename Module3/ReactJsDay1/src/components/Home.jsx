import React from "react";
import logo from "../assets/react.svg";
import Button_home from "./Button_home";

const Home = () => {
  return (
    <div id="home">
      <div className="leftside">
        <h1>
          <b>Your favorite food, delivered your home</b>
        </h1>
        <p>
          Food, drinks, groceries, and more available for delivery and pickup.
        </p>
        <div className="searchaddress">
          <input
            className="inputaddress"
            id="inputaddress"
            type="text"
            placeholder="Enter your address.."
          ></input>
          <button className="buttonaddress" type="button">
            Join Free
          </button>
        </div>
        <p>Apps Available to download on</p>
        <div className="two_buttons">
            <Button_home platform="App Store" />
            <Button_home platform="Google Play" />
        </div>
        
    </div>

      <div className="rightside">
        <img className="logo" src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Home;
