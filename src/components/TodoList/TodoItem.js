/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${(props) => props.theme.spacing.medium};
  background-color: ${(props) =>
    props.completed
      ? props.theme.colors.taskCompletedBackground
      : props.theme.colors.taskIncompleteBackground};
  color: ${(props) =>
    props.completed
      ? props.theme.colors.taskCompletedTextColor
      : props.theme.colors.taskIncompleteTextColor};
  margin-bottom: ${(props) => props.theme.spacing.small};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 96%;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: background-color 0.3s ease;
`;

const CheckBox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.buttonSubmit};
  background-color: ${(props) =>
    props.checked ? props.theme.colors.buttonSubmit : "#ffffff"};
  cursor: pointer;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;

  &:checked::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffffff;
  }
`;

const TaskContent = styled.span`
  flex-grow: 1;
  text-align: center;
  margin: 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PriorityBubble = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 12px;
  background-color: ${(props) => {
    switch (props.priority) {
      case "Low":
        return "#2196f3";
      case "Medium":
        return "#ffeb3b";
      case "High":
        return "#f44336";
      default:
        return "#3f51b5";
    }
  }};
  color: white;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 10px;
  top: 30%;
  transform: translateY(-50%);
  background-color: ${(props) => props.theme.colors.buttonDelete};
  border: none;
  padding: 8px 12px;
  color: #ffffff;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonDeleteHover};
    transform: scale(1.05);
  }
`;

function TodoItem({ task, deleteTask, toggleComplete }) {
  return (
    <ListItem completed={task.completed}>
      <CheckBox
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <TaskContent>{task.description}</TaskContent>
      <PriorityBubble priority={task.priority}>{task.priority}</PriorityBubble>
      <DeleteButton onClick={() => deleteTask(task.id)}>Delete</DeleteButton>
    </ListItem>
  );
}

export default TodoItem;
