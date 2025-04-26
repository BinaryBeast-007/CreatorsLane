import React from 'react';
import { Calendar, Clock, Video } from 'lucide-react';

// Sample data - would come from API in real app
const upcomingClasses = [
  {
    id: 1,
    title: 'Advanced UI Design Principles',
    instructor: 'Sarah Johnson',
    date: '2025-06-10T15:00:00',
    duration: 90,
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=150',
  },
  {
    id: 2,
    title: 'Marketing Strategy for Startups',
    instructor: 'John Smith',
    date: '2025-06-12T18:00:00',
    duration: 120,
    thumbnail: 'https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&h=150',
  },
];

export default function UpcomingClasses() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Upcoming Classes</h2>
      
      {upcomingClasses.length > 0 ? (
        <div className="space-y-6">
          {upcomingClasses.map(classItem => (
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
                  <h3 className="text-lg font-medium mb-2">{classItem.title}</h3>
                  <p className="text-gray-600 mb-4">by {classItem.instructor}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(classItem.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {new Date(classItem.date).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {classItem.duration} min
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button className="btn-primary flex items-center">
                    <Video className="h-4 w-4 mr-2" />
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-medium mb-2">No upcoming classes</h3>
          <p className="text-gray-600 mb-4">
            You haven't registered for any upcoming live classes yet.
          </p>
          <a href="/live-classes" className="btn-primary">
            Browse Classes
          </a>
        </div>
      )}
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Past Classes</h3>
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <p className="text-gray-600">
            Your past classes will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}