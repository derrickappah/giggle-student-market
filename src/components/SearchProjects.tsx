
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Clock, Briefcase, Compass, CheckCircle2, DollarSign, MapPin, Star, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetTitle,
  SheetFooter
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { id: 'design', label: 'Design & Creative' },
  { id: 'programming', label: 'Programming & Tech' },
  { id: 'writing', label: 'Writing & Translation' },
  { id: 'marketing', label: 'Marketing & Sales' },
  { id: 'research', label: 'Research & Analysis' },
  { id: 'tutoring', label: 'Teaching & Tutoring' }
];

const durations = [
  { id: 'less-than-week', label: 'Less than a week' },
  { id: '1-2-weeks', label: '1-2 weeks' },
  { id: '1-month', label: '1 month' },
  { id: '1-3-months', label: '1-3 months' },
  { id: '3-plus-months', label: '3+ months' }
];

const projectTypes = [
  { id: 'one-time', label: 'One-time project' },
  { id: 'ongoing', label: 'Ongoing project' },
  { id: 'part-time', label: 'Part-time job' },
  { id: 'internship', label: 'Internship' }
];

const locations = [
  { id: 'remote', label: 'Remote Only' },
  { id: 'hybrid', label: 'Hybrid' },
  { id: 'on-site', label: 'On-site' }
];

const skillLevels = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
  { id: 'expert', label: 'Expert' }
];

