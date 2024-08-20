import React from "react";
import "./index.css";
const TaskSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search tasks"
    />
  );
};

export default TaskSearch;
