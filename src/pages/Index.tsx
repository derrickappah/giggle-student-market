
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryTabs from '@/components/CategoryTabs';
import SearchProjects from '@/components/SearchProjects';
import TrendingProjects from '@/components/TrendingProjects';
import FeaturedFreelancers from '@/components/FeaturedFreelancers';
import ServiceCard, { ServiceCardProps } from '@/components/ServiceCard';

// Sample data for services
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

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Search Projects Section */}
      <SearchProjects />
      
      {/* Trending Projects Section */}
      <TrendingProjects />
      
      {/* Popular Services Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="h2 mb-3">Explore Student Services</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Discover a wide range of high-quality services offered by talented university students
            </p>
          </motion.div>
          
          {/* Categories */}
          <CategoryTabs onSelectCategory={setActiveCategory} />
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredServices.map((service) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <Link to="/services">
              <Button 
                variant="outline" 
                className="rounded-full"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Freelancers */}
      <FeaturedFreelancers />
      
      {/* How It Works Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="h2 mb-3">How It Works</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Simple and efficient process to connect you with the right talent
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                number: '01',
                title: 'Post a Project',
                description: 'Describe your project and the specific skills required.',
                delay: 0
              },
              {
                number: '02',
                title: 'Review Offers',
                description: 'Get bids from talented university students and review their profiles.',
                delay: 0.2
              },
              {
                number: '03',
                title: 'Get Work Done',
                description: 'Hire the best talent and receive quality work on time.',
                delay: 0.4
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.delay }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary font-bold mb-5">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
                
                {/* Connector (only for first two items) */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary/20 transform -translate-x-1/2">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-primary/40" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-accent/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/10 rounded-full -translate-x-1/3 translate-y-1/3 filter blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-lg">
                <motion.h2 
                  className="h2 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Ready to showcase your skills?
                </motion.h2>
                <motion.p 
                  className="text-foreground/80 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Join thousands of university students who are earning while learning. Create your profile today and start your freelancing journey.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link to="/students/create-profile">
                    <Button className="btn-primary">
                      Create Your Profile
                    </Button>
                  </Link>
                </motion.div>
              </div>
              
              <motion.div 
                className="flex-shrink-0 w-full md:w-72 p-4 glass rounded-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-left p-2">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                        alt="Student testimonial"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Sarah C.</div>
                      <div className="text-xs text-foreground/60">Computer Science, MIT</div>
                    </div>
                  </div>
                  <blockquote className="text-sm italic text-foreground/80 mb-3">
                    "This platform helped me earn enough to pay for my textbooks and gain real industry experience that impressed my future employers."
                  </blockquote>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
