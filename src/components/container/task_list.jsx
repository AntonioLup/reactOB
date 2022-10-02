import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskForm from "../pure/forms/taskForm";
import TaskComponent from "../pure/task";

const TaskList = (props) => {
  const defaultTask = new Task("Example", "Default ", false, LEVELS.Urgente);
  const defaultTask1 = new Task(
    "Example1",
    "Description1",
    true,
    LEVELS.Normal
  );
  const defaultTask2 = new Task(
    "Example2",
    "Description 2",
    false,
    LEVELS.Urgente
  );

  const [tasks, setTask] = useState([defaultTask, defaultTask1, defaultTask2]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("task state has been modified");
    // setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      console.log("tasklist componenet is going to unmount...");
    };
  }, [tasks]);

  function completeTask(task) {
    console.log("Complete this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    // We update the state of the component with the new list of tasks and it will update the
    // Iteration of the tasks in order to show the task updated
    setTask(tempTasks);
  }
  function deleteTask(task) {
    console.log("Detele this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTask(tempTasks);
  }

  function addTask(task) {
    console.log("Detele this Task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTask(tempTasks);
  }
  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Desc</th>
            <th scope="col">Priority</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                completed={completeTask}
                remove={deleteTask}
              />
            );
          })}
        </tbody>
      </table>
    );
  };
  let taskTable;
  if (tasks.length > 0) {
    taskTable = <Table></Table>;
  } else {
    taskTable = (
      <div>
        <h3> There are no tasks to show</h3>
        <h4>Please, create one</h4>
      </div>
    );
  }
  const loadingStyle = {
    color: "grey",
    fontSize: "30px",
    fontWeight: "bold",
  };

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header p-3">
          <h5>Your Task:</h5>
        </div>
        <div
          className="card-body"
          data-mdb-perfect-scrollbar="true"
          style={{
            position: "relative",
            height: "400px",
          }}
        >
          {loading ? <p style={loadingStyle}>Loading...</p> : taskTable}
        </div>
      </div>
      <TaskForm add={addTask} lenght={tasks.length} />
    </div>
  );
};

export default TaskList;
