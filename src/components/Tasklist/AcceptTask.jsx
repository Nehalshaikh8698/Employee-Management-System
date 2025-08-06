// ✅ AcceptTask.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AcceptTask = ({ data, index, onStatusChange }) => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className='w-[300px] p-5 bg-yellow-400 rounded-xl shadow-lg'
    >
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded text-white'>{data.category}</h3>
        <h4 className='text-sm text-white'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 text-white'>{data.taskDescription}</p>
      <div className='flex justify-between mt-6'>
        <button
          onClick={() => onStatusChange(index, 'completed')}
          className='bg-green-600 text-white px-3 py-1 rounded-md'
        >
          Mark Completed
        </button>
        <button
          onClick={() => onStatusChange(index, 'failed')}
          className='bg-red-600 text-white px-3 py-1 rounded-md'
        >
          Mark Failed
        </button>
      </div>
    </motion.div>
  );
};

export default AcceptTask;
