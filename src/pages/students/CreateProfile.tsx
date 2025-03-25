
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
import { Check, Loader2 } from 'lucide-react';
import SkillsCard from '@/components/SkillsCard';

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
  const { user, profile, updateProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [previewSkills, setPreviewSkills] = useState<string[]>([]);
  
  // If profile already exists with bio, redirect to dashboard
  useEffect(() => {
    if (profile && profile.bio) {
      navigate('/student');
    }
  }, [profile, navigate]);
  
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: profile?.first_name ? `${profile.first_name} ${profile.last_name || ''}`.trim() : "",
      university: profile?.university || "",
      course: "",
      skills: "",
      bio: profile?.bio || "",
      hourlyRate: ""
    }
  });

  // Update preview skills when the skills field changes
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'skills' && value.skills) {
        setPreviewSkills(
          value.skills.toString()
            .split(',')
            .map(skill => skill.trim())
            .filter(skill => skill.length > 0)
        );
      }
    });
    
    return () => subscription.unsubscribe();
  }, [form.watch]);

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
      console.log("Starting profile creation with values:", values);
      
      // Split the full name into first and last name
      const nameParts = values.fullName.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      // Format skills as an array
      const skillsArray = values.skills.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);
      
      // Create user details object
      const userDetails = {
        course: values.course,
        skills: skillsArray,
        hourly_rate: parseFloat(values.hourlyRate)
      };
      
      console.log("Prepared profile data:", {
        first_name: firstName,
        last_name: lastName,
        university: values.university,
        bio: values.bio,
        user_details: userDetails
      });
      
      // Update the profile in Supabase using the updateProfile function from AuthContext
      const { error } = await updateProfile({
        first_name: firstName,
        last_name: lastName,
        university: values.university,
        bio: values.bio,
        user_details: userDetails
      });
      
      if (error) {
        console.error("Error response from updateProfile:", error);
        throw error;
      }
      
      console.log("Profile created successfully!");
      
      toast({
        title: "Profile created!",
        description: "Your profile has been created successfully."
      });
      
      // Short delay to ensure profile is saved before redirecting
      setTimeout(() => {
        navigate("/student");
      }, 500);
      
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
            
            {previewSkills.length > 0 && (
              <div className="mt-2">
                <SkillsCard 
                  title="Skills Preview" 
                  skills={previewSkills} 
                  className="bg-muted/50 border-dashed"
                />
              </div>
            )}
            
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
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Profile...
                </>
              ) : (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Create Profile
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </PageLayout>
  );
};

export default CreateProfile;
