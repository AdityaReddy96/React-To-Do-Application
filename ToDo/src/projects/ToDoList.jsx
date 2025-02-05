/* eslint-disable react/prop-types */
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

// adding tasks
export const TodoList = ({
  currTask,
  onhandleDeleteTask,
  onhandleChecked,
  checked,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{currTask}</span>
      <button className="check-btn" onClick={() => onhandleChecked(currTask)}>
        <IoIosAddCircle />
      </button>
      <button
        className="delete-btn"
        onClick={() => onhandleDeleteTask(currTask)}
      >
        <MdDelete />
      </button>
    </li>
  );
};
