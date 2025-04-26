import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';

interface ClassCardProps {
  id: number;
  title: string;
  instructor: string;
  price: number;
  date: string;
  duration: number;
  thumbnail: string;
  category: string;
  attendees: number;
}

export default function ClassCard({
  id,
  title,
  instructor,
  price,
  date,
  duration,
  thumbnail,
  category,
  attendees,
}: ClassCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  
  const formattedTime = new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="card group">
      <Link to={`/live-classes/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="badge-primary">{category}</span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="badge bg-black/70 text-white">
              ${price.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/live-classes/${id}`} className="block">
          <h3 className="font-medium text-lg mb-2 group-hover:text-primary-600 transition-colors duration-300">
            {title}
          </h3>
        </Link>
        
        <div className="text-sm text-gray-700 mb-3">
          by <span className="font-medium">{instructor}</span>
        </div>
        
        <div className="text-sm text-gray-600 flex items-center mb-1">
          <Clock className="h-4 w-4 mr-1" />
          {formattedDate} at {formattedTime}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600 flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {duration} min
          </div>
          <div className="text-sm text-gray-600 flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {attendees} joined
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button className="btn-secondary text-xs py-1.5">Add to Calendar</button>
          <Link to={`/live-classes/${id}`} className="btn-primary text-xs py-1.5">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}