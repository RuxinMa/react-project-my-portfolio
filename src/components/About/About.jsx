import aboutSvg from '../../assets/about.svg';
import SectionTitle from '../SectionTitle';
import Skills from './Skills';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../../data';

const About = () => {
  return (
    <div className='text-zinc-200 tracking-wide'>
      <section id='about' className='sm:py-20 py-10'>
        <div className='align-element grid md:grid-cols-2 items-center gap-10'>
          <img 
            src={aboutSvg} 
            className='w-full h-64' 
          />
          {/* Skills */}
          <section>
            <SectionTitle
                borderColor='#3b0764'
                text='What I can do' 
              />
            <Skills />
          </section>
        </div>
      </section>

      {/* Experiences */}
      <section className='py-7 align-element' id='experiences'>
        <SectionTitle
          borderColor='#3b0764'
          text='Code And Coffee'
        />
        <div className='mt-8 mb-6 sm:text-lg text-sm leading-relaxed relative'>
          {/* Timeline vertical line with gradient effect */}
          <div className='absolute left-[7px] top-[10px] bottom-[10px] w-[2px] bg-gradient-to-b from-violet-600/50 via-violet-600/30 to-violet-600/10'></div>
          
          {/* Experience cards container */}
          <div className='flex flex-col sm:gap-16 gap-12'>
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className='relative pl-8 hover:pl-10 transition-all duration-300'
              >
                {/* Timeline dot with glow effect */}
                <div className='absolute left-0 top-[10px] group'>
                  <div className='w-4 h-4 rounded-full bg-violet-600 border-4 border-[#161125] relative z-10'></div>
                  <div className='absolute inset-0 rounded-full bg-violet-500/30 animate-ping'></div>
                </div>
                
                {/* Horizontal connecting line */}
                <div className='absolute left-4 top-[17px] w-4 h-[2px] bg-violet-600/30'></div>
                
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;