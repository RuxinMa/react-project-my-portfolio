import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { RiBaiduFill } from "react-icons/ri";

const ProjectsCard = ({ url, img, github, title, role, text, src }) => {
  let iconComponent;

  if (src === 1) {
    iconComponent = <TbWorldWww className='h-8 w-8 hover:text-violet-300 duration-300' />;
  } else {
    iconComponent = <RiBaiduFill className='h-8 w-8 hover:text-violet-300 duration-300' />;
  }

  return (
    <article className='rounded-lg shadow-md hover:shadow-xl duration-300 border-2 border-violet-800 tracking-wide'>
      <img 
        src={img} 
        alt={title} 
        className='w-full object-cover rounded-t-lg h-80'
      />
      <div className='capitalize p-8'>
        <h2 className='text-2xl tracking-wide font-bold'>{title}</h2>
        <h4 className='lg:text-lg'>{role}</h4>
        <p className='mt-2 leading-relaxed normal-case lg:text-lg'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url} target='_blank'>{iconComponent}</a>
          <a href={github} target='_blank'>
            <FaGithubSquare className='h-8 w-8 hover:text-violet-300 duration-300' />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
