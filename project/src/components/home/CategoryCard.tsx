import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Briefcase, PenTool, TrendingUp, User, Heart } from 'lucide-react';

interface CategoryProps {
  category: {
    id: number;
    name: string;
    icon: string;
    count: number;
  };
}

export default function CategoryCard({ category }: CategoryProps) {
  const getIcon = () => {
    switch (category.icon) {
      case 'laptop':
        return <Laptop className="h-6 w-6 text-primary-500" />;
      case 'briefcase':
        return <Briefcase className="h-6 w-6 text-primary-500" />;
      case 'pen-tool':
        return <PenTool className="h-6 w-6 text-primary-500" />;
      case 'trending-up':
        return <TrendingUp className="h-6 w-6 text-primary-500" />;
      case 'user':
        return <User className="h-6 w-6 text-primary-500" />;
      case 'heart':
        return <Heart className="h-6 w-6 text-primary-500" />;
      default:
        return <Laptop className="h-6 w-6 text-primary-500" />;
    }
  };

  return (
    <Link 
      to={`/categories/${category.id}`}
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
    >
      <div className="mb-3 p-2 bg-primary-50 rounded-full group-hover:bg-primary-100 transition-colors duration-300">
        {getIcon()}
      </div>
      <h3 className="font-medium text-sm mb-1 group-hover:text-primary-600 transition-colors duration-300">
        {category.name}
      </h3>
      <p className="text-xs text-gray-500">
        {category.count} classes
      </p>
    </Link>
  );
}