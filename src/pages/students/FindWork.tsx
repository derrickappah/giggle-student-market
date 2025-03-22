
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Briefcase, Star } from 'lucide-react';

const FindWork = () => {
  return (
    <PageLayout
      title="Find Work"
      description="Discover freelance opportunities tailored for university students"
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-secondary rounded-lg p-8">
          <div className="bg-primary/10 p-4 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <Search className="text-primary h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Browse Projects</h3>
          <p className="text-muted-foreground mb-6">
            Explore our curated list of projects posted by clients looking for student talent.
          </p>
          <Link to="/services">
            <Button>Browse Projects</Button>
          </Link>
        </div>
        
        <div className="bg-secondary rounded-lg p-8">
          <div className="bg-primary/10 p-4 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <Briefcase className="text-primary h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Apply With Ease</h3>
          <p className="text-muted-foreground mb-6">
            Our streamlined application process makes it simple to showcase your skills and connect with clients.
          </p>
          <Link to="/students/create-profile">
            <Button>Create Your Profile</Button>
          </Link>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="bg-primary/10 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Create Your Profile</h3>
            <p className="text-muted-foreground">Showcase your skills, experience, and university background</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-primary/10 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Browse & Apply</h3>
            <p className="text-muted-foreground">Find projects matching your skills and submit applications</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-primary/10 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Get Hired & Earn</h3>
            <p className="text-muted-foreground">Complete projects, build your portfolio, and receive payment</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FindWork;
