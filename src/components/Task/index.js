/* eslint-disable react/prop-types */
import React from "react";
import theme from "./theme";

const Task = ({ task, toggleComplete }) => {
  const taskClass = task.completed
    ? "completed-task"
    : `${task.priority.toLowerCase()}-priority`;

  return (
    <div className={taskClass} style={{ color: theme.colors.text }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        style={{
          width: theme.dimensions.checkboxSize,
          height: theme.dimensions.checkboxSize,
        }}
      />
      <span>{task.description}</span>
      <span> | Priority: {task.priority}</span>
    </div>
  );
};

export default Task;
