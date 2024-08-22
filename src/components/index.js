import { useState, useEffect } from "react";
import TodoInput from "./TaskInput/index.js";
import TodoList from "./TodoList/index.js";

export const useTodoApp = () => {
  const getLocalItems = () => {
    let list = localStorage.getItem("tasks");
    if (list) {
      return JSON.parse(localStorage.getItem("tasks"));
    } else {
      return [];
    }
  };

  const [tasks, setTasks] = useState(getLocalItems());
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const sortedTasks = [...tasks, task].sort((a, b) => {
      const priorityOrder = { Low: 1, Medium: 2, High: 3 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    setTasks(sortedTasks);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const clearTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "Completed") return task.completed;
      if (filter === "Incomplete") return !task.completed;
      if (filter === "Low" || filter === "Medium" || filter === "High")
        return task.priority === filter;
      return true;
    })
    .filter((task) =>
      task.description.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  return {
    TodoInput,
    TodoList,
    tasks: filteredTasks,
    addTask,
    deleteTask,
    toggleComplete,
    clearTasks,
    setFilter,
    setSearchQuery,
  };
};
