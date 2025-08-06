// ✅ FailedTask.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FailedTask = ({ data, index, onStatusChange }) => {
  return (
    <motion.div
      initial={{ rotate: -2 }}
      animate={{ rotate: 0 }}
      className='w-[300px] p-5 bg-red-400 rounded-xl shadow-md'
    >
      <div className='flex justify-between items-center'>
        <h3 className='bg-black text-sm px-3 py-1 rounded text-white'>{data.category}</h3>
        <h4 className='text-sm text-white'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 text-white'>{data.taskDescription}</p>
      <button
        onClick={() => onStatusChange(index, 'active')}
        className='mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-1 rounded-md'
      >
        Retry Task
      </button>
    </motion.div>
  );
};

export default FailedTask;
