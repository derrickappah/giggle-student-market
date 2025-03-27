
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
import About from './pages/About';
import Freelancers from './pages/Freelancers';
import FreelancerProfile from './pages/FreelancerProfile';
import ProjectDetail from './pages/ProjectDetail';
import ServiceDetail from './pages/ServiceDetail';
import Dashboard from './pages/Dashboard';
import FindTalent from './pages/clients/FindTalent';
import ClientSuccessStories from './pages/clients/ClientSuccessStories';
import Enterprise from './pages/clients/Enterprise';
import Blog from './pages/company/Blog';
import Careers from './pages/company/Careers';
import Contact from './pages/company/Contact';
import Resources from './pages/students/Resources';
import Profile from './pages/dashboard/Profile';
import Projects from './pages/dashboard/Projects';
import Messages from './pages/dashboard/Messages';
import Settings from './pages/dashboard/Settings';
import Calendar from './pages/dashboard/Calendar';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';

// Helper to create protected routes
const createProtectedRoute = (element: React.ReactNode, userType?: 'student' | 'client') => {
  return <ProtectedRoute userType={userType}>{element}</ProtectedRoute>;
};

export const routes: RouteObject[] = [
  // Public Routes
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
    path: '/about',
    element: <About />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/services/:id',
    element: <ServiceDetail />
  },
  {
    path: '/freelancers',
    element: <Freelancers />
  },
  {
    path: '/freelancers/:id',
    element: <FreelancerProfile />
  },
  {
    path: '/projects/:id',
    element: <ProjectDetail />
  },
  
  // Student Public Routes
  {
    path: '/students/success-stories',
    element: <SuccessStories />
  },
  {
    path: '/students/resources',
    element: <Resources />
  },
  
  // Client Public Routes
  {
    path: '/clients/find-talent',
    element: <FindTalent />
  },
  {
    path: '/clients/success-stories',
    element: <ClientSuccessStories />
  },
  {
    path: '/clients/enterprise',
    element: <Enterprise />
  },
  
  // Company/About Routes
  {
    path: '/company/blog',
    element: <Blog />
  },
  {
    path: '/company/careers',
    element: <Careers />
  },
  {
    path: '/company/contact',
    element: <Contact />
  },
  
  // Legal Routes
  {
    path: '/legal/privacy-policy',
    element: <PrivacyPolicy />
  },
  {
    path: '/legal/terms-of-service',
    element: <TermsOfService />
  },
  {
    path: '/legal/cookie-policy',
    element: <CookiePolicy />
  },
  
  // Protected Routes
  {
    path: '/dashboard',
    element: createProtectedRoute(<Dashboard />)
  },
  {
    path: '/students/create-profile',
    element: createProtectedRoute(<CreateProfile />, 'student')
  },
  {
    path: '/student',
    element: createProtectedRoute(<StudentDashboard />, 'student')
  },
  {
    path: '/client',
    element: createProtectedRoute(<ClientDashboard />, 'client')
  },
  {
    path: '/students/find-work',
    element: createProtectedRoute(<FindWork />, 'student')
  },
  {
    path: '/clients/post-project',
    element: createProtectedRoute(<PostProject />, 'client')
  },
  
  // Dashboard Protected Routes
  {
    path: '/dashboard/profile',
    element: createProtectedRoute(<Profile />)
  },
  {
    path: '/dashboard/projects',
    element: createProtectedRoute(<Projects />)
  },
  {
    path: '/dashboard/messages',
    element: createProtectedRoute(<Messages />)
  },
  {
    path: '/dashboard/settings',
    element: createProtectedRoute(<Settings />)
  },
  {
    path: '/dashboard/calendar',
    element: createProtectedRoute(<Calendar />)
  },
  
  // 404 Route - Must be last
  {
    path: '*',
    element: <NotFound />
  }
];
