
import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Bell, Briefcase, FileText, Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const ClientDashboard = () => {
  const [activeProjects] = useState([
    { 
      id: 1, 
      title: "Website Redesign", 
      freelancer: "John Smith", 
      dueDate: "Apr 15, 2024",
      status: "In Progress",
      budget: "$1,500"
    },
    { 
      id: 2, 
      title: "Logo Design", 
      freelancer: "Sarah Johnson", 
      dueDate: "Apr 18, 2024",
      status: "In Progress",
      budget: "$400"
    },
    { 
      id: 3, 
      title: "Content Writing", 
      freelancer: "Michael Brown", 
      dueDate: "Apr 20, 2024",
      status: "Pending Review",
      budget: "$800"
    },
  ]);

  const [applicants] = useState([
    {
      id: 1,
      name: "Emma Wilson",
      position: "Mobile App Developer",
      university: "Stanford University",
      appliedDate: "Apr 2, 2024",
      status: "New"
    },
    {
      id: 2,
      name: "David Thompson",
      position: "Graphic Designer",
      university: "RISD",
      appliedDate: "Apr 1, 2024",
      status: "Reviewed"
    }
  ]);

  // Recent notifications
  const notifications = [
    { id: 1, text: "New application for Mobile App Developer", time: "2 hours ago" },
    { id: 2, text: "John Smith submitted work for review", time: "Yesterday" },
    { id: 3, text: "Contract ready for approval", time: "Yesterday" },
  ];

  return (
    <DashboardLayout 
      title="Client Dashboard" 
      description="Manage your projects and find university talent"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content area - 2/3 width on large screens */}
        <div className="lg:col-span-2 space-y-6">
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
                <div className="text-3xl font-bold mt-1">3</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-muted-foreground text-sm">New Applicants</div>
                <div className="text-3xl font-bold mt-1">2</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-muted-foreground text-sm">Total Budget</div>
                <div className="text-3xl font-bold mt-1">$2,700</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Active Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Active Projects</CardTitle>
                  <CardDescription>Your current ongoing projects</CardDescription>
                </div>
                <Link to="/clients/post-project">
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" /> New Project
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Freelancer</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeProjects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.title}</TableCell>
                        <TableCell>{project.freelancer}</TableCell>
                        <TableCell>{project.dueDate}</TableCell>
                        <TableCell>
                          <Badge variant={project.status === "In Progress" ? "default" : "secondary"}>
                            {project.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{project.budget}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">View Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="mr-2">View All Projects</Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Recent Applicants */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Recent Applicants</CardTitle>
                <CardDescription>Students who recently applied to your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>University</TableHead>
                      <TableHead>Applied</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applicants.map((applicant) => (
                      <TableRow key={applicant.id}>
                        <TableCell className="font-medium">{applicant.name}</TableCell>
                        <TableCell>{applicant.position}</TableCell>
                        <TableCell>{applicant.university}</TableCell>
                        <TableCell>{applicant.appliedDate}</TableCell>
                        <TableCell>
                          <Badge variant={applicant.status === "New" ? "default" : "secondary"}>
                            {applicant.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">View Profile</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View All Applicants</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar - 1/3 width on large screens */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Link to="/clients/post-project">
                  <Button className="w-full justify-start" variant="outline">
                    <Plus className="mr-2 h-4 w-4" /> Post New Project
                  </Button>
                </Link>
                <Link to="/clients/find-talent">
                  <Button className="w-full justify-start" variant="outline">
                    <Search className="mr-2 h-4 w-4" /> Find Talent
                  </Button>
                </Link>
                <Link to="/dashboard/messages">
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="mr-2 h-4 w-4" /> Messages
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Notifications</CardTitle>
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
    </DashboardLayout>
  );
};

export default ClientDashboard;
