
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Briefcase, Plus } from 'lucide-react';
import ProjectListings from '@/components/ProjectListings';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const Services = () => {
  const { profile } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would be implemented here
    console.log('Searching for:', searchQuery);
  };

  return (
    <PageLayout 
      title="Browse Projects" 
      description="Find and apply for projects posted by clients looking for university student talent"
    >
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex w-full max-w-2xl mx-auto mb-8 space-x-2">
          <Input
            type="text"
            placeholder="Search projects by title, skills or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </form>
        
        <div className="flex justify-between items-center">
          <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web-development">Web Dev</TabsTrigger>
              <TabsTrigger value="mobile-development">Mobile</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="writing">Writing</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {profile?.user_type === 'client' && (
            <Link to="/clients/post-project">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Post a Project
              </Button>
            </Link>
          )}
        </div>
      </div>
      
      <TabsContent value="all" className="mt-6">
        <ProjectListings 
          status="open"
          showApplyButton={true}
        />
      </TabsContent>
      
      <TabsContent value="web-development" className="mt-6">
        <ProjectListings 
          category="web-development"
          status="open"
          showApplyButton={true}
        />
      </TabsContent>
      
      <TabsContent value="mobile-development" className="mt-6">
        <ProjectListings 
          category="mobile-development"
          status="open"
          showApplyButton={true}
        />
      </TabsContent>
      
      <TabsContent value="design" className="mt-6">
        <ProjectListings 
          category="design"
          status="open"
          showApplyButton={true}
        />
      </TabsContent>
      
      <TabsContent value="writing" className="mt-6">
        <ProjectListings 
          category="writing"
          status="open"
          showApplyButton={true}
        />
      </TabsContent>
      
      <TabsContent value="marketing" className="mt-6">
        <ProjectListings 
          category="marketing"
          status="open"
          showApplyButton={true}
        />
      </TabsContent>
      
      <TabsContent value="data" className="mt-6">
        <ProjectListings 
          category="data"
          status="open"
          showApplyButton={true}
        />
      </TabsContent>
    </PageLayout>
  );
};

export default Services;
