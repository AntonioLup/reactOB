import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add }) => {
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
          <label htmlFor="selectLevel" className="sr-only">
            priority
          </label>
          <select ref={levelRef} defaultValue={LEVELS.Normal} id="selectLevel">
            <option value={LEVELS.Normal}>Normal</option>
            <option value={LEVELS.Urgente}>Urgente</option>
            <option value={LEVELS.Blocking}>pendiente</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success btn-lg m-2">
          Submit
        </button>
      </form>
    </>
  );
};
TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default TaskForm;
