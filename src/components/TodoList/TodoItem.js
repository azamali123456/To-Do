import React from "react";

function TodoItem({ task, deleteTask, toggleComplete }) {
  return (
    <li
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
      className={`task ${
        task.completed
          ? "completed-task"
          : task.priority.toLowerCase() + "-priority"
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      {task.description} - {task.priority}
      <button className="delete" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
