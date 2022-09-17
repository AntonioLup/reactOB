import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
  return (
    <div>
      <h2>Nombre: {task.name}</h2>
      <h3>description: {task.description}</h3>
      <h3>level: {task.level}</h3>
      <h4>Esto esta {task.completed ? "completed" : "pending"}</h4>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
