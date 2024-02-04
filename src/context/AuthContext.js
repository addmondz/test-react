// src/context/AuthContext.js
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Implement your login logic here (e.g., check user credentials)
    setUser(userData);
  };

  const register = (userData) => {
    // Implement your registration logic here
    // You can store user data in local storage or use mock data
    // For example: localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
