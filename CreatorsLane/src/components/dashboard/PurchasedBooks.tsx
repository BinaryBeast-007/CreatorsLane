import React from 'react';
import { Download, Eye } from 'lucide-react';

// Sample data - would come from API in real app
const purchasedBooks = [
  {
    id: 1,
    title: 'The Complete Guide to UX Research',
    author: 'Sarah Johnson',
    purchaseDate: '2025-05-10',
    thumbnail: 'https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&h=150',
    fileType: 'PDF',
  },
  {
    id: 2,
    title: 'Digital Marketing Strategy',
    author: 'John Smith',
    purchaseDate: '2025-04-22',
    thumbnail: 'https://images.pexels.com/photos/6476595/pexels-photo-6476595.jpeg?auto=compress&cs=tinysrgb&h=150',
    fileType: 'EPUB',
  },
];

export default function PurchasedBooks() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My eBooks</h2>
      
      {purchasedBooks.length > 0 ? (
        <div className="space-y-6">
          {purchasedBooks.map(book => (
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
                  <p className="text-gray-600 mb-2">by {book.author}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Format:</span> {book.fileType}
                    </div>
                    <div>
                      <span className="font-medium">Purchased:</span> {new Date(book.purchaseDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex space-x-3">
                  <button className="btn-secondary text-sm flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Read Online
                  </button>
                  <button className="btn-primary text-sm flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Eye className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-medium mb-2">No eBooks purchased yet</h3>
          <p className="text-gray-600 mb-4">
            Browse our eBook store to find premium educational content from expert creators.
          </p>
          <a href="/ebooks" className="btn-primary">
            Browse eBooks
          </a>
        </div>
      )}
    </div>
  );
}