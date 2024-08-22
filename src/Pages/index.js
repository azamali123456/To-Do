/* eslint-disable react/react-in-jsx-scope */
import { useTodoApp } from "../components/index.js";
import { useFilter } from "../hooks/index.js";

import "../globalCSS/index.css";

const Pages = () => {
  const {
    TodoInput,
    TodoList,
    tasks,
    addTask,
    deleteTask,
    toggleComplete,
    clearTasks,
    setFilter,
    setSearchQuery,
  } = useTodoApp();

  const FilterComponent = useFilter({ setFilter, setSearchQuery });

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="container">
      <h1>TaskBubble</h1>
      <TodoInput addTask={addTask} />
      {FilterComponent}
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
      <button className="clear-tasks" onClick={clearTasks}>
        Clear All Tasks
      </button>
    </div>
  );
};
export default Pages;
