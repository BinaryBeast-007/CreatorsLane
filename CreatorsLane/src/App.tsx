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
const Support = lazy(() => import('./pages/Support'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live-classes" element={<LiveClasses />} />
          <Route path="/live-classes/:id" element={<ClassDetail />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/ebooks/:id" element={<BookDetail />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;