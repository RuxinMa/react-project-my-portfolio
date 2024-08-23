import React from "react";
import infoImg from '..//../assets/info.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Info() {
  return(
    <section className='pt-20 mt-20 lg:mt-48 px-2 lg:px-20 font-sans'>
      <h1 className="text-4xl font-medium text-center">
          LET ME <span className="text-fuchsia-500"> INTRODUCE </span> MYSELF
      </h1>

      <article className="align-element grid xl:grid-cols-3 items-center gap-16">
        <div className="hidden xl:flex xl:col-span-1">
          <img 
            src={infoImg} 
            alt="Info"
            className='h-96 w-auto object-contain'
          />
        </div>

        <p className="lg:col-span-2 mt-10 pt-2 text-lg lg:text-xl tracking-wide">
          I am currently pursuing Master of Computing and Innovation at the
          <b className='text-fuchsia-500'>{" "}University of Adelaide</b> 👩‍🎓 
          <br />
          <br /> Prior to this, I worked as a<i><b className='text-fuchsia-500'>{" "}Business Analyst</b></i>
          <br />
          <br />
             My passion of computer science led me to study abroad, where I learned
          <i className='text-fuchsia-500'>
            <b>{" "}Python </b> and
            <b>{" "}Data Structure and Algorithms</b>
          </i>
          <br />
          <br />
          Then, I taught myself<b className='text-fuchsia-500'> Web Development</b>, including
          <i className='text-fuchsia-500'>
            <b>
              {" "}
              HTML, CSS, Javascript
            </b>, and
            <i><b> React</b></i>
          </i>. 
          I am always eager to learn new technologies, and my career objective is to become a 
          <i>
            <b className='text-fuchsia-500'> Full Stack Developer</b>
          </i>
        </p>

      </article>

      <div className="mt-20 lg:mt-32 text-center">
        <h1 className="text-3xl">FIND ME ON</h1>
        <p className="mt-3 text-lg">
          Feel free to <span className="text-fuchsia-600 font-semibold">connect </span>with me
        </p>
      
        {/* social media */}
        <div className='flex gap-x-6 mt-8 items-center justify-center'>
          <a 
            href='https://github.com/RuxinMa'
            target='_blank'
            rel="noopener noreferrer"
          >
            <FaGithubSquare className='h-8 w-8 hover:text-fuchsia-300 duration-300' />
          </a>
          <a 
            href='https://www.linkedin.com/in/ruxin-ma/'
            target='_blank'
            rel="noreferrer"
          >
            <FaLinkedin className='h-8 w-8 hover:text-fuchsia-300 duration-300'/>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Info;
