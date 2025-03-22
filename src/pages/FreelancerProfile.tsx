
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, MapPin, Clock, Briefcase, GraduationCap, Calendar, Award, CheckCircle, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Define the freelancer type (same as in Freelancers.tsx)
interface Freelancer {
  id: string;
  name: string;
  university: string;
  avatar: string;
  rating: number;
  reviews: number;
  location: string;
  hourlyRate: number;
  completedProjects: number;
  skills: string[];
  about: string;
  // Additional fields for profile page
  memberSince?: string;
  education?: {
    degree: string;
    field: string;
    university: string;
    graduationYear: string;
  }[];
  languages?: {
    language: string;
    proficiency: string;
  }[];
  portfolio?: {
    id: string;
    title: string;
    image: string;
    description: string;
  }[];
}

// Sample data for freelancers (expanded from Freelancers.tsx)
const freelancers: Freelancer[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    university: 'Stanford University',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    rating: 4.9,
    reviews: 42,
    location: 'San Francisco, CA',
    hourlyRate: 45,
    completedProjects: 78,
    skills: ['Web Development', 'React', 'Node.js', 'UI/UX', 'JavaScript', 'MongoDB', 'Express', 'TypeScript'],
    about: 'Computer Science student specializing in full-stack web development with 3+ years of freelance experience. I build responsive, high-performance web applications for startups and established businesses alike. My focus is on creating clean, maintainable code that solves real business problems.',
    memberSince: 'September 2020',
    education: [
      {
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        university: 'Stanford University',
        graduationYear: '2023'
      }
    ],
    languages: [
      { language: 'English', proficiency: 'Native' },
      { language: 'Spanish', proficiency: 'Intermediate' }
    ],
    portfolio: [
      {
        id: '101',
        title: 'E-commerce Platform',
        image: 'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500',
        description: 'Built a fully responsive e-commerce platform with React frontend and Node.js backend.'
      },
      {
        id: '102',
        title: 'Task Management App',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500',
        description: 'Developed a task management application with real-time updates using Socket.io.'
      },
      {
        id: '103',
        title: 'Portfolio Website',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500',
        description: 'Designed and built a custom portfolio website for a client in the creative industry.'
      }
    ]
  },
  // Add more freelancers with extended profile information if needed
];

const FreelancerProfile = () => {
  const { id } = useParams<{ id: string }>();
  const freelancer = freelancers.find(f => f.id === id);
  
  if (!freelancer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Freelancer not found</h2>
          <Link to="/freelancers" className="text-primary hover:underline">
            Browse all freelancers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/freelancers" className="flex items-center text-sm text-primary hover:text-primary/80">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to freelancers
        </Link>
      </div>
      
      <div className="container mx-auto px-4 py-6 mb-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left Column - Profile Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="sticky top-24"
            >
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="h-32 w-32 rounded-full overflow-hidden mb-4">
                    <img 
                      src={freelancer.avatar} 
                      alt={freelancer.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h1 className="text-2xl font-bold mb-1">{freelancer.name}</h1>
                  <p className="text-foreground/70 mb-2">{freelancer.university}</p>
                  <div className="flex items-center justify-center mb-3">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">{freelancer.rating}</span>
                    <span className="mx-1 text-foreground/50">•</span>
                    <span className="text-sm">{freelancer.reviews} reviews</span>
                  </div>
                  <p className="flex items-center text-sm text-foreground/70 mb-4">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    {freelancer.location}
                  </p>
                  
                  <Button className="w-full mb-3">
                    Contact Me
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    View Services
                  </Button>
                </div>
                
                <div className="border-t border-border pt-6">
                  <div className="flex justify-between mb-4">
                    <div className="text-foreground/70">Hourly Rate</div>
                    <div className="font-semibold">${freelancer.hourlyRate}/hr</div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="text-foreground/70">Projects Completed</div>
                    <div className="font-semibold">{freelancer.completedProjects}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-foreground/70">Member Since</div>
                    <div className="font-semibold">{freelancer.memberSince}</div>
                  </div>
                </div>
              </div>
              
              {/* Skills */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-secondary/50 text-foreground/80 text-xs px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Languages */}
              {freelancer.languages && (
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">Languages</h3>
                  <div className="space-y-3">
                    {freelancer.languages.map((lang, index) => (
                      <div key={index} className="flex justify-between">
                        <div>{lang.language}</div>
                        <div className="text-foreground/70">{lang.proficiency}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Education */}
              {freelancer.education && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-4">Education</h3>
                  <div className="space-y-4">
                    {freelancer.education.map((edu, index) => (
                      <div key={index}>
                        <div className="flex items-start mb-1">
                          <GraduationCap className="h-5 w-5 mr-2 text-primary mt-0.5" />
                          <div>
                            <div className="font-medium">{edu.degree} in {edu.field}</div>
                            <div className="text-foreground/70">{edu.university}</div>
                            <div className="text-sm text-foreground/60">Class of {edu.graduationYear}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
          
          {/* Right Column - Main Content */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* About */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">About Me</h3>
                <p className="text-foreground/80 whitespace-pre-line">
                  {freelancer.about}
                </p>
              </div>
              
              {/* Portfolio */}
              {freelancer.portfolio && (
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-6">Portfolio</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {freelancer.portfolio.map((item) => (
                      <div key={item.id} className="rounded-lg overflow-hidden border border-border">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold mb-2">{item.title}</h4>
                          <p className="text-sm text-foreground/70">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Reviews */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Client Reviews</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="font-semibold">{freelancer.rating}</span>
                    <span className="text-foreground/70 ml-1">({freelancer.reviews})</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Sample reviews */}
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-border pb-6 last:border-0 last:pb-0">
                      <div className="flex items-start mb-3">
                        <div className="h-10 w-10 rounded-full bg-secondary/50 flex items-center justify-center mr-3">
                          <span className="font-medium text-foreground/70">
                            {String.fromCharCode(64 + review)}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">Client {review}</div>
                          <div className="flex items-center">
                            <div className="flex mr-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-yellow-500" />
                              ))}
                            </div>
                            <span className="text-xs text-foreground/60">2 months ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-foreground/80 text-sm">
                        {review === 1 ? 
                          "Alex did an amazing job with our website. Very professional and responsive throughout the project. Highly recommended!" :
                          review === 2 ?
                          "Great experience working with this freelancer. Delivered on time and was very accommodating with revisions. Will definitely hire again." :
                          "Exceeded my expectations in every way. Communication was excellent and the final product was exactly what I needed. Very satisfied with the results."
                        }
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;
