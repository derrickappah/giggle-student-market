
import { RouteObject } from 'react-router-dom';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import CreateProfile from '@/pages/students/CreateProfile';
import StudentDashboard from '@/pages/dashboard/StudentDashboard';
import AuthCallback from '@/pages/AuthCallback';
import ProtectedRoute from '@/components/ProtectedRoute';
import ClientDashboard from './pages/dashboard/ClientDashboard';
import FindWork from './pages/students/FindWork';
import PostProject from './pages/clients/PostProject';
import NotFound from './pages/NotFound';
import SuccessStories from './pages/students/SuccessStories';
import Services from './pages/Services';

// Helper to create protected routes
const createProtectedRoute = (element: React.ReactNode) => {
  return <ProtectedRoute>{element}</ProtectedRoute>;
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/auth-callback',
    element: <AuthCallback />
  },
  {
    path: '/students/success-stories',
    element: <SuccessStories />
  },
  {
    path: '/services',
    element: <Services />
  },
  
  // Protected Routes
  {
    path: '/students/create-profile',
    element: createProtectedRoute(<CreateProfile />)
  },
  {
    path: '/student',
    element: createProtectedRoute(<StudentDashboard />)
  },
  {
    path: '/client',
    element: createProtectedRoute(<ClientDashboard />)
  },
  {
    path: '/students/find-work',
    element: createProtectedRoute(<FindWork />)
  },
  {
    path: '/clients/post-project',
    element: createProtectedRoute(<PostProject />)
  },
  
  // 404 Route - Must be last
  {
    path: '*',
    element: <NotFound />
  }
];
