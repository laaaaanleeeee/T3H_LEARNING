import React from "react";
import logo from "../assets/react.svg";
import Button_home from "./Button_home";

const Download = () => {
  return (
    <div id="download">
      <div className="img_download">
        <img src={logo} alt="Logo" />
      </div>

      <div className="content_download">
        <h1>
          Connecting our user with iOS & Android apps. Download from iTune &
          Play store
        </h1>
        <p>
          Pick one of our stock themes, or create your custom theme with the
          most advanced theme editor on any online survey building tool. We’re
          driven beyond just finishing the projects. We want to find solutions
          using our website & apps.
        </p>
        <div className="two_buttons">
            <Button_home platform="App Store" />
            <Button_home platform="Google Play" />
        </div>
      </div>
    </div>
  );
};

export default Download;
