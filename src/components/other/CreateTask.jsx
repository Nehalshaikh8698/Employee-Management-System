import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        })

        const data = userData

        data.forEach((elem) => {
            if (asignTo === elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask += 1
            }
        })

        setUserData(data)

        // Clear form
        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className="p-8 mt-8 bg-[#1e1e2f]/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-700 max-w-6xl mx-auto transition-all duration-300">
            <h2 className="text-white text-2xl font-semibold mb-6">Create New Task</h2>

            <form
                onSubmit={submitHandler}
                className="flex flex-col md:flex-row justify-between gap-8"
            >
                {/* Left Side Inputs */}
                <div className="flex-1 space-y-5">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Task Title</label>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className="w-full px-4 py-2 bg-[#2a2a3d] border border-gray-600 text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            type="text"
                            placeholder="Enter Title of Task"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Date</label>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className="w-full px-4 py-2 bg-[#2a2a3d] border border-gray-600 text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            type="date"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Assign To</label>
                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className="w-full px-4 py-2 bg-[#2a2a3d] border border-gray-600 text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            type="text"
                            placeholder="Employee Name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Category</label>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-2 bg-[#2a2a3d] border border-gray-600 text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            type="text"
                            placeholder="Design, Dev, etc"
                        />
                    </div>
                </div>

                {/* Right Side Textarea & Button */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Task Description</label>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            className="w-full h-44 px-4 py-3 bg-[#2a2a3d] border border-gray-600 text-white text-sm rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder="Write task details..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
