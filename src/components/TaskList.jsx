import React from 'react';
import '../components/TaskList.css';
const TaskList = ({ tasks, handleEdit, handleDelete }) => {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.name}</span>
            <button onClick={() => handleEdit(task.id)}>Edit</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
