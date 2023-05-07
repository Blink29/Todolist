import React from "react";
import { useState, useEffect } from "react";

const EditTask = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName });
  };
  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <form className="todo" onSubmit={handleSubmit}>
        <div className="wrapper">
          <input
            type="text"
            className="input"
            id="editTask"
            autoFocus
            required
            placeholder="Update Task"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          type="submit"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          className="btn"
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default EditTask;
