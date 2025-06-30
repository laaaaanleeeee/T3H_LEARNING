import React from "react";
import List_features from "./List_Features";

const Features = () => {
  const feature = [
    {
      title: "Analytics Business",
      content: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
    },
    {
      title: "Wide Coverage Map",
      content: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
    },
    {
      title: "Artificial Intelligence",
      content: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
    },
    {
      title: "Largest People",
      content: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
    },
    {
      title: "Trusted & Secure",
      content: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
    },
    {
      title: "Mobile Apps",
      content: "We’re driven beyond just finishing the projects. We want to find smart solutions.",
    },
  ]

  return (
    <div id="features">
      <h1>Meet our Quality Features</h1>
      <div className="detail_feature">
        {feature.map((feat,index) => (
          <List_features key={index} title_feature = {feat.title} content_feature = {feat.content}/>
        ))}
      </div>
    </div>
  );
};

export default Features;
