
import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Briefcase, FileText, Calendar, BarChart3, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [username] = useState("Student"); // This would come from auth context in a real app

  // Sample upcoming projects
  const upcomingProjects = [
    { id: 1, title: "Website Redesign", client: "TechCorp", dueDate: "Apr 15, 2024" },
    { id: 2, title: "Logo Design", client: "FashionBrand", dueDate: "Apr 18, 2024" },
    { id: 3, title: "Content Writing", client: "BlogNetwork", dueDate: "Apr 20, 2024" },
  ];

  // Sample notifications
  const notifications = [
    { id: 1, text: "New message from TechCorp", time: "2 hours ago" },
    { id: 2, text: "Payment received for Logo Design", time: "Yesterday" },
    { id: 3, text: "Project deadline reminder: Website Redesign", time: "Yesterday" },
  ];

  return (
    <PageLayout title={`Welcome, ${username}`} description="Manage your freelance projects and activity">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dashboard navigation */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>Navigate your freelancing activity</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <nav className="flex flex-col">
              <Link to="/dashboard" className="flex items-center gap-3 p-3 text-primary hover:bg-secondary">
                <BarChart3 className="h-5 w-5" />
                <span>Overview</span>
              </Link>
              <Link to="/dashboard/projects" className="flex items-center gap-3 p-3 hover:bg-secondary">
                <Briefcase className="h-5 w-5" />
                <span>My Projects</span>
              </Link>
              <Link to="/dashboard/messages" className="flex items-center gap-3 p-3 hover:bg-secondary">
                <FileText className="h-5 w-5" />
                <span>Messages</span>
              </Link>
              <Link to="/dashboard/calendar" className="flex items-center gap-3 p-3 hover:bg-secondary">
                <Calendar className="h-5 w-5" />
                <span>Calendar</span>
              </Link>
              <Link to="/dashboard/profile" className="flex items-center gap-3 p-3 hover:bg-secondary">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
              <Link to="/dashboard/settings" className="flex items-center gap-3 p-3 hover:bg-secondary">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </nav>
          </CardContent>
        </Card>

        {/* Main content area */}
        <div className="md:col-span-2 space-y-6">
          {/* Stats summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <Card>
              <CardContent className="p-4">
                <div className="text-muted-foreground text-sm">Active Projects</div>
                <div className="text-3xl font-bold mt-1">5</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-muted-foreground text-sm">Pending Proposals</div>
                <div className="text-3xl font-bold mt-1">3</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-muted-foreground text-sm">This Month</div>
                <div className="text-3xl font-bold mt-1">$560</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Projects</CardTitle>
                <CardDescription>Your project deadlines for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingProjects.map(project => (
                    <div key={project.id} className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0">
                      <div>
                        <div className="font-medium">{project.title}</div>
                        <div className="text-sm text-muted-foreground">Client: {project.client}</div>
                      </div>
                      <div className="text-sm">Due: {project.dueDate}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Projects</Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Your recent notifications</CardDescription>
                </div>
                <Bell className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map(notification => (
                    <div key={notification.id} className="flex items-start gap-4 border-b pb-3 last:border-0 last:pb-0">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{notification.text}</div>
                        <div className="text-sm text-muted-foreground">{notification.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Notifications</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
