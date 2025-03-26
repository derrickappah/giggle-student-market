
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

interface ProtectedRouteProps {
  userType?: 'student' | 'client';
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ userType, children }) => {
  const { user, profile, isLoading } = useAuth();
  const location = useLocation();

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  // If not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If userType is specified, check if user has the right type
  if (userType && profile?.user_type !== userType) {
    // Redirect client users to client dashboard
    if (profile?.user_type === 'client') {
      return <Navigate to="/client" replace />;
    }
    // Redirect student users to student dashboard
    return <Navigate to="/student" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
