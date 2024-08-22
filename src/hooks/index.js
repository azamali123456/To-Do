import React from "react";
import Filter from "../hooks/Filter";

export const useFilter = ({ setFilter, setSearchQuery }) => (
  <Filter setFilter={setFilter} setSearchQuery={setSearchQuery} />
);
