/* eslint-disable react/prop-types */
import React from "react";

const TaskSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      className="search-container"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search tasks"
    />
  );
};

export default TaskSearch;
