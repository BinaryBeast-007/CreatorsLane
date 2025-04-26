import React from 'react';
import { Edit, Trash2, Copy, Calendar, Users, Play, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data - would come from API in real app
const hostedClasses = [
  {
    id: 1,
    title: 'Advanced UI Design Principles',
    date: '2025-06-10T15:00:00',
    duration: 90,
    attendees: 42,
    status: 'upcoming',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=150',
  },
  {
    id: 2,
    title: 'Responsive Design Best Practices',
    date: '2025-05-15T14:00:00',
    duration: 60,
    attendees: 78,
    status: 'completed',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&h=150',
  },
];

export default function HostedClasses() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Live Classes</h2>
        <Link to="/dashboard/create-class" className="btn-accent text-sm flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Create New Class
        </Link>
      </div>
      
      {hostedClasses.length > 0 ? (
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Upcoming Classes</h3>
            <div className="space-y-4">
              {hostedClasses
                .filter(c => c.status === 'upcoming')
                .map(classItem => (
                  <div 
                    key={classItem.id} 
                    className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="md:w-1/4 h-40 md:h-auto">
                      <img 
                        src={classItem.thumbnail} 
                        alt={classItem.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-medium mb-2">{classItem.title}</h3>
                          <span className="badge-success">Upcoming</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(classItem.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {classItem.attendees} enrolled
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex justify-between">
                        <div className="flex space-x-2">
                          <button className="text-gray-600 hover:text-gray-900 p-1.5">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-900 p-1.5">
                            <Copy className="h-4 w-4" />
                          </button>
                          <button className="text-gray-600 hover:text-red-600 p-1.5">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <button className="btn-primary text-sm flex items-center">
                          <Play className="h-4 w-4 mr-2" />
                          Start Session
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Past Classes</h3>
            <div className="space-y-4">
              {hostedClasses
                .filter(c => c.status === 'completed')
                .map(classItem => (
                  <div 
                    key={classItem.id} 
                    className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="md:w-1/4 h-40 md:h-auto">
                      <img 
                        src={classItem.thumbnail} 
                        alt={classItem.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-medium mb-2">{classItem.title}</h3>
                          <span className="badge-secondary">Completed</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(classItem.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {classItem.attendees} attended
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex justify-between">
                        <div className="flex space-x-2">
                          <button className="text-gray-600 hover:text-gray-900 p-1.5">
                            <Copy className="h-4 w-4" />
                          </button>
                          <button className="text-gray-600 hover:text-red-600 p-1.5">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <button className="btn-secondary text-sm flex items-center">
                          <Play className="h-4 w-4 mr-2" />
                          View Recording
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-medium mb-2">No classes created yet</h3>
          <p className="text-gray-600 mb-4">
            Start hosting your own live classes and share your knowledge with students.
          </p>
          <Link to="/dashboard/create-class" className="btn-primary">
            Create Your First Class
          </Link>
        </div>
      )}
    </div>
  );
}