import React, { useState } from 'react';
import '../components/TaskForm.css';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [taskName, setTaskName] = useState(taskToEdit ? taskToEdit.name : '');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() === '') {
      alert('Task name cannot be empty.');
      return;
    }

    if (taskToEdit) {
      editTask(taskToEdit.id, taskName);
    } else {
      addTask(taskName);
    }

    setTaskName('');
  };

  return (
    <div className="task-form">
      <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={handleTaskNameChange}
        />
        <button type="submit">{taskToEdit ? 'Edit' : 'Add'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
