import React from "react";

const Task = ({ task, toggleComplete }) => {
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
    </div>
  );
};

export default Task;
