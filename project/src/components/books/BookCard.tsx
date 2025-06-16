import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
  description: string;
}

export default function BookCard({
  id,
  title,
  author,
  price,
  thumbnail,
  category,
  rating,
  description,
}: BookCardProps) {
  return (
    <div className="card group">
      <Link to={`/ebooks/${id}`} className="block">
        <div className="relative h-56 overflow-hidden bg-gray-100">
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
        <Link to={`/ebooks/${id}`} className="block">
          <h3 className="font-medium text-lg mb-1 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">
            {title}
          </h3>
        </Link>
        
        <div className="text-sm text-gray-700 mb-2">
          by <span className="font-medium">{author}</span>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm ml-1">{rating.toFixed(1)}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-2">
          <Link to={`/ebooks/${id}`} className="btn-secondary text-xs py-1.5 flex items-center justify-center">
            <Eye className="h-4 w-4 mr-1" />
            Preview
          </Link>
          <button className="btn-primary text-xs py-1.5 flex items-center justify-center">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}