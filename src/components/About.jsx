import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
// import { experiences } from '../data';

const About = () => {
  return (
    <div className='bg-indigo-100'>
      <section id='about' className='py-20'>
        <div className='align-element grid md:grid-cols-2 items-center gap-6'>
          <img 
            src={aboutSvg} 
            className='w-full h-72' 
          />
          <article>
            <SectionTitle
              borderColor='#312e81'
              text='code and coffee' 
            />
            <p className='text-slate-800 mt-6 text-lg leading-relaxed'>
              Hey there, I am a Highly motivated postgraduate student with a strong passion for <strong>computer science</strong>. Dedicated and focused on the IT industry with over <strong>5 years</strong> of experience excelling in software design and development, multiple-parties collaboration, agile project management, and following through to achieve project goals. <br></br>Offering front end and full stack programming skills, MySQL, Git, and abundant work experience in web application.
            </p>
          </article>
        </div>
    </section>
    </div>
    
  );
};

export default About;
