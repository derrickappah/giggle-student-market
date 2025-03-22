
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CaseStudyProps {
  title: string;
  company: string;
  challenge: string;
  solution: string;
  result: string;
  avatar: string;
  name: string;
  role: string;
}

const CaseStudy = ({ 
  title, 
  company, 
  challenge, 
  solution, 
  result,
  avatar,
  name,
  role
}: CaseStudyProps) => (
  <Card className="mb-12">
    <CardContent className="p-0">
      <div className="md:flex">
        <div className="md:w-1/3 bg-secondary p-8">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-6">{company}</p>
          
          <div className="flex items-center mt-12">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarFallback>{avatar}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3 p-8">
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
            <p>{challenge}</p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">The Solution</h4>
            <p>{solution}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-2">The Results</h4>
            <p>{result}</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ClientSuccessStories = () => {
  const caseStudies: CaseStudyProps[] = [
    {
      title: "Complete Website Redesign in 3 Weeks",
      company: "GreenLeaf Organic Foods",
      challenge: "GreenLeaf's outdated website was hurting their online sales and didn't reflect their brand values. They needed a complete redesign but had a limited budget and tight timeline.",
      solution: "Through UniTalent, GreenLeaf hired a team of three university students specializing in web design, development, and content creation. The students collaborated to create a modern, responsive e-commerce site.",
      result: "The new website launched on time and under budget, leading to a 45% increase in online orders within the first month. The student team continues to provide monthly maintenance and updates.",
      avatar: "JD",
      name: "John Doe",
      role: "Marketing Director, GreenLeaf"
    },
    {
      title: "Social Media Campaign Drives 200% Engagement Increase",
      company: "Boutique Fitness Studio",
      challenge: "A local fitness studio struggled to attract younger clients and build an online community. Their social media presence was minimal and ineffective.",
      solution: "The studio hired a marketing student from UniTalent who developed and implemented a comprehensive social media strategy targeting college students and young professionals.",
      result: "Within three months, the studio saw a 200% increase in social media engagement, a 30% boost in class attendance from the 18-25 demographic, and successfully launched a student discount program.",
      avatar: "AK",
      name: "Amy Kim",
      role: "Owner, Flex Fitness Studio"
    },
    {
      title: "App Prototype Development for Startup",
      company: "ParkSpot",
      challenge: "ParkSpot had a concept for a parking space finder app but lacked the technical resources to create a prototype for investor pitches.",
      solution: "Two computer science students from UniTalent developed a functioning prototype in just six weeks, implementing the core features and creating a clean, intuitive user interface.",
      result: "The prototype helped ParkSpot secure $300,000 in seed funding. They hired one of the students as a part-time developer to continue working on the project through launch.",
      avatar: "MS",
      name: "Mike Sullivan",
      role: "Founder, ParkSpot"
    }
  ];

  return (
    <PageLayout
      title="Client Success Stories"
      description="Discover how businesses of all sizes have achieved their goals by working with UniTalent freelancers"
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-primary/10 p-8 rounded-lg mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Real Results, Real Value</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our clients have achieved remarkable results by leveraging the fresh perspectives and specialized skills of university students. Browse our case studies to see how UniTalent can help your business.
          </p>
        </div>
        
        {caseStudies.map((study, index) => (
          <CaseStudy key={index} {...study} />
        ))}
        
        <div className="text-center mt-8 p-8 border border-dashed border-primary/30 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Join the growing number of businesses achieving their goals with UniTalent's student freelancers.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/clients/post-project">
              <Button>Post a Project</Button>
            </Link>
            <Link to="/freelancers">
              <Button variant="outline">Browse Talent</Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ClientSuccessStories;
