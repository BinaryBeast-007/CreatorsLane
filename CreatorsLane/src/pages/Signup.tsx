import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, BookOpen, Check, User, Mail, Lock, ArrowRight } from 'lucide-react';
import Logo from '../components/layout/Logo';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState<'learner' | 'creator'>('learner');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, userType });
  };

  const features = {
    learner: [
      'Access to live interactive classes',
      'Download premium eBooks',
      'Chat with instructors and peers',
      'Personal learning dashboard',
      'Certificate of completion',
    ],
    creator: [
      'Host unlimited live classes',
      'Sell your eBooks and courses',
      'Built-in payment processing',
      'Analytics and insights',
      'Community building tools',
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <Logo />
            </Link>
            <h1 className="text-3xl font-bold mt-4 mb-2">Join Creatorlane</h1>
            <p className="text-gray-600">Start your learning journey today</p>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUserType('learner')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  userType === 'learner'
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <User className="h-6 w-6 mx-auto mb-2" />
                <div className="font-medium">I want to learn</div>
                <div className="text-xs text-gray-500">Join classes & buy eBooks</div>
              </button>
              <button
                type="button"
                onClick={() => setUserType('creator')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  userType === 'creator'
                    ? 'border-accent-500 bg-accent-50 text-accent-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <BookOpen className="h-6 w-6 mx-auto mb-2" />
                <div className="font-medium">I want to teach</div>
                <div className="text-xs text-gray-500">Host classes & sell content</div>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input pl-10"
                  placeholder="john@example.com"
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input pl-10 pr-10"
                  placeholder="Create a strong password"
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="input pl-10 pr-10"
                  placeholder="Confirm your password"
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-0.5"
                  required
                />
                <span className="ml-2 text-sm text-gray-700">
                  I agree to the{' '}
                  <Link to="/terms" className="text-primary-600 hover:text-primary-700">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-primary-600 hover:text-primary-700">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="subscribeNewsletter"
                  checked={formData.subscribeNewsletter}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-0.5"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Subscribe to our newsletter for updates and exclusive content
                </span>
              </label>
            </div>

            <button
              type="submit"
              className={`w-full btn flex items-center justify-center ${
                userType === 'creator' ? 'btn-accent' : 'btn-primary'
              }`}
            >
              Create Account
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="text-primary-600 hover:text-primary-700 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Features */}
      <div className={`hidden lg:flex lg:w-1/2 ${
        userType === 'creator' ? 'bg-gradient-to-br from-accent-500 to-accent-600' : 'bg-gradient-to-br from-primary-500 to-primary-600'
      } text-white p-12 items-center`}>
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6">
            {userType === 'creator' ? 'Start Teaching Today' : 'Start Learning Today'}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {userType === 'creator' 
              ? 'Share your expertise with thousands of eager learners and build a sustainable income stream.'
              : 'Join thousands of learners who are advancing their skills with expert-led classes and premium content.'
            }
          </p>
          
          <div className="space-y-4">
            {features[userType].map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3">
                  <Check className="h-4 w-4" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
            <div className="text-sm opacity-75 mb-1">Join over</div>
            <div className="text-2xl font-bold">50,000+</div>
            <div className="text-sm opacity-75">
              {userType === 'creator' ? 'successful creators' : 'active learners'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}