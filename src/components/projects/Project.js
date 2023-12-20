import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Project = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectsCard title="SOCIAL MEDIA CLONE" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi" src={projectOne} />
        <ProjectsCard title="E-Commerce Website" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi" src={projectTwo} />
        <ProjectsCard title="Chatting App" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi" src={projectThree} />
        <ProjectsCard title="SOCIAL MEDIA CLONE" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi" src={projectOne} />
        <ProjectsCard title="E-Commerce Website" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi" src={projectTwo} />
        <ProjectsCard title="Chatting App" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi" src={projectThree} />
      </div>
    </section>
  );
};

export default Project;
