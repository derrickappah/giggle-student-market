
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import PageLayout from '@/components/PageLayout';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string({
    required_error: "Please select a subject."
  }),
  message: z.string().min(10, "Message must be at least 10 characters")
});

const ContactItem = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <div className="flex mb-6">
    <div className="mr-4">
      <div className="bg-primary/10 p-3 rounded-full">
        <Icon className="h-6 w-6 text-primary" />
      </div>
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      {children}
    </div>
  </div>
);

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // In a real app, this would submit to your backend
      console.log("Contact form data:", values);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon."
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again."
      });
    }
  };

  return (
    <PageLayout
      title="Contact Us"
      description="Get in touch with our team"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <ContactItem icon={Mail} title="Email Us">
              <p className="text-muted-foreground">
                <a href="mailto:support@unitalent.com" className="hover:text-primary">support@unitalent.com</a>
              </p>
              <p className="text-muted-foreground">
                <a href="mailto:partnerships@unitalent.com" className="hover:text-primary">partnerships@unitalent.com</a>
              </p>
            </ContactItem>
            
            <ContactItem icon={Phone} title="Call Us">
              <p className="text-muted-foreground">
                <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a>
              </p>
              <p className="text-muted-foreground">
                Monday - Friday, 9AM - 5PM EST
              </p>
            </ContactItem>
            
            <ContactItem icon={MapPin} title="Visit Us">
              <p className="text-muted-foreground">
                123 Innovation Way<br />
                San Francisco, CA 94103<br />
                United States
              </p>
            </ContactItem>
            
            <ContactItem icon={MessageSquare} title="Social Media">
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h21.351c.731 0 1.324-.593 1.324-1.324v-21.351c0-.732-.593-1.325-1.325-1.325zm-11.676 9.199c2.267 0 4.099 1.832 4.099 4.1 0 2.266-1.832 4.1-4.099 4.1-2.269 0-4.101-1.834-4.101-4.1 0-2.268 1.832-4.1 4.101-4.1zm8.578 11.894c0 .605-.494 1.1-1.1 1.1h-14.957c-.606 0-1.1-.494-1.1-1.1v-8.691h2.303c-.256.815-.387 1.678-.387 2.562 0 4.771 3.86 8.639 8.639 8.639 4.778 0 8.639-3.868 8.639-8.639 0-.885-.131-1.748-.389-2.562h2.352v8.691zm0-11.895c0 .605-.494 1.1-1.1 1.1h-2.352c-.606 0-1.1-.494-1.1-1.1v-2.352c0-.606.494-1.1 1.1-1.1h2.352c.606 0 1.1.494 1.1 1.1v2.352z"/>
                  </svg>
                </a>
              </div>
            </ContactItem>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                          <SelectItem value="partnerships">Partnerships</SelectItem>
                          <SelectItem value="careers">Careers</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">How do I create an account?</h3>
              <p className="text-muted-foreground">
                Click the "Sign Up" button in the top right corner and follow the registration steps. Students will need to verify their university email.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">What fees does UniTalent charge?</h3>
              <p className="text-muted-foreground">
                UniTalent charges a 10% service fee on all completed projects. This fee helps us maintain the platform and provide support.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">How do payments work?</h3>
              <p className="text-muted-foreground">
                Clients fund projects upfront. Funds are held in escrow and released to the student once work is approved.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Can I hire teams of students?</h3>
              <p className="text-muted-foreground">
                Yes! You can either hire individual students who collaborate or work with pre-formed student teams for larger projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
