import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function TodoInput({ addTask }) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const notify = () => toast.error("Please add a Task");
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
    } else {
      notify();
    }
  };

  return (
    <>
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
        <button className="submit" type="submit">
          Add
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default TodoInput;
