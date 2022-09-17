import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskList = (props) => {
  const defaultTask = new Task("Antonio", "ser humano", false, LEVELS.Normal);
  return (
    <div>
      <h1>your task:</h1>
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskList;
