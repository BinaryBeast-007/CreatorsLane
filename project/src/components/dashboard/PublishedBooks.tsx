import React from 'react';
import { Edit, Trash2, Copy, Download, Plus, BookOpen, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data - would come from API in real app
const publishedBooks = [
  {
    id: 1,
    title: 'The Complete Guide to UX Research',
    publishDate: '2025-03-15',
    sales: 124,
    revenue: 2479.76,
    fileType: 'PDF',
    thumbnail: 'https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&h=150',
  },
  {
    id: 2,
    title: 'Design Systems: A Practical Guide',
    publishDate: '2024-11-08',
    sales: 86,
    revenue: 1633.14,
    fileType: 'PDF, EPUB',
    thumbnail: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&h=150',
  },
];

export default function PublishedBooks() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Publications</h2>
        <Link to="/dashboard/create-ebook" className="btn-accent text-sm flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Upload New eBook
        </Link>
      </div>
      
      {publishedBooks.length > 0 ? (
        <div className="space-y-6">
          {publishedBooks.map(book => (
            <div 
              key={book.id} 
              className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="md:w-1/5 h-40 md:h-auto">
                <img 
                  src={book.thumbnail} 
                  alt={book.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-medium mb-2">{book.title}</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Publication Date</p>
                      <p className="font-medium">
                        {new Date(book.publishDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Format</p>
                      <p className="font-medium">{book.fileType}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total Sales</p>
                      <p className="font-medium">{book.sales} copies</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Revenue</p>
                      <p className="font-medium text-success-600">
                        ${book.revenue.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between">
                  <div className="flex space-x-2">
                    <button className="text-gray-600 hover:text-gray-900 p-1.5" title="Edit">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 p-1.5" title="Duplicate">
                      <Copy className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-red-600 p-1.5" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex space-x-3">
                    <button className="btn-secondary text-sm flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      View Book
                    </button>
                    <button className="btn-primary text-sm flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Sales Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-medium mb-2">No publications yet</h3>
          <p className="text-gray-600 mb-4">
            Start selling your eBooks and share your knowledge with the world.
          </p>
          <Link to="/dashboard/create-ebook" className="btn-primary">
            Upload Your First eBook
          </Link>
        </div>
      )}
    </div>
  );
}