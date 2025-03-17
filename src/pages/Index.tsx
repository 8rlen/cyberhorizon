
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ThreeScene from "@/components/3d/ThreeScene";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <ThreeScene />
      <div className="text-center relative z-10 px-4">
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
    </div>
  );
};

export default Index;
