// import React from 'react';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./GoalsInputBar.css";

const GoalsInputBar = ({ setGoals }) => {
  const [goal, setGoal] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // Check if the input field is empty
    if (goal.length === 0) {
      alert("Input field is empty");
      return;
    }

    setGoals((oldGoals) => [...oldGoals, { id: uuidv4(), text: goal }]);
    setGoal("");
  };
  return (
    <div className="goals-input-bar">
      <input
        className="input-bar"
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        id="goals"
        placeholder="Enter your goal"
      />
      <button className="button" onClick={onSubmit}>
        Add Goal
      </button>
    </div>
  );
};

export default GoalsInputBar;
