import React, { useEffect, useState } from 'react';

function TaskItem({ task, onChange, onComplete }) {
  const [name, setName] = useState(task.name);
  const [desc, setDesc] = useState(task.desc);

  useEffect(() => {
    console.log(`Task ${task.id} mounted`);
    return () => {
      console.log(`Task ${task.id} will unmount`);
    };
  }, [task.id]);

  useEffect(() => {
    setName(task.name);
    setDesc(task.desc);
  }, [task.name, task.desc]);

  const handleNameChange = e => {
    setName(e.target.value);
    onChange(task.id, e.target.value, desc);
  };
  const handleDescChange = e => {
    setDesc(e.target.value);
    onChange(task.id, name, e.target.value);
  };
  const handleComplete = e => {
    onComplete(task.id, e.target.checked);
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={handleComplete} />
      <input type="text" value={name} onChange={handleNameChange} readOnly={task.completed} placeholder="Task Name"
      />
      <input type="text" value={desc} onChange={handleDescChange} readOnly={task.completed} placeholder="Task Description"
      />
    </li>
  );
}

export default TaskItem;
