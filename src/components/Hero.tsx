
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const {
        clientX,
        clientY
      } = e;
      const {
        left,
        top,
        width,
        height
      } = heroRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={heroRef} 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20" 
      style={{
        background: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(37, 99, 235, 0.15), transparent 40%)'
      }}
    >
      {/* Animated Decorative Elements */}
      <div className="absolute top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-floating"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-accent/30 rounded-full filter blur-3xl opacity-70 animate-floating animation-delay-300"></div>
      
      {/* Floating shapes */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/5 rounded-lg"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-accent/10 rounded-full"
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-lg">
              For university students
            </span>
          </motion.div>
          
          <motion.h1 
            className="h1 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Earn while you learn with your unique 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"> student skills</span>
          </motion.h1>
          
          <motion.p 
            className="p-large text-foreground/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect with clients who value your fresh perspective and academic knowledge. 
            Build your portfolio, gain real-world experience, and earn income that fits your schedule.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="btn-primary group w-full sm:w-auto">
              Start Freelancing
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="btn-secondary w-full sm:w-auto">
              Hire a Student
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-foreground/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span>Verified Students</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
