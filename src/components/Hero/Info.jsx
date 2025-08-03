import React from "react";
import infoImg from '..//../assets/info.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Info() {
  return(
    <section className='pt-20 mt-14 lg:mt-32 px-2 lg:px-20 font-sans'>
      <h1 className="text-4xl font-medium text-center tracking-wide">
          LET ME <span className="text-violet-400"> INTRODUCE </span> MYSELF
      </h1>

      <article className="align-element grid xl:grid-cols-3 items-center gap-16">
        <div className="hidden xl:flex xl:col-span-1">
          <img 
            src={infoImg} 
            alt="Info"
            className='h-96 w-auto object-contain'
          />
        </div>

        <div className="lg:col-span-2 mt-10 pt-2 text-lg lg:text-xl tracking-wide leading-relaxed space-y-6">
          <p>
            I graduated with a Master of Computing and Innovation from the
            <b className='text-violet-400'> University of Adelaide</b> 👩‍🎓 in July 2025
          </p>
          
          <p>
            Prior to this, I worked as a<b className='text-violet-400'> Business Analyst</b> 🤝
          </p>
          
          <p>
            My passion for computer science drove me to pursue further studies abroad, where I learned
              <b className='text-violet-400'> Python </b> and
              <b className='text-violet-400'> Data Structure and Algorithms</b> 
             🤖
          </p>
          
          <p>
            Then, I expanded my skills through self-directed learning in<b className='text-violet-400'> Full-Stack Web Development</b>, building projects with
            <b className='text-violet-400'> MERN stack</b> 
              <span className='text-white'> (MongoDB, Express.js, React, Node.js) along with</span>
              <b className='text-violet-400'> HTML, CSS, and Javascript</b> 💻
          </p>
          
          <p>
            I am always eager to learn new technologies, and am actively seeking opportunities to launch my career as a
              <b className='text-violet-400'> Software Engineer</b>👩‍💻
          </p>
        </div>

      </article>

      <div className="mt-20 lg:mt-32 text-center">
        <h1 className="text-4xl">FIND ME ON</h1>
        <p className="mt-3 text-lg">
          Feel free to <span className="text-violet-400 font-semibold">connect </span>with me
        </p>
      
        {/* social media */}
        <div className='flex gap-x-6 mt-8 items-center justify-center'>
          <a 
            href='https://github.com/RuxinMa'
            target='_blank'
            rel="noopener noreferrer"
          >
            <FaGithubSquare className='h-8 w-8 hover:text-violet-300 duration-300' />
          </a>
          <a 
            href='https://www.linkedin.com/in/ruxin-ma/'
            target='_blank'
            rel="noreferrer"
          >
            <FaLinkedin className='h-8 w-8 hover:text-violet-300 duration-300'/>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Info;
