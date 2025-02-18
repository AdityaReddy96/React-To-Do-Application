/* eslint-disable react/prop-types */
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { EditTask } from "./ToDoEdit";

// adding tasks
export const TodoList = ({
  currTask,
  onhandleDeleteTask,
  onhandleChecked,
  checked,
  onhandleEditTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(currTask);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onhandleEditTask(currTask, editedTask); // Pass the old task and the new task text
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedTask(currTask); // Reset the edited task to the original task
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      <>
        <span className={checked ? "checkList" : "notCheckList"}>
          {currTask}
        </span>
        <button className="check-btn" onClick={() => onhandleChecked(currTask)}>
          <IoIosAddCircle />
        </button>
        <div className="edit-container">
          <button className="edit-btn" onClick={handleEditClick}>
            <CiEdit />
          </button>
          {isEditing && (
            <EditTask
              setEditedTask={setEditedTask}
              editedTask={editedTask}
              handleSaveClick={handleSaveClick}
              handleCancelClick={handleCancelClick}
            />
          )}
        </div>
        <button
          className="delete-btn"
          onClick={() => onhandleDeleteTask(currTask)}
        >
          <MdDelete />
        </button>
      </>
    </li>
  );
};
