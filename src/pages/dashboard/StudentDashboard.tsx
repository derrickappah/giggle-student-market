
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // If user is authenticated but doesn't have a profile, redirect to create profile
    if (user && !profile?.bio) {
      toast({
        title: "Complete your profile",
        description: "Please complete your profile to continue"
      });
      navigate('/students/create-profile');
    }
  }, [user, profile, navigate]);

  const firstName = profile?.first_name || "Student";
  
  return (
    <DashboardLayout 
      title={`Welcome, ${firstName}`} 
      description="Manage your student freelance activities"
      userType="student"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/students/find-work">
                <Button variant="outline" className="w-full justify-start">
                  Find Work
                </Button>
              </Link>
              <Link to="/student/projects">
                <Button variant="outline" className="w-full justify-start">
                  My Projects
                </Button>
              </Link>
              <Link to="/student/messages">
                <Button variant="outline" className="w-full justify-start">
                  Messages
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Your Stats</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Active Projects</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completed Projects</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Earned This Month</p>
                <p className="text-2xl font-bold">$0</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
