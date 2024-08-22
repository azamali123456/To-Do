/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.theme.spacing.medium} auto;
  max-width: 540px;
  width: 100%;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: ${(props) => props.theme.spacing.small};
  margin: ${(props) => props.theme.spacing.small} 0;
  border: 1px solid #ccc;
  border-radius: ${(props) => props.theme.borderRadius};
  box-sizing: border-box;
  transition: background-color 0.3s ease, transform 0.2s ease;
  background-color: #ffffff;

  &:focus {
    background-color: ${(props) => props.theme.colors.background};
    transform: scale(1.02);
  }
`;

const SearchInput = styled.input`
  max-width: 5000px;
  width: 10%;
  padding: ${(props) => props.theme.spacing.small};
  margin: ${(props) => props.theme.spacing.small} 0;
  border: 1px solid #ccc;
  border-radius: ${(props) => props.theme.borderRadius};
  box-sizing: border-box;
  transition: background-color 0.3s ease, transform 0.2s ease;
  background-color: #ffffff;

  &:focus {
    background-color: ${(props) => props.theme.colors.background};
    transform: scale(1.02);
  }
`;

const Filter = ({ setFilter, setSearchQuery }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <FilterContainer>
      <FilterSelect onChange={handleFilterChange}>
        <option value="All">All Tasks</option>
        <option value="Completed">Completed Tasks</option>
        <option value="Incomplete">Incomplete Tasks</option>
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </FilterSelect>
      <SearchInput
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </FilterContainer>
  );
};

export default Filter;
