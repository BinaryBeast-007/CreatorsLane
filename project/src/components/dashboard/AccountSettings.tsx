import React, { useState } from 'react';
import { User, Lock, CreditCard, Bell, HelpCircle, Save } from 'lucide-react';

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState('profile');
  
  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="h-5 w-5" /> },
    { id: 'security', label: 'Security', icon: <Lock className="h-5 w-5" /> },
    { id: 'payments', label: 'Payments', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="h-5 w-5" /> },
  ];
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-6 py-3 text-sm font-medium border-b-2 whitespace-nowrap flex items-center ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Tab Content */}
      <div>
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar Upload */}
              <div className="md:w-1/3">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="h-32 w-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                    <User className="h-12 w-12 text-gray-400" />
                  </div>
                  <button className="btn-secondary text-sm w-full">
                    Change Avatar
                  </button>
                </div>
              </div>
              
              {/* Profile Form */}
              <div className="md:w-2/3">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input type="text" className="input" defaultValue="Jane" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input type="text" className="input" defaultValue="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="input" 
                      defaultValue="jane@example.com"
                      disabled
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      To change your email, please go to the Security tab.
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea 
                      className="input min-h-[100px]" 
                      defaultValue="I'm a UX designer and educator passionate about creating intuitive user experiences."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input type="text" className="input" defaultValue="New York, USA" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Website
                    </label>
                    <input type="url" className="input" defaultValue="https://janedoe.com" />
                  </div>
                  
                  <div className="pt-4">
                    <button className="btn-primary flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'security' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Change Password</h3>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <input type="password" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <input type="password" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <input type="password" className="input" />
                </div>
                <div className="pt-2">
                  <button className="btn-primary">Update Password</button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
              <p className="text-gray-600 mb-4">
                Add an extra layer of security to your account by enabling two-factor authentication.
              </p>
              <button className="btn-secondary">Enable 2FA</button>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium mb-4 text-red-600">Danger Zone</h3>
              <button className="btn border border-red-300 text-red-600 hover:bg-red-50">
                Delete Account
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'payments' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4 flex justify-between items-center border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded mr-3">
                      <CreditCard className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 1234</p>
                      <p className="text-sm text-gray-600">Expires 12/25</p>
                    </div>
                  </div>
                  <div>
                    <span className="badge-success">Default</span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <button className="btn-secondary text-sm">
                    Add Payment Method
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium mb-4">Billing Address</h3>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input type="text" className="input" defaultValue="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address Line 1
                  </label>
                  <input type="text" className="input" defaultValue="123 Main St" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address Line 2
                  </label>
                  <input type="text" className="input" defaultValue="Apt 4B" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input type="text" className="input" defaultValue="New York" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State/Province
                    </label>
                    <input type="text" className="input" defaultValue="NY" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code
                    </label>
                    <input type="text" className="input" defaultValue="10001" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <select className="input">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>
                <div className="pt-2">
                  <button className="btn-primary flex items-center">
                    <Save className="h-4 w-4 mr-2" />
                    Save Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="class-reminders" 
                    type="checkbox" 
                    defaultChecked
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="class-reminders" className="font-medium text-gray-700">
                    Class Reminders
                  </label>
                  <p className="text-gray-500">
                    Receive reminders 24 hours and 15 minutes before registered classes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="new-content" 
                    type="checkbox" 
                    defaultChecked
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="new-content" className="font-medium text-gray-700">
                    New Content
                  </label>
                  <p className="text-gray-500">
                    Get notified when creators you follow publish new classes or books.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="promotions" 
                    type="checkbox" 
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="promotions" className="font-medium text-gray-700">
                    Promotions
                  </label>
                  <p className="text-gray-500">
                    Receive special offers, discounts, and promotional content.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="account-updates" 
                    type="checkbox" 
                    defaultChecked
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="account-updates" className="font-medium text-gray-700">
                    Account Updates
                  </label>
                  <p className="text-gray-500">
                    Important updates about your account, payments, and security.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium mb-4">Creator Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input 
                      id="registrations" 
                      type="checkbox" 
                      defaultChecked
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="registrations" className="font-medium text-gray-700">
                      Class Registrations
                    </label>
                    <p className="text-gray-500">
                      Get notified when someone registers for your class.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input 
                      id="purchases" 
                      type="checkbox" 
                      defaultChecked
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="purchases" className="font-medium text-gray-700">
                      eBook Purchases
                    </label>
                    <p className="text-gray-500">
                      Get notified when someone purchases your eBook.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input 
                      id="reviews" 
                      type="checkbox" 
                      defaultChecked
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="reviews" className="font-medium text-gray-700">
                      Reviews
                    </label>
                    <p className="text-gray-500">
                      Get notified when someone leaves a review on your content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <button className="btn-primary flex items-center">
                <Save className="h-4 w-4 mr-2" />
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}