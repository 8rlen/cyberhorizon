
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AppLayout from "@/components/layout/AppLayout";

// Auth Pages
import LandingPage from "@/pages/Landing/LandingPage";
import LoginPage from "@/pages/Auth/LoginPage";
import RegisterPage from "@/pages/Auth/RegisterPage";
import NotFound from "@/pages/NotFound";
import CyberChallengesPage from "@/pages/CyberChallenges/CyberChallengesPage";

// Dashboard and Main App Pages
import DashboardPage from "@/pages/Dashboard/DashboardPage";

// Create empty placeholder pages for now
const CoursesPage = () => <div className="py-6"><h1 className="text-3xl font-bold">Courses</h1><p className="mt-2 text-muted-foreground">Courses content will be implemented here.</p></div>;
const CTFPage = () => <div className="py-6"><h1 className="text-3xl font-bold">CTF Playground</h1><p className="mt-2 text-muted-foreground">CTF Playground content will be implemented here.</p></div>;
const PathsPage = () => <div className="py-6"><h1 className="text-3xl font-bold">Learning Paths & Certificates</h1><p className="mt-2 text-muted-foreground">Learning Paths content will be implemented here.</p></div>;
const ToolsPage = () => <div className="py-6"><h1 className="text-3xl font-bold">Cybersecurity Tools</h1><p className="mt-2 text-muted-foreground">Tools content will be implemented here.</p></div>;
const AnalyticsPage = () => <div className="py-6"><h1 className="text-3xl font-bold">Analytics</h1><p className="mt-2 text-muted-foreground">Analytics content will be implemented here.</p></div>;
const UsersPage = () => <div className="py-6"><h1 className="text-3xl font-bold">User Management</h1><p className="mt-2 text-muted-foreground">User Management content will be implemented here.</p></div>;
const ProfilePage = () => <div className="py-6"><h1 className="text-3xl font-bold">Profile</h1><p className="mt-2 text-muted-foreground">Profile content will be implemented here.</p></div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cyber-challenges" element={<CyberChallengesPage />} />
            
            {/* Protected routes - Wrapped with AppLayout */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/ctf" element={<CTFPage />} />
              <Route path="/paths" element={<PathsPage />} />
              <Route path="/tools" element={<ToolsPage />} />
              
              {/* Instructor and Admin only routes */}
              <Route 
                path="/analytics" 
                element={
                  <ProtectedRoute requiredRoles={["admin", "instructor"]}>
                    <AnalyticsPage />
                  </ProtectedRoute>
                } 
              />
              
              {/* Admin only routes */}
              <Route 
                path="/users" 
                element={
                  <ProtectedRoute requiredRoles={["admin"]}>
                    <UsersPage />
                  </ProtectedRoute>
                } 
              />
              
              {/* User profile */}
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
            
            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          <Toaster />
          <Sonner />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
