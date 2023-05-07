import { useState } from "react";

//hooks
import useLocalStorage from "./hooks/useLocalStorage";

// Components
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [tasks, setTasks] = useLocalStorage("todolist", []);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleCheck = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) =>
        t.id === task.id
          ? {
              ...t,
              name: task.name,
            }
          : t
      )
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };

  return (
    <div className="App">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditTask
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <AddTask addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          handleCheck={handleCheck}
          enterEditMode={enterEditMode}
        />
      )}
      <ThemeSwitcher />
    </div>
  );
}

export default App;
