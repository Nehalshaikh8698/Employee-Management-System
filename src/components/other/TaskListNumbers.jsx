import React from 'react'
import { motion } from 'framer-motion'
import { ClipboardList, CheckCircle, Hourglass, AlertTriangle } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
}

const TaskListNumbers = ({ data }) => {
  const cards = [
    {
      title: 'New Task',
      count: data.taskCounts.newTask,
      bg: 'bg-blue-500',
      icon: <ClipboardList className="w-8 h-8" />
    },
    {
      title: 'Completed Task',
      count: data.taskCounts.completed,
      bg: 'bg-green-500',
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: 'Accepted Task',
      count: data.taskCounts.active,
      bg: 'bg-yellow-400 text-black',
      icon: <Hourglass className="w-8 h-8 text-black" />
    },
    {
      title: 'Failed Task',
      count: data.taskCounts.failed,
      bg: 'bg-red-500',
      icon: <AlertTriangle className="w-8 h-8" />
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={`rounded-xl p-6 flex flex-col gap-2 ${card.bg}`}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={i}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">{card.count}</h2>
            {card.icon}
          </div>
          <h3 className="text-xl font-medium">{card.title}</h3>
        </motion.div>
      ))}
    </div>
  )
}

export default TaskListNumbers
