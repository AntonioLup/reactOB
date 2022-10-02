import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add, lenght }) => {
  const nameRef = useRef("");
  const descRef = useRef("");
  const levelRef = useRef(LEVELS.Normal);
  const addTask = (e) => {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  };
  const normalStyle = {
    color: "blue",
    fontWeight: "bold",
  };
  const urgenStyle = {
    color: "yellow",
    fontWeight: "bold",
  };
  const pendingStyle = {
    color: "red",
    fontWeight: "bold",
  };

  return (
    <>
      <form
        onSubmit={addTask}
        className="d-flex justify-content-center flex-column align-items-center mb-4"
      >
        <div className="form-outline flex-fill">
          <input
            ref={nameRef}
            id="inputName"
            type="text"
            className="form-control m-2 form-control-lg"
            required
            autoFocus
            placeholder="Task Name"
          />
          <input
            ref={descRef}
            id="inputDesc"
            type="text"
            className="form-control m-2 form-control-lg"
            required
            autoFocus
            placeholder="Description"
          />
          <select
            className="form-control m-2 form-control-lg"
            ref={levelRef}
            defaultValue={LEVELS.Normal}
            id="selectLevel"
          >
            <option style={normalStyle} value={LEVELS.Normal}>
              Normal
            </option>
            <option style={urgenStyle} value={LEVELS.Urgente}>
              Urgente
            </option>
            <option style={pendingStyle} value={LEVELS.Blocking}>
              pendiente
            </option>
          </select>
          <button type="submit" className="btn btn-success btn-lg m-2">
            {lenght > 0 ? "Add New Task" : "First Add"}
          </button>
        </div>
      </form>
    </>
  );
};
TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default TaskForm;
