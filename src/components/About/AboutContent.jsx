import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle';
import Skills from './Skills';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../../data';

const AboutContent = () => {
  const [aboutSvg, setAboutSvg] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // delay loading for svg
  useEffect(() => {
    import('../../assets/about.svg').then(module => {
      setAboutSvg(module.default);
    });

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`text-zinc-200 tracking-wide transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      >
      <section id='about' className='sm:py-20 py-10'>
        <div className='align-element grid md:grid-cols-2 items-center gap-10'>
          {aboutSvg && (
            <img 
              src={aboutSvg} 
              className='w-full h-64' 
            />
          )}
          {/* Skills */}
          <section>
            <SectionTitle
              borderColor='#3b0764'
              text='What I can do' 
            />
            <Skills />
          </section>
        </div>
      </section>

      {/* Experiences */}
      <section className='py-7 align-element' id='experiences'>
        <SectionTitle
          borderColor='#3b0764'
          text='Code And Coffee'
        />
        <div className='mt-8 mb-6 sm:text-lg text-sm leading-relaxed relative'>
          <div className='absolute left-[7px] top-[10px] bottom-[10px] w-[2px] bg-gradient-to-b from-violet-600/50 via-violet-600/30 to-violet-600/10'></div>
          
          <div className='flex flex-col sm:gap-16 gap-12'>
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className='relative pl-8 hover:pl-10 transition-all duration-300'
              >
                <div className='absolute left-0 top-[10px] group'>
                  <div className='w-4 h-4 rounded-full bg-violet-600 border-4 border-[#161125] relative z-10'></div>
                  <div className='absolute inset-0 rounded-full bg-violet-500/30 animate-ping'></div>
                </div>
                
                <div className='absolute left-4 top-[17px] w-4 h-[2px] bg-violet-600/30'></div>
                
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;