import React from "react";
import TodoItem from "../TodoItem/index.js";

function TodoList({ tasks, deleteTask, toggleComplete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
