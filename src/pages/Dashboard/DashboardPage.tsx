
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";
import { Calendar, Clock, Play, Book, Award, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RecentCoursesSection = () => {
  // Mock data - in a real app, this would come from an API
  const recentCourses = [
    {
      id: "course-1",
      title: "Network Security Fundamentals",
      progress: 65,
      lastAccessed: "2 days ago",
      thumbnail: "/placeholder.svg",
    },
    {
      id: "course-2",
      title: "Ethical Hacking Bootcamp",
      progress: 32,
      lastAccessed: "Yesterday",
      thumbnail: "/placeholder.svg",
    },
    {
      id: "course-3",
      title: "Secure Coding Practices",
      progress: 90,
      lastAccessed: "3 hours ago",
      thumbnail: "/placeholder.svg",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Recently Accessed Courses</h2>
        <Link to="/courses">
          <Button variant="ghost" size="sm">
            View all courses
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {recentCourses.map((course) => (
          <Card key={course.id} className="card-hover">
            <CardHeader className="p-0">
              <div className="relative h-40 rounded-t-lg overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm font-medium">Continue learning</span>
                    <Button size="icon" variant="secondary" className="h-7 w-7 rounded-full">
                      <Play className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-base mb-2">{course.title}</CardTitle>
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{course.lastAccessed}</span>
                </div>
                <span>{course.progress}% complete</span>
              </div>
              <Progress value={course.progress} className="h-1.5" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const UpcomingEventsSection = () => {
  // Mock data
  const upcomingEvents = [
    {
      id: "event-1",
      title: "Live Workshop: Web App Penetration Testing",
      date: "May 12, 2023",
      time: "2:00 PM - 4:00 PM",
    },
    {
      id: "event-2",
      title: "CTF Competition: Secure the Flag",
      date: "May 18, 2023",
      time: "All day",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Upcoming Events</CardTitle>
        <CardDescription>Stay updated with upcoming workshops and events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex items-start space-x-3">
              <div className="bg-muted rounded-md p-2 flex-shrink-0">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {event.date} • {event.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const AchievementsSection = () => {
  // Mock data
  const achievements = [
    {
      id: "achievement-1",
      title: "First Lab Completed",
      date: "April 28, 2023",
      icon: CheckCircle,
    },
    {
      id: "achievement-2",
      title: "Week-long Streak",
      date: "May 3, 2023",
      icon: Zap,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Achievements</CardTitle>
        <CardDescription>Track your learning milestones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex items-start space-x-3">
              <div className="bg-muted rounded-md p-2 flex-shrink-0">
                <achievement.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const LearningPathSection = () => {
  // Mock data
  const currentPath = {
    title: "Penetration Tester",
    progress: 45,
    totalCourses: 12,
    completedCourses: 5,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Learning Path</CardTitle>
        <CardDescription>Your journey to becoming a {currentPath.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">
              {currentPath.completedCourses} of {currentPath.totalCourses} courses completed
            </span>
            <span className="text-sm font-medium">{currentPath.progress}%</span>
          </div>
          <Progress value={currentPath.progress} className="h-2" />
          
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <Award className="h-4 w-4 mr-1 text-primary" />
              <span>Est. completion: August 2023</span>
            </div>
            <Link to="/paths">
              <Button variant="outline" size="sm" className="text-xs h-8">
                View Path
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatCard = ({ title, value, icon: Icon, className }: { title: string; value: string; icon: any; className?: string }) => (
  <Card className={className}>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </CardContent>
  </Card>
);

const DashboardPage = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}</h1>
        <p className="text-muted-foreground mt-1">Here's an overview of your learning journey</p>
      </div>
      
      {/* Stats section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard 
          title="Courses In Progress" 
          value="3" 
          icon={Book}
        />
        <StatCard 
          title="Labs Completed" 
          value="12" 
          icon={CheckCircle}
        />
        <StatCard 
          title="Hours Learned" 
          value="24" 
          icon={Clock}
        />
        <StatCard 
          title="Certificates" 
          value="1" 
          icon={Award}
        />
      </div>
      
      {/* Recent courses */}
      <RecentCoursesSection />
      
      {/* Additional information in a 2-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LearningPathSection />
        <div className="space-y-6">
          <UpcomingEventsSection />
          <AchievementsSection />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
