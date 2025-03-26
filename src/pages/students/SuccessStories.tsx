
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const successStories = [
  {
    id: 1,
    name: "Alex Johnson",
    university: "University of Technology",
    avatar: "/placeholder.svg",
    story: "I found my first freelance web development project through Campus Connect during my second year. That experience led to three more projects and eventually a full-time job offer after graduation.",
    project: "E-commerce Website Development"
  },
  {
    id: 2,
    name: "Samira Khan",
    university: "State University",
    avatar: "/placeholder.svg",
    story: "As a design student, I was struggling to find relevant work experience. Through Campus Connect, I connected with a startup that needed branding work. That portfolio piece helped me land multiple clients afterward.",
    project: "Brand Identity Design"
  },
  {
    id: 3,
    name: "Marcus Williams",
    university: "Arts Institute",
    avatar: "/placeholder.svg",
    story: "I earned enough through Campus Connect projects to pay for my final semester of university. The client relationships I built during that time turned into long-term contracts after graduation.",
    project: "Social Media Marketing Campaign"
  }
];

const SuccessStories = () => {
  return (
    <PageLayout
      title="Success Stories"
      description="Real experiences from students who found opportunities through our platform"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {successStories.map((story) => (
            <Card key={story.id} className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={story.avatar} alt={story.name} />
                    <AvatarFallback>{story.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.university}</p>
                  </div>
                </div>
                <div className="mb-3 bg-secondary text-secondary-foreground px-3 py-1 text-xs rounded-full inline-block">
                  {story.project}
                </div>
                <p className="text-muted-foreground italic">"{story.story}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Share Your Success Story</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have you found success through our platform? We'd love to hear about your experience
            and share it with the community to inspire other students.
          </p>
          <a href="mailto:stories@campusconnect.com" className="text-primary underline">
            Send us your story
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default SuccessStories;
