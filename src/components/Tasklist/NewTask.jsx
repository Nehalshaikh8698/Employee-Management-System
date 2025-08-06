// ✅ NewTask.jsx
import React from 'react';
import { motion } from 'framer-motion';

const NewTask = ({ data, index, onStatusChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className='w-[300px] p-5 bg-green-400 rounded-xl shadow-lg'
    >
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded text-white'>{data.category}</h3>
        <h4 className='text-sm text-white'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 text-white'>{data.taskDescription}</p>
      <button
        onClick={() => onStatusChange(index, 'active')}
        className='mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md'
      >
        Accept Task
      </button>
    </motion.div>
  );
};

export default NewTask;
