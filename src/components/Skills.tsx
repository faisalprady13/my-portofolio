import React from 'react';
import { skillsData } from '@/data/skillsData';
import SkillCard from './skillCard';

const Skills = () => {
  return (
    <div>
      <div className="text-center font-bold text-lg py-24">MY SKILLS</div>
      <div className="flex flex-wrap justify-evenly w-screen gap-8 max-w-4xl mx-auto p-4">
        {skillsData.map((area) => (
          <SkillCard key={area.title} area={area} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
