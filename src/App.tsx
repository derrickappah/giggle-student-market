
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";

// Main pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Freelancers from "./pages/Freelancers";
import FreelancerProfile from "./pages/FreelancerProfile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

// Dashboard pages
import Projects from "./pages/dashboard/Projects";
import Messages from "./pages/dashboard/Messages";
import DashboardCalendar from "./pages/dashboard/Calendar";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";

// Student pages
import FindWork from "./pages/students/FindWork";
import CreateProfile from "./pages/students/CreateProfile";
import Resources from "./pages/students/Resources";
import SuccessStories from "./pages/students/SuccessStories";

// Client pages
import PostProject from "./pages/clients/PostProject";
import FindTalent from "./pages/clients/FindTalent";
import Enterprise from "./pages/clients/Enterprise";
import ClientSuccessStories from "./pages/clients/ClientSuccessStories";

// Company pages
import Careers from "./pages/company/Careers";
import Blog from "./pages/company/Blog";
import Contact from "./pages/company/Contact";

// Legal pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  
                  {/* Main navigation routes */}
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:id" element={<ServiceDetail />} />
                  <Route path="/freelancers" element={<Freelancers />} />
                  <Route path="/freelancers/:id" element={<FreelancerProfile />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  
                  {/* Dashboard section routes */}
                  <Route path="/dashboard/projects" element={<Projects />} />
                  <Route path="/dashboard/messages" element={<Messages />} />
                  <Route path="/dashboard/calendar" element={<DashboardCalendar />} />
                  <Route path="/dashboard/profile" element={<Profile />} />
                  <Route path="/dashboard/settings" element={<Settings />} />
                  
                  {/* Student section routes */}
                  <Route path="/students/find-work" element={<FindWork />} />
                  <Route path="/students/create-profile" element={<CreateProfile />} />
                  <Route path="/students/resources" element={<Resources />} />
                  <Route path="/students/success-stories" element={<SuccessStories />} />
                  
                  {/* Client section routes */}
                  <Route path="/clients/post-project" element={<PostProject />} />
                  <Route path="/clients/find-talent" element={<FindTalent />} />
                  <Route path="/clients/enterprise" element={<Enterprise />} />
                  <Route path="/clients/success-stories" element={<ClientSuccessStories />} />
                  
                  {/* Company section routes */}
                  <Route path="/company/careers" element={<Careers />} />
                  <Route path="/company/blog" element={<Blog />} />
                  <Route path="/company/contact" element={<Contact />} />
                  
                  {/* Legal pages */}
                  <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/legal/terms-of-service" element={<TermsOfService />} />
                  <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
                  
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
