
import React, { useState } from 'react';
import { Star, Clock, User } from 'lucide-react';

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  turnaround: string;
  freelancerName: string;
  freelancerUniversity: string;
  freelancerAvatar: string;
  serviceThumbnail: string;
}

const ServiceCard = ({
  title,
  description,
  price,
  rating,
  reviews,
  turnaround,
  freelancerName,
  freelancerUniversity,
  freelancerAvatar,
  serviceThumbnail
}: ServiceCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="card-hover glass overflow-hidden rounded-2xl transition-all duration-300">
      <div 
        className={`aspect-[4/3] w-full relative blur-load ${imageLoaded ? 'loaded' : ''}`}
        style={{ backgroundImage: `url(${serviceThumbnail}?blur=30)` }}
      >
        <img
          src={serviceThumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      <div className="p-5">
        {/* Service Title and Price */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-lg line-clamp-2 pr-2">{title}</h3>
          <span className="flex items-center whitespace-nowrap font-medium text-primary">
            ${price}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{description}</p>
        
        {/* Service Stats */}
        <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
          <div className="flex items-center">
            <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" />
            <span>{rating.toFixed(1)} ({reviews} reviews)</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{turnaround}</span>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px w-full bg-border mb-4"></div>
        
        {/* Freelancer Info */}
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
            <img 
              src={freelancerAvatar} 
              alt={freelancerName}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-sm truncate">{freelancerName}</div>
            <div className="text-xs text-foreground/60 truncate">{freelancerUniversity}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
