
import React, { useState } from 'react';
import { Star, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";

export interface FreelancerCardProps {
  id: string;
  name: string;
  title: string;
  university: string;
  avatar: string;
  rating: number;
  reviews: number;
  projectsCompleted: number;
  categories: string[];
}

const FreelancerCard = ({
  name,
  title,
  university,
  avatar,
  rating,
  reviews,
  projectsCompleted,
  categories
}: FreelancerCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="glass card-hover p-6 rounded-2xl flex flex-col items-center text-center">
      {/* Avatar */}
      <div 
        className={`h-20 w-20 rounded-full overflow-hidden mb-4 blur-load ${imageLoaded ? 'loaded' : ''}`}
        style={{ backgroundImage: `url(${avatar}?blur=30)` }}
      >
        <img
          src={avatar}
          alt={name}
          className="h-full w-full object-cover"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      {/* Name and Title */}
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-sm text-foreground/70 mb-2">{title}</p>
      <p className="text-xs text-foreground/60 mb-4">{university}</p>
      
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-1 mb-4">
        {categories.slice(0, 3).map((category, index) => (
          <span key={index} className="tag">
            {category}
          </span>
        ))}
      </div>
      
      {/* Stats */}
      <div className="w-full flex justify-center space-x-4 text-xs text-foreground/70 mb-5">
        <div className="flex items-center">
          <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" />
          <span>{rating.toFixed(1)} ({reviews})</span>
        </div>
        <div className="flex items-center">
          <Briefcase className="h-3.5 w-3.5 mr-1" />
          <span>{projectsCompleted} projects</span>
        </div>
      </div>
      
      {/* Action Button */}
      <Button variant="outline" size="sm" className="w-full rounded-full hover:bg-primary hover:text-white transition-colors">
        View Profile
      </Button>
    </div>
  );
};

export default FreelancerCard;
