import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, Users, Star, Share2, BookmarkPlus, ChevronDown, MessageCircle, FileText, ThumbsUp } from 'lucide-react';

// Sample class data - would come from API in real app
const classData = {
  id: 1,
  title: 'Advanced UI Design Principles',
  instructor: {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Lead UX/UI Designer',
    company: 'DesignCo',
    bio: 'Sarah is a seasoned designer with over 10 years of experience in leading design teams at top tech companies. She specializes in creating intuitive user experiences and building design systems.',
    rating: 4.9,
    students: 1243,
    courses: 8,
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  price: 39.99,
  date: '2025-06-10T15:00:00',
  duration: 90,
  thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=650',
  category: 'Design',
  attendees: 218,
  description: `
    <p>Take your UI design skills to the next level with this comprehensive masterclass. In this session, I'll share advanced techniques and principles that will elevate your design work and help you create more intuitive, beautiful user interfaces.</p>
    
    <p>You'll learn how to apply design principles to solve complex UX problems, create cohesive design systems, and implement advanced interaction patterns that enhance user engagement.</p>

    <h4>What you'll learn:</h4>
    <ul>
      <li>Advanced color theory and how to create accessible, harmonious color schemes</li>
      <li>Typography systems that scale across different devices and platforms</li>
      <li>Creating and maintaining design systems for consistency</li>
      <li>Micro-interactions and animation principles for UI</li>
      <li>User testing techniques to validate your design decisions</li>
    </ul>

    <h4>Who is this for:</h4>
    <ul>
      <li>UI/UX designers looking to level up their skills</li>
      <li>Product designers who want to create more cohesive user experiences</li>
      <li>Frontend developers who want to understand design principles better</li>
      <li>Anyone interested in creating better digital products</li>
    </ul>
  `,
  reviews: [
    {
      id: 1,
      user: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2025-05-20',
      comment: 'Sarah is an exceptional instructor. Her previous class on UI fundamentals was incredibly helpful, so I\'m really looking forward to this advanced session!',
    },
    {
      id: 2,
      user: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      date: '2025-05-18',
      comment: 'I\'ve attended Sarah\'s workshops before and always come away with actionable insights. Her teaching style is clear and engaging.',
    },
  ],
};

export default function ClassDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  // In a real app, fetch class data based on ID
  const classItem = classData;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'chat', label: 'Chat' },
    { id: 'resources', label: 'Resources' },
    { id: 'reviews', label: 'Reviews' },
  ];
  
  return (
    <div className="bg-gray-50 pb-16">
      {/* Hero Section */}
      <div 
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${classItem.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom relative z-10 h-full flex items-end pb-8">
          <div>
            <span className="badge-primary mb-2 inline-block">
              {classItem.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {classItem.title}
            </h1>
            <p className="text-white text-opacity-90">
              by {classItem.instructor.name}
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container-custom -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Class Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                {activeTab === 'overview' && (
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: classItem.description }}></div>
                )}
                
                {activeTab === 'chat' && (
                  <div className="text-center py-8">
                    <MessageCircle className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium mb-2">Chat will be available during the session</h3>
                    <p className="text-gray-600">
                      Come back when the session starts to chat with the instructor and other participants.
                    </p>
                  </div>
                )}
                
                {activeTab === 'resources' && (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium mb-2">Resources will be shared during the session</h3>
                    <p className="text-gray-600">
                      The instructor will share resources during or after the live class.
                    </p>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div>
                    <h3 className="text-lg font-medium mb-4">Participant Reviews</h3>
                    
                    {classItem.reviews.length > 0 ? (
                      <div className="space-y-6">
                        {classItem.reviews.map(review => (
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
          </div>
          
          {/* Right Column - Booking and Instructor */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4 pb-4 border-b border-gray-100">
                <div className="text-2xl font-bold mb-2">
                  ${classItem.price}
                </div>
                <button className="btn-primary w-full mb-2">
                  Book Now
                </button>
                <button className="btn-secondary w-full">
                  Add to Calendar
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Date & Time</p>
                    <p className="text-gray-600">
                      {new Date(classItem.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                    <p className="text-gray-600">
                      {new Date(classItem.date).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZoneName: 'short',
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-gray-600">{classItem.duration} minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Attendees</p>
                    <p className="text-gray-600">{classItem.attendees} enrolled</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex space-x-4">
                <button className="flex-1 flex justify-center items-center text-gray-600 hover:text-gray-900">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </button>
                <button className="flex-1 flex justify-center items-center text-gray-600 hover:text-gray-900">
                  <BookmarkPlus className="h-5 w-5 mr-2" />
                  Save
                </button>
              </div>
            </div>
            
            {/* Instructor Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={classItem.instructor.avatar} 
                  alt={classItem.instructor.name} 
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-medium">{classItem.instructor.name}</h3>
                  <p className="text-sm text-gray-600">
                    {classItem.instructor.title} at {classItem.instructor.company}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                <div className="bg-gray-50 p-2 rounded">
                  <div className="font-bold">{classItem.instructor.rating}</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <div className="font-bold">{classItem.instructor.students.toLocaleString()}</div>
                  <div className="text-xs text-gray-600">Students</div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <div className="font-bold">{classItem.instructor.courses}</div>
                  <div className="text-xs text-gray-600">Classes</div>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {classItem.instructor.bio}
              </p>
              
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center">
                View Full Profile <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}