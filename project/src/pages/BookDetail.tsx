import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen, Download, ShoppingCart, Share2, Eye, Star, ChevronDown, ThumbsUp, FileText } from 'lucide-react';

// Sample book data - would come from API in real app
const bookData = {
  id: 1,
  title: 'The Complete Guide to UX Research',
  author: {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Lead UX/UI Designer',
    company: 'DesignCo',
    bio: 'Sarah is a seasoned designer with over 10 years of experience in leading design teams at top tech companies. She specializes in creating intuitive user experiences and building design systems.',
    rating: 4.9,
    students: 1243,
    books: 5,
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  price: 19.99,
  thumbnail: 'https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&h=650',
  category: 'Design',
  rating: 4.8,
  fileType: 'PDF',
  pages: 324,
  language: 'English',
  publishDate: '2025-03-15',
  description: `
    <p>A comprehensive guide to planning and conducting effective user research for digital products. This book covers everything from research planning and participant recruitment to data analysis and presenting insights to stakeholders.</p>
    
    <p>Whether you're a UX designer, product manager, or anyone involved in creating digital products, this guide will help you understand your users better and make more informed product decisions.</p>

    <h4>What's inside:</h4>
    <ul>
      <li>Comprehensive overview of UX research methods</li>
      <li>Step-by-step guides for conducting user interviews, usability testing, and surveys</li>
      <li>Practical tips for recruiting research participants</li>
      <li>Data analysis techniques to extract meaningful insights</li>
      <li>Strategies for communicating research findings effectively</li>
      <li>Real-world case studies and examples</li>
      <li>Templates and resources to use in your own research projects</li>
    </ul>

    <h4>Who is this for:</h4>
    <ul>
      <li>UX/UI designers looking to improve their research skills</li>
      <li>Product managers who want to better understand their users</li>
      <li>Startup founders making product decisions</li>
      <li>Anyone interested in user-centered design practices</li>
    </ul>
  `,
  tableOfContents: [
    {
      title: 'Chapter 1: Introduction to UX Research',
      sections: [
        'Why Research Matters',
        'The Research Process Overview',
        'Aligning Research with Business Goals',
      ]
    },
    {
      title: 'Chapter 2: Research Planning',
      sections: [
        'Defining Research Questions',
        'Choosing the Right Methods',
        'Creating a Research Plan',
        'Budgeting and Timelines',
      ]
    },
    {
      title: 'Chapter 3: Participant Recruitment',
      sections: [
        'Defining Your Target Audience',
        'Recruitment Strategies',
        'Screening Participants',
        'Incentives and Compensation',
      ]
    },
  ],
  reviews: [
    {
      id: 1,
      user: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2025-04-20',
      comment: 'This book completely transformed my approach to UX research. The templates alone are worth the price!',
    },
    {
      id: 2,
      user: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      date: '2025-04-15',
      comment: 'Very comprehensive coverage of UX research methods. I especially appreciated the case studies and real-world examples.',
    },
  ],
};

export default function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('description');
  
  // In a real app, fetch book data based on ID
  const book = bookData;

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'contents', label: 'Table of Contents' },
    { id: 'reviews', label: 'Reviews' },
  ];
  
  return (
    <div className="bg-gray-50 pb-16">
      <div className="container-custom pt-32 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Book Cover */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="relative mb-4">
                <img 
                  src={book.thumbnail} 
                  alt={book.title} 
                  className="mx-auto rounded-md shadow-lg h-auto max-w-full"
                />
                <div className="absolute top-3 left-3">
                  <span className="badge-primary">{book.category}</span>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <button className="btn-secondary flex items-center justify-center">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </button>
                <button className="btn-primary flex items-center justify-center">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Buy Now
                </button>
              </div>
              
              <div className="mt-4 text-sm text-gray-700 border-t border-gray-100 pt-4">
                <div className="flex justify-between py-1">
                  <span>Format:</span>
                  <span className="font-medium">{book.fileType}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Pages:</span>
                  <span className="font-medium">{book.pages}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Language:</span>
                  <span className="font-medium">{book.language}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Published:</span>
                  <span className="font-medium">{new Date(book.publishDate).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="flex justify-center mt-4 space-x-4">
                <button className="text-gray-600 hover:text-gray-900">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <BookOpen className="h-5 w-5" />
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Book Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Book Title and Author */}
              <div className="p-6 border-b border-gray-100">
                <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
                <div className="text-lg mb-3">
                  by <span className="font-medium">{book.author.name}</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(book.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm">{book.rating.toFixed(1)} ({book.reviews.length} reviews)</span>
                  </div>
                  
                  <div className="text-2xl font-bold text-primary-600">
                    ${book.price.toFixed(2)}
                  </div>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex overflow-x-auto">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      className={`px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'description' && (
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: book.description }}></div>
                )}
                
                {activeTab === 'contents' && (
                  <div>
                    <h3 className="text-lg font-medium mb-4">Table of Contents</h3>
                    <div className="space-y-4">
                      {book.tableOfContents.map((chapter, index) => (
                        <div key={index} className="border-b border-gray-100 pb-3">
                          <h4 className="font-medium mb-2">{chapter.title}</h4>
                          <ul className="pl-5 space-y-1">
                            {chapter.sections.map((section, sIndex) => (
                              <li key={sIndex} className="text-gray-700 text-sm">• {section}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <p className="text-gray-600 text-sm italic">
                        And {book.pages - 30} more pages of content...
                      </p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div>
                    <h3 className="text-lg font-medium mb-4">Reader Reviews</h3>
                    
                    {book.reviews.length > 0 ? (
                      <div className="space-y-6">
                        {book.reviews.map(review => (
                          <div key={review.id} className="border-b border-gray-100 pb-6">
                            <div className="flex items-start">
                              <img 
                                src={review.avatar} 
                                alt={review.user} 
                                className="h-10 w-10 rounded-full mr-4"
                              />
                              <div className="flex-1">
                                <div className="flex items-center mb-1">
                                  <p className="font-medium">{review.user}</p>
                                  <span className="mx-2 text-gray-300">•</span>
                                  <p className="text-sm text-gray-500">{review.date}</p>
                                </div>
                                <div className="flex items-center mb-2">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <p className="text-gray-700">{review.comment}</p>
                                <div className="mt-2">
                                  <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
                                    <ThumbsUp className="h-4 w-4 mr-1" /> Helpful
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600">No reviews yet.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* Author Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <div className="flex items-center mb-4">
                <img 
                  src={book.author.avatar} 
                  alt={book.author.name} 
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-medium">{book.author.name}</h3>
                  <p className="text-sm text-gray-600">
                    {book.author.title} at {book.author.company}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm mb-4">
                {book.author.bio}
              </p>
              
              <div className="flex items-center justify-between">
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center">
                  View All Books <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="h-4 w-4 mr-1" />
                  {book.author.books} published books
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}