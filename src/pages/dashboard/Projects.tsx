
import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Search, Plus, ArrowUpRight, Clock, DollarSign, Filter, AlertCircle, CheckCircle, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import StudentStats from "@/components/StudentStats";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredActiveProjects = activeProjects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCompletedProjects = completedProjects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout 
      title="My Projects" 
      description="Manage all your current and past projects"
    >
      {/* Stats Overview */}
      <div className="mb-8">
        <StudentStats />
      </div>
      
      {/* Search and Filter Bar */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search projects..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="flex gap-2">
          <Filter className="h-4 w-4" />
          <span className="hidden sm:inline">Filter</span>
        </Button>
        <Button className="flex gap-2">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">New Project</span>
        </Button>
      </div>
      
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="active" className="flex gap-2 items-center">
            <Clock className="h-4 w-4" />
            Active Projects
          </TabsTrigger>
          <TabsTrigger value="completed" className="flex gap-2 items-center">
            <CheckCircle className="h-4 w-4" />
            Completed
          </TabsTrigger>
          <TabsTrigger value="proposals" className="flex gap-2 items-center">
            <FileText className="h-4 w-4" />
            Proposals
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Active Projects ({filteredActiveProjects.length})</CardTitle>
                <CardDescription>Projects you're currently working on</CardDescription>
              </CardHeader>
              <CardContent>
                {filteredActiveProjects.length > 0 ? (
                  <div className="overflow-x-auto">
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
                        {filteredActiveProjects.map((project) => (
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
                              <Button variant="outline" size="sm" className="flex gap-1 items-center">
                                <span>View</span>
                                <ArrowUpRight className="h-3 w-3" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <AlertCircle className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">No active projects match your search</p>
                  </div>
                )}
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
                <CardTitle>Completed Projects ({filteredCompletedProjects.length})</CardTitle>
                <CardDescription>Your finished projects</CardDescription>
              </CardHeader>
              <CardContent>
                {filteredCompletedProjects.length > 0 ? (
                  <div className="overflow-x-auto">
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
                        {filteredCompletedProjects.map((project) => (
                          <TableRow key={project.id}>
                            <TableCell className="font-medium">{project.title}</TableCell>
                            <TableCell>{project.client}</TableCell>
                            <TableCell>{project.completedDate}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-100/50 text-green-700 border-green-200">
                                {project.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{project.budget}</TableCell>
                            <TableCell>
                              <Button variant="outline" size="sm" className="flex gap-1 items-center">
                                <span>View</span>
                                <ArrowUpRight className="h-3 w-3" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <AlertCircle className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">No completed projects match your search</p>
                  </div>
                )}
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
