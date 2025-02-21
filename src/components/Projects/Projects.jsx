import React, { Suspense } from 'react';
import Loading from '../Loading/Loading';
import Error from '../Error';

const ProjectsContent = React.lazy(() => import('./ProjectsContent'));

const Projects = () => {
  return (
    <Error>
      <Suspense fallback={<Loading />}>
        <ProjectsContent />
      </Suspense>
    </Error>
  );
};

export default Projects;