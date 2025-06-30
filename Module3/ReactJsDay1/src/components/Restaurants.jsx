import React from "react";
import logo from "../assets/react.svg";
import List_restaurants from "./List_restaurants";
import List_buttons from "./List_buttons";
import Step_delivery from "./Step_delivery";
import List_works from "./List_works";

const Restaurants = () => {
  const cagegoryButtons = ["Pizza", "Breakfast", "Japanese", "Halal", "Dessert", "Lebanese", "American", "Sushi", "Greek", "Thai", "Vegetarian", "Italian", "Mexican", "Indian", "Chinese", "Breakfast", "Burgers"];
  const listRes = [
    {
      name_res: "Pizza Hut Delicious Pizza",
      country: "American",
      category_meal: "Fast Food",
      name_meal: "Burgers",
    },
    {
      name_res:"Chipotle Mexican Grill (2675 Geary Boulevard)",
      country:"American",
      category_meal:"Fast Food",
      name_meal:"Burgers",
    },
    {
      name_res:"McDonald's® Burgers (Fillmore)",
      country:"American",
      category_meal:"Fast Food",
      name_meal:"Burgers",
    },
    {
      name_res:"The Baked Bear San Francisco",
      country:"American",
      category_meal:"Fast Food",
      name_meal:"Burgers",
    },
    {
      name_res:"Shake Shack (3060 Fillmore Street)",
      country:"American",
      category_meal:"Fast Food",
      name_meal:"Burgers",
    },
    {
      name_res:"Chubby Noodle Chinese Takeout",
      country:"American",
      category_meal:"Fast Food",
      name_meal:"Burgers",
    },
  ];
  const listWork = [
    {
      title_work:"Become a Delivery Man",
      content_work:"As a delivery driver, you'll make reliable money—working anytime, anywhere.",
      action:"Start Earning"
    },
    {
      title_work:"Become a Partner",
      content_work:"Grow your business and reach new customers by partnering with us.",
      action:"Sign up your store"
    },
    {
      title_work:"Try Android/iOS App",
      content_work:"Get the best DoorDash experience with live order tracking.",
      action:"Get the app"
    },
  ];
  const listStep = [
    {
      number:"01",
      title_step:"Easy to use application",
      content_step:"We’re driven beyond just finishing the projects. We want to find solutions using our website & apps."
    },
    {
      number:"02",
      title_step:"Deliver Food within 30 min",
      content_step:"We’re driven beyond just finishing the projects. We want to find solutions using our website & apps."
    },
    {
      number:"03",
      title_step:"100% Reliable with Privacy",
      content_step:"We’re driven beyond just finishing the projects. We want to find solutions using our website & apps."
    },
  ]

  return (
    <div id="restaurants">
      <h1 className="part1res">
        <b>Available Restaurant Nearby Area</b>
      </h1>
      {listRes == [] ? (
        <p>Không có nhà hàng nào</p>
      )
      : (
          <div className="list_restaurant">
          {/* <List_restaurants
            name_res="Pizza Hut Delicious Pizza"
            country="American"
            category_meal="Fast Food"
            name_meal="Burgers"
          />
          <List_restaurants
            name_res="Chipotle Mexican Grill (2675 Geary Boulevard)"
            country="American"
            category_meal="Fast Food"
            name_meal="Burgers"
          />
          <List_restaurants
            name_res="McDonald's® Burgers (Fillmore)"
            country="American"
            category_meal="Fast Food"
            name_meal="Burgers"
          />
          <List_restaurants
            name_res="The Baked Bear San Francisco"
            country="American"
            category_meal="Fast Food"
            name_meal="Burgers"
          />
          <List_restaurants
            name_res="Shake Shack (3060 Fillmore Street)"
            country="American"
            category_meal="Fast Food"
            name_meal="Burgers"
          />
          <List_restaurants
            name_res="Chubby Noodle Chinese Takeout"
            country="American"
            category_meal="Fast Food"
            name_meal="Burgers"
          /> */}

          {listRes.map((res, index) => (
            <List_restaurants key={index} name_res={res.name_res} name_meal={res.name_meal} country={res.country} category_meal={res.category_meal} />
          ))}
        </div>
      )}

      <div className="discover">
        <button type="button" className="button_discover">
          Discover More
        </button>
      </div>

      <div className="part2_res">
        <div className="detail_part2">
          <h1 className="title_part2">Popular categories by food</h1>
          {cagegoryButtons.length > 10 ? (
            <div className="list_button">
            {/* <List_buttons title_button="Pizza" />
            <List_buttons title_button="Breakfast" />
            <List_buttons title_button="Japanese" />
            <List_buttons title_button="Halal" />
            <List_buttons title_button="Dessert" />
            <List_buttons title_button="Lebanese" />
            <List_buttons title_button="American" />
            <List_buttons title_button="Sushi" />
            <List_buttons title_button="Greek" />
            <List_buttons title_button="Thai" />
            <List_buttons title_button="Vegetarian" />
            <List_buttons title_button="Italian"/>
            <List_buttons title_button="Mexican" />
            <List_buttons title_button="Indian" />
            <List_buttons title_button="Chinese" />
            <List_buttons title_button="Breakfast" />
            <List_buttons title_button="Burgers" /> */}

            {cagegoryButtons.map((but, index) => (
              <List_buttons key={index} title_button={but}/>
            ))}
          </div>
          ) : (
            <p>Không đáp ứng đủ</p>
          )
          }
          
        </div>
      </div>

      <h1 className="part3res">Let’s see how it works</h1>
      <div className="list_work">
        {/* <List_works title_work="Become a Delivery Man" content_work="As a delivery driver, you'll make reliable money—working anytime, anywhere." action="Start Earning"/>
        <List_works title_work="Become a Partner" content_work="Grow your business and reach new customers by partnering with us." action="Sign up your store"/>
        <List_works title_work="Try Android/iOS App" content_work="Get the best DoorDash experience with live order tracking." action="Get the app"/> */}
        {listWork.map((wk, index) => (
            <List_works key={index} title_work={wk.title_work} content_work={wk.content_work} action={wk.action}/>
        ))}
      </div>

      <div className="rescando">
        <img className="logocando" src={logo} alt="Logo" />
        <div className="detail_cando">
          <h1>
            <b>We deliver our products as fast as superman can do</b>
          </h1>
          <p>
            Pick one of our stock themes, or create your custom theme with the
            most advanced theme editor on any online survey building tool
          </p>
          <div className="step_cando">
            {/* <Step_delivery  number="01" title_step="Easy to use application" content_step="We’re driven beyond just finishing the projects. We want to find solutions using our website & apps."/>
            <Step_delivery  number="02" title_step="Deliver Food within 30 min" content_step="We’re driven beyond just finishing the projects. We want to find solutions using our website & apps."/>
            <Step_delivery  number="03" title_step="100% Reliable with Privacy" content_step="We’re driven beyond just finishing the projects. We want to find solutions using our website & apps."/> */}

            {listStep.map((step, index) => (
              <Step_delivery key={index} number={step.number} title_step={step.title_step} content_step={step.content_step}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
