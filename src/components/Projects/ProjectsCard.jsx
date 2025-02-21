import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { RiBaiduFill } from "react-icons/ri";

const ProjectsCard = ({ url, img, github, title, role, text, src }) => {
  const iconComponent = src === 1 
    ? <TbWorldWww className='h-8 w-8 hover:text-violet-300 duration-300' />
    : <RiBaiduFill className='h-8 w-8 hover:text-violet-300 duration-300' />;

  return (
    <article className='rounded-lg shadow-md hover:shadow-xl duration-300 border-2 border-violet-800 tracking-wide'>
      <img 
        src={img} 
        alt={title} 
        className='w-full object-cover rounded-t-lg p-8'
        loading="eager" 
      />
      <div className='px-8 py-2 mb-6'>
        <h2 className='text-xl tracking-wide font-bold'>{title}</h2>
        <h4 className='lg:text-lg'>{role}</h4>
        <p className='mt-2 leading-relaxed'>{text}</p>
        <div className='mt-4 flex gap-x-6'>
          <a href={url} target='_blank' rel="noreferrer">{iconComponent}</a>
          <a href={github} target='_blank' rel="noreferrer">
            <FaGithubSquare className='h-8 w-8 hover:text-violet-300 duration-300' />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;