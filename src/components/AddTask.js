import React from "react";
import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };
  return (
    <form className="todo" onSubmit={handleSubmit}>
      <div className="wrapper">
        <input
          type="text"
          className="input"
          id="task"
          autoFocus
          required
          placeholder="Enter Task"
          value={task}
          onInput={(e) => setTask(e.target.value)}
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button type="submit" aria-label="add task" className="btn">
        Add
      </button>
    </form>
  );
};

export default AddTask;
