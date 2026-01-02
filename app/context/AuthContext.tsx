import React, { createContext, useContext, useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // 🔐 LOGIN
  const login = async (email: string, password: string) => {
    // ⛔ Replace with API later
    if (email && password) {
      setUser({
        id: '1',
        name: 'BeeBro User',
        email,
      });
      return true;
    }
    return false;
  };

  // 📝 SIGNUP
  const signup = async (name: string, email: string, password: string) => {
    // ⛔ Replace with API later
    if (name && email && password) {
      setUser({
        id: '1',
        name,
        email,
      });
      return true;
    }
    return false;
  };

  // 🚪 LOGOUT
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
