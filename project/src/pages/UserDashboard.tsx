import React from 'react';
import { Calendar, Clock, Users, Download, Play, Star, Bell, ShoppingCart, BookOpen, ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

// Mock user data - would come from auth context in real app
const userData = {
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
};

// Sample data - would come from API in real app
const upcomingClasses = [
  {
    id: 1,
    title: 'Advanced UI Design Principles',
    instructor: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    date: '2025-06-10T15:00:00',
    duration: 90,
    status: 'registered',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=200',
  },
  {
    id: 2,
    title: 'Marketing Strategy for Startups',
    instructor: {
      name: 'John Smith',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    date: '2025-06-12T18:00:00',
    duration: 120,
    status: 'starts_soon',
    thumbnail: 'https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&h=200',
  },
];

const subscriptions = [
  {
    id: 1,
    creatorName: 'Sarah Johnson',
    creatorAvatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
    plan: 'Monthly',
    nextBilling: '2025-07-10',
    recentContent: 'New Design System Workshop',
    channelUrl: '/creators/1',
  },
  {
    id: 2,
    creatorName: 'Tech Academy',
    creatorAvatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100',
    plan: 'Quarterly',
    nextBilling: '2025-08-15',
    recentContent: 'React 18 Deep Dive',
    channelUrl: '/creators/2',
  },
];

const purchasedBooks = [
  {
    id: 1,
    title: 'The Complete Guide to UX Research',
    author: 'Sarah Johnson',
    cover: 'https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&h=200',
    purchaseDate: '2025-05-15',
    downloadUrl: '/downloads/book-1',
  },
  {
    id: 2,
    title: 'Digital Marketing Strategy',
    author: 'John Smith',
    cover: 'https://images.pexels.com/photos/6476595/pexels-photo-6476595.jpeg?auto=compress&cs=tinysrgb&h=200',
    purchaseDate: '2025-04-22',
    downloadUrl: '/downloads/book-2',
  },
];

const pastSessions = [
  {
    id: 1,
    title: 'Introduction to React Hooks',
    date: '2025-05-20',
    hasRecording: true,
    hasResources: true,
  },
  {
    id: 2,
    title: 'CSS Grid Masterclass',
    date: '2025-05-18',
    hasRecording: true,
    hasResources: false,
  },
];

const recommendations = [
  {
    id: 1,
    type: 'class',
    title: 'Advanced JavaScript Patterns',
    instructor: 'David Kim',
    thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&h=200',
    price: 39.99,
  },
  {
    id: 2,
    type: 'ebook',
    title: 'Modern Web Development',
    author: 'Maria Garcia',
    thumbnail: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&h=200',
    price: 24.99,
  },
  {
    id: 3,
    type: 'subscription',
    title: 'Design Weekly',
    creator: 'Emily Rodriguez',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&h=200',
    price: 9.99,
  },
];

export default function UserDashboard() {
  const getTimeUntilClass = (dateString: string) => {
    const classDate = new Date(dateString);
    const now = new Date();
    const diffMs = classDate.getTime() - now.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    if (diffHours < 1) {
      return `Starts in ${diffMinutes} min`;
    }
    return `Starts in ${diffHours}h ${diffMinutes}m`;
  };

  return (
    <>
      <PageHeader 
        title={`Welcome back, ${userData.name}!`}
        description="Continue your learning journey"
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=650"
      />
      
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              {/* User Profile */}
              <div className="text-center mb-6">
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="h-16 w-16 rounded-full mx-auto mb-3"
                />
                <h3 className="font-medium">{userData.name}</h3>
                <p className="text-sm text-gray-600">{userData.email}</p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3 mb-6">
                <h4 className="font-medium text-gray-900">Quick Actions</h4>
                <Link to="/live-classes" className="btn-primary w-full text-sm flex items-center justify-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Browse Classes
                </Link>
                <Link to="/ebooks" className="btn-secondary w-full text-sm flex items-center justify-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse eBooks
                </Link>
                <Link to="/support" className="btn-secondary w-full text-sm flex items-center justify-center">
                  <Bell className="h-4 w-4 mr-2" />
                  Help & Support
                </Link>
              </div>

              {/* Notifications */}
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-medium text-gray-900 mb-3">Notifications</h4>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-blue-50 rounded text-blue-800">
                    Class reminder: "Advanced UI Design" starts in 2 hours
                  </div>
                  <div className="p-2 bg-green-50 rounded text-green-800">
                    New content from Sarah Johnson available
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Welcome back, {userData.name}!</h2>
              <p className="mb-4 opacity-90">Ready to continue your learning journey?</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/dashboard/upcoming" className="btn bg-white text-primary-600 hover:bg-gray-100 text-sm">
                  Upcoming Classes
                </Link>
                <Link to="/dashboard/subscriptions" className="btn bg-primary-600 text-white border border-primary-400 hover:bg-primary-700 text-sm">
                  My Subscriptions
                </Link>
                <Link to="/dashboard/books" className="btn bg-primary-600 text-white border border-primary-400 hover:bg-primary-700 text-sm">
                  Purchased eBooks
                </Link>
              </div>
            </div>

            {/* Upcoming Live Sessions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Upcoming Live Classes</h3>
                <Link to="/live-classes" className="text-primary-600 hover:text-primary-700 text-sm flex items-center">
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              {upcomingClasses.length > 0 ? (
                <div className="space-y-4">
                  {upcomingClasses.map(classItem => (
                    <div key={classItem.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <img
                          src={classItem.thumbnail}
                          alt={classItem.title}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{classItem.title}</h4>
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <img
                              src={classItem.instructor.avatar}
                              alt={classItem.instructor.name}
                              className="w-5 h-5 rounded-full mr-2"
                            />
                            {classItem.instructor.name}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mb-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(classItem.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                            <Clock className="h-4 w-4 ml-3 mr-1" />
                            {classItem.duration} min
                          </div>
                          <div className="flex items-center justify-between">
                            <span className={`badge ${
                              classItem.status === 'starts_soon' ? 'badge-warning' : 'badge-success'
                            }`}>
                              {classItem.status === 'starts_soon' ? getTimeUntilClass(classItem.date) : 'Registered'}
                            </span>
                            <div className="flex space-x-2">
                              <button className="btn-secondary text-xs py-1">Add to Calendar</button>
                              <Link to={`/live-classes/${classItem.id}`} className="btn-primary text-xs py-1">
                                {classItem.status === 'starts_soon' ? 'Join Now' : 'View Details'}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h4 className="text-lg font-medium mb-2">No upcoming sessions</h4>
                  <p className="text-gray-600 mb-4">Explore live classes to join new sessions!</p>
                  <Link to="/live-classes" className="btn-primary">Browse Live Classes</Link>
                </div>
              )}
            </div>

            {/* My Subscriptions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Active Subscriptions</h3>
                <Link to="/subscriptions" className="text-primary-600 hover:text-primary-700 text-sm flex items-center">
                  Manage All <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              {subscriptions.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subscriptions.map(subscription => (
                    <div key={subscription.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <img
                          src={subscription.creatorAvatar}
                          alt={subscription.creatorName}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium">{subscription.creatorName}</h4>
                          <p className="text-sm text-gray-600">{subscription.plan} Plan</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Next billing: {new Date(subscription.nextBilling).toLocaleDateString()}
                      </p>
                      <p className="text-sm font-medium mb-3">Recent: {subscription.recentContent}</p>
                      <div className="flex space-x-2">
                        <Link to={subscription.channelUrl} className="btn-secondary text-xs py-1 flex-1">
                          Go to Channel
                        </Link>
                        <button className="btn-secondary text-xs py-1">Manage</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Users className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h4 className="text-lg font-medium mb-2">No active subscriptions</h4>
                  <p className="text-gray-600 mb-4">Discover subscriptions to join exclusive creator programs!</p>
                  <Link to="/subscriptions" className="btn-primary">Discover Subscriptions</Link>
                </div>
              )}
            </div>

            {/* Purchased eBooks & Digital Products */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">My eBooks & Downloads</h3>
                <Link to="/ebooks" className="text-primary-600 hover:text-primary-700 text-sm flex items-center">
                  Browse Store <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              {purchasedBooks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {purchasedBooks.map(book => (
                    <div key={book.id} className="border border-gray-200 rounded-lg p-4">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-32 object-cover rounded mb-3"
                      />
                      <h4 className="font-medium mb-1 line-clamp-2">{book.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                      <p className="text-xs text-gray-500 mb-3">
                        Purchased: {new Date(book.purchaseDate).toLocaleDateString()}
                      </p>
                      <div className="flex space-x-2">
                        <button className="btn-primary text-xs py-1 flex-1 flex items-center justify-center">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </button>
                        <button className="btn-secondary text-xs py-1 flex items-center justify-center">
                          <Star className="h-3 w-3 mr-1" />
                          Rate
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h4 className="text-lg font-medium mb-2">No downloads yet</h4>
                  <p className="text-gray-600 mb-4">Browse the eBooks Store for top picks!</p>
                  <Link to="/ebooks" className="btn-primary">Browse eBooks Store</Link>
                </div>
              )}
            </div>

            {/* Past Sessions & Recordings */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">Session Archive</h3>

              {pastSessions.length > 0 ? (
                <div className="space-y-3">
                  {pastSessions.map(session => (
                    <div key={session.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium">{session.title}</h4>
                        <p className="text-sm text-gray-600">
                          Attended: {new Date(session.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        {session.hasRecording && (
                          <button className="btn-secondary text-xs py-1 flex items-center">
                            <Play className="h-3 w-3 mr-1" />
                            Watch Recording
                          </button>
                        )}
                        {session.hasResources && (
                          <button className="btn-secondary text-xs py-1 flex items-center">
                            <Download className="h-3 w-3 mr-1" />
                            Resources
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Play className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h4 className="text-lg font-medium mb-2">No past sessions yet</h4>
                  <p className="text-gray-600">Your attended sessions will appear here.</p>
                </div>
              )}
            </div>

            {/* Recommendations & Discover */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">Recommended for You</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendations.map(item => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-32 object-cover rounded mb-3"
                    />
                    <h4 className="font-medium mb-1 line-clamp-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      by {item.type === 'class' ? item.instructor : item.type === 'ebook' ? item.author : item.creator}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary-600">${item.price}</span>
                      <button className="btn-primary text-xs py-1">
                        {item.type === 'class' ? 'Join Now' : item.type === 'ebook' ? 'Buy Now' : 'Subscribe'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}