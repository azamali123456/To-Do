import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TaskInput/index.css";
function TodoInput({ addTask }) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      addTask({
        id: uuidv4(),
        description,
        priority,
        completed: false,
      });
      setDescription("");
      setPriority("Low");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a task..."
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
