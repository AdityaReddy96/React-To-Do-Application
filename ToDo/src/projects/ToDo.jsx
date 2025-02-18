import "./ToDo.css";
import { useState } from "react";
import { TodoList } from "./ToDoList";
import { ToDoForm } from "./ToDoForm";
import { ToDoDate } from "./ToDoDate";
import { getLocalSorage, setLocalStorage } from "./ToDoLocalStorage";

export const ToDo = () => {
  // get initial data from local storage
  const [task, setTask] = useState(() => getLocalSorage());

  // input validation
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    const isTodoContentMatched = task.find((currTask) => {
      return currTask.content === content;
    });
    if (isTodoContentMatched) return;
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // handling deletion of individual task
  const handleDeleteTask = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask);
  };

  // handling check button
  const handleChecked = (content) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updatedTask);
  };

  // handling deletion of all task
  const handleClearTask = () => {
    setTask([]);
  };

  // setting data in local storage
  setLocalStorage(task);

  // handling edit of individual tasks
  const handleEditTask = (oldTask, newTask) => {
    const isDuplicate = task.find(
      (currentTask) =>
        currentTask.content === newTask && currentTask.content !== oldTask
    );

    if (isDuplicate) {
      alert("Task already exists!"); // You can also show a UI message instead of alert
      return; // Stop execution if the new task already exists
    }

    const updatedTasks = task.map((currentTask) => {
      if (currentTask.content === oldTask) {
        return { ...currentTask, id: newTask, content: newTask };
      } else {
        return currentTask;
      }
    });
    setTask(updatedTasks);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>To Do List</h1>
        <ToDoDate />
      </header>
      <ToDoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((currTask) => {
            return (
              <TodoList
                key={currTask.id}
                currTask={currTask.content}
                onhandleDeleteTask={handleDeleteTask}
                checked={currTask.checked}
                onhandleChecked={handleChecked}
                onhandleEditTask={handleEditTask}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTask}>
          Clear All
        </button>
      </section>
    </section>
  );
};
