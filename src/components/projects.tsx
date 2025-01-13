import React from 'react';
import { Card, CardContent } from './ui/card';
import { ProjectEntry } from '@/types/projectTypes';
import Image from 'next/image';
import BlurFade from './ui/blur-fade';

const Projects = ({ projectEntries }: { projectEntries: ProjectEntry[] }) => {
  return (
    <div className="py-16 px-8 max-w-2xl md:max-w-4xl mx-auto">
      <p className="text-center font-bold text-lg mb-14 text-white">
        My Projects
      </p>
      <div className="flex flex-wrap flex-col gap-16">
        {projectEntries.map((project, index) => (
          <BlurFade key={index} delay={0.25 + index * 0.05} inView>
            <Card className="bg-white">
              <CardContent
                className={`p-8 md:p-12 flex flex-col md:flex-row justify-between`}
              >
                <div
                  className={`relative bg-white rounded-xl md:w-4/12 flex justify-center align-center ${
                    project.fullImage ? 'p-0' : 'p-2 shadow'
                  } items-center mb-8 md:mb-0`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={0}
                    height={0}
                    sizes="300px"
                    className={`w-auto h-auto object-cover ${
                      project.fullImage ? 'rounded-xl shadow' : ''
                    } `}
                    loading="lazy"
                  ></Image>
                </div>
                <div className="flex flex-col md:w-7/12">
                  <p className="text-lg font-semibold">
                    {project.title} <span className="font-normal">{` • `}</span>
                    <span className="italic font-normal text-base">
                      {project.role}
                    </span>
                  </p>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                  <p className="text-muted-foreground text-sm mb-6 italic">
                    {project.extraDesc}
                  </p>

                  <p className="text-sm mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="rounded-md w-fit py-1 px-2 bg-[#EEEAFE] text-primary font-semibold text-xs"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  {project?.url && (
                    <div className="flex justify-start md:justify-end mr-2 hover:underline">
                      <a
                        href={project.url}
                        target="_blank"
                        className="text-sm cursor-pointer"
                      >{`To Website >>`}</a>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default Projects;
