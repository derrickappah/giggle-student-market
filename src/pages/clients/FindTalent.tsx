
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';
import { Search, Filter, GraduationCap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const FindTalent = () => {
  return (
    <PageLayout
      title="Find Talent"
      description="Discover skilled university students ready to work on your projects"
    >
      <div className="max-w-5xl mx-auto">
        {/* Search Section */}
        <div className="bg-secondary p-6 rounded-lg mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Input
                placeholder="Search by skill, university, or keyword"
                className="pl-10"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
            <Button>
              Search
            </Button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="secondary" size="sm">Web Development</Button>
            <Button variant="secondary" size="sm">Design</Button>
            <Button variant="secondary" size="sm">Writing</Button>
            <Button variant="secondary" size="sm">Marketing</Button>
            <Button variant="secondary" size="sm">Data Analysis</Button>
          </div>
        </div>
        
        {/* Why Hire Students Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Why Hire University Students?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <GraduationCap className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fresh Perspectives</h3>
                <p className="text-muted-foreground">
                  Students bring innovative ideas and current academic knowledge to your projects.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="text-primary h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cost-Effective Solutions</h3>
                <p className="text-muted-foreground">
                  Get quality work at competitive rates while helping students build their portfolios.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="text-primary h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9L19 4M19 4H15M19 4V8M10 15L5 20M5 20H9M5 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Diverse Talent Pool</h3>
                <p className="text-muted-foreground">
                  Access students from various universities, disciplines, and backgrounds.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-primary/10 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Post Your Project?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Create a detailed project listing to attract the perfect student talent for your needs.
          </p>
          <Link to="/clients/post-project">
            <Button size="lg">Post a Project Now</Button>
          </Link>
        </div>
        
        {/* Browse Freelancers */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Browse Our Talent Directory</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Find talented university students based on skills, ratings, and experience.
          </p>
          <Link to="/freelancers">
            <Button variant="outline" size="lg">View All Freelancers</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default FindTalent;
