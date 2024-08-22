import React from "react";
function Filter({ setFilter, setSearchQuery }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <select class="filter-container" onChange={handleFilterChange}>
        <option value="All">All Tasks</option>
        <option value="Completed">Completed Tasks</option>
        <option value="Incomplete">Incomplete Tasks</option>
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </select>
      <div class="search">
        <input
          type="text"
          placeholder="Search tasks..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Filter;
