import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDown, LogOut, UserCircle2 } from 'lucide-react'

const Header = ({ changeUser, data }) => {
  const [username, setUsername] = useState('Employee')

  useEffect(() => {
    const user = data || JSON.parse(localStorage.getItem('loggedInUser'))
    if (user && user.firstName) {
      setUsername(user.firstName)
    }else if(user && user.role == 'admin'){
      setUsername('Admin(NEHAL)')
    }
  }, [data])

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }

  return (
    <motion.header
      className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white px-6 py-5 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <UserCircle2 className="w-12 h-12 text-white" />
          <div>
            <h1 className="text-xl sm:text-2xl font-light text-gray-300">
              Welcome back,
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-white">
              {username} 👋
            </h2>
          </div>
        </div>

        {/* Dropdown Menu */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex items-center justify-center gap-2 bg-gray-800 border border-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
              {username}
              <ChevronDown className="w-4 h-4" />
            </Menu.Button>
          </div>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-yellow-300 divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
              <div className="px-1 py-1">
                {/* Profile Option */}
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-700' : ''
                      } group flex w-full items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-800`}
                    >
                      <UserCircle2 className="w-4 h-4" />
                      Profile
                    </button>
                  )}
                </Menu.Item>

                {/* Logout Option */}
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={logOutUser}
                      className={`${
                        active ? 'bg-red-600 text-white' : 'text-red-500'
                      } group flex w-full items-center gap-2 rounded-md px-4 py-2 text-sm font-medium`}
                    >
                      <LogOut className="w-4 h-4" />
                      Log Out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </motion.header>
  )
}

export default Header
