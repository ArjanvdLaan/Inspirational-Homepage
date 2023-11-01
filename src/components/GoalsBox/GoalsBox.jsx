import { useState } from "react";
import GoalsInputBar from "../GoalsInputBar/GoalsInputBar";
import GoalsDisplay from "../GoalsDisplay/GoalsDisplay";

export const GoalsBox = () => {

  const [goals, setGoals] = useState([]);




  return (
    <div className="goals-box">
      <GoalsInputBar  setGoals={setGoals}/>
      <GoalsDisplay goals={goals} />
    </div>
  );
};


