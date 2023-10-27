import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [trainer, setTrainer] = useState(null);

  const login = (trainerData) => {
    setTrainer(trainerData);
  };

  const logout = () => {
    setTrainer(null);
  };

  return (
    <AuthContext.Provider value={{ trainer, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
