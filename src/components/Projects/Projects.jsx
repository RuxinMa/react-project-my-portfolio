import ProjectsCard from './ProjectsCard';
import { projects } from '../../data';
import SectionTitle from '../SectionTitle';

const Projects = () => {
  return (
    <div>
      <section id='projects' className='py-20 align-element text-zinc-300'>
        <SectionTitle 
          borderColor='#3b0764'
          text='web creations' 
          textColor='text-white'
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
