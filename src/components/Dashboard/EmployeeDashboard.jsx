import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { motion } from 'framer-motion'

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-[#1C1C1C] p-4 sm:p-6 md:p-8 text-white">
      <div className="max-w-screen-xl mx-auto space-y-8">

        {/* Header */}
        <Header changeUser={props.changeUser} data={props.data} />

        {/* Task Stats Section */}
        <motion.div
          className="bg-[#2A2A2A] rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
            📊 Task Overview
          </h2>
          <TaskListNumbers data={props.data} />
        </motion.div>

        {/* Task List Section */}
        <motion.div
          className="bg-[#2A2A2A] rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
            📋 Your Tasks
          </h2>
          <TaskList data={props.data} />
        </motion.div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
