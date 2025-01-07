import React from 'react';
import { SkillImage } from '@/types/skillTypes';
import Image from 'next/image';

const Skills = ({ skillEntries }: { skillEntries: SkillImage[] }) => {
  return (
    <div className="py-12">
      <p className="text-center font-bold text-lg mb-14 px-6">
        I HAVE EXPERIENCE WITH THIS TECHNOLOGIES
      </p>
      <div className="flex flex-wrap justify-between w-screen gap-4 md:gap-12 max-w-4xl mx-auto py-4 px-6">
        {skillEntries.map((skill) => (
          <Image
            key={skill.alt}
            src={skill.src}
            width={0}
            height={0}
            sizes="100px"
            className="w-1/4 md:w-24 h-auto"
            alt={skill.alt}
            title={skill.alt}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
