import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Download, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import ManageEmployees from '../Dashboard/ManageEmployees';

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Search filter
  useEffect(() => {
    const filtered = userData.filter(user =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); // reset to first page on new search
  }, [searchTerm, userData]);

  // CSV Export
  const exportToCSV = () => {
    const csvContent = [
      ['Employee Name', 'New Task', 'Active Task', 'Completed', 'Failed'],
      ...filteredData.map(user => [
        user.firstName,
        user.taskCounts.newTask,
        user.taskCounts.active,
        user.taskCounts.completed,
        user.taskCounts.failed
      ])
    ]
      .map(e => e.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'all_tasks.csv';
    link.click();
  };
  {/* Manage Employees Section */}
<motion.div
  className="bg-white rounded-xl shadow-md p-6"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
>
  <ManageEmployees />
</motion.div>


  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 text-white'>
      {/* Header with search and export */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4'>
        <div className='flex items-center bg-[#2e2e2e] px-3 py-2 rounded w-full sm:w-1/2'>
          <Search className='text-gray-400 mr-2' size={20} />
          <input
            type='text'
            placeholder='Search Employee'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className='bg-transparent focus:outline-none w-full text-sm'
          />
        </div>
        <button
          onClick={exportToCSV}
          className='flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded transition'
        >
          <Download size={18} />
          Export CSV
        </button>
      </div>

      {/* Gradient Header Row */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-gradient-to-r from-[#3c3c3c] to-[#1f1f1f] mb-2 py-2 px-4 flex justify-between rounded'
      >
        <h2 className='text-sm sm:text-base font-semibold w-1/5'>Employee</h2>
        <h2 className='text-sm sm:text-base font-semibold w-1/5'>New</h2>
        <h2 className='text-sm sm:text-base font-semibold w-1/5'>Active</h2>
        <h2 className='text-sm sm:text-base font-semibold w-1/5'>Completed</h2>
        <h2 className='text-sm sm:text-base font-semibold w-1/5'>Failed</h2>
      </motion.div>

      {/* Task Rows */}
      {currentData.map((elem, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.02 }}
          className='border border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded transition'
        >
          <h2 className='text-sm sm:text-base font-medium w-1/5'>{elem.firstName}</h2>
          <h3 className='text-sm sm:text-base font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
          <h5 className='text-sm sm:text-base font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
          <h5 className='text-sm sm:text-base font-medium w-1/5 text-green-400'>{elem.taskCounts.completed}</h5>
          <h5 className='text-sm sm:text-base font-medium w-1/5 text-red-400'>{elem.taskCounts.failed}</h5>
        </motion.div>
      ))}

      {/* Pagination */}
      <div className='flex justify-center mt-4 gap-2'>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 text-sm rounded ${
              currentPage === i + 1
                ? 'bg-purple-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
