import React from 'react';
import { CalendarDays, Star } from 'lucide-react';

interface FilterSidebarProps {
  categories: string[];
  activeFilters: string[];
  onCategorySelect: (category: string) => void;
  onClearAll: () => void;
}

export default function FilterSidebar({ 
  categories, 
  activeFilters, 
  onCategorySelect,
  onClearAll
}: FilterSidebarProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Filters</h3>
        {activeFilters.length > 0 && (
          <button 
            className="text-xs text-primary-600 hover:text-primary-800"
            onClick={onClearAll}
          >
            Clear all
          </button>
        )}
      </div>
      
      {/* Categories */}
      <div>
        <h4 className="font-medium mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category} className="flex items-center">
              <input 
                type="checkbox" 
                id={`category-${category}`} 
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                checked={activeFilters.includes(category)}
                onChange={() => onCategorySelect(category)}
              />
              <label 
                htmlFor={`category-${category}`} 
                className="ml-2 text-sm text-gray-700"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Price Range */}
      <div>
        <h4 className="font-medium mb-3">Price Range</h4>
        <div className="px-2">
          <input 
            type="range" 
            min="0" 
            max="100" 
            className="w-full accent-primary-600"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>$0</span>
            <span>$100+</span>
          </div>
        </div>
      </div>
      
      {/* Date Range */}
      <div>
        <h4 className="font-medium mb-3">Date</h4>
        <div className="space-y-2">
          <button className="flex items-center w-full text-left p-2 text-sm hover:bg-gray-50 rounded-md border border-gray-200">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            Choose dates...
          </button>
          <div className="space-y-2 mt-2">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Today</span>
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">This week</span>
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">This month</span>
            </label>
          </div>
        </div>
      </div>
      
      {/* Duration */}
      <div>
        <h4 className="font-medium mb-3">Duration</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Under 30 minutes</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">30-60 minutes</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">1-2 hours</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Over 2 hours</span>
          </label>
        </div>
      </div>
      
      {/* Rating */}
      <div>
        <h4 className="font-medium mb-3">Instructor Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center">
              <input 
                type="checkbox" 
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-2 flex items-center text-sm text-gray-700">
                {Array(5).fill(0).map((_, index) => (
                  <Star 
                    key={index} 
                    className={`h-4 w-4 ${
                      index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`} 
                  />
                ))}
                <span className="ml-1">{rating}+ stars</span>
              </span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Language */}
      <div>
        <h4 className="font-medium mb-3">Language</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">English</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Spanish</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">French</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">German</span>
          </label>
          <label className="flex items-center">
            <input 
              type="checkbox" 
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Japanese</span>
          </label>
        </div>
      </div>
    </div>
  );
}