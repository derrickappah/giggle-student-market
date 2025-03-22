
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";
import { Search, Star, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

// Define the freelancer type
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
}

// Sample data for freelancers
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
    skills: ['Web Development', 'React', 'Node.js', 'UI/UX'],
    about: 'Computer Science student specializing in full-stack web development with 3+ years of freelance experience.'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    university: 'MIT',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    rating: 4.8,
    reviews: 37,
    location: 'Boston, MA',
    hourlyRate: 50,
    completedProjects: 65,
    skills: ['UI/UX Design', 'Figma', 'Adobe XD', 'Prototyping'],
    about: 'Design student with a passion for creating intuitive and beautiful user interfaces for web and mobile applications.'
  },
  {
    id: '3',
    name: 'Miguel Rodriguez',
    university: 'UCLA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    rating: 5.0,
    reviews: 28,
    location: 'Los Angeles, CA',
    hourlyRate: 35,
    completedProjects: 42,
    skills: ['Mathematics', 'Physics', 'Calculus', 'Statistics'],
    about: 'Physics Ph.D. candidate offering expert tutoring in mathematics, physics, and related subjects for undergraduate and high school students.'
  },
  {
    id: '4',
    name: 'Emily Williams',
    university: 'Columbia University',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    rating: 4.7,
    reviews: 41,
    location: 'New York, NY',
    hourlyRate: 40,
    completedProjects: 93,
    skills: ['Content Writing', 'SEO', 'Copywriting', 'Editing'],
    about: 'English Literature major with experience in content writing, blog posts, and marketing copy. SEO-optimized content that drives engagement.'
  },
  {
    id: '5',
    name: 'David Kim',
    university: 'RISD',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    rating: 4.9,
    reviews: 36,
    location: 'Providence, RI',
    hourlyRate: 55,
    completedProjects: 56,
    skills: ['Logo Design', 'Branding', 'Illustration', 'Adobe Creative Suite'],
    about: 'Graphic Design student specializing in brand identity, logo design, and visual communication for businesses of all sizes.'
  },
  {
    id: '6',
    name: 'Jasmine Patel',
    university: 'NYU',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    rating: 4.8,
    reviews: 24,
    location: 'New York, NY',
    hourlyRate: 30,
    completedProjects: 47,
    skills: ['Social Media', 'Content Creation', 'Marketing', 'Analytics'],
    about: 'Marketing major with expertise in social media management, content creation, and engagement strategies for businesses and personal brands.'
  }
];

const Freelancers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredFreelancers = freelancers.filter(freelancer => 
    freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    freelancer.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
    freelancer.university.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-secondary/30 py-12 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="h1 mb-4">Top Student Freelancers</h1>
            <p className="text-foreground/70 mb-8">
              Connect with talented university students ready to help with your projects
            </p>
            
            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, skill, or university..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Freelancer Listings */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">
              {filteredFreelancers.length} freelancers available
            </h2>
            <div className="flex items-center">
              <span className="mr-2 text-foreground/70">Sort by:</span>
              <select className="p-2 rounded border border-border bg-background">
                <option>Relevance</option>
                <option>Rating (High to Low)</option>
                <option>Price (Low to High)</option>
                <option>Price (High to Low)</option>
              </select>
            </div>
          </div>
          
          {/* Freelancers Grid */}
          <div className="space-y-6">
            {filteredFreelancers.length > 0 ? (
              filteredFreelancers.map((freelancer) => (
                <motion.div 
                  key={freelancer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Avatar and Basic Info */}
                    <div className="md:w-56 flex flex-col items-center text-center">
                      <div className="h-28 w-28 rounded-full overflow-hidden mb-4">
                        <img 
                          src={freelancer.avatar} 
                          alt={freelancer.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <Link 
                        to={`/freelancers/${freelancer.id}`} 
                        className="font-semibold text-lg hover:text-primary mb-1"
                      >
                        {freelancer.name}
                      </Link>
                      <p className="text-foreground/70 mb-2">{freelancer.university}</p>
                      <div className="flex items-center justify-center mb-3">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-medium">{freelancer.rating}</span>
                        <span className="mx-1 text-foreground/50">•</span>
                        <span className="text-sm">{freelancer.reviews} reviews</span>
                      </div>
                      <p className="flex items-center text-sm text-foreground/70">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        {freelancer.location}
                      </p>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-1">
                      <p className="text-foreground/80 mb-4">
                        {freelancer.about}
                      </p>
                      
                      {/* Skills */}
                      <div className="mb-5">
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
                      
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-5">
                        <div className="text-center p-3 rounded-lg bg-secondary/30">
                          <p className="text-sm text-foreground/70 mb-1">Hourly Rate</p>
                          <p className="font-semibold">${freelancer.hourlyRate}/hr</p>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-secondary/30">
                          <p className="text-sm text-foreground/70 mb-1">Projects</p>
                          <p className="font-semibold">{freelancer.completedProjects}</p>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-secondary/30">
                          <p className="text-sm text-foreground/70 mb-1">Rating</p>
                          <p className="font-semibold flex items-center justify-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            {freelancer.rating}
                          </p>
                        </div>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex flex-wrap gap-3">
                        <Button>
                          Contact
                        </Button>
                        <Button variant="outline">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No freelancers found</h3>
                <p className="text-foreground/70 mb-6">Try adjusting your search criteria</p>
                <Button onClick={() => setSearchQuery('')}>
                  View all freelancers
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Freelancers;
