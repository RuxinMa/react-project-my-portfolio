import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
          Highly motivated postgraduate student with a strong passion for <strong>computer science</strong>. Dedicated to the IT industry with over <strong>5 years</strong> of experience excelling at software design and development, multiple-parties collaboration, agile project management, and following through to achieve project goals. <br></br>Offering front end programming basic skills, MySQL, Git, and abundant work experience in web application.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
