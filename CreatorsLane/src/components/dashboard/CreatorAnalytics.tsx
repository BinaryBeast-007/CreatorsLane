import React, { useState } from 'react';
import { BarChart, LineChart } from 'lucide-react';

// Sample data - would come from API in real app
const analyticsData = {
  earningsData: [
    { month: 'Jan', amount: 1250 },
    { month: 'Feb', amount: 1450 },
    { month: 'Mar', amount: 1680 },
    { month: 'Apr', amount: 1890 },
    { month: 'May', amount: 2100 },
  ],
  viewsData: [
    { month: 'Jan', classes: 780, ebooks: 450 },
    { month: 'Feb', classes: 820, ebooks: 520 },
    { month: 'Mar', classes: 950, ebooks: 580 },
    { month: 'Apr', classes: 1050, ebooks: 650 },
    { month: 'May', classes: 1200, ebooks: 720 },
  ],
};

export default function CreatorAnalytics() {
  const [timeRange, setTimeRange] = useState('month');
  
  // Total earnings calculation
  const totalEarnings = analyticsData.earningsData.reduce((sum, month) => sum + month.amount, 0);
  
  // Total views calculation
  const totalClassViews = analyticsData.viewsData.reduce((sum, month) => sum + month.classes, 0);
  const totalEbookViews = analyticsData.viewsData.reduce((sum, month) => sum + month.ebooks, 0);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Analytics</h2>
        <select 
          className="input py-1.5 pr-8 appearance-none"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="week">Last 7 days</option>
          <option value="month">Last 30 days</option>
          <option value="quarter">Last 3 months</option>
          <option value="year">Last 12 months</option>
        </select>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-600 text-sm mb-1">Total Earnings</p>
          <h3 className="text-2xl font-bold text-success-600">${totalEarnings.toLocaleString()}</h3>
          <p className="text-xs text-gray-500 mt-1">+15% from previous period</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-600 text-sm mb-1">Class Views</p>
          <h3 className="text-2xl font-bold text-primary-600">{totalClassViews.toLocaleString()}</h3>
          <p className="text-xs text-gray-500 mt-1">+22% from previous period</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-600 text-sm mb-1">eBook Views</p>
          <h3 className="text-2xl font-bold text-accent-600">{totalEbookViews.toLocaleString()}</h3>
          <p className="text-xs text-gray-500 mt-1">+18% from previous period</p>
        </div>
      </div>
      
      {/* Charts */}
      <div className="space-y-8">
        {/* Earnings Chart */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Earnings Overview</h3>
            <div className="flex items-center text-sm text-gray-600">
              <LineChart className="h-4 w-4 mr-1" />
              Monthly data
            </div>
          </div>
          
          {/* Placeholder for chart - in a real app, use a library like Chart.js or Recharts */}
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <div className="w-full px-4">
              <div className="flex justify-between mb-1">
                {analyticsData.earningsData.map((month, index) => (
                  <div key={index} className="text-xs text-gray-600">{month.month}</div>
                ))}
              </div>
              <div className="relative h-48">
                {analyticsData.earningsData.map((month, index) => {
                  const height = (month.amount / 2500) * 100;
                  return (
                    <div 
                      key={index} 
                      className="absolute bottom-0 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t w-12 mx-auto left-0 right-0"
                      style={{ 
                        height: `${height}%`, 
                        left: `${(index / analyticsData.earningsData.length) * 100}%`,
                        marginLeft: '-1.5rem',
                      }}
                    >
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs font-medium">
                        ${month.amount}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Views Chart */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Content Views</h3>
            <div className="flex items-center text-sm text-gray-600">
              <BarChart className="h-4 w-4 mr-1" />
              Monthly data
            </div>
          </div>
          
          {/* Placeholder for chart - in a real app, use a library like Chart.js or Recharts */}
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <div className="w-full px-4">
              <div className="flex justify-between mb-1">
                {analyticsData.viewsData.map((month, index) => (
                  <div key={index} className="text-xs text-gray-600">{month.month}</div>
                ))}
              </div>
              <div className="relative h-48">
                {analyticsData.viewsData.map((month, index) => {
                  const classHeight = (month.classes / 1500) * 100;
                  const ebookHeight = (month.ebooks / 1500) * 100;
                  return (
                    <div 
                      key={index} 
                      className="absolute bottom-0 flex space-x-1 mx-auto left-0 right-0"
                      style={{ 
                        left: `${(index / analyticsData.viewsData.length) * 100}%`,
                        marginLeft: '-1.5rem',
                      }}
                    >
                      <div
                        className="bg-primary-400 rounded-t w-6"
                        style={{ height: `${classHeight}%` }}
                      >
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs font-medium">
                          {month.classes}
                        </div>
                      </div>
                      <div
                        className="bg-accent-400 rounded-t w-6"
                        style={{ height: `${ebookHeight}%` }}
                      >
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs font-medium">
                          {month.ebooks}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center mt-2 space-x-6">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-primary-400 mr-1"></div>
                  <span className="text-xs text-gray-600">Classes</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-accent-400 mr-1"></div>
                  <span className="text-xs text-gray-600">eBooks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}