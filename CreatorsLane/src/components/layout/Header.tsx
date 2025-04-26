import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, BookOpen, User, Headphones, LayoutDashboard } from 'lucide-react';
import Logo from './Logo';
import UserMenu from './UserMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
    `flex items-center px-1 py-2 text-sm font-medium border-b-2 ${
      isActive 
        ? 'border-accent-500 text-accent-700' 
        : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900'
    }`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink to="/live-classes" className={navLinkClasses}>
              <BookOpen className="w-4 h-4 mr-1" /> Live Classes
            </NavLink>
            <NavLink to="/ebooks" className={navLinkClasses}>
              <BookOpen className="w-4 h-4 mr-1" /> eBooks Store
            </NavLink>
            <NavLink to="/dashboard" className={navLinkClasses}>
              <LayoutDashboard className="w-4 h-4 mr-1" /> My Dashboard
            </NavLink>
            <NavLink to="/support" className={navLinkClasses}>
              <Headphones className="w-4 h-4 mr-1" /> Help & Support
            </NavLink>
          </nav>
          
          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="input py-1 pl-8 pr-4 text-sm w-48 focus:w-64 transition-all duration-300"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <UserMenu />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button 
              type="button" 
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg animate-fade-in">
          <div className="container-custom py-4 space-y-4">
            <div className="relative mb-4">
              <input 
                type="text" 
                placeholder="Search..." 
                className="input py-2 pl-10 pr-4 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <nav className="flex flex-col space-y-2">
              <NavLink 
                to="/live-classes" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-md ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-700'}`
                }
              >
                <BookOpen className="w-5 h-5 mr-3" /> Live Classes
              </NavLink>
              <NavLink 
                to="/ebooks" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-md ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-700'}`
                }
              >
                <BookOpen className="w-5 h-5 mr-3" /> eBooks Store
              </NavLink>
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-md ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-700'}`
                }
              >
                <LayoutDashboard className="w-5 h-5 mr-3" /> My Dashboard
              </NavLink>
              <NavLink 
                to="/support" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-md ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-700'}`
                }
              >
                <Headphones className="w-5 h-5 mr-3" /> Help & Support
              </NavLink>
            </nav>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <button className="btn-primary text-sm py-1">Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}