import aboutSvg from '../../assets/about.svg';
import SectionTitle from '../SectionTitle';
// import { experiences } from '../data';
import SkillsCard from './SkillsCard';
import { skills } from '../../data';

const About = () => {
  return (
    <div className='text-zinc-200 tracking-wide'>
      <section id='about' className='py-20'>
        <div className='align-element grid md:grid-cols-2 items-center gap-14 md:gap-6'>
          <img 
            src={aboutSvg} 
            className='w-full h-72' 
          />
          <article>
            <SectionTitle
              borderColor='#3b0764'
              text='code and coffee' 
            />
            <p className='mt-6 text-lg leading-relaxed'>
              Hey there, I am a Highly motivated postgraduate student with a strong passion for <strong>computer science</strong>. 
              <br />
              <br />
              Dedicated and focused on the IT industry with over <strong>5 years</strong> of experience excelling in software design and development, multiple-parties collaboration, agile project management, and following through to achieve project goals. <br>
              </br><br />
              Offering front end and full stack programming skills, MySQL, Git, and abundant work experience in web application.
            </p>
          </article>
        </div>
      </section>

      <section className='py-20 align-element' id='skills'>
        <SectionTitle
          borderColor='#3b0764'
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

export default About;
