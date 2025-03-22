
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Heart } from 'lucide-react';

interface JobPostingProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const JobPosting = ({ title, department, location, type, description }: JobPostingProps) => (
  <Card className="mb-6 transition-all hover:shadow-md">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{department}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center text-sm">
          <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
          {location}
        </div>
        <div className="flex items-center text-sm">
          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
          {type}
        </div>
      </div>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <Button variant="outline">View Details</Button>
    </CardContent>
  </Card>
);

const Careers = () => {
  const jobPostings: JobPostingProps[] = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our engineering team to build and scale our platform that connects university students with freelance opportunities."
    },
    {
      title: "University Partnerships Manager",
      department: "Business Development",
      location: "New York, NY",
      type: "Full-time",
      description: "Develop and maintain relationships with universities to expand our student talent pool and create mutually beneficial programs."
    },
    {
      title: "UX/UI Designer",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Help create intuitive, beautiful experiences for both students and clients on our platform."
    },
    {
      title: "Marketing Coordinator",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Coordinate marketing campaigns to attract both student freelancers and business clients to our platform."
    },
    {
      title: "Community Manager",
      department: "Operations",
      location: "Remote",
      type: "Part-time",
      description: "Foster a supportive community among our student freelancers through events, communications, and resources."
    }
  ];

  return (
    <PageLayout
      title="Careers at UniTalent"
      description="Join our mission to connect university students with meaningful freelance opportunities"
    >
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Shape the Future of Student Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building a platform that empowers students to gain real-world experience while earning money on their own terms.
          </p>
        </div>
        
        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Student First</h3>
                <p className="text-muted-foreground">
                  We prioritize student success and growth in everything we build.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="text-primary h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3H8V21H16V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 8H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 16H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 16H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously seek new ways to improve the freelancing experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We build for everyone, ensuring equal opportunities for all students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mb-16 bg-secondary/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex">
              <div className="mr-4 bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center">
                <svg className="text-primary h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Flexible Work Environment</h3>
                <p className="text-muted-foreground">Remote-first culture with flexible hours</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center">
                <svg className="text-primary h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Competitive Compensation</h3>
                <p className="text-muted-foreground">Salary, equity, and comprehensive benefits</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center">
                <svg className="text-primary h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Professional Growth</h3>
                <p className="text-muted-foreground">Dedicated learning budget and mentorship</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center">
                <svg className="text-primary h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Meaningful Impact</h3>
                <p className="text-muted-foreground">Help students launch their careers</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Open Positions */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">Open Positions</h2>
          {jobPostings.map((job, index) => (
            <JobPosting key={index} {...job} />
          ))}
          
          <div className="text-center mt-8">
            <p className="text-lg mb-4">Don't see a role that fits your skills?</p>
            <Button>Send Us Your Resume</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;
