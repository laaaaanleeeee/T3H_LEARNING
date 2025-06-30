import React from "react";

const Step_delivery = (props) => {
  return (
    <div className="step">
      <h1>{props.number}</h1>
      <div className="detail_step">
        <p>
          <b>{props.title_step}</b>
        </p>
        <p>
          {props.content_step}
        </p>
      </div>
    </div>
  );
};

export default Step_delivery;
