export const loadTasks = () => {
  try {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : []; // Return an empty array if no tasks are found
  } catch (error) {
    console.error("Failed to load tasks from localStorage:", error);
    return []; // Return an empty array in case of an error
  }
};

export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
// Remove this useEffect

// src/utils/LocalStorage.js

// export const loadTasksFromLocalStorage = () => {
//   try {
//     const tasks = localStorage.getItem("tasks");
//     return tasks ? JSON.parse(tasks) : [];
//   } catch (error) {
//     console.error("Failed to load tasks from localStorage:", error);
//     return [];
//   }
// };

// export const saveTasksToLocalStorage = (tasks) => {
//   try {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   } catch (error) {
//     console.error("Failed to save tasks to localStorage:", error);
//   }
// };

// export const deleteTaskFromLocalStorage = (id) => {
//   try {
//     const tasks = loadTasksFromLocalStorage();
//     const filteredTasks = tasks.filter((task) => task.id !== id);
//     saveTasksToLocalStorage(filteredTasks);
//   } catch (error) {
//     console.error("Failed to delete task from localStorage:", error);
//   }
// };
