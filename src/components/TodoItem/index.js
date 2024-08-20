import React from "react";

function TodoItem({ task, deleteTask, toggleComplete }) {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      {task.description} - {task.priority}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
