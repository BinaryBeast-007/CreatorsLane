import React, { useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Calendar, CreditCard, MessageSquare, Settings, PlusCircle, BookMarked, LineChart } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import UpcomingClasses from '../components/dashboard/UpcomingClasses';
import PurchasedBooks from '../components/dashboard/PurchasedBooks';
import HostedClasses from '../components/dashboard/HostedClasses';
import PublishedBooks from '../components/dashboard/PublishedBooks';
import CreatorAnalytics from '../components/dashboard/CreatorAnalytics';
import AccountSettings from '../components/dashboard/AccountSettings';

// Mock user data - would come from auth context in real app
const userData = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  avatar: null,
  role: 'creator', // or 'learner'
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Get user role from context
  const userRole = userData.role;
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="h-5 w-5" />, forRoles: ['learner', 'creator'] },
    { id: 'classes', label: 'My Classes', icon: <Calendar className="h-5 w-5" />, forRoles: ['learner'] },
    { id: 'books', label: 'My eBooks', icon: <BookOpen className="h-5 w-5" />, forRoles: ['learner'] },
    { id: 'hosted-classes', label: 'My Live Classes', icon: <Calendar className="h-5 w-5" />, forRoles: ['creator'] },
    { id: 'published-books', label: 'My Publications', icon: <BookMarked className="h-5 w-5" />, forRoles: ['creator'] },
    { id: 'analytics', label: 'Analytics', icon: <LineChart className="h-5 w-5" />, forRoles: ['creator'] },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" />, forRoles: ['learner', 'creator'] },
  ];
  
  const filteredTabs = tabs.filter(tab => tab.forRoles.includes(userRole));

  return (
    <>
      <PageHeader 
        title="My Dashboard" 
        backgroundImage="https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&h=650"
      />
      
      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              {/* User Info */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                    {userData.avatar ? (
                      <img
                        src={userData.avatar}
                        alt={userData.name}
                        className="h-12 w-12 rounded-full"
                      />
                    ) : (
                      <span className="text-xl font-bold text-primary-600">
                        {userData.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{userData.name}</h3>
                    <p className="text-sm text-gray-600">{userData.email}</p>
                  </div>
                </div>
                
                {userRole === 'creator' && (
                  <div className="mt-4">
                    <button className="btn-accent w-full flex items-center justify-center text-sm">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Create New Content
                    </button>
                  </div>
                )}
              </div>
              
              {/* Navigation */}
              <nav className="p-2">
                {filteredTabs.map(tab => (
                  <NavLink
                    key={tab.id}
                    to={`/dashboard/${tab.id === 'overview' ? '' : tab.id}`}
                    className={({ isActive }) => `
                      flex items-center px-4 py-3 rounded-md text-sm font-medium
                      ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}
                    `}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="mr-3">{tab.icon}</span>
                    {tab.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Routes>
                <Route path="/" element={
                  userRole === 'learner' ? <UpcomingClasses /> : <CreatorAnalytics />
                } />
                <Route path="/classes" element={<UpcomingClasses />} />
                <Route path="/books" element={<PurchasedBooks />} />
                <Route path="/hosted-classes" element={<HostedClasses />} />
                <Route path="/published-books" element={<PublishedBooks />} />
                <Route path="/analytics" element={<CreatorAnalytics />} />
                <Route path="/settings" element={<AccountSettings />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}