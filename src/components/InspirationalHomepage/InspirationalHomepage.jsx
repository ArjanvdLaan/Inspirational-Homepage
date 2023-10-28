// import React from "react";
import { WeatherBox } from "../WeatherBox/WeatherBox";
import { GoalsBox } from "../GoalsBox/GoalsBox";
import { QuoteBox } from "../QuoteBox/QuoteBox";

export const InspirationalHomepage = () => {
  return (
    <div className="inspirational-homepage">
      <WeatherBox />
      <GoalsBox />
      <QuoteBox />
    </div>
  );
};

// export default InspirationalHomepage;
