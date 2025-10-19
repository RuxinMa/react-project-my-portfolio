import React, { Suspense } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Loading from './components/Loading/Loading';
import Background from './components/Background/Background';
import JpgBackground from './components/Background/JpgBackground';
import Error from './components/Error';

const About = React.lazy(() => import('./components/About/About'));
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));

const App = () => {
  return (
    <Router>
      <Error>
        <div className='relative min-h-screen'>
          <div className='absolute inset-0 z-0'>
            <JpgBackground className="opacity-20" /> 
          </div>
          <div className='absolute left-3/4 top-1/4 -translate-x-1/2 -translate-y-1/2'>
            <Background/>
          </div>
          <Navbar />
          <div className='relative pt-20'>
            {/* lazy loading */}
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </Error>
    </Router>
  );
};

export default App;