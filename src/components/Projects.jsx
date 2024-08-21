import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <div className='bg-indigo-300'>
      <section id='projects' className='py-20 align-element'>
        <SectionTitle 
          borderColor='#3730a3'
          text='web creations' 
          textColor='text-zinc-900'
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
