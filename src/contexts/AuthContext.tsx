
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserRole } from "@/hooks/useUserRole";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users for testing
const DEMO_USERS = [
  {
    id: "admin-1",
    name: "Admin User",
    email: "admin@securepath.com",
    password: "admin123",
    role: "admin" as UserRole,
    avatar: "",
  },
  {
    id: "instructor-1",
    name: "Instructor User",
    email: "instructor@securepath.com",
    password: "instructor123",
    role: "instructor" as UserRole,
    avatar: "",
  },
  {
    id: "student-1",
    name: "Student User",
    email: "student@securepath.com",
    password: "student123",
    role: "student" as UserRole,
    avatar: "",
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const foundUser = DEMO_USERS.find(u => u.email === email && u.password === password);
      
      if (!foundUser) {
        throw new Error("Invalid credentials");
      }
      
      const { password: _, ...userWithoutPassword } = foundUser;
      
      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      localStorage.setItem("userRole", userWithoutPassword.role);
      
      setUser(userWithoutPassword);
      navigate("/dashboard");
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userExists = DEMO_USERS.some(u => u.email === email);
      
      if (userExists) {
        throw new Error("User already exists");
      }
      
      // In a real app, this would create a new user in the database
      // For demo purposes, we'll just simulate successful registration
      
      // Automatically log in after registration
      const newUser = {
        id: `student-${Date.now()}`,
        name,
        email,
        role: "student" as UserRole,
      };
      
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("userRole", newUser.role);
      
      setUser(newUser);
      navigate("/dashboard");
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userRole");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
