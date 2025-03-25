
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SkillsCard from './SkillsCard';

type Project = {
  id: string;
  title: string;
  description: string;
  budget: number;
  matchScore: number;
  category: string;
  skills: string[];
};

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'React Native Developer for Educational App',
    description: 'Looking for a student developer to build a cross-platform mobile app for language learning.',
    budget: 600,
    matchScore: 92,
    category: 'programming',
    skills: ['React Native', 'TypeScript', 'Firebase', 'UI/UX']
  },
  {
    id: '2',
    title: 'Brand Identity Design for Tech Startup',
    description: 'Need a creative design student to develop brand guidelines and visual identity.',
    budget: 450,
    matchScore: 85,
    category: 'design',
    skills: ['Logo Design', 'Branding', 'Adobe Illustrator', 'Identity Design']
  },
  {
    id: '3',
    title: 'Content Writer for Science Blog',
    description: 'Seeking a science student to write informative articles about recent discoveries.',
    budget: 300,
    matchScore: 78,
    category: 'writing',
    skills: ['Content Writing', 'Scientific Knowledge', 'SEO', 'Editing']
  }
];

const RecommendedProjects = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <motion.div
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium text-yellow-500">Personalized for you</span>
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Recommended Projects
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Projects that match your skills and preferences
            </motion.p>
          </div>
          
          <Link to="/students/find-work">
            <Button variant="outline" className="mt-4 md:mt-0 group">
              All Recommendations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-all hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge>{project.category}</Badge>
                    <div className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">
                      {project.matchScore}% Match
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.slice(0, 4).map((skill, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-secondary/50 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm font-medium">
                    Budget: ${project.budget}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={`/projects/${project.id}`} className="w-full">
                    <Button variant="default" className="w-full">
                      View Project
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProjects;
