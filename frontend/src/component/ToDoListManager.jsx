import React, { useState } from 'react';
import TaskItem from './TaskItem';

function ToDoListManager() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [nextId, setNextId] = useState(1);

  const handleAddTask = () => {
    if (taskName.trim() === '' && taskDesc.trim() === '') return;
    setTasks([
      ...tasks,
      { id: nextId, name: taskName, desc: taskDesc, completed: false }
    ]);
    setNextId(nextId + 1);
    setTaskName('');
    setTaskDesc('');
  };

  const handleTaskChange = (id, name, desc) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, name, desc } : task
    ));
  };

  const handleTaskComplete = (id, completed) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed } : task
    ));
  };

  return (
    <div>
      <h2>To-Do List Manager</h2>
      <div>
        <input type="text" placeholder="Task Name" value={taskName} onChange={e => setTaskName(e.target.value)}
        />
        <input type="text" placeholder="Task Description" value={taskDesc} onChange={e => setTaskDesc(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.length === 0 ? null : tasks.map(task => (
          <TaskItem key={task.id} task={task} onChange={handleTaskChange} onComplete={handleTaskComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoListManager;
