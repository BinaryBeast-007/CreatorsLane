import React, { useState } from 'react';
import { Search, MessageCircle, Send, HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

// Sample FAQ data
const faqCategories = [
  {
    id: 'account',
    name: 'Account & Profile',
    questions: [
      {
        id: 1,
        question: 'How do I change my password?',
        answer: 'To change your password, go to your account settings, click on "Security," and select "Change Password." Follow the prompts to enter your current password and set a new one.',
      },
      {
        id: 2,
        question: 'How do I update my profile information?',
        answer: 'You can update your profile by navigating to the "My Dashboard" section and clicking on "Settings." From there, you can edit your name, bio, profile picture, and other information.',
      },
      {
        id: 3,
        question: 'Can I delete my account?',
        answer: 'Yes, you can delete your account by going to Settings > Account > Delete Account. Please note that this action is permanent and will remove all your data from our platform.',
      },
    ],
  },
  {
    id: 'classes',
    name: 'Live Classes',
    questions: [
      {
        id: 4,
        question: 'What equipment do I need to join a live class?',
        answer: 'To join a live class, you need a computer or mobile device with a stable internet connection, a web browser, and optionally a webcam and microphone if you want to participate in discussions.',
      },
      {
        id: 5,
        question: 'How do I join a live class?',
        answer: 'You can join a live class by going to "My Dashboard" > "My Classes" and clicking on the "Join Now" button when the class is about to start. You'll receive email reminders 24 hours and 15 minutes before the class begins.',
      },
      {
        id: 6,
        question: 'What happens if I miss a live class?',
        answer: 'If you miss a live class, you can still access the recording afterward. Recordings are typically available within 24 hours after the class ends and can be found in your "My Dashboard" under "My Classes."',
      },
    ],
  },
  {
    id: 'ebooks',
    name: 'eBooks & Downloads',
    questions: [
      {
        id: 7,
        question: 'What file formats are available for eBooks?',
        answer: 'Our eBooks are available in PDF, EPUB, and MOBI formats, making them compatible with virtually all e-readers, tablets, computers, and mobile devices.',
      },
      {
        id: 8,
        question: 'How do I download an eBook after purchase?',
        answer: 'After purchasing an eBook, go to "My Dashboard" > "My eBooks," where you'll find all your purchased books. Click on the download button next to each book to save it to your device.',
      },
      {
        id: 9,
        question: 'Is there a limit to how many times I can download my eBook?',
        answer: 'You can download your purchased eBooks up to 5 times. If you need additional downloads, please contact our support team.',
      },
    ],
  },
  {
    id: 'creators',
    name: 'For Creators',
    questions: [
      {
        id: 10,
        question: 'How do I become a creator on the platform?',
        answer: 'To become a creator, click on "Become a Creator" on the homepage and complete the application form. We review all applications within 3-5 business days.',
      },
      {
        id: 11,
        question: 'How do payouts work for creators?',
        answer: 'Creators receive 70% of the revenue from their sold classes and eBooks. Payouts are processed monthly for all earnings that exceed $50. You can set up your payment details in the Dashboard > Settings > Payments section.',
      },
      {
        id: 12,
        question: 'What tools are available for hosting live classes?',
        answer: 'Our platform provides integrated video conferencing, screen sharing, chat, polls, and Q&A features for live classes. You can also upload presentations and resources for participants.',
      },
    ],
  },
];

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState('account');
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);
  
  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? '' : categoryId);
  };
  
  const toggleQuestion = (questionId: number) => {
    setExpandedQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };
  
  // Filter questions based on search
  const filterQuestions = () => {
    if (!searchQuery.trim()) {
      return faqCategories;
    }
    
    const filtered = faqCategories.map(category => {
      const matchingQuestions = category.questions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      return {
        ...category,
        questions: matchingQuestions,
      };
    }).filter(category => category.questions.length > 0);
    
    return filtered;
  };
  
  const filteredCategories = filterQuestions();
  
  return (
    <>
      <PageHeader 
        title="Help & Support" 
        description="Find answers to common questions or contact our support team"
        backgroundImage="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&h=650"
      />
      
      <div className="container-custom py-12">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="input py-3 pl-12 pr-4 w-full text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              </div>
              
              <div className="p-6">
                {filteredCategories.length > 0 ? (
                  <div className="space-y-6">
                    {filteredCategories.map(category => (
                      <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        {/* Category Header */}
                        <button 
                          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-left"
                          onClick={() => toggleCategory(category.id)}
                        >
                          <span className="font-medium">{category.name}</span>
                          {expandedCategory === category.id ? (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                        
                        {/* Questions */}
                        {expandedCategory === category.id && (
                          <div className="divide-y divide-gray-100">
                            {category.questions.map(question => (
                              <div key={question.id} className="p-4">
                                <button 
                                  className="w-full flex justify-between items-center text-left font-medium"
                                  onClick={() => toggleQuestion(question.id)}
                                >
                                  <span>{question.question}</span>
                                  {expandedQuestions.includes(question.id) ? (
                                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                                  ) : (
                                    <ChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
                                  )}
                                </button>
                                
                                {expandedQuestions.includes(question.id) && (
                                  <div className="mt-2 text-gray-600 pl-4 border-l-2 border-gray-200">
                                    {question.answer}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <HelpCircle className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium mb-2">No results found</h3>
                    <p className="text-gray-600">
                      We couldn't find any questions matching "{searchQuery}". Try a different search term or browse the categories.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Contact Support</h3>
              <p className="text-gray-600 mb-6">
                Couldn't find what you were looking for? Our support team is here to help.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="input"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="input"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">
                    Subject
                  </label>
                  <select id="subject" className="input">
                    <option value="">Select a topic</option>
                    <option value="account">Account Issues</option>
                    <option value="payment">Payment Problems</option>
                    <option value="classes">Live Classes</option>
                    <option value="ebooks">eBooks</option>
                    <option value="creators">Creator Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="input"
                    placeholder="Describe your issue in detail..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full flex items-center justify-center">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-primary-600" />
                  <span className="text-primary-600 font-medium">Live Chat</span>
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  Available Monday-Friday, 9am-5pm EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}