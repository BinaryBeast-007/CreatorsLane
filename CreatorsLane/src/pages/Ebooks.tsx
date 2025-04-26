import React, { useState } from 'react';
import { Search, Filter, ChevronDown, X, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import FilterSidebar from '../components/filters/FilterSidebar';
import BookCard from '../components/books/BookCard';

// Sample data - would come from API in real app
const books = [
  {
    id: 1,
    title: 'The Complete Guide to UX Research',
    author: 'Sarah Johnson',
    price: 19.99,
    thumbnail: 'https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&h=400',
    category: 'Design',
    rating: 4.8,
    description: 'A comprehensive guide to planning and conducting user research for digital products.',
  },
  {
    id: 2,
    title: 'Digital Marketing Strategy',
    author: 'John Smith',
    price: 24.99,
    thumbnail: 'https://images.pexels.com/photos/6476595/pexels-photo-6476595.jpeg?auto=compress&cs=tinysrgb&h=400',
    category: 'Marketing',
    rating: 4.6,
    description: 'Learn how to create and implement effective digital marketing strategies for businesses of all sizes.',
  },
  {
    id: 3,
    title: 'Web Development Fundamentals',
    author: 'David Kim',
    price: 14.99,
    thumbnail: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&h=400',
    category: 'Technology',
    rating: 4.9,
    description: 'A beginner-friendly introduction to HTML, CSS, and JavaScript for aspiring web developers.',
  },
  {
    id: 4,
    title: 'Financial Planning for Entrepreneurs',
    author: 'Emily Rodriguez',
    price: 29.99,
    thumbnail: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&h=400',
    category: 'Business',
    rating: 4.7,
    description: 'Essential financial strategies and tools for startup founders and small business owners.',
  },
  {
    id: 5,
    title: 'Mastering Illustrator: Advanced Techniques',
    author: 'Maria Garcia',
    price: 22.99,
    thumbnail: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&h=400',
    category: 'Design',
    rating: 4.8,
    description: 'Take your Illustrator skills to the next level with advanced tips and techniques from an industry expert.',
  },
  {
    id: 6,
    title: 'Mindfulness and Creativity',
    author: 'James Wilson',
    price: 12.99,
    thumbnail: 'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&h=400',
    category: 'Health & Wellness',
    rating: 4.5,
    description: 'Harness the power of mindfulness to unlock your creative potential and improve productivity.',
  },
];

export default function Ebooks() {
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

  // Filter books based on activeFilters and searchQuery
  const filteredBooks = books.filter(b => {
    const matchesFilters = activeFilters.length === 0 || activeFilters.includes(b.category);
    const matchesSearch = !searchQuery || 
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      b.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilters && matchesSearch;
  });

  return (
    <>
      <PageHeader 
        title="eBooks Store" 
        description="Discover and download premium educational content from expert creators"
        backgroundImage="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&h=650"
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
          
          {/* Books Grid */}
          <div className="lg:w-3/4">
            {/* Search and Sort Bar */}
            <div className="mb-6 flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input 
                  type="text" 
                  placeholder="Search books or authors..." 
                  className="input pl-10 py-3 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              
              <div className="flex-shrink-0">
                <select className="input py-3 pr-8 appearance-none">
                  <option>Sort by: Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
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
                Showing {filteredBooks.length} books
              </p>
            </div>
            
            {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map(book => (
                <BookCard 
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  thumbnail={book.thumbnail}
                  category={book.category}
                  rating={book.rating}
                  description={book.description}
                />
              ))}
            </div>
            
            {/* No Results */}
            {filteredBooks.length === 0 && (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                <h3 className="text-xl font-medium mb-2">No books found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any books matching your current filters.
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