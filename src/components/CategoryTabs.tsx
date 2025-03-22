
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Book, Palette, FileText, Globe, Headphones, DollarSign } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Services', icon: <Globe className="h-4 w-4" /> },
  { id: 'programming', name: 'Programming', icon: <Code className="h-4 w-4" /> },
  { id: 'design', name: 'Design', icon: <PenTool className="h-4 w-4" /> },
  { id: 'tutoring', name: 'Tutoring', icon: <Book className="h-4 w-4" /> },
  { id: 'writing', name: 'Writing', icon: <FileText className="h-4 w-4" /> },
  { id: 'art', name: 'Art & Media', icon: <Palette className="h-4 w-4" /> },
  { id: 'music', name: 'Music', icon: <Headphones className="h-4 w-4" /> },
  { id: 'finance', name: 'Finance', icon: <DollarSign className="h-4 w-4" /> },
];

const CategoryTabs = ({ onSelectCategory }: { onSelectCategory: (category: string) => void }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onSelectCategory(categoryId);
  };

  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-4">
      <div className="flex flex-nowrap gap-2 min-w-max px-4 md:px-0 md:justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
              ${activeCategory === category.id 
                ? 'text-primary font-medium' 
                : 'text-foreground/60 hover:text-foreground hover:bg-secondary'
              }`}
          >
            {activeCategory === category.id && (
              <motion.div
                layoutId="activeCategoryIndicator"
                className="absolute inset-0 bg-primary/10 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            <span className="relative">{category.icon}</span>
            <span className="relative whitespace-nowrap">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
