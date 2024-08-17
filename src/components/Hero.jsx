import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
// import { HiMiniDocumentText } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className='bg-indigo-200 py-16 font-sans'>
      <div className='align-element grid md:grid-cols-2 items-center gap-10'>
        <article>
          <h1 className='text-7xl font-bold tracking-wide'
          >
            This is Ruxin Ma
          </h1>
          <p className='mt-6 text-3xl text-slate-700 capitalize tracking-wide'>
            Software Engineer
          </p>
          <p className='mt-4 text-lg text-slate-700 tracking-wide'>
            A Computer Science postgraduate student at University of Adelaide
          </p>
          {/* social media */}
          <div className='flex gap-x-6 mt-6'>
          {/* <a 
            href='/path-to-your-resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            <HiMiniDocumentText className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a> */}
            <a 
            href='https://github.com/RuxinMa'
            target='_blank'
            >
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a 
              href='https://www.linkedin.com/in/ruxin-ma/'
              target='_blank'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img 
            src={heroImg} 
            className='h-80 lg:h-96'
          />
        </article>
      </div>
    </div>
  );
};
export default Hero;
