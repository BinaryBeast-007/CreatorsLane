import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users } from 'lucide-react';

interface CreatorCardProps {
  id: number;
  name: string;
  expertise: string;
  rating: number;
  students: number;
  avatar: string;
}

export default function CreatorCard({
  id,
  name,
  expertise,
  rating,
  students,
  avatar,
}: CreatorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group">
      <Link to={`/creators/${id}`} className="block">
        <div className="h-40 bg-gradient-to-r from-primary-400 to-primary-600 relative">
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="h-24 w-24 rounded-full border-4 border-white overflow-hidden">
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="p-4 pt-16 text-center">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary-600 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{expertise}</p>
          
          <div className="flex items-center justify-center space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm ml-1">{rating.toFixed(1)}</span>
          </div>
          
          <div className="text-sm text-gray-600 flex items-center justify-center">
            <Users className="h-4 w-4 mr-1" />
            {students.toLocaleString()} students
          </div>

          <div className="mt-4">
            <Link to={`/creators/${id}`} className="btn-primary text-sm py-1.5 w-full">
              View Profile
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}