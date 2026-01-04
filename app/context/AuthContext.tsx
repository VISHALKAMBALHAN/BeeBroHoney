/*import React, { createContext, useContext, useState } from 'react';

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
*/
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Alert } from 'react-native';

// Define the shape of auth context
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

// Create context with default undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      // TODO: Replace with actual API call
      console.log('Login attempt:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const mockUser: User = {
        id: '1',
        name: 'BeeBro Honey',
        email: email,
        phone: '9876543210',
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      Alert.alert('Success', 'Logged in successfully!');
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
      throw error;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      // TODO: Replace with actual API call
      console.log('Signup attempt:', { name, email });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful signup
      const mockUser: User = {
        id: '1',
        name: name,
        email: email,
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      Alert.alert('Success', 'Account created successfully!');
    } catch (error) {
      Alert.alert('Error', 'Signup failed. Please try again.');
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    Alert.alert('Logged Out', 'You have been logged out successfully.');
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  
  return context;
}









