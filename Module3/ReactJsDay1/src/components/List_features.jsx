import React from "react";
import logo from "../assets/react.svg";

const List_features = (props) => {
    return (
    <div className="feature">
          <div className="img_feature">
            <img src={logo} alt="Logo" />
            </div>
            <h2>{props.title_feature}</h2>
            <p>
              {props.content_feature}
            </p>
        </div>
    )
}

export default List_features;
