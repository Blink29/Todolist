import React from "react";

//components
import TaskItem from "./TaskItem";

//styles
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, deleteTask, handleCheck, enterEditMode }) => {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            handleCheck={handleCheck}
            enterEditMode={enterEditMode}
          />
        ))}
    </ul>
  );
};

export default TaskList;
