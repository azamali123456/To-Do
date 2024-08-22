import React from "react";
import Filter from "../hooks/Filter/index.js";

export const useFilter = ({ setFilter, setSearchQuery }) => (
  <Filter setFilter={setFilter} setSearchQuery={setSearchQuery} />
);
