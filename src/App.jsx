import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, SetUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'NehalShaikh@Admin.com' && password === '1234') {
      setUser('admin');
      setLoggedInUserData(null); // Fix: reset employee data
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: null }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        );
      } else {
        alert('Invalid Credentials');
      }
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans transition-all duration-300">
      <Toaster position="top-right" />
      {!user ? (
        <div className="flex items-center justify-center h-screen px-4">
          <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl">
            <Login handleLogin={handleLogin} />
          </div>
        </div>
      ) : user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
        <Footer/>
    </div>
  
  );
  
};

export default App;
