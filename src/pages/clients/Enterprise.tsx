
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Building, Calendar, Shield } from 'lucide-react';

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start mb-4">
    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
    <span>{children}</span>
  </div>
);

const Enterprise = () => {
  return (
    <PageLayout
      title="Enterprise Solutions"
      description="Tailored freelance solutions for businesses of all sizes"
    >
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-secondary/50 to-background p-8 md:p-12 rounded-lg text-center md:text-left mb-16">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">
                Scale Your Team with Student Talent
              </h2>
              <p className="text-lg mb-6">
                UniTalent Enterprise gives you access to a curated pool of university talent to complement your team, tackle projects, and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg">Book a Consultation</Button>
                <Button variant="outline" size="lg">View Case Studies</Button>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="aspect-square bg-primary/10 rounded-lg flex items-center justify-center p-10">
                <Building className="h-20 w-20 text-primary/60" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Enterprise Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Talent Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team handpicks student freelancers with the specific skills and experience your projects require.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Flexible Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Scale your team up or down as needed with short-term projects or ongoing collaborations.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All enterprise-level freelancers are pre-vetted and continuously evaluated to maintain high standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Plans Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Enterprise Plans</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl">Business</CardTitle>
                <CardDescription>For small to medium businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$499</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <CheckItem>Access to pre-vetted student talent</CheckItem>
                  <CheckItem>Up to 5 active projects</CheckItem>
                  <CheckItem>Dedicated account manager</CheckItem>
                  <CheckItem>Priority support</CheckItem>
                  <CheckItem>Weekly progress reports</CheckItem>
                </div>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary">
              <CardHeader>
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$999</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <CheckItem>All Business features</CheckItem>
                  <CheckItem>Unlimited active projects</CheckItem>
                  <CheckItem>Custom talent recruitment</CheckItem>
                  <CheckItem>Legal document preparation</CheckItem>
                  <CheckItem>Team collaboration tools</CheckItem>
                  <CheckItem>Advanced analytics dashboard</CheckItem>
                </div>
                <Button className="w-full mt-6">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Testimonial Section */}
        <div className="bg-secondary/30 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">What Clients Say</h2>
            <blockquote className="text-lg italic mb-6">
              "UniTalent Enterprise has transformed how we approach project staffing. The students bring fresh ideas and specialized skills that complement our core team perfectly."
            </blockquote>
            <div>
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">Director of Innovation, TechCorp Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Enterprise;
