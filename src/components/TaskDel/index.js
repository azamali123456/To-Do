import React from "react";
import "./index.css";
const TaskDel = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.description}
      </span>
      <span> | Priority: {task.priority}</span>
      <button class="button.delete" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskDel;
