import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { RiBaiduFill } from "react-icons/ri";

const ProjectsCard = ({ url, img, github, title, role, text, src }) => {
  let iconComponent;

  if (src === 1) {
    iconComponent = <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />;
  } else {
    iconComponent = <RiBaiduFill className='h-8 w-8 text-slate-500 hover:text-black duration-300' />;
  }

  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <img src={img} alt={title} className='w-full object-cover rounded-t-lg h-64' />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <h4 className='tracking-wide'>{role}</h4>
        <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>{iconComponent}</a>
          <a href={github}>
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
