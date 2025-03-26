
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuthProvider } from '@/context/AuthContext';
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
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/auth-callback" element={<AuthCallback />} />
            
            {/* Protected Routes */}
            <Route 
              path="/students/create-profile" 
              element={
                <ProtectedRoute>
                  <CreateProfile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student" 
              element={
                <ProtectedRoute>
                  <StudentDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/client" 
              element={
                <ProtectedRoute>
                  <ClientDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/students/find-work" 
              element={
                <ProtectedRoute>
                  <FindWork />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/clients/post-project" 
              element={
                <ProtectedRoute>
                  <PostProject />
                </ProtectedRoute>
              } 
            />
            
            {/* 404 Route - Must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
