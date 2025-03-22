
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryTabs from '@/components/CategoryTabs';
import FeaturedFreelancers from '@/components/FeaturedFreelancers';
import ServiceCard, { ServiceCardProps } from '@/components/ServiceCard';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

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
      
      {/* Popular Services Section */}
      <section className="py-20 px-4">
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
            <Button 
              variant="outline" 
              className="rounded-full"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
                  <Button className="btn-primary">
                    Create Your Profile
                  </Button>
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
      
      {/* Footer */}
      <footer className="bg-secondary py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-10 md:mb-0">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-4">
                UniTalent
              </div>
              <p className="text-foreground/70 max-w-sm mb-6">
                Connecting university students with freelance opportunities to earn, learn, and grow.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                <h4 className="font-semibold mb-4">For Students</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li><a href="#" className="hover:text-primary transition-colors">Create Profile</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Find Work</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Resources</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">For Clients</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li><a href="#" className="hover:text-primary transition-colors">Post a Project</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Find Talent</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Enterprise</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60 mb-4 md:mb-0">
              © {new Date().getFullYear()} UniTalent. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
