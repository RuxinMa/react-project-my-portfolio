import React, { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import { projects } from '../../data';
import SectionTitle from '../SectionTitle';

const ProjectsContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <section id='projects' className='py-20 align-element text-zinc-300'>
        <SectionTitle 
          borderColor='#3b0764'
          text='web creations' 
          textColor='text-white'
        />
        <div className='py-16 px-10 md:px-0 grid md:grid-cols-2 gap-10'>
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectsContent;
