import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const login = (userData, token) => {
    setUser(userData);
    setAccessToken(token);

    sessionStorage.setItem("accessToken", token);
    sessionStorage.setItem("userData", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);

    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("userData");
  };

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    const userDataString = sessionStorage.getItem("userData");

    if (token && userDataString) {
      const userData = JSON.parse(userDataString);

      setAccessToken(token);
      setUser(userData);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
