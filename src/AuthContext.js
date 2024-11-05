import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null); // Store user data

  const login = (data) => {
    setIsAuthenticated(true);
    setUserData(data); // Store user data upon login
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserData(null); // Clear user data upon logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
