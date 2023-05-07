import React, { useState } from "react";

//styles
import styles from "./TaskItem.module.css";

const TaskItem = ({ task, deleteTask, handleCheck, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    handleCheck(task.id);
  };

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          id={task.id}
          name={task.name}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}></p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className="btn"
          aria-label={`Update ${task.name} task`}
          onClick={() => enterEditMode(task)}
        >
          Edit
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`"Delete ${task.task} task`}
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
