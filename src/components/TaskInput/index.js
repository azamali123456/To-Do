/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = styled.form`
  background-color: ${(props) => props.theme.colors.formBackground};
  margin: ${(props) => props.theme.spacing.medium} auto;
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borderRadius};
  max-width: 500px;
  width: 100%;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const Input = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.spacing.small};
  margin: ${(props) => props.theme.spacing.small} 0;
  border: 1px solid #ccc;
  border-radius: ${(props) => props.theme.borderRadius};
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: ${(props) => props.theme.colors.buttonSubmit};
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

const Select = styled.select`
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

const SubmitButton = styled.button`
  width: 20%;
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.medium};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  color: #ffffff;
  background-color: ${(props) => props.theme.colors.buttonSubmit};
  margin: ${(props) => props.theme.spacing.small} 0;
  transition: background-color 0.3s ease, transform 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonSubmitHover};
    transform: scale(1.05);
  }
`;

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
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a task..."
        />
        <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
        <SubmitButton type="submit">Add</SubmitButton>
      </Form>
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
