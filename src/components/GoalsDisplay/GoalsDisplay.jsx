// import React from 'react';

const GoalsDisplay = ({ goals }) => {
    console.log(goals)
  return (
    <div className="goals-display">
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>{goal.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsDisplay;
