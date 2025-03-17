
import React from "react";
import RegisterForm from "@/components/auth/RegisterForm";
import Logo from "@/components/shared/Logo";
import { ShieldCheck } from "lucide-react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Logo className="mx-auto mb-6" />
            <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
            <p className="text-muted-foreground mt-2">
              Join SecurePath and start your cybersecurity journey
            </p>
          </div>
          
          <RegisterForm />
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
            <h2 className="text-3xl font-bold text-white mb-3">Join SecurePath</h2>
            <p className="text-white/90 mb-6">
              Become part of our cybersecurity community and advance your skills with expert-led courses and hands-on labs.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <div className="h-1.5 w-1.5 rounded-full bg-white/80"></div>
                <span>Access to specialized learning paths</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <div className="h-1.5 w-1.5 rounded-full bg-white/80"></div>
                <span>Participate in CTF competitions</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <div className="h-1.5 w-1.5 rounded-full bg-white/80"></div>
                <span>Connect with cybersecurity professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
