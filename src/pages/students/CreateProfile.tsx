
import React, { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import PageLayout from '@/components/PageLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';

const profileFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  university: z.string().min(2, "University name is required"),
  course: z.string().min(2, "Course of study is required"),
  skills: z.string().min(2, "Please list at least one skill"),
  bio: z.string().min(20, "Bio should be at least 20 characters"),
  hourlyRate: z.string().regex(/^\d+(\.\d{1,2})?$/, "Enter a valid rate")
});

const CreateProfile = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  // If profile already exists, redirect to dashboard
  useEffect(() => {
    if (profile && profile.bio) {
      navigate('/student');
    }
  }, [profile, navigate]);
  
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: profile?.first_name || "",
      university: profile?.university || "",
      course: "",
      skills: "",
      bio: profile?.bio || "",
      hourlyRate: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof profileFormSchema>) => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "You must be logged in to create a profile."
      });
      navigate('/login');
      return;
    }
    
    setIsLoading(true);
    try {
      // Split the full name into first and last name
      const nameParts = values.fullName.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      // Update the profile in Supabase
      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: firstName,
          last_name: lastName,
          university: values.university,
          bio: values.bio,
          // Store additional fields as JSON in the bio field
          user_details: {
            course: values.course,
            skills: values.skills.split(',').map(skill => skill.trim()),
            hourlyRate: values.hourlyRate
          }
        })
        .eq('id', user.id);
      
      if (error) throw error;
      
      toast({
        title: "Profile created!",
        description: "Your profile has been created successfully."
      });
      
      navigate("/student");
    } catch (error: any) {
      console.error("Error saving profile:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error.message || "Your profile could not be created. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <PageLayout 
        title="Sign In Required" 
        description="You need to sign in to create a profile"
      >
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-sm border">
          <p className="mb-6">Please sign in or create an account to continue.</p>
          <Button onClick={() => navigate('/login')}>Sign In</Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout 
      title="Create Your Profile" 
      description="Showcase your skills and experience to potential clients"
    >
      <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-sm border">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="university"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>University</FormLabel>
                    <FormControl>
                      <Input placeholder="Your University" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course/Major</FormLabel>
                    <FormControl>
                      <Input placeholder="Computer Science" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skills</FormLabel>
                  <FormControl>
                    <Input placeholder="Web Development, Graphic Design, etc." {...field} />
                  </FormControl>
                  <FormDescription>
                    Separate multiple skills with commas
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell clients about yourself, your experience, and why they should hire you" 
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="hourlyRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hourly Rate ($)</FormLabel>
                  <FormControl>
                    <Input placeholder="15.00" {...field} />
                  </FormControl>
                  <FormDescription>
                    Set a competitive rate based on your skills and experience
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating Profile..." : "Create Profile"}
            </Button>
          </form>
        </Form>
      </div>
    </PageLayout>
  );
};

export default CreateProfile;
