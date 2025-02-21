import React, { Suspense, useEffect } from 'react';
import Loading from '../Loading/Loading';
import Error from '../Error';
import { projects } from '../../data';

const ProjectsContent = React.lazy(() => import('./ProjectsContent'));

const Projects = () => {
  useEffect(() => {
    // Preload all project images
    projects.forEach(project => {
      const img = new Image();
      img.src = project.img;
    });
  }, []);

  return (
    <Error>
      <Suspense fallback={<Loading />}>
        <ProjectsContent />
      </Suspense>
    </Error>
  );
};

export default Projects;