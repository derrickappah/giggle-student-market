
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  slug: string;
}

const BlogPostCard = ({ post }: { post: BlogPostProps }) => (
  <Card className="h-full flex flex-col">
    <CardHeader>
      <div className="text-sm text-primary mb-2">{post.category}</div>
      <CardTitle className="text-xl">{post.title}</CardTitle>
      <CardDescription>{post.date}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-muted-foreground">{post.excerpt}</p>
    </CardContent>
    <CardFooter className="flex justify-between items-center border-t pt-4">
      <div className="flex items-center">
        <Avatar className="h-8 w-8 mr-2">
          <AvatarFallback>{post.author.avatar}</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <p className="font-medium">{post.author.name}</p>
          <p className="text-muted-foreground text-xs">{post.author.role}</p>
        </div>
      </div>
      <Button variant="ghost" className="text-primary">Read More</Button>
    </CardFooter>
  </Card>
);

const Blog = () => {
  const blogPosts: BlogPostProps[] = [
    {
      title: "How to Balance Freelancing with University Studies",
      excerpt: "Discover effective strategies for managing your time between coursework and client projects.",
      date: "May 15, 2023",
      author: {
        name: "Emma Rodriguez",
        role: "Student Success Manager",
        avatar: "ER"
      },
      category: "Student Tips",
      slug: "balance-freelancing-studies"
    },
    {
      title: "5 Reasons to Hire University Students for Your Next Project",
      excerpt: "Learn why businesses of all sizes are turning to student talent for fresh perspectives and innovative solutions.",
      date: "May 10, 2023",
      author: {
        name: "Michael Chen",
        role: "Client Relations",
        avatar: "MC"
      },
      category: "Client Resources",
      slug: "reasons-hire-students"
    },
    {
      title: "Building a Stellar Portfolio as a Student Freelancer",
      excerpt: "Tips and examples for creating a portfolio that showcases your skills and attracts high-quality clients.",
      date: "May 7, 2023",
      author: {
        name: "Sophia Kim",
        role: "Career Advisor",
        avatar: "SK"
      },
      category: "Student Tips",
      slug: "portfolio-building"
    },
    {
      title: "The Future of Work: How Gen Z is Redefining Freelancing",
      excerpt: "Explore the trends and preferences shaping how the newest generation approaches their careers.",
      date: "May 3, 2023",
      author: {
        name: "David Johnson",
        role: "Co-founder",
        avatar: "DJ"
      },
      category: "Insights",
      slug: "gen-z-freelancing"
    },
    {
      title: "From Student Project to Paid Gig: Success Stories",
      excerpt: "Read about students who turned their academic work into profitable freelance opportunities.",
      date: "April 28, 2023",
      author: {
        name: "Priya Patel",
        role: "Content Manager",
        avatar: "PP"
      },
      category: "Success Stories",
      slug: "student-project-success"
    },
    {
      title: "Ethical Pricing: How to Value Your Work as a Student",
      excerpt: "A guide to setting rates that respect your skills while acknowledging your developing experience.",
      date: "April 25, 2023",
      author: {
        name: "James Wilson",
        role: "Freelance Coach",
        avatar: "JW"
      },
      category: "Student Tips",
      slug: "ethical-pricing"
    }
  ];

  return (
    <PageLayout
      title="UniTalent Blog"
      description="Insights, tips, and stories from the student freelancing community"
    >
      <div className="max-w-5xl mx-auto">
        {/* Search and Categories */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-64">
            <Input placeholder="Search articles..." className="pl-10" />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
          
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="student-tips">Student Tips</TabsTrigger>
              <TabsTrigger value="client-resources">Client Resources</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {/* Featured Post */}
        <div className="mb-12">
          <Card className="bg-secondary/30">
            <div className="md:flex">
              <div className="md:w-2/3 p-8">
                <div className="text-sm text-primary mb-2">Featured</div>
                <h2 className="text-2xl font-bold mb-4">The State of Student Freelancing in 2023</h2>
                <p className="text-muted-foreground mb-6">
                  Our annual survey reveals how university students are leveraging freelance work to gain experience, earn income, and prepare for their careers. Dive into the data on most in-demand skills, average earnings, and growth trends.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Alex Lee</p>
                      <p className="text-muted-foreground text-sm">Research Director</p>
                    </div>
                  </div>
                  <Button>Read Article</Button>
                </div>
              </div>
              <div className="md:w-1/3 bg-primary/10 flex items-center justify-center p-8">
                <div className="text-6xl font-bold text-primary/80">2023</div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-primary/10 p-8 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
          <p className="mb-6 max-w-md mx-auto">
            Get the latest articles, tips, and resources delivered straight to your inbox.
          </p>
          <div className="flex max-w-md mx-auto flex-col sm:flex-row gap-3">
            <Input placeholder="Your email address" className="flex-grow" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
