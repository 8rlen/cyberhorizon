
import { useState, useEffect } from "react";

// Types for user roles
export type UserRole = "admin" | "instructor" | "student";

// Hook to get the current user's role from localStorage
export function useUserRole(): UserRole {
  const [role, setRole] = useState<UserRole>("student");

  useEffect(() => {
    // In a real app, this would come from an authentication service
    const storedRole = localStorage.getItem("userRole") as UserRole;
    if (storedRole && ["admin", "instructor", "student"].includes(storedRole)) {
      setRole(storedRole);
    }
  }, []);

  return role;
}

// Helper function to check if user has a specific role
export function useHasRole(requiredRole: UserRole | UserRole[]): boolean {
  const userRole = useUserRole();
  
  if (Array.isArray(requiredRole)) {
    return requiredRole.includes(userRole);
  }
  
  return userRole === requiredRole;
}

// Helper to save user role to localStorage (for demo purposes)
export function setUserRole(role: UserRole): void {
  localStorage.setItem("userRole", role);
  window.dispatchEvent(new Event("storage"));
}
