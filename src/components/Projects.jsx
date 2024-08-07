import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <div className='bg-indigo-300'>
      <section className='py-20 align-element' id='projects'>
        <SectionTitle 
          borderColor='#4f46e5'
          text='web creations' 
          textColor='text-violet-50'
        />
        <div className='py-16 grid lg:grid-cols-2 gap-8'>
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      </section>
    </div>
  );
};
export default Projects;
