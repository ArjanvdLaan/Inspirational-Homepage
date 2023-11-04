import { useState } from "react";
import GoalsInputBar from "../GoalsInputBar/GoalsInputBar";
import GoalsDisplay from "../GoalsDisplay/GoalsDisplay";
import { v4 as uuidv4 } from "uuid";

export const GoalsBox = () => {
  const [goals, setGoals] = useState([
    { id: uuidv4(), text: 'Lorem' },
    { id: uuidv4(), text: 'Ipsum' }
  ]);

  const removeGoal = (id) => {
    setGoals((oldGoals) => oldGoals.filter((goal) => goal.id !== id));
  };

  return (
    <div className="goals-box">
      <GoalsInputBar setGoals={setGoals} />
      <GoalsDisplay goals={goals} removeGoal={removeGoal} />
    </div>
  );
};
