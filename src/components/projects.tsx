import React from 'react';
import { Card, CardContent } from './ui/card';
import { ProjectEntry } from '@/types/projectTypes';
import Image from 'next/image';

const Projects = ({ projectEntries }: { projectEntries: ProjectEntry[] }) => {
  const isReverse = (index: number) =>
    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <div className="py-12 px-6 max-w-2xl md:max-w-4xl mx-auto">
      <p className="text-center font-bold text-lg mb-14 text-white">
        My Projects
      </p>
      <div className="flex flex-wrap flex-col gap-24">
        {projectEntries.map((project, index) => (
          <Card key={index} className="bg-[#F5F3F1]">
            <CardContent
              className={`p-6 md:p-12 flex flex-col-reverse ${isReverse(
                index
              )} justify-between`}
            >
              <div className="flex flex-col gap-4 md:w-7/12">
                <p className="text-lg font-semibold">
                  {project.title} <span className="font-normal">{` • `}</span>
                  <span className="italic font-normal text-base">
                    {project.role}
                  </span>
                </p>
                <div className="flex gap-1 mb-3">
                  {project.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="rounded-lg w-fit py-1 px-2 bg-[#EEEAFE] text-primary font-semibold text-xs"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <p className="text-base">{project.description}</p>
              </div>
              <div className="bg-white rounded-xl md:w-4/12 flex justify-center align-center items-center mb-8 md:mb-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={0}
                  height={0}
                  sizes="200px"
                  className="w-auto h-auto p-1"
                ></Image>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
