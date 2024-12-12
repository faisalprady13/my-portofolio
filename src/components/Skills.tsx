import React from 'react';
import { Card } from './ui/card';
import { GradientProgressBar } from './gradient-progress-bar';
import { skillsData } from '@/data/skillsData';

const Skills = () => {
  return (
    <div className="flex w-full gap-8 max-w-4xl mx-auto p-4">
      {skillsData.map((area) => (
        <Card className="w-1/2 p-4" key={area.title}>
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
      ))}
    </div>
  );
};

export default Skills;
