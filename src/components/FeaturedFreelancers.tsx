
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import FreelancerCard, { FreelancerCardProps } from './FreelancerCard';

// Sample data for featured freelancers
const featuredFreelancers: FreelancerCardProps[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    title: 'UI/UX Designer',
    university: 'Stanford University',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    rating: 4.9,
    reviews: 56,
    projectsCompleted: 38,
    categories: ['UI Design', 'Web Design', 'Mobile Apps']
  },
  {
    id: '2',
    name: 'Sarah Chen',
    title: 'Full-Stack Developer',
    university: 'MIT',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    rating: 4.8,
    reviews: 42,
    projectsCompleted: 31,
    categories: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: '3',
    name: 'Miguel Rodriguez',
    title: 'Graphic Designer',
    university: 'UCLA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    rating: 4.7,
    reviews: 37,
    projectsCompleted: 29,
    categories: ['Logo Design', 'Branding', 'Illustration']
  },
  {
    id: '4',
    name: 'Emily Williams',
    title: 'Content Writer',
    university: 'Columbia University',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    rating: 4.9,
    reviews: 48,
    projectsCompleted: 42,
    categories: ['Blog Posts', 'Copywriting', 'Editing']
  },
  {
    id: '5',
    name: 'David Kim',
    title: 'Motion Designer',
    university: 'RISD',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    rating: 4.8,
    reviews: 34,
    projectsCompleted: 25,
    categories: ['After Effects', '3D Animation', 'Video Editing']
  }
];

const FeaturedFreelancers = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = current.clientWidth * 0.6;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <motion.h2 
              className="h2 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Talent
            </motion.h2>
            <motion.p 
              className="text-foreground/70 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover top university student freelancers who consistently deliver exceptional work
            </motion.p>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={() => scroll('left')}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={() => scroll('right')}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Carousel */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide space-x-5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredFreelancers.map((freelancer) => (
            <motion.div 
              key={freelancer.id}
              className="flex-shrink-0 w-[280px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FreelancerCard {...freelancer} />
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Button 
            variant="outline" 
            className="rounded-full"
          >
            View All Freelancers
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFreelancers;
