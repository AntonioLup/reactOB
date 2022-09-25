import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import "../../styles/task.css";
const TaskComponent = ({ task, completed, remove }) => {
  useEffect(() => {
    console.log("tarea creada");

    return () => {
      console.log(`tarea ${task.name}`);
    };
  }, [task]);
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.Normal:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.Urgente:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.Blocking:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  }
  function taskIconCompleted() {
    if (task.completed) {
      return (
        <i
          className="bi-toggle-on task-action"
          onClick={() => completed(task)}
          style={{
            color: "green",
            padding: "4px",
          }}
        ></i>
      );
    } else {
      return (
        <i
          className=" bi-toggle-off task-action"
          onClick={() => completed(task)}
          style={{
            color: "red",
            padding: "4px",
          }}
        ></i>
      );
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span className="ms-2">{task.description}</span>
      </td>
      <td className="align-middle">{taskLevelBadge()}</td>
      <td className="align-middle">
        {taskIconCompleted()}
        {/* {task.completed ? "Completado" : "pendiente"} */}
        <i
          className=" bi-trash task-action"
          onClick={() => remove(task)}
          style={{
            color: "tomato",
            padding: "4px",
          }}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  completed: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
