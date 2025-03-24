
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectListing } from '@/types/project';

interface ProjectListingsProps {
  clientId?: string;
  limit?: number;
  category?: string;
  status?: 'open' | 'in_progress' | 'completed' | 'cancelled';
  showApplyButton?: boolean;
}

const ProjectListings = ({ 
  clientId, 
  limit = 10, 
  category, 
  status = 'open',
  showApplyButton = true
}: ProjectListingsProps) => {
  const [projects, setProjects] = useState<ProjectListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        
        // Using any to bypass TypeScript limitations with Supabase
        const query = supabase
          .from('project_listings')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(limit);
        
        if (clientId) {
          query.eq('client_id', clientId);
        }
        
        if (category) {
          query.eq('category', category);
        }
        
        if (status) {
          query.eq('status', status);
        }
        
        const { data, error } = await query;
        
        if (error) {
          throw error;
        }
        
        setProjects(data as ProjectListing[]);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, [clientId, limit, category, status]);

  if (loading) {
    return (
      <div className="flex justify-center p-12">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-12 text-destructive">
        <p>{error}</p>
        <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center p-12">
        <Briefcase className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">No projects found</h3>
        <p className="text-muted-foreground mt-2">
          {status === 'open' 
            ? 'There are no open projects matching your criteria at the moment.'
            : 'No projects match your current filter settings.'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id} className="flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                <CardDescription className="mt-2">
                  Posted {new Date(project.created_at).toLocaleDateString()}
                </CardDescription>
              </div>
              <Badge>{project.category.replace('-', ' ')}</Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm line-clamp-3 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="outline">{skill}</Badge>
              ))}
              {project.skills.length > 3 && (
                <Badge variant="outline">+{project.skills.length - 3} more</Badge>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span>${project.budget}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{project.duration.replace(/-/g, ' ')}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to={`/projects/${project.id}`} className="w-full">
              <Button variant={showApplyButton ? "default" : "outline"} className="w-full">
                {showApplyButton ? "Apply Now" : "View Details"}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectListings;
