// import React from "react";
import { WeatherBox } from "../WeatherBox/WeatherBox";
import { GoalsBox } from "../GoalsBox/GoalsBox";
import { QuoteBox } from "../QuoteBox/QuoteBox";
import "./InspirationalHomepage.css";


export const InspirationalHomepage = () => {
  return (
    <div className="parent-div">
      <div className="goals-and-weather">
      <WeatherBox className="weather-box"/>
      <GoalsBox className="goals-box"/>
      </div>
      <QuoteBox className="quote-box"/>
    </div>
  );
};

// export default InspirationalHomepage;
