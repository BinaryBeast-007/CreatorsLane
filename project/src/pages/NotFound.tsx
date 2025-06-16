import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="mb-6">
          <div className="relative max-w-sm mx-auto">
            <input 
              type="text" 
              placeholder="Search Creatorlane..." 
              className="input py-2 pl-10 pr-4 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary flex items-center justify-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <Link to="/support" className="btn-secondary flex items-center justify-center">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}