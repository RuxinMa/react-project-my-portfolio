import { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import SectionTitle from '../SectionTitle';
import { projects } from '../../data/projectData';

const ProjectsContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Check if all images have been loaded
    const imagePromises = projects.map(project => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = project.img;
        img.onload = resolve;
        img.onerror = resolve; 
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
      // Add a small delay to ensure a smooth transition
      setTimeout(() => setIsVisible(true), 100);
    });

    return () => {
      imagePromises.forEach(promise => promise.catch(() => {}));
    };
  }, []);

  if (!imagesLoaded) {
    return null;
  }

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
          {projects.map((project) => (
            <ProjectsCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsContent;