/* eslint-disable react/prop-types */
export const EditTask = ({setEditedTask, editedTask, handleSaveClick, handleCancelClick}) => {
    return (
        <div className="edit-input-container">
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className="edit-input"
          />
          <button className="save-btn" onClick={handleSaveClick}>
            Save
          </button>
          <button className="cancel-btn" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      )
}