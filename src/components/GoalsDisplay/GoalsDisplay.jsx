
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./GoalsDisplay.css";

const GoalsDisplay = ({ goals, removeGoal }) => {


  console.log(goals);
  return (
    <div className="goals-display">
      <ul>
        {goals.map(goal => (
          <li key={goal.id} style={{ backgroundColor: goal.color }}>
            {goal.text}
            <FontAwesomeIcon
              className="trash-icon"
              icon={faTrash}
              onClick={() => removeGoal(goal.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsDisplay;
