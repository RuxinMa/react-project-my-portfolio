import React from "react";
import infoImg from '..//../assets/info.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Info() {
  return(
    <section className='pt-20 mt-24 lg:mt-48 px-2 lg:px-20 font-sans'>
      <h1 className="text-4xl font-medium text-center">
          LET ME <span className="text-indigo-600"> INTRODUCE </span> MYSELF
      </h1>

      <article className="align-element mt-12 grid xl:grid-cols-3 items-center gap-20">

        <div className="hidden xl:flex xl:col-span-1 pt-2">
          <img 
            src={infoImg} 
            alt="Info"
            className='h-72 w-auto object-contain'
          />
        </div>

        <p className="lg:col-span-2 mt-4 text-lg lg:text-xl text-slate-700 tracking-wide">
          I am currently pursuing Master of Computing and Innovation at the
          <b>{" "}University of Adelaide</b> 👩‍🎓 
          <br />
          <br /> Prior to this, I worked as a<i><b>{" "}Business Analyst</b></i>
          <br />
          <br />
             My passion of computer science led me to study abroad, where I learned
          <i>
            <b>{" "}Python </b> and
            <b>{" "}Data Structure and Algorithms</b>
          </i>
          <br />
          <br />
          Then, I taught myself<b> Web Development</b>, including
          <i>
            <b>
              {" "}
              HTML, CSS, Javascript
            </b>, and
            <i><b> React</b></i>
          </i>. 
          I am always eager to learn new technologies, and my career objective is to become a 
          <i>
            <b> Full Stack Developer</b>
          </i>
        </p>

      </article>

      <div className="mt-20 lg:mt-32 text-center">
        <h1 className="text-3xl">FIND ME ON</h1>
        <p className="mt-3 text-lg">
          Feel free to <span className="text-indigo-600 font-semibold">connect </span>with me
        </p>
      
        {/* social media */}
        <div className='flex gap-x-6 mt-8 items-center justify-center'>
          <a 
            href='https://github.com/RuxinMa'
            target='_blank'
            rel="noopener noreferrer"
          >
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
          <a 
            href='https://www.linkedin.com/in/ruxin-ma/'
            target='_blank'
            rel="noopener noreferrer"
          >
            <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Info;