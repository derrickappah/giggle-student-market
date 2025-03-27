
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from 'next-themes';
import { useThemeContext } from '@/components/ThemeProvider';

const Settings = () => {
  const { user, profile } = useAuth();
  const userType = profile?.user_type || 'student';
  const { theme } = useTheme();
  const { isDarkMode } = useThemeContext();
  
  return (
    <DashboardLayout 
      title="Settings" 
      description="Manage your account settings"
      userType={userType as 'student' | 'client'}
    >
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Appearance</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Theme</p>
                <p className="text-sm text-muted-foreground">
                  Current theme: {isDarkMode ? 'Dark' : 'Light'}
                </p>
              </div>
              <ThemeToggle />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <p className="text-sm text-muted-foreground">
              Email: {user?.email}
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
