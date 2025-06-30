import React from "react";
import logo from "../assets/react.svg";

const List_works = (props) => {
  return (
    <div className="work">
      <img className="img_work" src={logo} alt="Logo" />
      <h3>{props.title_work}</h3>
      <div className="title_work">
        {props.content_work}
      </div>
      <a href="#" className="link_work">
        {props.action}
      </a>
    </div>
  );
};

export default List_works;
