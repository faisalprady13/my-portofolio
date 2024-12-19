import React from 'react';
import { SkillImage } from '@/types/skillTypes';
import Image from 'next/image';

const Skills = (props: { skillImages: SkillImage[] }) => {
  return (
    <div className="py-12">
      <div className="text-center font-bold text-lg py-14">
        I HAVE EXPERIENCE WITH THIS TECHNOLOGIES
      </div>
      <div className="flex flex-wrap justify-evenly w-screen gap-12 max-w-4xl mx-auto p-4">
        {props.skillImages.map((image) => (
          <Image
            key={image.alt}
            src={image.src}
            width={0}
            height={0}
            sizes="100px"
            className="w-24 h-auto"
            alt={image.alt}
            title={image.alt}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
