import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className='relative'>
      <Navbar />
      <div className='pt-20'>
        <Hero />
        <Skills />
        <About />
        <Projects />
      </div>
    </div>
  );
};

export default App;