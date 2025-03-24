import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from '@/context/AuthContext';

const StudentLinks = () => (
  <NavigationMenuContent>
    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
            href="/students/find-work"
          >
            <div className="mt-4 mb-2 text-lg font-medium text-white">
              Find Work
            </div>
            <p className="text-sm leading-tight text-white/90">
              Discover freelance opportunities that match your skills and schedule
            </p>
          </a>
        </NavigationMenuLink>
      </li>
      <li>
        <Link
          to="/students/create-profile"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
        >
          <div className="text-sm font-medium leading-none">Create Profile</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            Build your freelancer profile to showcase your skills
          </p>
        </Link>
      </li>
      <li>
        <Link
          to="/students/resources"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
        >
          <div className="text-sm font-medium leading-none">Resources</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            Guides, tutorials, and tips for successful freelancing
          </p>
        </Link>
      </li>
      <li>
        <Link
          to="/students/success-stories"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
        >
          <div className="text-sm font-medium leading-none">Success Stories</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            Real stories from students who found success on our platform
          </p>
        </Link>
      </li>
    </ul>
  </NavigationMenuContent>
);

const ClientLinks = () => (
  <NavigationMenuContent>
    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
            href="/clients/post-project"
          >
            <div className="mt-4 mb-2 text-lg font-medium text-white">
              Post a Project
            </div>
            <p className="text-sm leading-tight text-white/90">
              Create a project listing to find the perfect student talent
            </p>
          </a>
        </NavigationMenuLink>
      </li>
      <li>
        <Link
          to="/clients/find-talent"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
        >
          <div className="text-sm font-medium leading-none">Find Talent</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            Browse profiles of skilled university students
          </p>
        </Link>
      </li>
      <li>
        <Link
          to="/clients/enterprise"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
        >
          <div className="text-sm font-medium leading-none">Enterprise</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            Custom solutions for businesses and organizations
          </p>
        </Link>
      </li>
      <li>
        <Link
          to="/clients/success-stories"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
        >
          <div className="text-sm font-medium leading-none">Success Stories</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            Case studies from businesses that found great talent
          </p>
        </Link>
      </li>
    </ul>
  </NavigationMenuContent>
);

const CompanyLinks = () => (
  <NavigationMenuContent>
    <ul className="grid w-[400px] gap-3 p-4">
      <li>
        <Link
          to="/about"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
        >
          <div className="text-sm font-medium leading-none">About Us</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            Learn about our mission and the team behind UniTalent
          </p>
        </Link>
      </li>
      <li>
        <Link
          to="/company/careers"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
        >
          <div className="text-sm font-medium leading-none">Careers</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            Join our team and help build the future of student work
          </p>
        </Link>
      </li>
      <li>
        <Link
          to="/company/blog"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
        >
          <div className="text-sm font-medium leading-none">Blog</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            Insights, tips, and news from the UniTalent team
          </p>
        </Link>
      </li>
      <li>
        <Link
          to="/company/contact"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
        >
          <div className="text-sm font-medium leading-none">Contact</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            Get in touch with our support and sales teams
          </p>
        </Link>
      </li>
    </ul>
  </NavigationMenuContent>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, profile, signOut } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;
  const isLoggedIn = !!user;
  const userType = profile?.user_type || 'student';

  const dashboardLink = userType === 'client' ? '/client' : '/student';

  return (
    <header className="bg-background/80 backdrop-blur-md py-4 px-4 sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            UniTalent
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>For Students</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                            href="/students/find-work"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Find Work
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Discover freelance opportunities that match your skills and schedule
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link
                          to="/students/create-profile"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
                        >
                          <div className="text-sm font-medium leading-none">Create Profile</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Build your freelancer profile to showcase your skills
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/students/resources"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
                        >
                          <div className="text-sm font-medium leading-none">Resources</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Guides, tutorials, and tips for successful freelancing
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/students/success-stories"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
                        >
                          <div className="text-sm font-medium leading-none">Success Stories</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Real stories from students who found success on our platform
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>For Clients</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                            href="/clients/post-project"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Post a Project
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Create a project listing to find the perfect student talent
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link
                          to="/clients/find-talent"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
                        >
                          <div className="text-sm font-medium leading-none">Find Talent</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Browse profiles of skilled university students
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/clients/enterprise"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
                        >
                          <div className="text-sm font-medium leading-none">Enterprise</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Custom solutions for businesses and organizations
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/clients/success-stories"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
                        >
                          <div className="text-sm font-medium leading-none">Success Stories</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Case studies from businesses that found great talent
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <Link
                          to="/about"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
                        >
                          <div className="text-sm font-medium leading-none">About Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our mission and the team behind UniTalent
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/company/careers"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
                        >
                          <div className="text-sm font-medium leading-none">Careers</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Join our team and help build the future of student work
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/company/blog"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
                        >
                          <div className="text-sm font-medium leading-none">Blog</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Insights, tips, and news from the UniTalent team
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/company/contact"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
                        >
                          <div className="text-sm font-medium leading-none">Contact</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Get in touch with our support and sales teams
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    {profile?.first_name || 'Account'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to={dashboardLink}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to={`${dashboardLink}/profile`}>Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to={`${dashboardLink}/settings`}>Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="text-red-500 cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Log In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground/70 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-2"
          >
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-md ${isActive('/') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* For Students Section */}
              <div className="px-4 py-2 text-foreground/70 font-medium">
                For Students
              </div>
              <Link 
                to="/students/find-work" 
                className={`px-8 py-2 rounded-md ${isActive('/students/find-work') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Find Work
              </Link>
              <Link 
                to="/students/create-profile" 
                className={`px-8 py-2 rounded-md ${isActive('/students/create-profile') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Create Profile
              </Link>
              <Link 
                to="/students/resources" 
                className={`px-8 py-2 rounded-md ${isActive('/students/resources') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/students/success-stories" 
                className={`px-8 py-2 rounded-md ${isActive('/students/success-stories') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Success Stories
              </Link>
              
              {/* For Clients Section */}
              <div className="px-4 py-2 text-foreground/70 font-medium">
                For Clients
              </div>
              <Link 
                to="/clients/post-project" 
                className={`px-8 py-2 rounded-md ${isActive('/clients/post-project') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Post a Project
              </Link>
              <Link 
                to="/clients/find-talent" 
                className={`px-8 py-2 rounded-md ${isActive('/clients/find-talent') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Find Talent
              </Link>
              <Link 
                to="/clients/enterprise" 
                className={`px-8 py-2 rounded-md ${isActive('/clients/enterprise') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Enterprise
              </Link>
              <Link 
                to="/clients/success-stories" 
                className={`px-8 py-2 rounded-md ${isActive('/clients/success-stories') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Success Stories
              </Link>
              
              {/* Company Section */}
              <div className="px-4 py-2 text-foreground/70 font-medium">
                Company
              </div>
              <Link 
                to="/about" 
                className={`px-8 py-2 rounded-md ${isActive('/about') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/company/careers" 
                className={`px-8 py-2 rounded-md ${isActive('/company/careers') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Link 
                to="/company/blog" 
                className={`px-8 py-2 rounded-md ${isActive('/company/blog') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/company/contact" 
                className={`px-8 py-2 rounded-md ${isActive('/company/contact') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Account actions */}
              <div className="pt-4 flex flex-col space-y-2">
                {isLoggedIn ? (
                  <>
                    <Link to={dashboardLink} onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                    <Button 
                      variant="destructive" 
                      className="w-full justify-start"
                      onClick={() => {
                        signOut();
                        setIsOpen(false);
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Log In
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
