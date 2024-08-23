import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Background from './components/Background';
import JpgBackground from './components/JpgBackground';

const App = () => {
  return (
    <Router>
      <div className='relative min-h-screen'>
        <div className='absolute inset-0 z-0'>
          <JpgBackground className="opacity-20" />  {/* 调整透明度以便看到SVG背景 */}
        </div>
        <div className='absolute left-3/4 top-1/4 -translate-x-1/2 -translate-y-1/2'>
          <Background/>
        </div>
        <Navbar />
        <div className='relative pt-20'>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;