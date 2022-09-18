import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
// import "../../styles/task.scss";

const TaskList = (props) => {
  const defaultTask = new Task("Antonio", "ser humano", false, LEVELS.Normal);
  const [task, setTask] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("task state has been modified");
    setLoading(false);
    return () => {
      console.log("tasklist componenet is going to unmount...");
    };
  }, [task]);

  const changeState = (id) => {
    console.log("Todo");
  };
  return (
    <div>
      <h1>your task:</h1>
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskList;
