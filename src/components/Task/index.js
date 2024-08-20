import React from "react";

const Task = ({ task, toggleComplete }) => {
  return (
    <div
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
      <span>{task.description}</span>
      <span> | Priority: {task.priority}</span>
    </div>
  );
};

export default Task;
