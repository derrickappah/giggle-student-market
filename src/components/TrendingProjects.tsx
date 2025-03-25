
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Clock, DollarSign, Bookmark, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

// Sample trending projects data
const trendingProjects = [
  {
    id: '1',
    title: 'Mobile App UI/UX Design',
    description: 'Looking for a creative design student to develop UI/UX for a fitness tracking mobile application.',
    category: 'design',
    budget: 400,
    applications: 7,
    views: 124,
    duration: '2-weeks',
    skills: ['UI/UX', 'Figma', 'Mobile Design'],
    posted: '2 days ago'
  },
  {
    id: '2',
    title: 'Economics Research Assistant',
    description: 'Need help with market research and data analysis for a startup in the fintech sector.',
    category: 'research',
    budget: 350,
    applications: 5,
    views: 98,
    duration: '1-month',
    skills: ['Economics', 'Data Analysis', 'Research'],
    posted: '1 day ago'
  },
  {
    id: '3',
    title: 'Python Web Scraping Project',
    description: 'Develop a web scraper to collect data from e-commerce websites for price comparison.',
    category: 'programming',
    budget: 300,
    applications: 12,
    views: 156,
    duration: '1-week',
    skills: ['Python', 'BeautifulSoup', 'Web Scraping'],
    posted: '3 days ago'
  },
  {
    id: '4',
    title: 'Social Media Content Creation',
    description: 'Create engaging content for Instagram and TikTok for a new fashion brand targeting college students.',
    category: 'writing',
    budget: 250,
    applications: 9,
    views: 112,
    duration: '2-weeks',
    skills: ['Content Creation', 'Social Media', 'Creativity'],
    posted: '1 day ago'
  }
];

const TrendingProjects = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <motion.h2 
              className="h2 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Trending Projects
            </motion.h2>
            <motion.p 
              className="text-foreground/70 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover the most popular projects that students are working on right now
            </motion.p>
          </div>
          
          <Link to="/students/find-work">
            <Button variant="outline" className="mt-4 md:mt-0">
              Browse All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProjects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge className="mb-2">{project.category}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{project.posted}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-foreground/70 line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.skills.map((skill, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-secondary/50 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>${project.budget}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{project.applications} offers</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Eye className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{project.views} views</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <div className="w-full flex justify-between items-center">
                    <Link to={`/projects/${project.id}`} className="w-full">
                      <Button variant="default" size="sm" className="w-full">
                        View Project
                      </Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="ml-2">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProjects;
