import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';

// Pages
const Home = lazy(() => import('./pages/Home'));
const LiveClasses = lazy(() => import('./pages/LiveClasses'));
const Ebooks = lazy(() => import('./pages/Ebooks'));
const ClassDetail = lazy(() => import('./pages/ClassDetail'));
const BookDetail = lazy(() => import('./pages/BookDetail'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
const Support = lazy(() => import('./pages/Support'));
const Signup = lazy(() => import('./pages/Signup'));
const Signin = lazy(() => import('./pages/Signin'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Routes>
      {/* Auth pages without layout */}
      <Route path="/signup" element={
        <Suspense fallback={<LoadingSpinner />}>
          <Signup />
        </Suspense>
      } />
      <Route path="/signin" element={
        <Suspense fallback={<LoadingSpinner />}>
          <Signin />
        </Suspense>
      } />
      
      {/* Main app pages with layout */}
      <Route path="/*" element={
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/live-classes" element={<LiveClasses />} />
              <Route path="/live-classes/:id" element={<ClassDetail />} />
              <Route path="/ebooks" element={<Ebooks />} />
              <Route path="/ebooks/:id" element={<BookDetail />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/my-dashboard" element={<UserDashboard />} />
              <Route path="/support" element={<Support />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      } />
    </Routes>
  );
}

export default App;