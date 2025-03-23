
import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Shield, CreditCard, Bell, Globe, Lock, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState({
    projectUpdates: true,
    messages: true,
    accountActivity: true,
    marketing: false
  });
  
  const handleSaveChanges = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been updated successfully.",
    });
  };
  
  return (
    <DashboardLayout 
      title="Settings" 
      description="Manage your account settings and preferences"
    >
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="profile">Profile Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="accountEmail">Email Address</Label>
                    <Input id="accountEmail" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountUsername">Username</Label>
                    <Input id="accountUsername" defaultValue="johndoe" />
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">Language and Region</h3>
                    <p className="text-sm text-muted-foreground">
                      Set your preferred language and regional settings
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <select
                        id="language"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="en-US">English (United States)</option>
                        <option value="en-GB">English (United Kingdom)</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <select
                        id="timezone"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                        <option value="America/New_York">Eastern Time (US & Canada)</option>
                        <option value="Europe/London">London</option>
                        <option value="Europe/Paris">Paris</option>
                        <option value="Asia/Tokyo">Tokyo</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">Account Status</h3>
                    <p className="text-sm text-muted-foreground">
                      Your account status and subscription level
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-md bg-muted">
                    <div>
                      <p className="font-medium flex items-center">
                        Freelancer Account
                        <Badge variant="outline" className="ml-2">Active</Badge>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Member since: April 2022
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Upgrade Plan
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="destructive">Delete Account</Button>
                <Button onClick={handleSaveChanges}>Save Changes</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="profile">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Customize how your profile appears to clients</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="hourlyRate">Hourly Rate (USD)</Label>
                    <Input id="hourlyRate" type="number" defaultValue="45" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <select
                      id="availability"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option>Full Time (40+ hrs/week)</option>
                      <option>Part Time (20-30 hrs/week)</option>
                      <option>Less than 20 hrs/week</option>
                      <option>Not Available</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="portfolioWebsite">Portfolio Website</Label>
                  <Input id="portfolioWebsite" defaultValue="https://johndoe-portfolio.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills (comma separated)</Label>
                  <Input id="skills" defaultValue="UI/UX Design, Adobe Photoshop, Logo Design, Sketch, Figma, Adobe Illustrator, Web Design, App Design, Wireframing" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <textarea 
                    id="bio" 
                    className="w-full min-h-32 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    defaultValue="I'm a UI/UX designer with 3 years of experience creating user-centered designs for web and mobile applications. My expertise includes wireframing, prototyping, and visual design."
                  />
                </div>
                
                <div className="border-t pt-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">Profile Visibility</h3>
                    <p className="text-sm text-muted-foreground">
                      Control who can see your profile and contact you
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="profileVisibility">Profile Visibility</Label>
                        <p className="text-sm text-muted-foreground">
                          Make your profile visible to potential clients
                        </p>
                      </div>
                      <Switch id="profileVisibility" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="showAvailability">Show Availability</Label>
                        <p className="text-sm text-muted-foreground">
                          Display your availability status on your profile
                        </p>
                      </div>
                      <Switch id="showAvailability" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="showRates">Show Rates</Label>
                        <p className="text-sm text-muted-foreground">
                          Display your hourly rates on your profile
                        </p>
                      </div>
                      <Switch id="showRates" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSaveChanges}>Save Changes</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="notifications">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" /> Notification Settings
                </CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Email Notifications</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailProjectUpdates" className="font-medium">Project Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive updates about your projects
                        </p>
                      </div>
                      <Switch 
                        id="emailProjectUpdates" 
                        checked={emailNotifications.projectUpdates}
                        onCheckedChange={(checked) => setEmailNotifications(prev => ({ ...prev, projectUpdates: checked }))}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailMessages" className="font-medium">Messages</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications for new messages
                        </p>
                      </div>
                      <Switch 
                        id="emailMessages" 
                        checked={emailNotifications.messages}
                        onCheckedChange={(checked) => setEmailNotifications(prev => ({ ...prev, messages: checked }))}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailAccountActivity" className="font-medium">Account Activity</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about your account activity
                        </p>
                      </div>
                      <Switch 
                        id="emailAccountActivity" 
                        checked={emailNotifications.accountActivity}
                        onCheckedChange={(checked) => setEmailNotifications(prev => ({ ...prev, accountActivity: checked }))}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailMarketing" className="font-medium">Marketing</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive marketing and promotional emails
                        </p>
                      </div>
                      <Switch 
                        id="emailMarketing" 
                        checked={emailNotifications.marketing}
                        onCheckedChange={(checked) => setEmailNotifications(prev => ({ ...prev, marketing: checked }))}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6 space-y-4">
                  <h3 className="font-medium">Push Notifications</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="pushNewProjects" className="font-medium">New Projects</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications for new project opportunities
                        </p>
                      </div>
                      <Switch id="pushNewProjects" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="pushDeadlines" className="font-medium">Deadline Reminders</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive reminders about upcoming deadlines
                        </p>
                      </div>
                      <Switch id="pushDeadlines" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="rounded-md bg-muted p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Globe className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium">Notification Preferences</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Your notification preferences will be applied across all devices. You can update your preferences at any time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Reset to Default</Button>
                <Button onClick={handleSaveChanges}>Save Preferences</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="billing">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" /> Billing Information
                </CardTitle>
                <CardDescription>Manage your billing details and payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mb-4">
                  <h3 className="text-lg font-medium">Current Plan</h3>
                  <div className="mt-3 p-4 rounded-md bg-muted">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Freelancer Plan</p>
                        <p className="text-sm text-muted-foreground">$24/month, billed monthly</p>
                      </div>
                      <Badge>Current Plan</Badge>
                    </div>
                    <div className="mt-3 text-sm">
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>Up to 15 active projects</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>Unlimited messages</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>Custom profile</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">Change Plan</Button>
                      <Button variant="destructive" size="sm">Cancel Plan</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-md">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-md">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-muted-foreground">Expires 12/24</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline">Default</Badge>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">Add Payment Method</Button>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-4">Billing History</h3>
                  
                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 p-3 border-b bg-muted font-medium text-sm">
                      <div>Date</div>
                      <div>Description</div>
                      <div>Amount</div>
                      <div className="text-right">Status</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-4 p-3 text-sm">
                        <div>Apr 1, 2023</div>
                        <div>Freelancer Plan</div>
                        <div>$24.00</div>
                        <div className="text-right">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Paid</Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 p-3 text-sm">
                        <div>Mar 1, 2023</div>
                        <div>Freelancer Plan</div>
                        <div>$24.00</div>
                        <div className="text-right">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Paid</Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 p-3 text-sm">
                        <div>Feb 1, 2023</div>
                        <div>Freelancer Plan</div>
                        <div>$24.00</div>
                        <div className="text-right">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Paid</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Download Invoice History</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="security">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" /> Security Settings
                </CardTitle>
                <CardDescription>Manage your account security and privacy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Password</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div></div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>
                  
                  <Button>Update Password</Button>
                </div>
                
                <div className="border-t pt-6 space-y-4">
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch id="twoFactor" />
                  </div>
                  
                  <div className="rounded-md bg-muted p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium">Phone Number Verification</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Add a phone number to enable SMS two-factor authentication
                        </p>
                        <div className="mt-3">
                          <Button variant="outline" size="sm">Add Phone Number</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6 space-y-4">
                  <h3 className="font-medium">Login Sessions</h3>
                  
                  <div className="rounded-md border divide-y">
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Chrome on Windows • San Francisco, CA
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Last active: Today at 10:43 AM
                          </p>
                        </div>
                        <Badge>Current</Badge>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Safari on iPhone</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            San Francisco, CA
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Last active: Yesterday at 8:15 PM
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Log Out</Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">Log Out of All Devices</Button>
                </div>
                
                <div className="border-t pt-6 space-y-4">
                  <h3 className="font-medium">Account Activity</h3>
                  
                  <div className="rounded-md border">
                    <div className="grid grid-cols-3 p-3 border-b bg-muted font-medium text-sm">
                      <div>Activity</div>
                      <div>Location</div>
                      <div>Date & Time</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-3 p-3 text-sm">
                        <div>Login</div>
                        <div>San Francisco, CA</div>
                        <div>Today at 10:43 AM</div>
                      </div>
                      <div className="grid grid-cols-3 p-3 text-sm">
                        <div>Password Changed</div>
                        <div>San Francisco, CA</div>
                        <div>Apr 2, 2023 at 2:30 PM</div>
                      </div>
                      <div className="grid grid-cols-3 p-3 text-sm">
                        <div>Login</div>
                        <div>San Francisco, CA</div>
                        <div>Apr 1, 2023 at 9:15 AM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Your data is secure</span>
                </div>
                <Button onClick={handleSaveChanges}>Save Changes</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Settings;
