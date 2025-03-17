
import React from "react";
import { NavLink } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { 
  BookOpen, 
  Flag, 
  ShieldCheck, 
  Award, 
  BarChart, 
  Wrench, 
  Users, 
  LogOut,
  Home,
  Rocket,
  Globe,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";
import { useUserRole } from "@/hooks/useUserRole";

const menuItems = [
  { 
    label: "Dashboard", 
    icon: Home, 
    path: "/dashboard", 
    roles: ["admin", "instructor", "student"] 
  },
  { 
    label: "Courses", 
    icon: BookOpen, 
    path: "/courses", 
    roles: ["admin", "instructor", "student"] 
  },
  { 
    label: "CTF Playground", 
    icon: Flag, 
    path: "/ctf", 
    roles: ["admin", "instructor", "student"] 
  },
  { 
    label: "Paths & Certificates", 
    icon: Award, 
    path: "/paths", 
    roles: ["admin", "instructor", "student"] 
  },
  { 
    label: "Tools", 
    icon: Wrench, 
    path: "/tools", 
    roles: ["admin", "instructor", "student"] 
  },
  { 
    label: "Community", 
    icon: Globe, 
    path: "/community", 
    roles: ["admin", "instructor", "student"] 
  },
  { 
    label: "Analytics", 
    icon: BarChart, 
    path: "/analytics", 
    roles: ["admin", "instructor"] 
  },
  { 
    label: "User Management", 
    icon: Users, 
    path: "/users", 
    roles: ["admin"] 
  },
  { 
    label: "System Settings", 
    icon: Zap, 
    path: "/settings", 
    roles: ["admin"] 
  },
];

export const Sidebar = ({ mobileOpen, setMobileOpen }: { mobileOpen?: boolean, setMobileOpen?: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const isMobile = useIsMobile();
  const userRole = useUserRole();

  const filteredMenuItems = menuItems.filter(item => 
    item.roles.includes(userRole)
  );

  const handleLinkClick = () => {
    if (isMobile && setMobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <ShadcnSidebar className={cn("transition-all duration-300", mobileOpen ? "block" : "hidden md:block")}>
      <SidebarContent className="py-6 flex flex-col h-full">
        <div className="px-6 mb-8">
          <Logo variant="sidebar" />
        </div>

        <div className="flex-1 px-3">
          <nav className="space-y-1">
            {filteredMenuItems.map(item => (
              <NavLink 
                key={item.path} 
                to={item.path}
                onClick={handleLinkClick}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200",
                  "group hover:bg-sidebar-accent hover:text-sidebar-foreground",
                  isActive ? "bg-sidebar-accent text-sidebar-foreground" : "text-sidebar-foreground/80"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mt-auto px-3">
          <NavLink to="/profile" className={({ isActive }) => cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium mb-2 transition-all duration-200",
            "group hover:bg-sidebar-accent hover:text-sidebar-foreground",
            isActive ? "bg-sidebar-accent text-sidebar-foreground" : "text-sidebar-foreground/80"
          )}>
            <ShieldCheck className="w-5 h-5" />
            <span>Profile</span>
          </NavLink>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={() => window.location.href = '/logout'}
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </Button>
        </div>

        {isMobile && (
          <div className="absolute top-4 right-4">
            <SidebarTrigger />
          </div>
        )}
      </SidebarContent>
    </ShadcnSidebar>
  );
};

export default Sidebar;
