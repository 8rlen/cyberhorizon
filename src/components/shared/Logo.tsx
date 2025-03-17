
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";

interface LogoProps {
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  variant?: "default" | "light" | "sidebar";
}

const Logo = ({ 
  className, 
  textClassName, 
  iconClassName,
  variant = "default" 
}: LogoProps) => {
  return (
    <Link 
      to="/" 
      className={cn(
        "flex items-center gap-2.5 font-semibold", 
        className
      )}
    >
      <div className={cn(
        "flex items-center justify-center rounded-lg p-1.5",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "light" && "bg-white text-primary",
        variant === "sidebar" && "bg-sidebar-primary text-sidebar-primary-foreground",
        iconClassName
      )}>
        <Shield className="w-5 h-5" />
      </div>
      <span className={cn(
        "text-lg font-bold",
        variant === "default" && "text-foreground",
        variant === "light" && "text-white",
        variant === "sidebar" && "text-sidebar-foreground",
        textClassName
      )}>
        SecurePath
      </span>
    </Link>
  );
};

export default Logo;
