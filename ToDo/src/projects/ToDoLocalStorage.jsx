const todoKey = "ReactTodo";

// method to get data from local storage
export const getLocalSorage = () => {
  const data = localStorage.getItem(todoKey);
  if (!data) return [];
  return JSON.parse(data);
};

// method to set data to local storage
export const setLocalStorage = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
};

