
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X, Clock, Briefcase, Compass, CheckCircle2, DollarSign } from 'lucide-react';
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

const SearchProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [budgetRange, setBudgetRange] = useState([50, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filtersApplied, setFiltersApplied] = useState(0);
  
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
  
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedDurations([]);
    setSelectedTypes([]);
    setBudgetRange([50, 1000]);
    setFiltersApplied(0);
  };
  
  const applyFilters = () => {
    const totalFilters = 
      selectedCategories.length + 
      selectedDurations.length + 
      selectedTypes.length + 
      (budgetRange[0] !== 50 || budgetRange[1] !== 1000 ? 1 : 0);
    
    setFiltersApplied(totalFilters);
    setShowFilters(false);
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
          
          <div className="flex items-center gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects by keyword, skill, or title..."
                className="pl-9 py-5"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                      <h3 className="font-medium">Budget Range</h3>
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
            
            <Button type="submit">Search</Button>
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
              {/* Add other filter indicators here */}
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
              Remote Only
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchProjects;
