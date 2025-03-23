
import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, MapPin, Mail, User, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  const [skills] = useState([
    "UI/UX Design", "Adobe Photoshop", "Logo Design", "Sketch", "Figma", 
    "Adobe Illustrator", "Web Design", "App Design", "Wireframing"
  ]);
  
  return (
    <DashboardLayout 
      title="Profile" 
      description="Manage your professional profile and information"
    >
      <Tabs defaultValue="view" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="view">View Profile</TabsTrigger>
          <TabsTrigger value="edit">Edit Profile</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        </TabsList>
        
        <TabsContent value="view">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-1"
            >
              <Card>
                <CardContent className="flex flex-col items-center text-center pt-6">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage src="/placeholder.svg" alt="Profile Photo" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold">John Doe</h2>
                  <p className="text-muted-foreground mb-4">UI/UX Designer</p>
                  <div className="flex items-center gap-1 mb-6">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium ml-1">5.0</span>
                    <span className="text-xs text-muted-foreground">(24 reviews)</span>
                  </div>
                  
                  <div className="w-full flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">3 years experience</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">Download CV</Button>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                  <CardDescription>Your professional skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                  <CardDescription>Professional summary</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    I'm a UI/UX designer with 3 years of experience creating user-centered designs for web and mobile applications. My expertise includes wireframing, prototyping, and visual design.
                  </p>
                  <p>
                    I'm passionate about creating intuitive, accessible, and beautiful user interfaces that solve real problems. My approach combines aesthetics with functionality to ensure the best user experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                  <CardDescription>Your work history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">Senior UI/UX Designer</h3>
                          <p className="text-sm text-muted-foreground">DesignHub Inc.</p>
                        </div>
                        <Badge variant="outline">Current</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Jan 2022 - Present</p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Lead UI/UX design for multiple client projects</li>
                        <li>Collaborate with development team to implement designs</li>
                        <li>Conduct user research and testing</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">UI Designer</h3>
                          <p className="text-sm text-muted-foreground">TechStart Solutions</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Jun 2020 - Dec 2021</p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Created user interfaces for web and mobile applications</li>
                        <li>Developed wireframes and prototypes</li>
                        <li>Collaborated with product managers to refine requirements</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>Your academic background</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Bachelor of Fine Arts, Graphic Design</h3>
                      <p className="text-sm text-muted-foreground">California Institute of Arts</p>
                      <p className="text-sm text-muted-foreground">2016 - 2020</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold">Certificate in UX Design</h3>
                      <p className="text-sm text-muted-foreground">Design Academy Online</p>
                      <p className="text-sm text-muted-foreground">2019</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>
        
        <TabsContent value="edit">
          <Card>
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center space-y-4 mb-4">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback><User className="h-12 w-12" /></AvatarFallback>
                </Avatar>
                <Button variant="outline">Change Photo</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input id="title" defaultValue="UI/UX Designer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="San Francisco, CA" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="about">About Me</Label>
                  <textarea 
                    id="about" 
                    className="w-full min-h-32 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    defaultValue="I'm a UI/UX designer with 3 years of experience creating user-centered designs for web and mobile applications. My expertise includes wireframing, prototyping, and visual design.

I'm passionate about creating intuitive, accessible, and beautiful user interfaces that solve real problems. My approach combines aesthetics with functionality to ensure the best user experience."
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="portfolio">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio</CardTitle>
              <CardDescription>Showcase your best work</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
                  <div className="aspect-video w-full overflow-hidden">
                    <img src="/placeholder.svg" alt="Project 1" className="h-full w-full object-cover transition-all group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">E-commerce Website Redesign</h3>
                    <p className="text-sm text-muted-foreground">UI/UX Design</p>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
                  <div className="aspect-video w-full overflow-hidden">
                    <img src="/placeholder.svg" alt="Project 2" className="h-full w-full object-cover transition-all group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Food Delivery Mobile App</h3>
                    <p className="text-sm text-muted-foreground">Mobile UI Design</p>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
                  <div className="aspect-video w-full overflow-hidden">
                    <img src="/placeholder.svg" alt="Project 3" className="h-full w-full object-cover transition-all group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Fitness Tracker Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Dashboard Design</p>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
                  <div className="aspect-video w-full overflow-hidden">
                    <img src="/placeholder.svg" alt="Project 4" className="h-full w-full object-cover transition-all group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Financial App Branding</h3>
                    <p className="text-sm text-muted-foreground">Branding, UI Design</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-1">Add New Project</h3>
                  <p className="text-sm text-muted-foreground mb-4">Showcase your latest work</p>
                  <Button variant="outline">Upload Project</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Profile;
