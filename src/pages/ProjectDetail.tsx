
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Briefcase, Clock, DollarSign, Calendar, User } from 'lucide-react';
import { ProjectListing } from '@/types/project';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { user, profile } = useAuth();
  const [project, setProject] = useState<ProjectListing | null>(null);
  const [clientProfile, setClientProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isApplying, setIsApplying] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        
        if (!id) {
          throw new Error('Project ID is required');
        }
        
        const { data: projectData, error: projectError } = await supabase
          .from('project_listings')
          .select('*')
          .eq('id', id)
          .single();
        
        if (projectError) {
          throw projectError;
        }
        
        setProject(projectData as ProjectListing);
        
        // Fetch client profile
        if (projectData) {
          const { data: clientData, error: clientError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', projectData.client_id)
            .single();
          
          if (clientError) {
            console.error('Error fetching client profile:', clientError);
          } else {
            setClientProfile(clientData);
          }
        }
        
      } catch (err) {
        console.error('Error fetching project:', err);
        setError('Failed to load project details');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProject();
  }, [id]);

  const handleApply = async () => {
    try {
      if (!user) {
        toast({
          variant: "destructive",
          title: "Authentication required",
          description: "You must be logged in to apply for projects."
        });
        return;
      }
      
      if (profile?.user_type !== 'student') {
        toast({
          variant: "destructive",
          title: "Not allowed",
          description: "Only student accounts can apply for projects."
        });
        return;
      }
      
      setIsApplying(true);
      
      // Here you would submit the application to Supabase
      // This would be implemented when we build the bidding system
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Application submitted!",
        description: "Your application has been sent to the client."
      });
      
    } catch (error) {
      console.error("Error applying for project:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Your application could not be submitted. Please try again."
      });
    } finally {
      setIsApplying(false);
    }
  };

  if (loading) {
    return (
      <PageLayout title="Project Details" description="Loading project information...">
        <div className="flex justify-center p-12">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      </PageLayout>
    );
  }

  if (error || !project) {
    return (
      <PageLayout title="Project Not Found" description="We couldn't find the project you're looking for">
        <div className="text-center p-12">
          <Briefcase className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-xl font-medium mb-4">Project not found</h2>
          <p className="text-muted-foreground mb-6">
            The project may have been removed or you may have followed an invalid link.
          </p>
          <Link to="/services">
            <Button>Browse All Projects</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  const formattedDate = new Date(project.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <PageLayout title={project.title} description="Project details and application">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{project.title}</CardTitle>
                <Badge>{project.category.replace('-', ' ')}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Project Description</h3>
                <p className="whitespace-pre-wrap">{project.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-sm">Budget</span>
                  </div>
                  <div className="text-lg font-medium">${project.budget}</div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Duration</span>
                  </div>
                  <div className="text-lg font-medium">{project.duration.replace(/-/g, ' ')}</div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Posted On</span>
                  </div>
                  <div className="text-lg font-medium">{formattedDate}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {profile?.user_type === 'student' && (
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleApply}
                  disabled={isApplying}
                >
                  {isApplying ? "Submitting..." : "Apply for this Project"}
                </Button>
              )}
              
              {profile?.user_type === 'client' && project.client_id === user?.id && (
                <Link to={`/client/projects/${project.id}/edit`} className="w-full">
                  <Button variant="outline" className="w-full" size="lg">
                    Edit Your Project
                  </Button>
                </Link>
              )}
              
              {!user && (
                <Link to="/login" className="w-full">
                  <Button className="w-full" size="lg">
                    Login to Apply
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Client information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">About the Client</CardTitle>
            </CardHeader>
            <CardContent>
              {clientProfile ? (
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src={clientProfile.avatar_url} />
                    <AvatarFallback>
                      {clientProfile.first_name?.charAt(0) || 'C'}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-medium text-lg">
                    {clientProfile.first_name || 'Client'} {clientProfile.last_name || ''}
                  </h3>
                  {clientProfile.bio && (
                    <p className="text-sm text-muted-foreground mt-2">{clientProfile.bio}</p>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarFallback>C</AvatarFallback>
                  </Avatar>
                  <h3 className="font-medium">Client</h3>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Similar projects would go here */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Similar Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Projects in the same category will appear here.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/services" className="w-full">
                <Button variant="outline" className="w-full">
                  Browse All Projects
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProjectDetail;
