import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      <div className="min-h-screen w-full bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white ">
        {children}
      </div>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
