
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Briefcase, FileText, Calendar, User, Settings } from "lucide-react";
import Header from "./Header";
import { useAuth } from "@/context/AuthContext";

interface DashboardLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  userType?: "student" | "client";
}

const DashboardLayout = ({ 
  title, 
  description, 
  children, 
  userType = "student" 
}: DashboardLayoutProps) => {
  const location = useLocation();
  const { profile } = useAuth();
  const actualUserType = profile?.user_type || userType;
  const basePath = actualUserType === "client" ? "/client" : "/student";
  
  const navItems = [
    { path: `${basePath}`, icon: <BarChart3 className="h-5 w-5" />, label: "Overview" },
    { path: `${basePath}/projects`, icon: <Briefcase className="h-5 w-5" />, label: "My Projects" },
    { path: `${basePath}/messages`, icon: <FileText className="h-5 w-5" />, label: "Messages" },
    { path: `${basePath}/calendar`, icon: <Calendar className="h-5 w-5" />, label: "Calendar" },
    { path: `${basePath}/profile`, icon: <User className="h-5 w-5" />, label: "Profile" },
    { path: `${basePath}/settings`, icon: <Settings className="h-5 w-5" />, label: "Settings" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-80px-300px)] bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            {description && <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Dashboard navigation */}
            <Card className="md:col-span-1 h-fit">
              <CardContent className="p-0">
                <nav className="flex flex-col">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 p-4 ${
                        location.pathname === item.path
                          ? "text-primary bg-primary/10 font-medium"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </CardContent>
            </Card>
            
            {/* Main content area */}
            <div className="md:col-span-3">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
