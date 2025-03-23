
import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [activeProjects] = useState([
    { 
      id: 1, 
      title: "Website Redesign", 
      client: "TechCorp", 
      dueDate: "Apr 15, 2024",
      status: "In Progress",
      budget: "$1,500"
    },
    { 
      id: 2, 
      title: "Logo Design", 
      client: "FashionBrand", 
      dueDate: "Apr 18, 2024",
      status: "In Progress",
      budget: "$400"
    },
    { 
      id: 3, 
      title: "Content Writing", 
      client: "BlogNetwork", 
      dueDate: "Apr 20, 2024",
      status: "Pending Review",
      budget: "$800"
    },
  ]);

  const completedProjects = [
    { 
      id: 4, 
      title: "Social Media Graphics", 
      client: "FitnessBrand", 
      completedDate: "Mar 25, 2024",
      status: "Completed",
      budget: "$600" 
    },
    { 
      id: 5, 
      title: "Mobile App UI", 
      client: "StartupInc", 
      completedDate: "Mar 10, 2024",
      status: "Completed",
      budget: "$2,400" 
    },
  ];

  return (
    <DashboardLayout 
      title="My Projects" 
      description="Manage all your current and past projects"
    >
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="active">Active Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="proposals">Proposals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Active Projects ({activeProjects.length})</CardTitle>
                <CardDescription>Projects you're currently working on</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Client</TableHead>
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
                        <TableCell>{project.client}</TableCell>
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
                <Button variant="outline" className="mr-2">Export as CSV</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="completed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Completed Projects ({completedProjects.length})</CardTitle>
                <CardDescription>Your finished projects</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Completed Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {completedProjects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.title}</TableCell>
                        <TableCell>{project.client}</TableCell>
                        <TableCell>{project.completedDate}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{project.status}</Badge>
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
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="proposals">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="pt-6">
              <CardContent className="flex flex-col items-center justify-center text-center p-12">
                <div className="rounded-full bg-primary/10 p-6 mb-6">
                  <Briefcase className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">No Active Proposals</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  You don't have any project proposals in progress. Start finding work to submit new proposals.
                </p>
                <Button>Find Work</Button>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Projects;
