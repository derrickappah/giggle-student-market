
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, BookMarked, Video, FileText, Download } from 'lucide-react';

const ResourceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <Card className="transition-all hover:shadow-md">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className="bg-primary/10 p-2 rounded-full">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Resources = () => {
  const resourcesData = [
    {
      icon: BookOpen,
      title: "Freelancing 101",
      description: "An introductory guide to the world of freelancing as a university student."
    },
    {
      icon: BookMarked,
      title: "Portfolio Building",
      description: "Learn how to create an impressive portfolio that attracts clients."
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for using the UniTalent platform effectively."
    },
    {
      icon: FileText,
      title: "Contract Templates",
      description: "Download ready-to-use contract templates for your freelancing projects."
    },
    {
      icon: Download,
      title: "Tax Guidelines",
      description: "Important information about taxes and financial responsibilities for student freelancers."
    }
  ];

  return (
    <PageLayout
      title="Student Resources"
      description="Access guides, tools, and learning materials to succeed in your freelancing journey"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resourcesData.map((resource, index) => (
          <ResourceCard
            key={index}
            icon={resource.icon}
            title={resource.title}
            description={resource.description}
          />
        ))}
      </div>
      
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Webinars</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started with Freelancing</CardTitle>
              <CardDescription>June 15, 2023 • 2:00 PM EST</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Join our expert panel as they discuss how to launch your freelancing career while balancing university studies.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Pricing Your Services</CardTitle>
              <CardDescription>June 22, 2023 • 2:00 PM EST</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn strategies for setting competitive rates that reflect your skills and the market demand.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Client Communication Essentials</CardTitle>
              <CardDescription>June 29, 2023 • 2:00 PM EST</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover effective communication techniques to maintain strong client relationships.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Resources;
