import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { FaMobile, FaGlobe } from 'react-icons/fa';
import { SiProgress, SiAntdesign } from 'react-icons/si';
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id="features" className="w-full py-20  border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card title="Business Strategy" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo earum tempora voluptate vitae sequi iusto!" />
        <Card title="App Development" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo earum tempora voluptate vitae sequi iusto!" icon={<AiFillAppstore />} />
        <Card title="SEO Optimisation" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo earum tempora voluptate vitae sequi iusto!" icon={<SiProgress />} />
        <Card title="Mobile Development" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo earum tempora voluptate vitae sequi iusto!" icon={<FaMobile />} />
        <Card title="UX Design" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo earum tempora voluptate vitae sequi iusto!" icon={<SiAntdesign />} />
        <Card title="Web Hostings" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo earum tempora voluptate vitae sequi iusto!" icon={<FaGlobe />} />
      </div>
    </section>
  );
};

export default Features;
