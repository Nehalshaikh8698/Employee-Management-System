// ✅ TaskList.jsx (Centralized Handler + Props)
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import NewTask from './NewTask';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import toast from 'react-hot-toast';

const TaskList = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleStatusChange = (taskIndex, newStatus) => {
    const updatedUser = { ...data };
    const task = updatedUser.tasks[taskIndex];

    // Reset status flags
    task.newTask = false;
    task.active = false;
    task.completed = false;
    task.failed = false;

    // Set new status
    task[newStatus] = true;

    // Update taskCounts
    const counts = { newTask: 0, active: 0, completed: 0, failed: 0 };
    updatedUser.tasks.forEach((t) => {
      if (t.newTask) counts.newTask++;
      if (t.active) counts.active++;
      if (t.completed) counts.completed++;
      if (t.failed) counts.failed++;
    });
    updatedUser.taskCounts = counts;

    // Update context and localStorage
    const updatedList = userData.map((u) =>
      u.email === updatedUser.email ? updatedUser : u
    );
    setUserData(updatedList);
    localStorage.setItem('userData', JSON.stringify(updatedList));

    toast.success(`Task marked as ${newStatus}`);
  };

  return (
    <div className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
      {data.tasks.map((task, idx) => {
        if (task.newTask) return <NewTask key={idx} data={task} index={idx} onStatusChange={handleStatusChange} />;
        if (task.active) return <AcceptTask key={idx} data={task} index={idx} onStatusChange={handleStatusChange} />;
        if (task.completed) return <CompleteTask key={idx} data={task} index={idx} onStatusChange={handleStatusChange} />;
        if (task.failed) return <FailedTask key={idx} data={task} index={idx} onStatusChange={handleStatusChange} />;
      })}
    </div>
  );
};

export default TaskList;