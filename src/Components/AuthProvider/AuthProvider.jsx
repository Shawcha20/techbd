"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { clearAuthCookie, getAuthCookie } from "@/lib/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Read cookie once on app load
  useEffect(() => {
    setIsAuthenticated(getAuthCookie());
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    clearAuthCookie();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
