
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, BookOpen, Award, Flag, Code, Zap, Gamepad2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Navigation */}
      <header className="w-full py-4 px-6 flex justify-between items-center border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="text-xl font-bold">CyberHorizon</div>
        <nav className="flex gap-4">
          <Link to="/cyber-challenges" className="text-primary hover:underline flex items-center">
            <Gamepad2 className="h-4 w-4 mr-1" /> Challenges
          </Link>
          <Link to="/login" className="text-foreground/80 hover:text-foreground">Login</Link>
          <Link to="/register">
            <Button size="sm" variant="outline">Register</Button>
          </Link>
        </nav>
      </header>
      
      {/* Hero section */}
      <div className="text-center relative z-10 px-4 max-w-4xl mx-auto mt-20 mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-slide-down">
          <span className="rounded-full w-2 h-2 bg-primary mr-2"></span>
          Next-gen cybersecurity training platform
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-slide-up">
          Elevate Your Cybersecurity Skills with CyberHorizon
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
          Learn practical cybersecurity skills through interactive courses, 
          hands-on labs, and realistic challenges designed by industry professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "200ms" }}>
          <Link to="/register">
            <Button size="lg" className="w-full sm:w-auto font-medium btn-hover-effect">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/cyber-challenges">
            <Button size="lg" variant="outline" className="w-full sm:w-auto font-medium">
              Try Our Cyber Challenges
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Featured Challenge Card */}
      <div className="w-full max-w-4xl mx-auto mb-16 px-4">
        <Card className="overflow-hidden border border-primary/20 bg-card/50 backdrop-blur shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-primary/10 p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Test Your Cyber Knowledge</h2>
                <p className="text-muted-foreground mb-6">
                  Challenge yourself with interactive cybersecurity puzzles and knowledge tests. Are you ready to prove your skills?
                </p>
                <Link to="/cyber-challenges">
                  <Button className="w-full sm:w-auto">
                    Start the Challenge
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 bg-primary/5 p-8 flex flex-col justify-center">
                <div className="flex gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Gamepad2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Flag className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Interactive CodeBreaker puzzles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Cybersecurity knowledge quizzes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Test your skills with real-world scenarios
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Features section */}
      <div className="w-full bg-primary/5 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose CyberHorizon?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our cutting-edge platform provides everything you need to master cybersecurity skills and advance your career.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Industry-Leading Content",
                description: "Learn from materials developed by cybersecurity experts and constantly updated to reflect the latest threats."
              },
              {
                icon: BookOpen,
                title: "Practical Learning",
                description: "Apply your knowledge in realistic scenarios and hands-on exercises designed to build real-world skills."
              },
              {
                icon: Award,
                title: "Certification Preparation",
                description: "Prepare for industry-recognized certifications with targeted courses and practice exams."
              },
              {
                icon: Flag,
                title: "Capture The Flag",
                description: "Compete in CTF challenges to sharpen your skills in a competitive environment."
              },
              {
                icon: Code,
                title: "Security Programming",
                description: "Learn secure coding practices and vulnerability assessment techniques."
              },
              {
                icon: Zap,
                title: "Personalized Learning",
                description: "Follow customized learning paths based on your skill level and career goals."
              }
            ].map((feature, index) => (
              <Card key={index} className="border border-primary/10 card-hover-effect">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="w-full py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Test Your Cybersecurity Knowledge?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Challenge yourself with our interactive quizzes and puzzles to assess your skills.
            </p>
            <Link to="/cyber-challenges">
              <Button size="lg" className="font-medium btn-hover-effect">
                Take the Cyber Challenge
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
