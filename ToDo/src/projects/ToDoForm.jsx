import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const ToDoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  // setting input state
  const handleInputValue = (value) => {
    setInputValue({id: value, content: value, checked: false});
  };

  // input validation through parent method
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id: "", content: "", checked: false});
  };

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(e) => handleInputValue(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