const SearchProjects = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [budgetRange, setBudgetRange] = useState([50, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedSkillLevels, setSelectedSkillLevels] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filtersApplied, setFiltersApplied] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  
  useEffect(() => {
    // Load recent searches from localStorage if available
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);
  
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  
  const handleDurationChange = (durationId: string) => {
    setSelectedDurations(prev => 
      prev.includes(durationId)
        ? prev.filter(id => id !== durationId)
        : [...prev, durationId]
    );
  };
  
  const handleTypeChange = (typeId: string) => {
    setSelectedTypes(prev => 
      prev.includes(typeId)
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };
  
  const handleLocationChange = (locationId: string) => {
    setSelectedLocations(prev => 
      prev.includes(locationId)
        ? prev.filter(id => id !== locationId)
        : [...prev, locationId]
    );
  };
  
  const handleSkillLevelChange = (levelId: string) => {
    setSelectedSkillLevels(prev => 
      prev.includes(levelId)
        ? prev.filter(id => id !== levelId)
        : [...prev, levelId]
    );
  };
  
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedDurations([]);
    setSelectedTypes([]);
    setSelectedLocations([]);
    setSelectedSkillLevels([]);
    setBudgetRange([50, 1000]);
    setFiltersApplied(0);
  };
  
  const applyFilters = () => {
    const totalFilters = 
      selectedCategories.length + 
      selectedDurations.length + 
      selectedTypes.length +
      selectedLocations.length +
      selectedSkillLevels.length +
      (budgetRange[0] !== 50 || budgetRange[1] !== 1000 ? 1 : 0);
    
    setFiltersApplied(totalFilters);
    setShowFilters(false);
    
    toast({
      title: "Filters Applied",
      description: `${totalFilters} filters applied to your search.`,
    });
  };
  
  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Save to recent searches
      const updatedSearches = [
        searchTerm,
        ...recentSearches.filter(s => s !== searchTerm).slice(0, 4)
      ];
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      
      // Here we would typically trigger the actual search
      toast({
        title: "Search Initiated",
        description: `Searching for "${searchTerm}" with ${filtersApplied} filters.`,
      });
    }
  };
  
  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  const handleRecentSearchClick = (term: string) => {
    setSearchTerm(term);
    setShowRecentSearches(false);
    handleSearch();
  };

  return (
    <section className="py-8 px-4 mb-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          className="relative rounded-xl p-6 bg-gradient-to-r from-primary/5 to-secondary/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Find Your Perfect Project</h2>
            <p className="text-foreground/70">Discover projects that match your skills and interests</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects by keyword, skill, or title..."
                className="pl-9 py-5"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowRecentSearches(e.target.value === '');
                }}
                onFocus={() => setShowRecentSearches(searchTerm === '' && recentSearches.length > 0)}
                onBlur={() => setTimeout(() => setShowRecentSearches(false), 200)}
                onKeyDown={handleSearchKeyDown}
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                  onClick={() => setSearchTerm('')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              
              {/* Recent searches dropdown */}
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
            </div>
            
            <Sheet open={showFilters} onOpenChange={setShowFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                  {filtersApplied > 0 && (
                    <span className="ml-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {filtersApplied}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="sm:max-w-md overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filter Projects</SheetTitle>
                </SheetHeader>
                
                <div className="py-4">
                  <div className="space-y-5">
                    {/* Budget Range */}
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2" />
                        <h3 className="font-medium">Budget Range</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">${budgetRange[0]}</span>
                          <span className="text-sm">${budgetRange[1]}</span>
                        </div>
                        <Slider 
                          defaultValue={[50, 1000]} 
                          min={50} 
                          max={1000} 
                          step={50}
                          value={budgetRange}
                          onValueChange={setBudgetRange}
                        />
                      </div>
                    </div>
                    
                    <Separator />
                    
                    {/* Categories */}
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Compass className="h-4 w-4 mr-2" />
                        <h3 className="font-medium">Categories</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {categories.map((category) => (
                          <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`category-${category.id}`} 
                              checked={selectedCategories.includes(category.id)}
                              onCheckedChange={() => handleCategoryChange(category.id)}
                            />
                            <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    {/* Project Duration */}
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <h3 className="font-medium">Project Duration</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {durations.map((duration) => (
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
                    
                    <Separator />
                    
                    {/* Project Type */}
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <h3 className="font-medium">Project Type</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {projectTypes.map((type) => (
                          <div key={type.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`type-${type.id}`} 
                              checked={selectedTypes.includes(type.id)}
                              onCheckedChange={() => handleTypeChange(type.id)}
                            />
                            <Label htmlFor={`type-${type.id}`}>{type.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    {/* Location */}
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <h3 className="font-medium">Location</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {locations.map((location) => (
                          <div key={location.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`location-${location.id}`} 
                              checked={selectedLocations.includes(location.id)}
                              onCheckedChange={() => handleLocationChange(location.id)}
                            />
                            <Label htmlFor={`location-${location.id}`}>{location.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    {/* Skill Level */}
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2" />
                        <h3 className="font-medium">Skill Level Required</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {skillLevels.map((level) => (
                          <div key={level.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`level-${level.id}`} 
                              checked={selectedSkillLevels.includes(level.id)}
                              onCheckedChange={() => handleSkillLevelChange(level.id)}
                            />
                            <Label htmlFor={`level-${level.id}`}>{level.label}</Label>
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
            
            <Button type="button" onClick={handleSearch}>Search</Button>
          </div>
          
          {/* Filters applied indicators */}
          {filtersApplied > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedCategories.map(categoryId => {
                const category = categories.find(c => c.id === categoryId);
                return (
                  <Badge key={categoryId} variant="secondary" className="flex items-center gap-1">
                    <span>{category?.label}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-4 w-4 p-0 ml-1" 
                      onClick={() => handleCategoryChange(categoryId)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                );
              })}
              
              {selectedDurations.map(durationId => {
                const duration = durations.find(d => d.id === durationId);
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
              
              {selectedTypes.map(typeId => {
                const type = projectTypes.find(t => t.id === typeId);
                return (
                  <Badge key={typeId} variant="secondary" className="flex items-center gap-1">
                    <span>{type?.label}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-4 w-4 p-0 ml-1" 
                      onClick={() => handleTypeChange(typeId)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                );
              })}
              
              {selectedLocations.map(locationId => {
                const location = locations.find(l => l.id === locationId);
                return (
                  <Badge key={locationId} variant="secondary" className="flex items-center gap-1">
                    <span>{location?.label}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-4 w-4 p-0 ml-1" 
                      onClick={() => handleLocationChange(locationId)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                );
              })}
              
              {(budgetRange[0] !== 50 || budgetRange[1] !== 1000) && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <span>${budgetRange[0]} - ${budgetRange[1]}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-4 w-4 p-0 ml-1" 
                    onClick={() => setBudgetRange([50, 1000])}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}
            </div>
          )}
          
          {/* Quick filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            <Button variant="outline" size="sm" className="rounded-full">
              <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />
              Verified Only
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              Posted Today
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <DollarSign className="h-3.5 w-3.5 mr-1.5" />
              High Budget
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <MapPin className="h-3.5 w-3.5 mr-1.5" />
              Remote Only
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <Zap className="h-3.5 w-3.5 mr-1.5" />
              Quick Turnaround
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchProjects;
