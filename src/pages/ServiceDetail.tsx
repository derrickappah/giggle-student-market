import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Star, Calendar, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { ServiceCardProps } from '@/components/ServiceCard';

// Sample data for services (same as in other pages)
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

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Link to="/services" className="text-primary hover:underline">
            Go back to services
          </Link>
        </div>
      </div>
    );
  }

  // Calculate similar services (same category but different ID)
  const similarServices = services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/services" className="flex items-center text-sm text-primary hover:text-primary/80">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to services
        </Link>
      </div>
      
      <div className="container mx-auto px-4 py-6 mb-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left Column - Service Images and Info */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-xl overflow-hidden h-[400px] mb-6">
                <img 
                  src={service.serviceThumbnail} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h1 className="h2 mb-4">{service.title}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="font-medium">{service.rating}</span>
                </div>
                <span className="mx-2 text-foreground/50">•</span>
                <span>{service.reviews} reviews</span>
                <span className="mx-2 text-foreground/50">•</span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-foreground/70" />
                  {service.turnaround}
                </span>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-4">About This Service</h3>
                <p className="mb-4">{service.description}</p>
                <p className="mb-4">
                  Elevate your online presence with a meticulously crafted website that reflects your unique brand identity and goals. Whether you're a startup looking to establish your digital footprint or an established business seeking a modern refresh, our university student professionals deliver exceptional results.
                </p>
                <p>
                  This service includes responsive design, cross-browser compatibility, performance optimization, and comprehensive documentation to help you make the most of your new website.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">What You'll Get</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Custom design tailored to your brand",
                    "Responsive layout for all devices",
                    "SEO optimization",
                    "Cross-browser compatibility",
                    "Up to 3 revisions",
                    "Source code included"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">About The Freelancer</h3>
                <div className="flex items-center">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={service.freelancerAvatar} 
                      alt={service.freelancerName} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <Link to={`/freelancers/${service.id}`} className="font-semibold text-lg hover:text-primary">
                      {service.freelancerName}
                    </Link>
                    <p className="text-foreground/70">{service.freelancerUniversity}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Order Box */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-6 rounded-xl sticky top-24"
            >
              <h3 className="text-xl font-semibold mb-6">Service Package</h3>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Price</span>
                  <span className="text-2xl font-bold">${service.price}</span>
                </div>
                <div className="flex items-center text-foreground/70 mb-6">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Delivery in {service.turnaround}</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    "Custom design based on your needs",
                    "All source files included",
                    "Commercial usage rights"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button className="w-full mb-3 py-6">
                Continue (${service.price})
              </Button>
              
              <Button variant="outline" className="w-full mb-6 py-6">
                Contact Freelancer
              </Button>
              
              <div className="flex justify-center space-x-4 text-foreground/70">
                <button className="flex flex-col items-center hover:text-primary transition-colors">
                  <Bookmark className="h-5 w-5 mb-1" />
                  <span className="text-xs">Save</span>
                </button>
                <button className="flex flex-col items-center hover:text-primary transition-colors">
                  <Share2 className="h-5 w-5 mb-1" />
                  <span className="text-xs">Share</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Similar Services */}
        {similarServices.length > 0 && (
          <div className="mt-16">
            <h2 className="h3 mb-6">Similar Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarServices.map((service) => (
                <Link to={`/services/${service.id}`} key={service.id}>
                  <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={service.serviceThumbnail} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-1">{service.title}</h3>
                      <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span>{service.rating}</span>
                        <span className="mx-1 text-foreground/50">•</span>
                        <span className="text-sm">{service.reviews} reviews</span>
                      </div>
                      <div className="font-semibold">From ${service.price}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
