
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await login(email, password);
      toast({
        title: "Success",
        description: "Welcome back!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid email or password",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-lg"
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link to="/forgot-password" className="text-sm text-primary hover:underline">
            Forgot password?
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="rounded-lg"
        />
      </div>
      
      <Button type="submit" className="w-full btn-hover-effect" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign in"
        )}
      </Button>
      
      <div className="text-center mt-4 text-sm">
        <span className="text-muted-foreground">Don't have an account?</span>{" "}
        <Link to="/register" className="text-primary hover:underline">
          Create account
        </Link>
      </div>

      <div className="border-t border-border pt-4 mt-6">
        <p className="text-xs text-center text-muted-foreground mb-4">Demo accounts:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
          <div className="p-2 bg-muted rounded-md">
            <p><strong>Admin:</strong> admin@securepath.com</p>
            <p><strong>Pass:</strong> admin123</p>
          </div>
          <div className="p-2 bg-muted rounded-md">
            <p><strong>Instructor:</strong> instructor@securepath.com</p>
            <p><strong>Pass:</strong> instructor123</p>
          </div>
          <div className="p-2 bg-muted rounded-md">
            <p><strong>Student:</strong> student@securepath.com</p>
            <p><strong>Pass:</strong> student123</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
