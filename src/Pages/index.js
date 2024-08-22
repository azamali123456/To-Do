import { useTodoApp } from "../components/index.js";
import { useFilter } from "../hooks/index.js";

export const Pages = () => {
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
    <div>
      <h1>TaskBubble </h1>
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
