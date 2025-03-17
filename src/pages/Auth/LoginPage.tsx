
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import Logo from "@/components/shared/Logo";
import { ShieldCheck } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Logo className="mx-auto mb-6" />
            <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-muted-foreground mt-2">
              Sign in to access your account
            </p>
          </div>
          
          <LoginForm />
        </div>
      </div>
      
      {/* Right side - Image/graphic */}
      <div className="hidden md:flex md:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground/20 z-10"></div>
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="white" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full p-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md border border-white/20">
            <ShieldCheck className="h-16 w-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-3">SecurePath Academy</h2>
            <p className="text-white/90 mb-6">
              Master cybersecurity through hands-on learning, interactive labs, and real-world scenarios.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <div className="h-1.5 w-1.5 rounded-full bg-white/80"></div>
                <span>Practice in secure lab environments</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <div className="h-1.5 w-1.5 rounded-full bg-white/80"></div>
                <span>Learn from industry experts</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <div className="h-1.5 w-1.5 rounded-full bg-white/80"></div>
                <span>Earn recognized certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
