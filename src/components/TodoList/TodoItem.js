import React from "react";
import "./index.css";
function TodoItem({ task, deleteTask, toggleComplete }) {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      {task.description} - {task.priority}
      <button class=".button.delete" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
