/* eslint-disable react/prop-types */
import React from "react";

const TaskDel = ({ task, toggleComplete, deleteTask }) => {
  const taskClass = task.completed
    ? "completed-task"
    : `${task.priority.toLowerCase()}-priority`;

  return (
    <div className={taskClass}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span>{task.description}</span>
      <span> | Priority: {task.priority}</span>
      <button className="delete" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskDel;
