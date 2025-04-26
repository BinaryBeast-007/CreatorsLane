import { ArrowRight, Star, Users, BookOpen, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/home/FeatureCard';
import CategoryCard from '../components/home/CategoryCard';
import ClassCard from '../components/classes/ClassCard';
import CreatorCard from '../components/creators/CreatorCard';
import TestimonialCard from '../components/home/TestimonialCard';

export default function Home() {
  const categories = [
    { id: 1, name: 'Technology', icon: 'laptop', count: 123 },
    { id: 2, name: 'Business', icon: 'briefcase', count: 87 },
    { id: 3, name: 'Design', icon: 'pen-tool', count: 65 },
    { id: 4, name: 'Marketing', icon: 'trending-up', count: 52 },
    { id: 5, name: 'Personal Development', icon: 'user', count: 98 },
    { id: 6, name: 'Health & Wellness', icon: 'heart', count: 74 },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Host or Join Live Masterclasses with One Click!
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-100">
                Connect with expert creators, share knowledge, and learn new skills on 
                our interactive platform. Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Link to="/live-classes" className="btn bg-white text-primary-700 hover:bg-primary-50">
                  Explore Live Classes
                </Link>
                <Link to="/register?type=creator" className="btn bg-primary-500 text-white border border-primary-400 hover:bg-primary-600">
                  Become a Creator
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Creator teaching online" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Creators & Learners Love Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Creatorlane provides all the tools you need to share knowledge and learn from experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-primary-500" />}
              title="Connect Directly"
              description="Interact with creators in real-time during live sessions"
            />
            <FeatureCard 
              icon={<Star className="h-8 w-8 text-primary-500" />}
              title="Expert Content"
              description="Access quality content from verified experts in their fields"
            />
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8 text-primary-500" />}
              title="Learn Anywhere"
              description="Join sessions or read eBooks on any device, anytime"
            />
            <FeatureCard 
              icon={<Award className="h-8 w-8 text-primary-500" />}
              title="Earn While Teaching"
              description="Monetize your knowledge with our simple payment system"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Explore Categories</h2>
            <Link to="/categories" className="text-primary-600 hover:text-primary-700 flex items-center">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Sessions */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Trending Live Classes</h2>
            <Link to="/live-classes" className="text-primary-600 hover:text-primary-700 flex items-center">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample class data - would come from API in real app */}
            {[1, 2, 3].map((id) => (
              <ClassCard 
                key={id}
                id={id}
                title={`Product Design Masterclass ${id}`}
                instructor="Alex Morgan"
                price={29.99}
                date="2025-06-15T15:00:00"
                duration={60}
                thumbnail={`https://images.pexels.com/photos/360915${id}/pexels-photo-360915${id}.jpeg?auto=compress&cs=tinysrgb&h=400`}
                category="Design"
                attendees={147}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Creators */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Top Creators</h2>
            <Link to="/creators" className="text-primary-600 hover:text-primary-700 flex items-center">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sample creator data - would come from API in real app */}
            <CreatorCard 
              id={1}
              name="Sarah Johnson"
              expertise="UX/UI Design"
              rating={4.9}
              students={1243}
              avatar="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <CreatorCard 
              id={2}
              name="John Smith"
              expertise="Business Strategy"
              rating={4.8}
              students={987}
              avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <CreatorCard 
              id={3}
              name="Maria Garcia"
              expertise="Digital Marketing"
              rating={4.7}
              students={856}
              avatar="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <CreatorCard 
              id={4}
              name="David Kim"
              expertise="Web Development"
              rating={4.9}
              students={1568}
              avatar="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what creators and learners are saying about us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Creatorlane has transformed how I share my expertise. The platform is intuitive, and I've built a loyal audience of students."
              author="Michael Chen"
              role="Design Instructor"
              avatar="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
              rating={5}
            />
            <TestimonialCard 
              quote="I've taken classes from creators I never thought I'd have access to. The live interaction makes all the difference in my learning journey."
              author="Emily Rodriguez"
              role="Marketing Student"
              avatar="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
              rating={5}
            />
            <TestimonialCard 
              quote="As both a learner and creator on this platform, I'm impressed by how well it serves both sides of the educational experience."
              author="James Wilson"
              role="Tech Entrepreneur"
              avatar="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Share Your Knowledge?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of creators who are turning their expertise into income while
            helping others learn and grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/register?type=creator" className="btn bg-white text-accent-600 hover:bg-accent-50">
              Become a Creator
            </Link>
            <Link to="/how-it-works" className="btn bg-accent-600 text-white border border-accent-400 hover:bg-accent-700">
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}