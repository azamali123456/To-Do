import React from "react";
import "./index.css";
function Filter({ setFilter, setSearchQuery }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="All">All Tasks</option>
        <option value="Completed">Completed Tasks</option>
        <option value="Incomplete">Incomplete Tasks</option>
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </select>
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Filter;
