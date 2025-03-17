import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/components/shared/Logo";
import CodeBreaker from "@/components/interactive/CodeBreaker";
import { 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  Award, 
  Flag, 
  Briefcase, 
  Code, 
  Library, 
  Share2, 
  Users, 
  BarChart, 
  Rocket,
  Zap,
  Sparkles,
  Braces,
  Globe,
  Shield
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Navbar */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/courses" className="nav-link">Courses</Link>
              <Link to="/paths" className="nav-link">Learning Paths</Link>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register">
                <Button size="sm" className="ml-2 btn-hover-effect">Get Started</Button>
              </Link>
            </div>
            
            <div className="md:hidden">
              <Link to="/register">
                <Button size="sm" className="btn-hover-effect">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero section */}
      <section className="pt-32 px-4 sm:px-6 lg:px-8 container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-slide-down">
            <span className="rounded-full w-2 h-2 bg-primary mr-2"></span>
            The next generation cybersecurity learning platform
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance animate-slide-up">
            Elevate Your Cybersecurity Skills with <br/>
            <span className="gradient-text">CyberHorizon</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            Learn practical cybersecurity skills through interactive courses, 
            hands-on labs, and realistic challenges designed by industry professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto font-medium btn-hover-effect">
                Join Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-medium">
                Explore Courses
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 hero-gradient"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold mb-8">Try Our Interactive Security Challenge</h2>
              <Card className="mx-auto max-w-2xl overflow-hidden border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="p-4 relative">
                  <CodeBreaker />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Learn with CyberHorizon?</h2>
          <p className="text-muted-foreground">Our platform combines theory with practice to provide the most effective cybersecurity training experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Comprehensive Courses",
              description: "Expert-led courses covering everything from fundamentals to advanced techniques."
            },
            {
              icon: ShieldCheck,
              title: "Hands-on Labs",
              description: "Practice in realistic, safe environments to apply your knowledge immediately."
            },
            {
              icon: Flag,
              title: "CTF Challenges",
              description: "Test your skills with capture-the-flag exercises at varying difficulty levels."
            },
            {
              icon: Briefcase,
              title: "Industry-Relevant Tools",
              description: "Learn with the same tools used by cybersecurity professionals in the field."
            },
            {
              icon: Award,
              title: "Certification Paths",
              description: "Progress through structured learning paths that prepare you for industry certifications."
            },
            {
              icon: Rocket,
              title: "Progress Tracking",
              description: "Track your learning journey with detailed progress and performance metrics."
            },
            {
              icon: Zap,
              title: "Adaptive Learning",
              description: "Personalized learning paths adapted to your skill level and learning pace."
            },
            {
              icon: Code,
              title: "Coding Exercises",
              description: "Improve your security coding skills with guided programming exercises."
            },
            {
              icon: Globe,
              title: "Global Community",
              description: "Connect with cybersecurity professionals and students from around the world."
            },
          ].map((feature, index) => (
            <Card key={index} className="border border-primary/10 card-hover-effect">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning paths section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 container mx-auto relative z-10 bg-gradient-to-br from-primary/5 to-background rounded-3xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Specialized Learning Paths</h2>
          <p className="text-muted-foreground">Structured learning journeys designed to build your expertise in specific cybersecurity domains.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: "Network Security",
              description: "Master network security principles, tools, and best practices.",
              courses: 12,
              labs: 24
            },
            {
              icon: Braces,
              title: "Application Security",
              description: "Learn to develop secure applications and identify vulnerabilities.",
              courses: 15,
              labs: 30
            },
            {
              icon: Sparkles,
              title: "Ethical Hacking",
              description: "Develop ethical hacking skills with practical penetration testing techniques.",
              courses: 18,
              labs: 36
            },
            {
              icon: BarChart,
              title: "Security Analysis",
              description: "Learn to analyze and respond to security threats and incidents.",
              courses: 14,
              labs: 28
            },
          ].map((path, index) => (
            <Card key={index} className="border border-primary/10 overflow-hidden card-hover-effect">
              <div className="h-2 bg-gradient-to-r from-primary to-primary/60"></div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <path.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4 mr-1" /> {path.courses} Courses
                    <span className="mx-2">•</span>
                    <Library className="h-4 w-4 mr-1" /> {path.labs} Labs
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{path.title}</h3>
                <p className="text-muted-foreground mb-4">{path.description}</p>
                <Link to="/paths" className="text-primary font-medium flex items-center hover:underline">
                  Explore Path <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/paths">
            <Button variant="outline" className="font-medium">
              View All Learning Paths
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Cybersecurity Journey?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join thousands of students learning essential cybersecurity skills on our platform.
            </p>
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-primary font-medium btn-hover-effect">
                Start Learning Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo className="mb-4" />
              <p className="text-muted-foreground mb-4">
                Expert-led cybersecurity training for all skill levels.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link to="/courses" className="text-muted-foreground hover:text-foreground transition-colors">Courses</Link></li>
                <li><Link to="/paths" className="text-muted-foreground hover:text-foreground transition-colors">Learning Paths</Link></li>
                <li><Link to="/ctf" className="text-muted-foreground hover:text-foreground transition-colors">CTF Challenges</Link></li>
                <li><Link to="/tools" className="text-muted-foreground hover:text-foreground transition-colors">Tools</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} CyberHorizon. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
