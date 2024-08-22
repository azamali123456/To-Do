import React from "react";

const TaskDel = ({ task, toggleComplete, deleteTask }) => {
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
      <button className="delete" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskDel;
