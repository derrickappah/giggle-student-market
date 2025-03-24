
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Briefcase, Calendar, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/context/AuthContext";

const Dashboard = () => {
  const { profile } = useAuth();
  const firstName = profile?.first_name || "Student";

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
    <DashboardLayout 
      title={`Welcome, ${firstName}`} 
      description="Manage your freelance projects and activity"
      userType={profile?.user_type}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          className="col-span-1 md:col-span-2"
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
              <Link to={profile?.user_type === "client" ? "/client/projects" : "/student/projects"}>
                <Button variant="outline">View All Projects</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-2"
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
    </DashboardLayout>
  );
};

export default Dashboard;
