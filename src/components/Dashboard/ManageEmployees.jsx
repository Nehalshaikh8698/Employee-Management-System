import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import { Trash2, Download } from 'lucide-react';

const ManageEmployees = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState('employee'); // default role
  const [search, setSearch] = useState('');

  const handleAddEmployee = (e) => {
    e.preventDefault();

    if (userData.some((emp) => emp.email === email)) {
      toast.error('Employee with this email already exists!');
      return;
    }

    const newEmployee = {
      firstName,
      email,
      password,
      role,
      tasks: [],
      taskCounts: {
        newTask: 0,
        active: 0,
        completed: 0,
        failed: 0
      }
    };

    const updatedData = [...userData, newEmployee];
    setUserData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData));
    toast.success('Employee added successfully!');

    setFirstName('');
    setEmail('');
    setPassword('');
  };

  const handleDelete = (email) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      const filtered = userData.filter((emp) => emp.email !== email);
      setUserData(filtered);
      localStorage.setItem('userData', JSON.stringify(filtered));
      toast.success('Employee deleted!');
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      ['First Name', 'Email', 'Role'],
      ...userData.map(emp => [emp.firstName, emp.email, emp.role || 'employee'])
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'employees.csv';
    link.click();
  };

  const filteredEmployees = userData.filter((emp) =>
    emp.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 mt-10 bg-gradient-to-tr bg-[#bac6dd] rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">👨‍💼 Manage Employees</h2>

      {/* Employee Form */}
      <form
        onSubmit={handleAddEmployee}
        className="grid text-black grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
      >
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="border text-black border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
        />
        <button
          type="submit"
          className="sm:col-span-3 bg-emerald-600 hover:bg-emerald-700 text-black font-semibold py-2 rounded-md transition-all duration-200"
        >
          ➕ Add Employee
        </button>
      </form>

      {/* Search + Export Bar */}
      <div className="flex text-black flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name..."
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          onClick={exportToCSV}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-all"
        >
          <Download size={18} />
          Export CSV
        </button>
      </div>

      {/* Employee List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-80 overflow-y-auto pr-1">
        {filteredEmployees.map((emp, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center shadow hover:shadow-md transition-all"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{emp.firstName}</h3>
              <p className="text-sm text-gray-500">{emp.email}</p>
            </div>
            <button
              onClick={() => handleDelete(emp.email)}
              className="text-red-500 hover:text-red-700 transition"
              title="Delete"
            >
              <Trash2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEmployees;
