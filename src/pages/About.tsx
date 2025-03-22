
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, BookOpen, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="h1 mb-6">Connecting Student Talent with Real Opportunities</h1>
            <p className="text-foreground/70 text-lg mb-10 leading-relaxed">
              UniTalent is the premier marketplace for university students to showcase their skills and connect with clients looking for fresh perspectives and quality work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link to="/services">Browse Services</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/freelancers">Find Talent</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="h2 mb-6">Our Mission</h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                At UniTalent, we're on a mission to bridge the gap between education and real-world experience. We believe that university students possess incredible skills and fresh perspectives that can benefit businesses of all sizes.
              </p>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                By creating a platform where students can showcase their abilities and connect with clients, we're helping the next generation of professionals gain valuable work experience while earning income to support their education.
              </p>
              <div className="space-y-4">
                {[
                  "Provide students with real-world experience",
                  "Help businesses find affordable, quality talent",
                  "Foster a community of learning and growth",
                  "Support students' financial independence"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Students collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-10 -right-10 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-foreground/70">Student freelancers from universities across the globe</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="h2 mb-4">What Sets Us Apart</h2>
            <p className="text-foreground/70">
              UniTalent offers a unique platform that benefits both students and clients, creating a win-win ecosystem for everyone involved.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Verified Student Talent",
                description: "Every freelancer on our platform is a verified university student, ensuring you're working with bright, motivated individuals.",
                delay: 0
              },
              {
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                title: "Academic Integration",
                description: "Students can connect their coursework to real projects, applying what they learn in the classroom to solve real-world problems.",
                delay: 0.2
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Skills Development",
                description: "Beyond earning income, students develop professional skills, build portfolios, and receive feedback that helps them grow.",
                delay: 0.4
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 mb-4">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="h2 mb-4">Our Team</h2>
            <p className="text-foreground/70">
              Meet the founders who are passionate about empowering students and connecting them with opportunities to grow.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Elena Rodriguez",
                role: "Co-Founder & CEO",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                bio: "Former student freelancer who saw the need for a dedicated platform connecting university talent with clients.",
                delay: 0
              },
              {
                name: "Michael Chen",
                role: "Co-Founder & CTO",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                bio: "Computer science graduate who built the first version of UniTalent as his senior project before turning it into a company.",
                delay: 0.2
              },
              {
                name: "Zoe Williams",
                role: "Head of Community",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                bio: "Former career counselor who now focuses on creating a supportive community for student freelancers to thrive.",
                delay: 0.4
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: member.delay }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-foreground/70">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/30">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="h2 mb-4">Join Our Community Today</h2>
            <p className="text-foreground/70 mb-8">
              Whether you're a student looking to showcase your skills or a client seeking fresh talent, UniTalent is the place for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="px-8 py-6 text-base">
                Sign Up Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-base">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
