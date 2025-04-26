import React, { useState } from 'react';
import { Search, Filter, ChevronDown, X } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ClassCard from '../components/classes/ClassCard';
import FilterSidebar from '../components/filters/FilterSidebar';

// Sample data - would come from API in real app
const classes = [
  {
    id: 1,
    title: 'Advanced UI Design Principles',
    instructor: 'Sarah Johnson',
    price: 39.99,
    date: '2025-06-10T15:00:00',
    duration: 90,
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=400',
    category: 'Design',
    attendees: 218,
  },
  {
    id: 2,
    title: 'Marketing Strategy for Startups',
    instructor: 'John Smith',
    price: 49.99,
    date: '2025-06-12T18:00:00',
    duration: 120,
    thumbnail: 'https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&h=400',
    category: 'Marketing',
    attendees: 156,
  },
  {
    id: 3,
    title: 'Introduction to React Development',
    instructor: 'David Kim',
    price: 29.99,
    date: '2025-06-15T14:00:00',
    duration: 75,
    thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&h=400',
    category: 'Technology',
    attendees: 321,
  },
  {
    id: 4,
    title: 'Financial Planning for Beginners',
    instructor: 'Emily Rodriguez',
    price: 24.99,
    date: '2025-06-18T17:00:00',
    duration: 60,
    thumbnail: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&h=400',
    category: 'Business',
    attendees: 94,
  },
  {
    id: 5,
    title: 'Digital Illustration Techniques',
    instructor: 'Maria Garcia',
    price: 34.99,
    date: '2025-06-20T19:00:00',
    duration: 105,
    thumbnail: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&h=400',
    category: 'Design',
    attendees: 173,
  },
  {
    id: 6,
    title: 'Mindfulness and Productivity',
    instructor: 'James Wilson',
    price: 19.99,
    date: '2025-06-22T16:00:00',
    duration: 45,
    thumbnail: 'https://images.pexels.com/photos/3771508/pexels-photo-3771508.jpeg?auto=compress&cs=tinysrgb&h=400',
    category: 'Health & Wellness',
    attendees: 128,
  },
];

export default function LiveClasses() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Technology', 'Business', 'Design', 'Marketing', 'Personal Development', 'Health & Wellness'];

  const handleCategorySelect = (category: string) => {
    if (activeFilters.includes(category)) {
      setActiveFilters(activeFilters.filter(c => c !== category));
    } else {
      setActiveFilters([...activeFilters, category]);
    }
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  // Filter classes based on activeFilters and searchQuery
  const filteredClasses = classes.filter(c => {
    const matchesFilters = activeFilters.length === 0 || activeFilters.includes(c.category);
    const matchesSearch = !searchQuery || 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilters && matchesSearch;
  });

  return (
    <>
      <PageHeader 
        title="Live Classes" 
        description="Join interactive live classes taught by expert creators"
        backgroundImage="https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&h=650"
      />
      
      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Mobile Toggle */}
          <div className="lg:hidden mb-4">
            <button 
              className="w-full btn-secondary flex items-center justify-center"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {/* Filters Sidebar - Mobile */}
          {isFilterOpen && (
            <div className="lg:hidden bg-white rounded-lg shadow-md p-4 mb-6 animate-fade-in">
              <FilterSidebar 
                categories={categories}
                activeFilters={activeFilters}
                onCategorySelect={handleCategorySelect}
                onClearAll={clearAllFilters}
              />
            </div>
          )}
          
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-24 bg-white rounded-lg shadow-md p-6">
              <FilterSidebar 
                categories={categories}
                activeFilters={activeFilters}
                onCategorySelect={handleCategorySelect}
                onClearAll={clearAllFilters}
              />
            </div>
          </div>
          
          {/* Classes Grid */}
          <div className="lg:w-3/4">
            {/* Search and Sort Bar */}
            <div className="mb-6 flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input 
                  type="text" 
                  placeholder="Search classes or instructors..." 
                  className="input pl-10 py-3 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              
              <div className="flex-shrink-0">
                <select className="input py-3 pr-8 appearance-none">
                  <option>Sort by: Upcoming</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>
            
            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-600">Active filters:</span>
                {activeFilters.map(filter => (
                  <span 
                    key={filter}
                    className="badge-primary flex items-center"
                  >
                    {filter}
                    <button
                      onClick={() => removeFilter(filter)}
                      className="ml-1 text-primary-700 hover:text-primary-900"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
                <button 
                  className="text-xs text-primary-600 hover:text-primary-800 ml-2"
                  onClick={clearAllFilters}
                >
                  Clear all
                </button>
              </div>
            )}
            
            {/* Results Info */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredClasses.length} classes
              </p>
            </div>
            
            {/* Classes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map(classItem => (
                <ClassCard 
                  key={classItem.id}
                  id={classItem.id}
                  title={classItem.title}
                  instructor={classItem.instructor}
                  price={classItem.price}
                  date={classItem.date}
                  duration={classItem.duration}
                  thumbnail={classItem.thumbnail}
                  category={classItem.category}
                  attendees={classItem.attendees}
                />
              ))}
            </div>
            
            {/* No Results */}
            {filteredClasses.length === 0 && (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h3 className="text-xl font-medium mb-2">No classes found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any classes matching your current filters.
                </p>
                <button 
                  className="btn-primary"
                  onClick={clearAllFilters}
                >
                  Clear Filters
                </button>
              </div>
            )}
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 border-r border-gray-300">
                  Previous
                </button>
                <button className="px-4 py-2 bg-primary-600 text-white">1</button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-50">3</button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 border-l border-gray-300">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}