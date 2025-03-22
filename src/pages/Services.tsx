
import React, { useState } from 'react';
import Header from '@/components/Header';
import CategoryTabs from '@/components/CategoryTabs';
import ServiceCard, { ServiceCardProps } from '@/components/ServiceCard';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

// Sample data for services - using the same data from Index.tsx
const services: ServiceCardProps[] = [
  {
    id: '1',
    title: 'Professional Website Development',
    description: 'Custom website development with responsive design and modern technologies',
    category: 'programming',
    price: 150,
    rating: 4.9,
    reviews: 42,
    turnaround: '3-5 days',
    freelancerName: 'Alex Johnson',
    freelancerUniversity: 'Stanford University',
    freelancerAvatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    serviceThumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: '2',
    title: 'UI/UX Design for Mobile Applications',
    description: 'Intuitive and beautiful user interface designs for mobile apps with wireframes and prototypes',
    category: 'design',
    price: 120,
    rating: 4.8,
    reviews: 37,
    turnaround: '2-4 days',
    freelancerName: 'Sarah Chen',
    freelancerUniversity: 'MIT',
    freelancerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    serviceThumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: '3',
    title: 'Math and Physics Tutoring',
    description: 'One-on-one tutoring sessions for university-level mathematics and physics',
    category: 'tutoring',
    price: 30,
    rating: 5.0,
    reviews: 28,
    turnaround: 'Hourly sessions',
    freelancerName: 'Miguel Rodriguez',
    freelancerUniversity: 'UCLA',
    freelancerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    serviceThumbnail: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: '4',
    title: 'Content Writing and Blog Posts',
    description: 'SEO-optimized content writing for blogs, websites, and marketing materials',
    category: 'writing',
    price: 50,
    rating: 4.7,
    reviews: 41,
    turnaround: '1-2 days',
    freelancerName: 'Emily Williams',
    freelancerUniversity: 'Columbia University',
    freelancerAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    serviceThumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: '5',
    title: 'Logo Design and Branding',
    description: 'Professional logo design and complete branding packages for your business',
    category: 'design',
    price: 100,
    rating: 4.9,
    reviews: 36,
    turnaround: '3 days',
    freelancerName: 'David Kim',
    freelancerUniversity: 'RISD',
    freelancerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    serviceThumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: '6',
    title: 'Social Media Management',
    description: 'Complete social media management including content creation and engagement',
    category: 'writing',
    price: 80,
    rating: 4.8,
    reviews: 24,
    turnaround: 'Weekly service',
    freelancerName: 'Jasmine Patel',
    freelancerUniversity: 'NYU',
    freelancerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    serviceThumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services
    .filter(service => activeCategory === 'all' || service.category === activeCategory)
    .filter(service => 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
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
            <h1 className="h1 mb-4">Browse Services</h1>
            <p className="text-foreground/70 mb-8">
              Discover high-quality services offered by talented university students
            </p>
            
            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Service Listing */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Categories */}
          <CategoryTabs onSelectCategory={setActiveCategory} />
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <h3 className="text-xl font-medium mb-2">No services found</h3>
                <p className="text-foreground/70 mb-6">Try adjusting your search or browse a different category</p>
                <Button onClick={() => {setSearchQuery(''); setActiveCategory('all');}}>
                  View all services
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
