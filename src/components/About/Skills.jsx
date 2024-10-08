import { skills } from '../../data';
import SectionTitle from '../../components/SectionTitle';
import SkillsCard from './SkillsCard';

const Skills = () => {

  console.log('Hero component rendered');
  
  return (
    <div>
      <section className='py-20 align-element' id='skills'>
        <SectionTitle
          borderColor='#312e81'
          text='What I can do'
        />
        <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {skills.map((skill) => {
            return <SkillsCard key={skill.id} {...skill} />;
          })}
        </div>
      </section>
    </div>

  );
};
export default Skills;
