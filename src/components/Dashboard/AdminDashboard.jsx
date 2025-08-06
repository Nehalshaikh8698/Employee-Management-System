import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import ManageEmployees from '../Dashboard/ManageEmployees';
import { motion } from 'framer-motion'

const AdminDashboard = (props) => {
  return (
    
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-screen-xl mx-auto space-y-8">
        {/* Header */}
        <Header changeUser={props.changeUser} />

        {/* Create Task Section */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            📝 Create New Task
          </h2>
          <CreateTask />
        </motion.div>

        {/* All Tasks Section */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            📋 All Tasks
          </h2>
          <AllTask />
        </motion.div>
          <motion.div
  className="bg-white rounded-xl shadow-md p-6"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
>
  <ManageEmployees />
</motion.div>
      </div>
    </div>
    
  )
}
<ManageEmployees />


export default AdminDashboard
