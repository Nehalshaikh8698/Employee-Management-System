// ✅ CompleteTask.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CompleteTask = ({ data, index, onStatusChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='w-[300px] p-5 bg-blue-400 rounded-xl shadow-md'
    >
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded text-white'>{data.category}</h3>
        <h4 className='text-sm text-white'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 text-white'>{data.taskDescription}</p>
      <button
        onClick={() => onStatusChange(index, 'active')}
        className='mt-6 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-1 rounded-md'
      >
        Mark as Not Done
      </button>
    </motion.div>
  );
};

export default CompleteTask;