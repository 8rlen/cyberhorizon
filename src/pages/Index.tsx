
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CodeBreaker from "@/components/interactive/CodeBreaker";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="text-center relative z-10 px-4 max-w-4xl mx-auto mb-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <span className="rounded-full w-2 h-2 bg-primary mr-2"></span>
          Next-gen cybersecurity training platform
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Welcome to CyberHorizon</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The next generation platform for cybersecurity learning and skills development
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register">
            <Button size="lg" className="w-full sm:w-auto font-medium btn-hover-effect">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/login">
            <Button size="lg" variant="outline" className="w-full sm:w-auto font-medium">
              Log In
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="w-full max-w-md px-4 mb-12">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold">Try Our Interactive Hacking Challenge</h2>
          <p className="text-muted-foreground text-sm">Test your pattern recognition skills</p>
        </div>
        <CodeBreaker />
      </div>
    </div>
  );
};

export default Index;
