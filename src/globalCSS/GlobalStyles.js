import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 body {
    background-color: ${({ theme }) => theme.colors.background.primary};
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
  }


  form, .filter-container, ul {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  ul {
    padding: 0;
    list-style: none;
  }
    

  input[type="text"], select {
    width: calc(100% - 22px);
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type="text"]:focus, select:focus {
    border-color: ${({ theme }) => theme.colors.buttons.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.buttons.primary};
  }

  .filter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .filter-container select, .filter-container input[type="text"] {
    width: 100%;
    margin: 10px;
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 15px;
    
    background-color: ${({ theme }) => theme.colors.background.secondary};
    margin-bottom: 10px;
    border-radius: 8px;
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  ul li input[type="checkbox"] {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  ul li .task-content {
    flex-grow: 1;
    text-align: center;
    margin: 0 40px;
  }

  ul li .priority-bubble {
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 5px 10px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.priority.default};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 12px;
    font-weight: bold;
  }

  ul li.low-priority .priority-bubble {
    background-color: ${({ theme }) => theme.colors.priority.low};
  }

  ul li.medium-priority .priority-bubble {
    background-color: ${({ theme }) => theme.colors.priority.medium};
  }

  ul li.high-priority .priority-bubble {
    background-color: ${({ theme }) => theme.colors.priority.high};
  }

  button {
    width: 100%;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.buttons.text};
    margin: 10px 0;
    transition: background-color 0.3s ease, transform 0.2s ease-in-out;
  }

  button.submit {
    background-color: ${({ theme }) => theme.colors.buttons.primary};
  }

  button.submit:hover {
    background-color: ${({ theme }) => theme.colors.buttons.primaryHover};
  }

  button.delete {
    background-color: ${({ theme }) => theme.colors.buttons.delete};
  }

  button.delete:hover {
    background-color: ${({ theme }) => theme.colors.buttons.deleteHover};
  }

  button.clear-tasks {
    background-color: ${({ theme }) => theme.colors.buttons.clear};
  }

  button.clear-tasks:hover {
    background-color: ${({ theme }) => theme.colors.buttons.clearHover};
  }
`;

export default GlobalStyles;
