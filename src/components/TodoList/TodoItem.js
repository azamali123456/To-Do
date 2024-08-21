// import React from "react";

// function TodoItem({ task, deleteTask, toggleComplete }) {
//   return (
//     <li
//       style={{ textDecoration: task.completed ? "line-through" : "none" }}
//       className={`task ${
//         task.completed
//           ? "completed-task"
//           : task.priority.toLowerCase() + "-priority"
//       }`}
//     >
//       <div className="todo-item-container">
//         <input
//           type="checkbox"
//           checked={task.completed}
//           onChange={() => toggleComplete(task.id)}
//         />
//         {task.description} -{task.priority}
//         <button className="delete" onClick={() => deleteTask(task.id)}>
//           Delete
//         </button>
//       </div>
//     </li>
//   );
// }

// export default TodoItem;
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
      <div className="todo-item-container">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span className="task-content">{task.description}</span>
        <span className="priority-bubble">{task.priority}</span>
        <button className="delete" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
