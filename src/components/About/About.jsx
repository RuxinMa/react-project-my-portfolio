// About.jsx
import React, { Suspense } from 'react';
import Loading from '../Loading/Loading';
import Error from '../Error';

const AboutContent = React.lazy(() => import('./AboutContent'));

const About = () => {
  return (
    <Error>
      <Suspense fallback={<Loading />}>
        <AboutContent />
      </Suspense>
    </Error>
  );
};

export default About;