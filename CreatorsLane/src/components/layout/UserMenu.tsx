import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, LogOut, Plus, Bell } from 'lucide-react';

// Placeholder user data - in a real app, this would come from an auth context
const isLoggedIn = false;
const userData = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  avatar: null,
};

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {isLoggedIn ? (
        <>
          <div className="flex items-center space-x-4">
            <button className="relative text-gray-700 hover:text-gray-900">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>
            <button
              onClick={toggleMenu}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                {userData.avatar ? (
                  <img
                    src={userData.avatar}
                    alt={userData.name}
                    className="h-8 w-8 rounded-full"
                  />
                ) : (
                  <User className="h-5 w-5 text-primary-600" />
                )}
              </div>
            </button>
          </div>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-fade-in">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {userData.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {userData.email}
                </p>
              </div>
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </div>
              </Link>
              <Link
                to="/dashboard/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </div>
              </Link>
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setIsOpen(false);
                  // Handle logout
                }}
              >
                <div className="flex items-center">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </div>
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center space-x-3">
          <Link
            to="/signin"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Sign In
          </Link>
          <Link to="/signup" className="btn-primary text-sm py-1.5">
            <Plus className="h-4 w-4 mr-1" />
            Join Creatorlane
          </Link>
        </div>
      )}
    </div>
  );
}