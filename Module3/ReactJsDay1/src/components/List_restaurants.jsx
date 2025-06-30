import React from 'react'
import imgMeal from "../assets/img_meal.webp";

const List_restaurants = (props) => {
  return (
        <div className="list">
          <img className="imgmeal" src={imgMeal} alt="Logo" />
          <h3>{props.name_res}</h3>
          <div className="catego">
            <a href="#">{props.country}</a>
            <span> • </span>
            <a href="#">{props.category_meal}</a>
            <span> • </span>
            <a href="#">{props.name_meal}</a>
          </div>
        </div>
  )
}

export default List_restaurants
