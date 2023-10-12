import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (taskName) => {
    const newTask = { id: Math.random(), name: taskName };
    setTasks([...tasks, newTask]);
  };

  const editTask = (taskId, newName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
    setTaskToEdit(null);
  };

  const handleEdit = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      setTaskToEdit(task);
    }
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
      <TaskList tasks={tasks} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
