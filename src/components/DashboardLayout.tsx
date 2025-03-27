
import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import { Home, User, FileText, MessageSquare, Settings, Calendar, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import Footer from './Footer';

interface DashboardLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  userType?: 'student' | 'client';
}

const DashboardLayout = ({ title, description, children, userType = 'student' }: DashboardLayoutProps) => {
  const { signOut } = useAuth();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  const basePath = userType === 'client' ? '/client' : '/student';
  
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: basePath },
    { icon: User, label: 'Profile', path: '/dashboard/profile' },
    { icon: FileText, label: 'Projects', path: '/dashboard/projects' },
    { icon: MessageSquare, label: 'Messages', path: '/dashboard/messages' },
    { icon: Calendar, label: 'Calendar', path: '/dashboard/calendar' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-background/80 backdrop-blur-md py-4 px-4 sticky top-0 z-50 border-b border-border/50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            UniTalent
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 bg-card rounded-lg border p-4 shadow-sm">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        
        <main className="flex-1">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">{title}</h1>
            {description && <p className="text-muted-foreground mt-2">{description}</p>}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardLayout;
