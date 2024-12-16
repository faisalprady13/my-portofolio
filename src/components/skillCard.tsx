import React from 'react';
import { Card } from './ui/card';
import { skillAreaEntry } from '@/types/skillTypes';
import { GradientProgressBar } from './gradient-progress-bar';

const SkillCard = (props: { area: skillAreaEntry; className?: string }) => {
  const { area, className } = props;
  return (
    <Card
      className={`w-full md:w-[45%] p-4 bg-[#1a1a1a] text-[#ffffff] border-0 ${className}`}
    >
      <div>{area.title}</div>
      <div className="grid grid-cols-5 items-center p-2">
        {area.skillList.map((skill) => (
          <>
            <div className="col-span-2">{skill.name}</div>
            <GradientProgressBar
              currentLevel={skill.level}
              hue={area.color}
              className="col-span-3"
            />
          </>
        ))}
      </div>
    </Card>
  );
};

export default SkillCard;
