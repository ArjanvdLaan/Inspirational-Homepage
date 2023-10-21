// import React from "react";
import GoalsInputBar from "../GoalsInputBar/GoalsInputBar";
import GoalsDisplay from "../GoalsDisplay/GoalsDisplay";

const GoalsBox = () => {
  return (
    <div className="goals-box">
      <GoalsInputBar />
      <GoalsDisplay />
    </div>
  );
};

export default GoalsBox;
