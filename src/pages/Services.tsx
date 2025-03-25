
import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Briefcase, Plus, Filter, Zap, Star, Clock, Calendar, X } from 'lucide-react';
import ProjectListings from '@/components/ProjectListings';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const budgetRanges = [
  { id: 'any', label: 'Any Budget' },
  { id: 'under-100', label: 'Under $100' },
  { id: '100-500', label: '$100 - $500' },
  { id: '500-1000', label: '$500 - $1,000' },
  { id: 'over-1000', label: 'Over $1,000' }
];

const experienceLevels = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'expert', label: 'Expert' }
];

const projectDurations = [
  { id: 'short', label: 'Less than 1 week' },
  { id: 'medium', label: '1-4 weeks' },
  { id: 'long', label: '1-3 months' },
  { id: 'ongoing', label: 'Ongoing' }
];

const Services = () => {
  const { profile } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBudgetRanges, setSelectedBudgetRanges] = useState<string[]>([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [filtersApplied, setFiltersApplied] = useState(0);
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    // Load recent searches from localStorage if available
    const savedSearches = localStorage.getItem('projectSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Save to recent searches
      const updatedSearches = [
        searchQuery,
        ...recentSearches.filter(s => s !== searchQuery).slice(0, 4)
      ];
      setRecentSearches(updatedSearches);
      localStorage.setItem('projectSearches', JSON.stringify(updatedSearches));

      // Here we would typically trigger the actual search
      console.log('Searching for:', searchQuery);
    }
  };

  const handleRecentSearchClick = (term: string) => {
    setSearchQuery(term);
    setShowRecentSearches(false);
    // Trigger search
  };

  const handleBudgetRangeChange = (rangeId: string) => {
    setSelectedBudgetRanges(prev => 
      prev.includes(rangeId)
        ? prev.filter(id => id !== rangeId)
        : [...prev, rangeId]
    );
  };

  const handleExperienceLevelChange = (levelId: string) => {
    setSelectedExperienceLevels(prev => 
      prev.includes(levelId)
        ? prev.filter(id => id !== levelId)
        : [...prev, levelId]
    );
  };

  const handleDurationChange = (durationId: string) => {
    setSelectedDurations(prev => 
      prev.includes(durationId)
        ? prev.filter(id => id !== durationId)
        : [...prev, durationId]
    );
  };

  const clearAllFilters = () => {
    setSelectedBudgetRanges([]);
    setSelectedExperienceLevels([]);
    setSelectedDurations([]);
    setFiltersApplied(0);
  };

  const applyFilters = () => {
    const totalFilters = 
      selectedBudgetRanges.length + 
      selectedExperienceLevels.length + 
      selectedDurations.length;
    
    setFiltersApplied(totalFilters);
    setShowFilters(false);
  };

  return (
    <PageLayout 
      title="Browse Projects" 
      description="Find and apply for projects posted by clients looking for university student talent"
    >
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-3 w-full mb-6">
          <div className="relative flex-grow">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects by title, skills or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowRecentSearches(searchQuery === '' && recentSearches.length > 0)}
                onBlur={() => setTimeout(() => setShowRecentSearches(false), 200)}
                className="pl-9 w-full"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                  onClick={() => setSearchQuery('')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              <AnimatePresence>
                {showRecentSearches && recentSearches.length > 0 && (
                  <motion.div 
                    className="absolute top-full left-0 right-0 mt-1 z-10 bg-background border rounded-md shadow-md"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2 text-xs text-muted-foreground">Recent Searches</div>
                    {recentSearches.map((term, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-2 hover:bg-muted transition-colors text-sm flex items-center"
                        onClick={() => handleRecentSearchClick(term)}
                      >
                        <Clock className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                        {term}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
          
          <Sheet open={showFilters} onOpenChange={setShowFilters}>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex gap-2 min-w-[100px]">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                {filtersApplied > 0 && (
                  <span className="ml-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {filtersApplied}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Projects</SheetTitle>
              </SheetHeader>
              
              <div className="py-4">
                <div className="space-y-5">
                  {/* Budget Range */}
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2" />
                      <h3 className="font-medium">Budget Range</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {budgetRanges.map((range) => (
                        <div key={range.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`budget-${range.id}`} 
                            checked={selectedBudgetRanges.includes(range.id)}
                            onCheckedChange={() => handleBudgetRangeChange(range.id)}
                          />
                          <Label htmlFor={`budget-${range.id}`}>{range.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Experience Level */}
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 mr-2" />
                      <h3 className="font-medium">Experience Level</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {experienceLevels.map((level) => (
                        <div key={level.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`level-${level.id}`} 
                            checked={selectedExperienceLevels.includes(level.id)}
                            onCheckedChange={() => handleExperienceLevelChange(level.id)}
                          />
                          <Label htmlFor={`level-${level.id}`}>{level.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Project Duration */}
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <h3 className="font-medium">Project Duration</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {projectDurations.map((duration) => (
                        <div key={duration.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`duration-${duration.id}`} 
                            checked={selectedDurations.includes(duration.id)}
                            onCheckedChange={() => handleDurationChange(duration.id)}
                          />
                          <Label htmlFor={`duration-${duration.id}`}>{duration.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <SheetFooter className="flex flex-row gap-3 sm:justify-between">
                <Button 
                  variant="outline" 
                  type="button" 
                  onClick={clearAllFilters}
                  className="flex-1"
                >
                  Clear All
                </Button>
                <Button 
                  type="button" 
                  onClick={applyFilters}
                  className="flex-1"
                >
                  Apply Filters
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          
          <div className="flex gap-2">
            <select
              className="border rounded-md px-3 py-2 bg-background text-sm"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="budget-high">Highest Budget</option>
              <option value="budget-low">Lowest Budget</option>
              <option value="alphabetical">A-Z</option>
            </select>
            
            {profile?.user_type === 'client' && (
              <Link to="/clients/post-project">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Post a Project
                </Button>
              </Link>
            )}
          </div>
        </div>
        
        {/* Applied Filters */}
        {filtersApplied > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedBudgetRanges.map(rangeId => {
              const range = budgetRanges.find(r => r.id === rangeId);
              return (
                <Badge key={rangeId} variant="secondary" className="flex items-center gap-1">
                  <span>{range?.label}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-4 w-4 p-0 ml-1" 
                    onClick={() => handleBudgetRangeChange(rangeId)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              );
            })}
            
            {selectedExperienceLevels.map(levelId => {
              const level = experienceLevels.find(l => l.id === levelId);
              return (
                <Badge key={levelId} variant="secondary" className="flex items-center gap-1">
                  <span>{level?.label}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-4 w-4 p-0 ml-1" 
                    onClick={() => handleExperienceLevelChange(levelId)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              );
            })}
            
            {selectedDurations.map(durationId => {
              const duration = projectDurations.find(d => d.id === durationId);
              return (
                <Badge key={durationId} variant="secondary" className="flex items-center gap-1">
                  <span>{duration?.label}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-4 w-4 p-0 ml-1" 
                    onClick={() => handleDurationChange(durationId)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              );
            })}
          </div>
        )}
        
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
        </div>
      </div>
      
      {/* Project Listings Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
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
      </motion.div>
    </PageLayout>
  );
};

export default Services;
