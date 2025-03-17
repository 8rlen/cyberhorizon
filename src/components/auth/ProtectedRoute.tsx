
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useHasRole, UserRole } from "@/hooks/useUserRole";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: UserRole[];
}

const ProtectedRoute = ({ children, requiredRoles }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading, user } = useAuth();
  
  // If still loading auth state, show nothing (or could show a loading spinner)
  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  // If roles are required, check if user has the required role
  if (requiredRoles && user) {
    const hasRequiredRole = requiredRoles.includes(user.role);
    
    if (!hasRequiredRole) {
      // Redirect to dashboard if user doesn't have the required role
      return <Navigate to="/dashboard" />;
    }
  }
  
  // User is authenticated and has required role (if any), show the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
