
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Edit } from 'lucide-react';
import SkillsCard from '@/components/SkillsCard';

const Profile = () => {
  const { user, profile } = useAuth();
  const userType = profile?.user_type || 'student';
  
  // Get user skills from profile
  const userSkills = profile?.user_details?.skills || [];
  
  return (
    <DashboardLayout 
      title="My Profile" 
      description="View and manage your profile"
      userType={userType as 'student' | 'client'}
    >
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <Link to={`/${userType === 'student' ? 'students' : 'clients'}/edit-profile`}>
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{profile?.first_name} {profile?.last_name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{user?.email}</p>
              </div>
              {userType === 'student' && (
                <>
                  <div>
                    <p className="text-sm text-muted-foreground">University</p>
                    <p className="font-medium">{profile?.university || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Course/Major</p>
                    <p className="font-medium">{profile?.user_details?.course || 'Not specified'}</p>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
        
        {userType === 'student' && (
          <>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Bio</h2>
                <p>{profile?.bio || 'No bio provided yet.'}</p>
              </CardContent>
            </Card>
            
            <SkillsCard 
              title="Skills" 
              skills={userSkills as string[]} 
              className="border shadow-sm"
            />
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Profile;
