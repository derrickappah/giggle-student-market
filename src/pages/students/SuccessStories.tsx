
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const testimonials = [
  {
    name: "Alex Chen",
    role: "Graphic Design Student",
    university: "California Institute of the Arts",
    avatar: "AC",
    quote: "UniTalent helped me land my first design clients while still in my second year. I've been able to build a portfolio of real client work and earn enough to cover my living expenses.",
    achievement: "Now works with 3 regular clients and has earned over $5,000 in 6 months"
  },
  {
    name: "Priya Sharma",
    role: "Computer Science Major",
    university: "University of Michigan",
    avatar: "PS",
    quote: "I was looking for ways to apply my coding skills to real-world projects. Through UniTalent, I've worked on web development projects that have solidified my knowledge and helped me decide my specialization.",
    achievement: "Secured a summer internship based on her freelance portfolio"
  },
  {
    name: "Marcus Johnson",
    role: "Marketing Student",
    university: "NYU Stern",
    avatar: "MJ",
    quote: "As a marketing student, I needed practical experience beyond classroom theory. The social media campaigns I've managed through UniTalent have given me invaluable insights into what works in the real world.",
    achievement: "Created a campaign that increased client's engagement by 230%"
  },
  {
    name: "Emma Williams",
    role: "Creative Writing Major",
    university: "Columbia University",
    avatar: "EW",
    quote: "Finding writing opportunities as a student was challenging until I discovered UniTalent. I've been able to write content for various businesses while refining my craft.",
    achievement: "Published writing portfolio led to a book deal with an independent publisher"
  }
];

const featuredStories = [
  {
    name: "James Wilson",
    title: "From Campus Project to Startup Success",
    description: "Computer science student turned a university project into a thriving business through connections made on UniTalent",
    image: "JW"
  },
  {
    name: "Sophia Garcia",
    title: "International Student Builds Global Client Base",
    description: "How Sophia leveraged UniTalent to connect with clients worldwide while studying abroad",
    image: "SG"
  },
  {
    name: "Noah Kim",
    title: "Paying Off Student Loans Before Graduation",
    description: "Noah's strategic approach to freelancing allowed him to graduate debt-free",
    image: "NK"
  }
];

const SuccessStories = () => {
  return (
    <PageLayout
      title="Success Stories"
      description="Meet students who have transformed their university experience through freelancing"
    >
      <Tabs defaultValue="testimonials" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="testimonials">Student Testimonials</TabsTrigger>
          <TabsTrigger value="featured">Featured Stories</TabsTrigger>
        </TabsList>
        
        <TabsContent value="testimonials">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="bg-secondary/50">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <CardDescription>{testimonial.role}</CardDescription>
                    <CardDescription>{testimonial.university}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="border-l-4 border-primary/50 pl-4 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm font-medium text-primary">
                    Achievement: {testimonial.achievement}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="featured">
          <div className="space-y-8">
            {featuredStories.map((story, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-secondary flex items-center justify-center p-10">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback className="text-2xl">{story.image}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{story.name}</p>
                    <p>{story.description}</p>
                    <button className="text-primary hover:underline mt-4 text-sm font-medium">
                      Read full story →
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default SuccessStories;
